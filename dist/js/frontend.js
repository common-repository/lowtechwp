parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sLyH":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function r(t){e(this,r),this.args=t,this.render()}return t(r,[{key:"updateTransferIndicator",value:function(){if(void 0!==performance){var e=performance.getEntriesByType("resource");if(void 0!==e){for(var r=0,t=0;t<e.length;t++)"transferSize"in e[t]&&(r+=e[t].transferSize);var n=document.querySelector(".ltwp-indicator__transfer-kb-value");n&&(n.textContent=Math.round(r/1e3));var a=document.querySelector(".ltwp-indicator__transfer-co2-value");if(a){var o=Math.round(r*this.args.transferImpactFactors.CO2*100)/100;a.textContent=o}}}}},{key:"render",value:function(){document.body.innerHTML+=this.args.widgetHTML,this.updateTransferIndicator()}}]),r}(),a=n;exports.default=a;
},{}],"AvVM":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(){function n(r){e(this,n),this.args=r,this.render()}return r(n,[{key:"render",value:function(){}}]),n}(),o=t;exports.default=o;
},{}],"vQUE":[function(require,module,exports) {
"use strict";var e=r(require("./image-preview-link.js"));function r(e){return e&&e.__esModule?e:{default:e}}document.querySelectorAll(".ltwp-image-preview__link").forEach(function(r){return new e.default(r)});
},{"./image-preview-link.js":"AvVM"}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./profile/indicator.js"));function n(e){return e&&e.__esModule?e:{default:e}}var t=function(n){new e.default(n)};fetch("/wp-json/ltwp/v1/status",{}).then(function(e){return e.json()}).then(function(e){return e.widgetHTML&&t(e)}).catch(function(e){return console.log(e)}),require("./media/index.js");
},{"./profile/indicator.js":"sLyH","./media/index.js":"vQUE"}]},{},["Focm"], null)
//# sourceMappingURL=frontend.js.map