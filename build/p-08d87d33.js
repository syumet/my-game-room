import{g as t,c as e}from"./p-9b8d62cf.js";import{g as o}from"./p-58d13c5e.js";import{OVERLAY_BACK_BUTTON_PRIORITY as n}from"./p-f3a0c163.js";let s=0;const a=new WeakMap,i=t=>({create:e=>l(t,e),dismiss:(e,o,n)=>y(document,e,o,t,n),getTop:async()=>v(document,t)}),r=i("ion-alert"),c=i("ion-action-sheet"),d=i("ion-picker"),u=i("ion-popover"),p=t=>{"undefined"!=typeof document&&m(document);const e=s++;t.overlayIndex=e,t.hasAttribute("id")||(t.id="ion-overlay-"+e)},l=(t,e)=>"undefined"!=typeof customElements?customElements.whenDefined(t).then(()=>{const o=document.createElement(t);return o.classList.add("overlay-hidden"),Object.assign(o,e),x(document).appendChild(o),o.componentOnReady()}):Promise.resolve(),f='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]), textarea, button, select, .ion-focusable',m=t=>{0===s&&(s=1,t.addEventListener("focus",e=>((t,e)=>{const n=v(e),s=t.target;if(n&&s)if(n===s)n.lastFocus=void 0;else{const t=o(n).querySelector(".ion-overlay-wrapper");if(!t)return;if(t.contains(s))n.lastFocus=s;else{const o=n.lastFocus;((t,e)=>{let o=t.querySelector(f);const n=o&&o.shadowRoot;n&&(o=n.querySelector("input:not([type=hidden]), textarea, button, select")||o),o?o.focus():e.focus()})(t,n),o===e.activeElement&&((t,e)=>{const o=Array.from(t.querySelectorAll(f));let n=o.length>0?o[o.length-1]:null;const s=n&&n.shadowRoot;s&&(n=s.querySelector("input:not([type=hidden]), textarea, button, select")||n),n?n.focus():e.focus()})(t,n),n.lastFocus=e.activeElement}}})(e,t),!0),t.addEventListener("ionBackButton",e=>{const o=v(t);o&&o.backdropDismiss&&e.detail.register(n,()=>o.dismiss(void 0,P))}),t.addEventListener("keyup",e=>{if("Escape"===e.key){const e=v(t);e&&e.backdropDismiss&&e.dismiss(void 0,P)}}))},y=(t,e,o,n,s)=>{const a=v(t,n,s);return a?a.dismiss(e,o):Promise.reject("overlay does not exist")},v=(t,e,o)=>{const n=((t,e)=>(void 0===e&&(e="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(t.querySelectorAll(e)).filter(t=>t.overlayIndex>0)))(t,e);return void 0===o?n[n.length-1]:n.find(t=>t.id===o)},b=async(o,n,s,a,i)=>{if(o.presented)return;o.presented=!0,o.willPresent.emit();const r=t(o),c=o.enterAnimation?o.enterAnimation:e.get(n,"ios"===r?s:a);await g(o,c,o.el,i)&&o.didPresent.emit(),o.keyboardClose&&o.el.focus()},h=async(o,n,s,i,r,c,d)=>{if(!o.presented)return!1;o.presented=!1;try{o.el.style.setProperty("pointer-events","none"),o.willDismiss.emit({data:n,role:s});const u=t(o),p=o.leaveAnimation?o.leaveAnimation:e.get(i,"ios"===u?r:c);"gesture"!==s&&await g(o,p,o.el,d),o.didDismiss.emit({data:n,role:s}),a.delete(o)}catch(u){console.error(u)}return o.el.remove(),!0},x=t=>t.querySelector("ion-app")||t.body,g=async(t,o,n,s)=>{n.classList.remove("overlay-hidden");const i=o(n.shadowRoot||t.el,s);t.animated&&e.getBoolean("animated",!0)||i.duration(0),t.keyboardClose&&i.beforeAddWrite(()=>{const t=n.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()});const r=a.get(t)||[];return a.set(t,[...r,i]),await i.play(),!0},k=(t,e)=>{let o;const n=new Promise(t=>o=t);return w(t,e,t=>{o(t.detail)}),n},w=(t,e,o)=>{const n=s=>{t.removeEventListener(e,n),o(s)};t.addEventListener(e,n)},j=t=>"cancel"===t||t===P,B=t=>t(),E=(t,o)=>{if("function"==typeof t)return e.get("_zoneGate",B)(()=>{try{return t(o)}catch(e){console.error(e)}})},P="backdrop";export{P as B,p as a,d as b,a as c,h as d,k as e,u as f,c as g,r as h,j as i,b as p,E as s}