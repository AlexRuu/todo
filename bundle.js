(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".clickToExpand {\n    cursor: pointer;\n    width: 100%;\n}\n\n.expandContent {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e,t,r=[];class o{constructor(e){this.title=e}}function a(e){const t=document.querySelector(".projectDisplay");let n=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),i=document.createElement("input"),c=document.createElement("label"),s=document.createElement("button"),l=document.createElement("button");i.setAttribute("type","checkbox"),n.classList.add("projectDiv"),n.setAttribute("id",r.indexOf(e)),c.classList.add("pTitle"),c.setAttribute("for",r.indexOf(e)),c.innerText=e.title,o.classList.add("task"),o.setAttribute("id",`task${r.indexOf(e)}`),s.classList.add("addTask"),s.setAttribute("id","addTask"),s.innerHTML="Add Task",l.classList.add("removeProject"),l.setAttribute("id","removeProject"),l.innerHTML="Remove Project",a.classList.add("expandContent"),a.append(o,s,l),n.append(i,c,a),t.appendChild(n)}function i(){document.querySelectorAll(".addTask").forEach((e=>{e.addEventListener("click",(function(){t=e.parentElement.parentElement.id,console.log(t)}))}))}e=new o("Default"),r.push(e);let c=[];class s{constructor(e,t,n,r,o){this.title=e,this.description=t,this.dueDate=n,this.priority=r,this.project=o}}let l=new s("Sample Title","Description goes here","2022/03/23","High","0");function d(e,t){const n=document.querySelector(`#task${t}`);let r=document.createElement("div"),o=document.createElement("input"),a=document.createElement("label"),i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),d=document.createElement("button"),u=document.createElement("button");r.classList.add("taskDetail"),r.setAttribute("id",`taskList${c.indexOf(e)}`),o.setAttribute("type","checkbox"),a.classList.add("taskTitle"),a.innerText=e.title,a.setAttribute("for",`taskList${c.indexOf(e)}`),i.classList.add("expandTask"),s.classList.add("taskDue"),s.innerText=e.dueDate,l.classList.add("taskDescription"),l.innerText=e.description,d.classList.add("editTask"),d.innerHTML="Edit",u.classList.add("removeTask"),u.innerHTML="Delete",i.append(s,l,d,u),r.append(o,a,i),n.appendChild(r)}function u(){const e=document.querySelector(".projectDisplay"),t=document.querySelectorAll(".projectDiv"),n=document.getElementsByClassName("projectDiv");t.forEach((t=>e.removeChild(t)));for(let e=0;e<r.length;e++){a(r[e]);for(let t=0;t<c.length;t++)c[t].project===n[e].id&&d(c[t],e)}}function p(){const e=document.getElementsByClassName("pTitle");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}c.push(l);var m=n(379),f=n.n(m),v=n(795),h=n.n(v),y=n(569),b=n.n(y),x=n(565),g=n.n(x),E=n(216),T=n.n(E),L=n(589),k=n.n(L),S=n(426),A={};A.styleTagTransform=k(),A.setAttributes=g(),A.insert=b().bind(null,"head"),A.domAPI=h(),A.insertStyleElement=T(),f()(S.Z,A),S.Z&&S.Z.locals&&S.Z.locals;let j=document.querySelector("#submitProject"),D=document.querySelector("#submit");window.addEventListener("load",(()=>{u(),p(),i()})),j.addEventListener("click",(e=>{e.preventDefault(),function(){let e,t=document.querySelector("#projectTitle").value;e=new o(t),r.push(e),document.forms[0].reset(),console.log(r)}(),u(),p(),i()})),D.addEventListener("click",(e=>{e.preventDefault(),function(){let e,n=document.querySelector(".addTodo"),r=document.querySelector("#title").value,o=document.querySelector("#description").value,a=document.querySelector("#date").value,i=document.querySelector("#priority").value;e=new s(r,o,a,i,t),c.push(e),n.reset(),console.log(c)}(),u(),p(),i()}))})()})();