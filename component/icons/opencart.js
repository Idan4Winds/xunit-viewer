import React from 'react'

    export default function anonymous(params
/**/) {
var evalColor = function () {
    if (typeof params.color === 'function') {
        return params.color;
    } else {
        return function () {
            return params.color;
        };
    }
}();
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};
return React.createElement('svg', _extends({}, params, { viewBox: '0 0 1792 1792' }), React.createElement('path', { d: 'M1268 1561q0 68-48 116t-116 48-116.5-48-48.5-116 48.5-116.5 116.5-48.5 116 48.5 48 116.5zm-749 0q0 68-48.5 116t-116.5 48-116-48-48-116 48-116.5 116-48.5 116.5 48.5 48.5 116.5zm-775-1494q57 60 110.5 104.5t121 82 136 63 166 45.5 200 31.5 250 18.5 304 9.5 372.5 2.5q139 0 244.5 5t181 16.5 124 27.5 71 39.5 24 51.5-19.5 64-56.5 76.5-89.5 91-116 104.5-139 119q-185 157-286 247 29-51 76.5-109t94-105.5 94.5-98.5 83-91.5 54-80.5 13-70-45.5-55.5-116.5-41-204-23.5-304-5q-168 2-314-6t-256-23-204.5-41-159.5-51.5-122.5-62.5-91.5-66.5-68-71.5-50.5-69.5-40-68-36.5-59.5z' }));;
}