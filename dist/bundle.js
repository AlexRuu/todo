(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([e.id,"@-webkit-keyframes animate {\n    from {opacity: 0; top: -100}\n    to {opacity: 1; top: 0}\n}\n\n@keyframes animate {\n    from {opacity: 0; top: -100}\n    to {opacity: 1; top: 0}\n}\n\n.pTitle, .taskTitle {\n    cursor: pointer;\n    width: 100%;\n}\n\n.expandContent, .expandTask {\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.2s ease-out;\n}\n\n.createProject, .addToList {\n    display: none;\n    z-index: 1;\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    padding-top: 5rem; \n    left: 0;\n    top: 0;\n    overflow: auto;\n    background-color: rgb(0, 0, 0, 0.3);\n}\n\n.project, .addTodo {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    width: 13rem;\n    gap: 10px;\n    margin: auto;\n    padding: 10px 10px 30px 10px;\n    border: black solid;\n    background-color: white;\n    -webkit-animation-name: animate;\n    -webkit-animation-duration: 1s;\n    animation-name: animate;\n    animation-duration: 1s;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4),0 6px 20px 0 rgba(0,0,0,0.19);\n}\n\n.formTitle {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4rem;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{let e,t,o=[];class r{constructor(e){this.title=e}}function a(){localStorage.setItem("listProjects",JSON.stringify(o))}function i(e){const t=document.querySelector(".projectDisplay");let n=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),i=document.createElement("input"),c=document.createElement("label"),s=document.createElement("button"),l=document.createElement("button");i.setAttribute("type","checkbox"),n.classList.add("projectDiv"),n.setAttribute("id",o.indexOf(e)),c.classList.add("pTitle"),c.setAttribute("for",o.indexOf(e)),c.innerText=e.title,r.classList.add("task"),r.setAttribute("id",`task${o.indexOf(e)}`),s.classList.add("addTask"),s.setAttribute("id","addTask"),s.innerHTML="Add Task",l.classList.add("removeProject"),l.setAttribute("id","removeProject"),l.innerHTML="Remove Project",a.classList.add("expandContent"),a.append(r,s,l),n.append(i,c,a),t.appendChild(n)}function c(){document.querySelectorAll(".addTask").forEach((e=>{e.addEventListener("click",(function(){t=e.parentElement.parentElement.id,console.log(t)}))}))}e=new r("Default"),o.push(e);let s=[];class l{constructor(e,t,n,o,r){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.project=r}}let d=new l("Sample Title","Description goes here","2022/03/23","High","0");function u(){localStorage.setItem("todoList",JSON.stringify(s))}function p(e,t){const n=document.querySelector(`#task${t}`);let o=document.createElement("div"),r=document.createElement("input"),a=document.createElement("label"),i=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),d=document.createElement("button"),u=document.createElement("button");o.classList.add("taskDetail"),o.setAttribute("id",`taskList${s.indexOf(e)}`),r.setAttribute("type","checkbox"),a.classList.add("taskTitle"),a.innerText=e.title,a.setAttribute("for",`taskList${s.indexOf(e)}`),i.classList.add("expandTask"),c.classList.add("taskDue"),c.innerText=e.dueDate,l.classList.add("taskDescription"),l.innerText=e.description,d.classList.add("editTask"),d.innerHTML="Edit",u.classList.add("removeTask"),u.innerHTML="Delete",i.append(c,l,d,u),o.append(r,a,i),n.appendChild(o)}function m(){const e=document.querySelector(".projectDisplay"),t=document.querySelectorAll(".projectDiv"),n=document.getElementsByClassName("projectDiv");t.forEach((t=>e.removeChild(t)));for(let e=0;e<o.length;e++){i(o[e]);for(let t=0;t<s.length;t++)s[t].project===n[e].id&&p(s[t],e)}}function f(){const e=document.getElementsByClassName("pTitle");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"rem"}))}function y(){const e=document.getElementsByClassName("taskTitle");for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}))}function v(){document.querySelectorAll(".removeProject").forEach((e=>{e.addEventListener("click",(function(){let e=this.parentElement.parentElement.id;o.splice(e,1),a();for(let t=0;t<s.length;t++)s[t].project===e&&(s.splice(t,1),u());m(),f(),y()}))}))}function h(){document.querySelectorAll(".removeTask").forEach((e=>{e.addEventListener("click",(function(){let e=this.parentElement.parentElement.id,t=e.charAt(e.length-1);s.splice(t,1),u(),m(),f(),y()}))}))}s.push(d);var g=n(379),x=n.n(g),b=n(795),k=n.n(b),E=n(569),S=n.n(E),T=n(565),L=n.n(T),j=n(216),w=n.n(j),q=n(589),A=n.n(q),P=n(426),C={};C.styleTagTransform=A(),C.setAttributes=L(),C.insert=S().bind(null,"head"),C.domAPI=k(),C.insertStyleElement=w(),x()(P.Z,C),P.Z&&P.Z.locals&&P.Z.locals;let D=document.querySelector("#submitProject"),H=document.querySelector("#submit");window.addEventListener("load",(()=>{!function(){if(localStorage.listProjects||localStorage.todoList)if(localStorage.listProjects&&!localStorage.todoList){let e=localStorage.getItem("listProjects");e=JSON.parse(e),o=e,m()}else{let e=localStorage.getItem("listProjects"),t=localStorage.getItem("todoList");e=JSON.parse(e),t=JSON.parse(t),o=e,s=t,m()}else m()}(),m(),h(),f(),c(),y(),v()})),D.addEventListener("click",(e=>{e.preventDefault(),function(){let e,t=document.querySelector("#projectTitle").value;e=new r(t),""===t?alert("Please fill out title"):(o.push(e),document.forms[0].reset(),a(),console.log(o))}(),m(),v(),h(),f(),c(),y(),O.style.display="none"})),H.addEventListener("click",(e=>{e.preventDefault(),function(){let e,n=document.querySelector(".addTodo"),o=document.querySelector("#title").value,r=document.querySelector("#description").value,a=document.querySelector("#date").value,i=document.querySelector("#priority").value;e=new l(o,r,a,i,t),s.push(e),u(),n.reset()}(),m(),v(),h(),f(),c(),y(),I.style.display="none"}));let O=document.querySelector(".createProject"),N=document.querySelector("#createNew"),M=document.querySelector("#closeProject"),I=document.querySelector(".addToList"),J=document.querySelector("#taskTitle");N.onclick=()=>{O.style.display="block"},M.onclick=()=>{O.style.display="none"},document.addEventListener("click",(function(e){e.target&&"addTask"===e.target.id&&(I.style.display="block")})),J.onclick=()=>{I.style.display="none"},window.onclick=e=>{e.target==O&&(O.style.display="none"),e.target==I&&(I.style.display="none")}})()})();