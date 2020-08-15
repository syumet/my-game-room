import{r as t,e as s,f as i,h as o,H as e,c as n}from"./p-dbbbeb6c.js";import{c as a,g as r}from"./p-9b8d62cf.js";import{p as h}from"./p-58d13c5e.js";import{c as l,h as c}from"./p-0708a211.js";const d=class{constructor(i){t(this,i),this.ionChange=s(this,"ionChange",7),this.ionSelect=s(this,"ionSelect",7),this.ionStyle=s(this,"ionStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const s=t.target,i=this.checked;this.value=s.value,this.scrollable&&(i?this.checkButton(i,s):this.setCheckedClasses()),this.checked=s}}valueChanged(t,s){this.ionSelect.emit({value:t}),(""!==s||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const s of t)s.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await __sc_import_app("./p-03389897.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const s=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),s&&this.addRipple(t);const i=this.valueAfterGesture;void 0!==i&&(this.ionChange.emit({value:i}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!a.getBoolean("animated",!0)||!a.getBoolean("rippleEffect",!0))return;const s=this.getButtons().find(t=>t.value===this.value),i=(s.shadowRoot||s).querySelector("ion-ripple-effect");if(!i)return;const{x:o,y:e}=h(t.event);i.addRipple(o,e).then(t=>t())}setActivated(t){this.getButtons().forEach(s=>{t?s.classList.add("segment-button-activated"):s.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const s=t.event.target,i=this.getButtons().find(t=>t.value===this.value);"ION-SEGMENT-BUTTON"===s.tagName&&(i||(this.value=s.value,this.setCheckedClasses()),this.value===s.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,s){const o=this.getIndicator(t),e=this.getIndicator(s);if(null===o||null===e)return;const n=o.getBoundingClientRect(),a=e.getBoundingClientRect(),r=`translate3d(${n.left-a.left}px, 0, 0) scaleX(${n.width/a.width})`;i(()=>{e.classList.remove("segment-button-indicator-animated"),e.style.setProperty("transform",r),e.getBoundingClientRect(),e.classList.add("segment-button-indicator-animated"),e.style.setProperty("transform","")}),this.value=s.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex(t=>t.value===this.value)+1;this.checked=t.find(t=>t.value===this.value);for(const i of t)i.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}setNextIndex(t,s=!1){const i="rtl"===document.dir,o=this.activated,e=this.getButtons(),n=e.findIndex(t=>t.value===this.value),a=e[n];let r,h;if(-1===n)return;const l=a.getBoundingClientRect(),c=l.left,d=l.width,g=t.currentX,m=document.elementFromPoint(g,l.top+l.height/2);if(o&&!s){if(i?g>c+d:g<c){const t=n-1;t>=0&&(h=t)}else if((i?g<c:g>c+d)&&o&&!s){const t=n+1;t<e.length&&(h=t)}void 0===h||e[h].disabled||(r=e[h])}if(!o&&s&&(r=m),null!=r){if("ION-SEGMENT"===r.tagName)return!1;a!==r&&this.checkButton(a,r)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=r(this);return o(e,{onClick:this.onClick,class:Object.assign(Object.assign({},l(this.color)),{[t]:!0,"in-toolbar":c("ion-toolbar",this.el),"in-toolbar-color":c("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},o("slot",null))}get el(){return n(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}};d.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};export{d as ion_segment}