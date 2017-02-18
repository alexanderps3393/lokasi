'use strict';

window.Lokasi = Lokasi || {};

if (typeof(module) !== 'undefined') {
    module.exports = window.Lokasi;
} else if (typeof define === 'function' && define.amd) {
    define([], function() {
        return window.Lokasi;
    });
}

var Lokasi = {
    get: function(a) {
        var b = document.querySelector(a),
            c = {
				target : b,
				parent : b.parentNode || b.parentElement,
				left   : b.offsetLeft,
				top    : b.offsetTop,
				right  : b.parentNode.clientWidth - b.clientWidth - b.offsetLeft,
				bottom : b.parentNode.clientHeight - b.clientHeight - b.offsetTop
            }

        return c;
    },
    set: function(a, b, c) {
        var x = document.querySelector(a),
            y = x.style.position;

        x.style.position = (y === "" || "undefined" === typeof y) ? "absolute" : x.style.position;
        x.style.left = b + "px";
        x.style.top = c + "px";

        var z = {
			target : x,
			parent : x.parentNode || x.parentElement,
			left   : x.offsetLeft,
			top    : x.offsetTop,
			right  : x.parentNode.clientWidth - x.clientWidth - x.offsetLeft,
			bottom : x.parentNode.clientHeight - x.clientHeight - x.offsetTop
        }
        return z;
    }
}
