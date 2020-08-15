import{r as t,e as i,h as e,H as s,c as r}from"./p-dbbbeb6c.js";import{g as n}from"./p-9b8d62cf.js";import{c as o}from"./p-58d13c5e.js";import{b as p,h as a,a as h}from"./p-46875cf6.js";const c=class{constructor(e){t(this,e),this.ionPickerColChange=i(this,"ionPickerColChange",7),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}colChanged(){this.refresh()}async connectedCallback(){let t=0,i=.81;"ios"===n(this)&&(t=-.46,i=1),this.rotateFactor=t,this.scaleFactor=i,this.gesture=(await __sc_import_app("./p-03389897.js")).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh()}disconnectedCallback(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,i){const e=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(e,i,!0),this.emitColChange()}update(t,i,e){if(!this.optsEl)return;let s=0,r=0;const{col:n,rotateFactor:o}=this,a=n.selectedIndex=this.indexForY(-t),h=0===i?"":i+"ms",c=`scale(${this.scaleFactor})`,d=this.optsEl.children;for(let p=0;p<d.length;p++){const e=d[p],f=n.options[p],x=p*this.optHeight+t;let g="";if(0!==o){const t=x*o;Math.abs(t)<=90?(s=0,r=90,g=`rotateX(${t}deg) `):s=-9999}else r=0,s=x;const k=a===p;g+=`translate3d(0px,${s}px,${r}px) `,1===this.scaleFactor||k||(g+=c),this.noAnimate?(f.duration=0,e.style.transitionDuration=""):i!==f.duration&&(f.duration=i,e.style.transitionDuration=h),g!==f.transform&&(f.transform=g,e.style.transform=g),k!==f.selected&&(f.selected=k,k?e.classList.add(l):e.classList.remove(l))}this.col.prevSelected=a,e&&(this.y=t),this.lastIndex!==a&&(p(),this.lastIndex=a)}decelerate(){if(0!==this.velocity){this.velocity*=d,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),a())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),h(),cancelAnimationFrame(this.rafId);const i=this.col.options;let e=i.length-1,s=0;for(let r=0;r<i.length;r++)i[r].disabled||(e=Math.min(e,r),s=Math.max(s,r));this.minY=-e*this.optHeight,this.maxY=-s*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let i=this.y+t.deltaY;i>this.minY?(i=Math.pow(i,.8),this.bounceFrom=i):i<this.maxY?(i+=Math.pow(this.maxY-i,.9),this.bounceFrom=i):this.bounceFrom=0,this.update(i,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=o(-f,23*t.velocityY,f),0===this.velocity&&0===t.deltaY){const i=t.event.target.closest(".picker-opt");i&&i.hasAttribute("opt-index")&&this.setSelected(parseInt(i.getAttribute("opt-index"),10),x)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const i=t.deltaY>0,e=Math.abs(this.y)%this.optHeight/this.optHeight;i&&e>.5?this.velocity=-1*Math.abs(this.velocity):!i&&e<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t){let i=this.col.options.length-1,e=0;const s=this.col.options;for(let n=0;n<s.length;n++)s[n].disabled||(i=Math.min(i,n),e=Math.max(e,n));if(0!==this.velocity)return;const r=o(i,this.col.selectedIndex||0,e);if(this.col.prevSelected!==r||t){const t=r*this.optHeight*-1;this.velocity=0,this.update(t,x,!0)}}render(){const t=this.col,i=n(this);return e(s,{class:{[i]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}},t.prefix&&e("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),e("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:t=>this.optsEl=t},t.options.map((t,i)=>e("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":i},t.text))),t.suffix&&e("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return r(this)}static get watchers(){return{col:["colChanged"]}}},l="picker-opt-selected",d=.97,f=90,x=150;c.style={ios:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}",md:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"};export{c as ion_picker_column}