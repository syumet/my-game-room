var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{l(i.next(t))}catch(e){o(e)}}function s(t){try{l(i["throw"](t))}catch(e){o(e)}}function l(t){t.done?n(t.value):r(t.value).then(a,s)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-e5df5161.system.js","./p-c9fad4d3.system.js","./p-58644701.system.js","./p-9bdf5884.system.js"],(function(t,e){"use strict";var n,i,r,o,a,s,l,u,c,f,h;return{setters:[function(t){n=t.r;i=t.e;r=t.f;o=t.h;a=t.H;s=t.c},function(t){l=t.c;u=t.g},function(t){c=t.p},function(t){f=t.c;h=t.h}],execute:function(){var d=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}";var v=":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}";var g=t("ion_segment",function(){function t(t){var e=this;n(this,t);this.ionChange=i(this,"ionChange",7);this.ionSelect=i(this,"ionSelect",7);this.ionStyle=i(this,"ionStyle",7);this.didInit=false;this.activated=false;this.disabled=false;this.scrollable=false;this.onClick=function(t){var n=t.target;var i=e.checked;e.value=n.value;if(e.scrollable){if(i){e.checkButton(i,n)}else{e.setCheckedClasses()}}e.checked=n}}t.prototype.valueChanged=function(t,e){this.ionSelect.emit({value:t});if(e!==""||this.didInit){if(!this.activated){this.ionChange.emit({value:t})}else{this.valueAfterGesture=t}}};t.prototype.disabledChanged=function(){this.gestureChanged();var t=this.getButtons();for(var e=0,n=t;e<n.length;e++){var i=n[e];i.disabled=this.disabled}};t.prototype.gestureChanged=function(){if(this.gesture&&!this.scrollable){this.gesture.enable(!this.disabled)}};t.prototype.connectedCallback=function(){this.emitStyle()};t.prototype.componentWillLoad=function(){this.emitStyle()};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;var n=this;return __generator(this,(function(i){switch(i.label){case 0:this.setCheckedClasses();t=this;return[4,e.import("./p-09cdc383.system.js")];case 1:t.gesture=i.sent().createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:false,onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(t){return n.onEnd(t)}});this.gesture.enable(!this.scrollable);this.gestureChanged();if(this.disabled){this.disabledChanged()}this.didInit=true;return[2]}}))}))};t.prototype.onStart=function(t){this.activate(t)};t.prototype.onMove=function(t){this.setNextIndex(t)};t.prototype.onEnd=function(t){this.setActivated(false);var e=this.setNextIndex(t,true);t.event.stopImmediatePropagation();if(e){this.addRipple(t)}var n=this.valueAfterGesture;if(n!==undefined){this.ionChange.emit({value:n});this.valueAfterGesture=undefined}};t.prototype.getButtons=function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))};t.prototype.addRipple=function(t){var e=this;var n=l.getBoolean("animated",true)&&l.getBoolean("rippleEffect",true);if(!n){return}var i=this.getButtons();var r=i.find((function(t){return t.value===e.value}));var o=r.shadowRoot||r;var a=o.querySelector("ion-ripple-effect");if(!a){return}var s=c(t.event),u=s.x,f=s.y;a.addRipple(u,f).then((function(t){return t()}))};t.prototype.setActivated=function(t){var e=this.getButtons();e.forEach((function(e){if(t){e.classList.add("segment-button-activated")}else{e.classList.remove("segment-button-activated")}}));this.activated=t};t.prototype.activate=function(t){var e=this;var n=t.event.target;var i=this.getButtons();var r=i.find((function(t){return t.value===e.value}));if(n.tagName!=="ION-SEGMENT-BUTTON"){return}if(!r){this.value=n.value;this.setCheckedClasses()}if(this.value===n.value){this.setActivated(true)}};t.prototype.getIndicator=function(t){var e=t.shadowRoot||t;return e.querySelector(".segment-button-indicator")};t.prototype.checkButton=function(t,e){var n=this.getIndicator(t);var i=this.getIndicator(e);if(n===null||i===null){return}var o=n.getBoundingClientRect();var a=i.getBoundingClientRect();var s=o.width/a.width;var l=o.left-a.left;var u="translate3d("+l+"px, 0, 0) scaleX("+s+")";r((function(){i.classList.remove("segment-button-indicator-animated");i.style.setProperty("transform",u);i.getBoundingClientRect();i.classList.add("segment-button-indicator-animated");i.style.setProperty("transform","")}));this.value=e.value;this.setCheckedClasses()};t.prototype.setCheckedClasses=function(){var t=this;var e=this.getButtons();var n=e.findIndex((function(e){return e.value===t.value}));var i=n+1;this.checked=e.find((function(e){return e.value===t.value}));for(var r=0,o=e;r<o.length;r++){var a=o[r];a.classList.remove("segment-button-after-checked")}if(i<e.length){e[i].classList.add("segment-button-after-checked")}};t.prototype.setNextIndex=function(t,e){var n=this;if(e===void 0){e=false}var i=document.dir==="rtl";var r=this.activated;var o=this.getButtons();var a=o.findIndex((function(t){return t.value===n.value}));var s=o[a];var l;var u;if(a===-1){return}var c=s.getBoundingClientRect();var f=c.left;var h=c.width;var d=t.currentX;var v=c.top+c.height/2;var g=document.elementFromPoint(d,v);var p=i?d>f+h:d<f;var b=i?d<f:d>f+h;if(r&&!e){if(p){var m=a-1;if(m>=0){u=m}}else if(b){if(r&&!e){var m=a+1;if(m<o.length){u=m}}}if(u!==undefined&&!o[u].disabled){l=o[u]}}if(!r&&e){l=g}if(l!=null){if(l.tagName==="ION-SEGMENT"){return false}if(s!==l){this.checkButton(s,l)}}return true};t.prototype.emitStyle=function(){this.ionStyle.emit({segment:true})};t.prototype.render=function(){var t;var e=u(this);return o(a,{onClick:this.onClick,class:Object.assign(Object.assign({},f(this.color)),(t={},t[e]=true,t["in-toolbar"]=h("ion-toolbar",this.el),t["in-toolbar-color"]=h("ion-toolbar[color]",this.el),t["segment-activated"]=this.activated,t["segment-disabled"]=this.disabled,t["segment-scrollable"]=this.scrollable,t))},o("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"],disabled:["disabledChanged"]}},enumerable:false,configurable:true});return t}());g.style={ios:d,md:v}}}}));