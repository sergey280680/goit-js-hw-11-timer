parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"rPES":[function(require,module,exports) {
class t{constructor({selector:t,targetDate:e}){this.timerId=null,this.selector=t,this.targetDate=e,this.start()}refs(){return{title:document.querySelector('[data-value="title"]'),days:document.querySelector('[data-value="days"]'),hours:document.querySelector('[data-value="hours"]'),mins:document.querySelector('[data-value="mins"]'),secs:document.querySelector('[data-value="secs"]')}}pad(t){return String(t).padStart(2,"0")}start(){this.timerId=setInterval(()=>{const t=Date.now(),e=this.targetDate-t,{title:a,days:r,hours:n,mins:o,secs:s}=this.refs();return this.targetDate<t?(a.textContent="Новый Год уже прошел",void clearInterval(this.timerId)):(r.textContent=this.pad(Math.floor(e/864e5)),n.textContent=this.pad(Math.floor(e%864e5/36e5)),o.textContent=this.pad(Math.floor(e%36e5/6e4)),s.textContent=this.pad(Math.floor(e%6e4/1e3)),"00"===r.textContent&&"00"===n.textContent&&"00"===o.textContent&&"00"===s.textContent?(a.textContent="С Новый Годом! ",void clearInterval(this.timerId)):void 0)},1e3)}}const e=new t({selector:"#timer-1",targetDate:new Date("Dec 31, 2021")});
},{}],"d6sW":[function(require,module,exports) {
"use strict";require("./_timer.js");
},{"./_timer.js":"rPES"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/main.js");
},{"./sass/main.scss":"clu1","./js/main.js":"d6sW"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.4a81e03a.js.map