module.exports = function (data, noDataOutput) {
/* eslint no-unused-vars: "off" */
const $version = '3.7.7'

const componentRenderers = {}

function extend (target, source) {
    if (source) {
        Object.keys(source).forEach(function (key) {
            const value = source[key]
            if (typeof value !== 'undefined') {
                target[key] = value
            }
        })
    }

    return target
}

function each (array, iterator) {
    if (array && array.length > 0) {
        for (let i = 0, l = array.length; i < l; i++) {
            if (iterator(array[i], i) === false) {
                break
            }
        }
    }
}

function contains (array, value) {
    let result
    each(array, function (item) {
        result = item === value
        return !result
    })

    return result
}

const HTML_ENTITY = {
    /* jshint ignore:start */
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    /* eslint-disable quotes */
    "'": '&#39;'
    /* eslint-enable quotes */
    /* jshint ignore:end */
}

function htmlFilterReplacer (c) {
    return HTML_ENTITY[c]
}

function escapeHTML (source) {
    if (source == null) {
        return ''
    }

    if (typeof source === 'string') {
        return source ? source.replace(/[&<>"']/g, htmlFilterReplacer) : ''
    }

    return '' + source
}

function _classFilter (source) {
    if (source instanceof Array) {
        return source.join(' ')
    }

    return source
}

function _styleFilter (source) {
    if (typeof source === 'object') {
        let result = ''
        if (source) {
            Object.keys(source).forEach(function (key) {
                result += key + ':' + source[key] + ';'
            })
        }

        return result
    }

    return source
}

function _xclassFilter (outer, inner) {
    if (outer instanceof Array) {
        outer = outer.join(' ')
    }

    if (outer) {
        if (inner) {
            return inner + ' ' + outer
        }

        return outer
    }

    return inner
}

function _xstyleFilter (outer, inner) {
    outer = outer && defaultStyleFilter(outer)
    if (outer) {
        if (inner) {
            return inner + ';' + outer
        }

        return outer
    }

    return inner
}

function attrFilter (name, value) {
    if (value) {
        return ' ' + name + '="' + value + '"'
    }

    return ''
}

function boolAttrFilter (name, value) {
    if (value && value !== 'false' && value !== '0') {
        return ' ' + name
    }

    return ''
}

function callFilter (ctx, name, args) {
    const filter = ctx.proto.filters[name]
    if (typeof filter === 'function') {
        return filter.apply(ctx, args)
    }
}

function defaultStyleFilter (source) {
    if (typeof source === 'object') {
        let result = ''
        for (const key in source) {
            /* istanbul ignore else  */
            if (source.hasOwnProperty(key)) {
                result += key + ':' + source[key] + ';'
            }
        }

        return result
    }

    return source
}

componentRenderers._id243 = componentRenderers._id243|| _id243;
var _id243Proto = {
filters: {

},
computed: {

},
computedNames: [

],
tagName: "div"
};
function _id243(data, noDataOutput, parentCtx, tagName, sourceSlots) {
var html = "";
var componentCtx = {
proto: _id243Proto,
sourceSlots: sourceSlots,
data: data || {},
owner: parentCtx,
slotRenderers: {}
};
if (data) {
}
var computedNames = componentCtx.proto.computedNames;
for (var $i = 0; $i < computedNames.length; $i++) {
  var $computedName = computedNames[$i];
  data[$computedName] = componentCtx.proto.computed[$computedName](componentCtx);
}
html += "<div";
if (componentCtx.data.class) {
html += attrFilter("class", escapeHTML(_classFilter(componentCtx.data.class)));
}
if (componentCtx.data.style) {
html += attrFilter("style", escapeHTML(_styleFilter(componentCtx.data.style)));
}
if (componentCtx.data.id) {
html += attrFilter("id", escapeHTML(componentCtx.data.id));
}
html += ">";
if (!noDataOutput) {
html += "<!--s-data:" + JSON.stringify(componentCtx.data) + "-->";
}
html += "<b";
if (componentCtx.data.online) {
html += attrFilter("title", escapeHTML(componentCtx.data.online));
}
html += ">";
html += escapeHTML(componentCtx.data.online);
html += "</b><select";
$selectValue = componentCtx.data.online || "";
html += ">";
var _id245 = componentCtx.data.persons;
if (_id245 instanceof Array) {
for (var _id244 = 0; _id244 < _id245.length; _id244++) {
componentCtx.data._id244=_id244;
componentCtx.data.p= _id245[_id244];
html += "<option";
$optionValue = escapeHTML(componentCtx.data.p);
if ($optionValue != null) {
html += " value=\"" + $optionValue + "\"";
}
if ($optionValue === $selectValue) {
html += " selected";
}
html += ">";
html += escapeHTML(componentCtx.data.p);
html += "</option>";
$optionValue = null;

}
} else if (typeof _id245 === "object") {
for (var _id244 in _id245) {
if (_id245[_id244] != null) {
componentCtx.data._id244=_id244;
componentCtx.data.p= _id245[_id244];
html += "<option";
$optionValue = escapeHTML(componentCtx.data.p);
if ($optionValue != null) {
html += " value=\"" + $optionValue + "\"";
}
if ($optionValue === $selectValue) {
html += " selected";
}
html += ">";
html += escapeHTML(componentCtx.data.p);
html += "</option>";
$optionValue = null;

}
}
}
html += "<option";
$optionValue = "";
if ($optionValue != null) {
html += " value=\"" + $optionValue + "\"";
}
if ($optionValue === $selectValue) {
html += " selected";
}
html += ">empty</option>";
$optionValue = null;
html += "</select>";
$selectValue = null;
html += "</div>";
return html;
};
return componentRenderers._id243(data, noDataOutput)
}