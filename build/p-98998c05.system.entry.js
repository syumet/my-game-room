System.register(["./p-e5df5161.system.js"],(function(e){"use strict";var r,t,n,i;return{setters:[function(e){r=e.r;t=e.h;n=e.c;i=e.H}],execute:function(){var o=function(e,r,t,n,i){var o=e.closest("ion-nav");if(o){if(r==="forward"){if(t!==undefined){return o.push(t,n,{skipIfBusy:true,animationBuilder:i})}}else if(r==="root"){if(t!==undefined){return o.setRoot(t,n,{skipIfBusy:true,animationBuilder:i})}}else if(r==="back"){return o.pop({skipIfBusy:true,animationBuilder:i})}}return Promise.resolve(false)};var u=e("ion_nav_link",function(){function e(e){var t=this;r(this,e);this.routerDirection="forward";this.onClick=function(){return o(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}e.prototype.render=function(){return t(i,{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}())}}}));