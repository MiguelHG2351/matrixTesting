!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.getElementById("canvas"),r=document.getElementById("formLine");document.getElementById("app");class o{verifyMatrixLength(e,t){const n=e[0].length,r=t[0].length;if(e.every(e=>e.length===n)&&t.every(e=>e.length===r)&&"number"!=typeof e&&"number"!=typeof t)return!0}verifyMath(e,t){if(e[0].length===t.length&&Array.isArray(e)&&Array.isArray(t))return!0}verifyColAndRow(e,t){return console.log(e[0],t[1]),e[0]===t[1]}verify(e,t){const n=this.verifyMatrixLength(e,t),r=this.verifyMath(e,t);if(n&&r)return!0;document.location="https://media.giphy.com/media/3o85xsGXVuYh8lM3EQ/giphy.gif"}}const i=(new o).verify([[5,3,-4,-2],[8,-1,0,-3]],[[1,4,0],[-5,3,7],[0,-9,5],[5,1,4]]);console.log(i);r.addEventListener("submit",e=>{e.preventDefault();!function(e){const t=Number(e.get("col1")),n=Number(e.get("col2")),r=Number(e.get("row1")),i=Number(e.get("row2"));if(t+n+n+i===0)alert("Lo siento hay una matriz nula");else{const e=new Array([t,r],[n,i]);validateMatrix=(new o).verifyColAndRow(e[0],e[1]),console.log(validateMatrix),validateMatrix?alert(e):(alert("No se puede multiplicar la matriz"),console.log(e))}}(new FormData(e.currentTarget))});const l=n.getContext("2d");!function(){const e=n.height,t=n.width;console.log(n.width,n.height),function(){const n=[[45,45,12,5],[45,12,8,5]],r=[[45,45,12,5],[45,45,12,5]];if(n.length===r.length){}else alert("No son divisibles");const o=Array(t/5,e/2);l.beginPath(),l.strokeStyle="blue",l.lineWidth=6,l.lineTo(o[0],o[1]),l.lineTo(o[0]+320,100),l.stroke(),l.beginPath(),l.lineWidth=6,l.strokeStyle="yellow",l.lineTo(o[0],o[1]),l.lineTo(o[0]+320,180),l.stroke(),l.beginPath(),l.lineWidth=6,l.strokeStyle="red",l.lineTo(o[0],o[1]),l.lineTo(o[0]+320,250),l.stroke(),l.beginPath(),l.lineWidth=6,l.strokeStyle="orange",l.lineTo(o[0],o[1]),l.lineTo(o[0]+320,400),l.stroke(),l.beginPath(),l.lineWidth=6,l.strokeStyle="purple",l.lineTo(o[0]+160,220),l.lineTo(o[0]+160,170),l.stroke()}()}()}]);