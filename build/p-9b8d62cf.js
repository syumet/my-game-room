import{g as t,s as o}from"./p-dbbbeb6c.js";const e=(t,o)=>{return"string"==typeof t&&(o=t,t=void 0),(e=t,n(e)).includes(o);var e},n=(t=window)=>{if(void 0===t)return[];t.Ionic=t.Ionic||{};let o=t.Ionic.platforms;return null==o&&(o=t.Ionic.platforms=i(t),o.forEach(o=>t.document.documentElement.classList.add("plt-"+o))),o},i=t=>Object.keys(m).filter(o=>m[o](t)),r=t=>!!u(t,/iPad/i)||!(!u(t,/Macintosh/i)||!c(t)),s=t=>u(t,/android|sink/i),c=t=>l(t,"(any-pointer:coarse)"),a=t=>d(t)||p(t),d=t=>!!(t.cordova||t.phonegap||t.PhoneGap),p=t=>{const o=t.Capacitor;return!(!o||!o.isNative)},u=(t,o)=>o.test(t.navigator.userAgent),l=(t,o)=>t.matchMedia(o).matches,m={ipad:r,iphone:t=>u(t,/iPhone/i),ios:t=>u(t,/iPhone|iPod/i)||r(t),android:s,phablet:t=>{const o=t.innerWidth,e=t.innerHeight,n=Math.min(o,e),i=Math.max(o,e);return n>390&&n<520&&i>620&&i<800},tablet:t=>{const o=t.innerWidth,e=t.innerHeight,n=Math.min(o,e),i=Math.max(o,e);return r(t)||(t=>s(t)&&!u(t,/mobile/i))(t)||n>460&&n<820&&i>780&&i<1400},cordova:d,capacitor:p,electron:t=>u(t,/electron/i),pwa:t=>!(!t.matchMedia("(display-mode: standalone)").matches&&!t.navigator.standalone),mobile:c,mobileweb:t=>c(t)&&!a(t),desktop:t=>!c(t),hybrid:a};class b{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,o){const e=this.m.get(t);return void 0!==e?e:o}getBoolean(t,o=!1){const e=this.m.get(t);return void 0===e?o:"string"==typeof e?"true"===e:!!e}getNumber(t,o){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==o?o:NaN:e}set(t,o){this.m.set(t,o)}}const h=new b;let g;const f=o=>o&&t(o)||g,v=()=>{const t=document,i=window,r=i.Ionic=i.Ionic||{};n(i);const s=Object.assign(Object.assign(Object.assign(Object.assign({},(t=>{try{const o=t.sessionStorage.getItem("ionic-persist-config");return null!==o?JSON.parse(o):{}}catch(o){return{}}})(i)),{persistConfig:!1}),r.config),(t=>{const o={};return t.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,o])=>[decodeURIComponent(t),decodeURIComponent(o)]).filter(([t])=>{return t.substr(0,(o="ionic:").length)===o;var o}).map(([t,o])=>[t.slice("ionic:".length),o]).forEach(([t,e])=>{o[t]=e}),o})(i));h.reset(s),h.getBoolean("persistConfig")&&((t,o)=>{try{t.sessionStorage.setItem("ionic-persist-config",JSON.stringify(o))}catch(e){return}})(i,s),r.config=h,r.mode=g=h.get("mode",t.documentElement.getAttribute("mode")||(e(i,"ios")?"ios":"md")),h.set("mode",g),t.documentElement.setAttribute("mode",g),t.documentElement.classList.add(g),h.getBoolean("_testing")&&h.set("animated",!1);const c=t=>t.tagName&&t.tagName.startsWith("ION-"),a=t=>["ios","md"].includes(t);o(t=>{for(;t;){const o=t.mode||t.getAttribute("mode");if(o){if(a(o))return o;c(t)&&console.warn('Invalid ionic mode: "'+o+'", expected: "ios" or "md"')}t=t.parentElement}return g})};export{e as a,h as c,f as g,v as i}