import { SanSourceFile } from '../..'
import { PHPEmitter } from '../emitters/emitter'

type ComponentClassInfo = {
    name: string
    path: string
}

export class ComponentRegistry {
    private components: Map<number, ComponentClassInfo> = new Map()

    registerComponents (file: SanSourceFile) {
        for (const [cid, clazz] of file.componentClassDeclarations) {
            this.components.set(cid, {
                path: file.getFilePath(),
                name: clazz.getName()
            })
        }
    }

    writeComponentRegistry (nsPrefix: string, ns: (file: string) => string, emitter: PHPEmitter) {
        emitter.beginNamespace(`${nsPrefix}runtime`)
        emitter.writeLine(`ComponentRegistry::$comps = [`)
        emitter.indent()

        const lines = []
        for (const [cid, { name, path }] of this.components) {
            const classReference = `\\${nsPrefix}${ns(path)}\\${name}`
            lines.push(`"${cid}" => '${classReference}'`)
        }
        emitter.writeLines(lines.join(',\n'))

        emitter.unindent()
        emitter.writeLine('];')
        emitter.endNamespace()

        return emitter.fullText()
    }
}