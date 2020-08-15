var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{s(r.next(e))}catch(n){o(n)}}function u(e){try{s(r["throw"](e))}catch(n){o(n)}}function s(e){e.done?t(e.value):i(e.value).then(a,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(n){return s([e,n])}}function s(a){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:t.label++;return{value:a[1],done:false};case 5:t.label++;i=a[1];a=[0];continue;case 7:a=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){t.label=a[1];break}if(a[0]===6&&t.label<o[1]){t.label=o[1];o=a;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(a);break}if(o[2])t.ops.pop();t.trys.pop();continue}a=n.call(e,t)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var r=Array(e),i=0,n=0;n<t;n++)for(var o=arguments[n],a=0,u=o.length;a<u;a++,i++)r[i]=o[a];return r};System.register(["./p-c9fad4d3.system.js","./p-58644701.system.js","./p-ef2985f4.system.js"],(function(e){"use strict";var n,t,r,i;return{setters:[function(e){n=e.g;t=e.c},function(e){r=e.g},function(e){i=e.OVERLAY_BACK_BUTTON_PRIORITY}],execute:function(){var o=this;var a=0;var u=e("c",new WeakMap);var s=function(e){return{create:function(n){return p(e,n)},dismiss:function(n,t,r){return w(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,k(document,e)]}))}))}}};var c=e("h",s("ion-alert"));var f=e("g",s("ion-action-sheet"));var l=e("b",s("ion-picker"));var d=e("f",s("ion-popover"));var v=e("a",(function(e){if(typeof document!=="undefined"){g(document)}var n=a++;e.overlayIndex=n;if(!e.hasAttribute("id")){e.id="ion-overlay-"+n}}));var p=function(e,n){if(typeof customElements!=="undefined"){return customElements.whenDefined(e).then((function(){var t=document.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,n);S(document).appendChild(t);return t.componentOnReady()}))}return Promise.resolve()};var h='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]), textarea, button, select, .ion-focusable';var y="input:not([type=hidden]), textarea, button, select";var m=function(e,n){var t=e.querySelector(h);var r=t&&t.shadowRoot;if(r){t=r.querySelector(y)||t}if(t){t.focus()}else{n.focus()}};var b=function(e,n){var t=Array.from(e.querySelectorAll(h));var r=t.length>0?t[t.length-1]:null;var i=r&&r.shadowRoot;if(i){r=i.querySelector(y)||r}if(r){r.focus()}else{n.focus()}};var _=function(e,n){var t=k(n);var i=e.target;if(!t||!i){return}if(t===i){t.lastFocus=undefined}else{var o=r(t);var a=o.querySelector(".ion-overlay-wrapper");if(!a){return}if(a.contains(i)){t.lastFocus=i}else{var u=t.lastFocus;m(a,t);if(u===n.activeElement){b(a,t)}t.lastFocus=n.activeElement}}};var g=function(e){if(a===0){a=1;e.addEventListener("focus",(function(n){return _(n,e)}),true);e.addEventListener("ionBackButton",(function(n){var t=k(e);if(t&&t.backdropDismiss){n.detail.register(i,(function(){return t.dismiss(undefined,j)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=k(e);if(t&&t.backdropDismiss){t.dismiss(undefined,j)}}}))}};var w=function(e,n,t,r,i){var o=k(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(n,t)};var A=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var k=function(e,n,t){var r=A(e,n);return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))};var x=e("p",(function(e,r,i,a,u){return __awaiter(o,void 0,void 0,(function(){var o,s,c;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();o=n(e);s=e.enterAnimation?e.enterAnimation:t.get(r,o==="ios"?i:a);return[4,L(e,s,e.el,u)];case 1:c=f.sent();if(c){e.didPresent.emit()}if(e.keyboardClose){e.el.focus()}return[2]}}))}))}));var E=e("d",(function(e,r,i,a,s,c,f){return __awaiter(o,void 0,void 0,(function(){var o,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(!e.presented){return[2,false]}e.presented=false;v.label=1;case 1:v.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:r,role:i});o=n(e);l=e.leaveAnimation?e.leaveAnimation:t.get(a,o==="ios"?s:c);if(!(i!=="gesture"))return[3,3];return[4,L(e,l,e.el,f)];case 2:v.sent();v.label=3;case 3:e.didDismiss.emit({data:r,role:i});u.delete(e);return[3,5];case 4:d=v.sent();console.error(d);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var S=function(e){return e.querySelector("ion-app")||e.body};var L=function(e,n,r,i){return __awaiter(o,void 0,void 0,(function(){var o,a,s;return __generator(this,(function(c){switch(c.label){case 0:r.classList.remove("overlay-hidden");o=r.shadowRoot||e.el;a=n(o,i);if(!e.animated||!t.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=u.get(e)||[];u.set(e,__spreadArrays(s,[a]));return[4,a.play()];case 1:c.sent();return[2,true]}}))}))};var P=e("e",(function(e,n){var t;var r=new Promise((function(e){return t=e}));q(e,n,(function(e){t(e.detail)}));return r}));var q=function(e,n,t){var r=function(i){e.removeEventListener(n,r);t(i)};e.addEventListener(n,r)};var R=e("i",(function(e){return e==="cancel"||e===j}));var B=function(e){return e()};var D=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",B);return r((function(){try{return e(n)}catch(t){console.error(t)}}))}return undefined}));var j=e("B","backdrop")}}}));