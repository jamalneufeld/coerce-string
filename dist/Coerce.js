!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n,r){for(var i=[],s=[],u=e,o=t.split(""),l=0;l<o.length;l++){var a=o[l];if(a in n){var f=new RegExp("^"+n[a],"i"),p=u.match(f);i.push(null!==p?p[0]:null),p&&""!==p[0]?(s.push(!0),u=u.slice(p.length)):s.push(!1)}else if(a!==u[0])if(""!==u[0]&&u[0]){for(var c=!1,h=0;h<u.length;h++){if(a===u[0]){i.push(u[0]),s.push(!0),u=u.slice(1),c=!0;break}u=u.slice(1)+u[0]}var v=void 0;if(v=!(o[l-1]in n)||(i[i.length-1]||""===i[i.length-1]),!c&&v)i.push(a),s.push(!1);else if(!v)break}else{var d=r&&r.length>e.length,g=o[l-1]===i[i.length-1]||o[l-1]in n&&s[s.length-1];!d&&o[l-1]&&g?(i.push(a),s.push(!1)):0===l&&""===u&&(i.push(a),s.push(!1),r="")}else i.push(u[0]),s.push(!0),u=u.slice(1)}return i.join("")}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u={A:"[A-Z]",9:"[0-9]","*":".","+":".*"},o=function(){function e(t){var r=t.pattern,s=t.extend;n(this,e),this.pattern=r,this.extend=s,this.specialTypes=i({},u,s),this.value=null}return s(e,[{key:"string",value:function(e){return this.value=r(e,this.pattern,this.specialTypes,this.value),this.value}}]),e}();o.string=function(e){var t=e.value,n=e.pattern,s=e.extend,o=i({},u,s);return r(t,n,o)},t["default"]=o}])});