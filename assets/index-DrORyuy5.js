var W_=Object.defineProperty;var X_=(r,t,e)=>t in r?W_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ht=(r,t,e)=>X_(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var Y_="1.1.18";function _p(r,t,e){return Math.max(r,Math.min(t,e))}function q_(r,t,e){return(1-e)*r+e*t}function $_(r,t,e,n){return q_(r,t,1-Math.exp(-e*n))}function Z_(r,t){return(r%t+t)%t}var K_=class{constructor(){Ht(this,"isRunning",!1);Ht(this,"value",0);Ht(this,"from",0);Ht(this,"to",0);Ht(this,"currentTime",0);Ht(this,"lerp");Ht(this,"duration");Ht(this,"easing");Ht(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=_p(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=$_(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function j_(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var J_=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ht(this,"width",0);Ht(this,"height",0);Ht(this,"scrollHeight",0);Ht(this,"scrollWidth",0);Ht(this,"debouncedResize");Ht(this,"wrapperResizeObserver");Ht(this,"contentResizeObserver");Ht(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ht(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ht(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=j_(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},gp=class{constructor(){Ht(this,"events",{})}emit(r,...t){var n;let e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){var e;return(e=this.events[r])!=null&&e.push(t)||(this.events[r]=[t]),()=>{var n;this.events[r]=(n=this.events[r])==null?void 0:n.filter(i=>t!==i)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}},df=100/6,nr={passive:!1},Q_=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ht(this,"touchStart",{x:0,y:0});Ht(this,"lastDelta",{x:0,y:0});Ht(this,"window",{width:0,height:0});Ht(this,"emitter",new gp);Ht(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ht(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ht(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ht(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=n===1?df:n===2?this.window.width:1,s=n===1?df:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ht(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,nr),this.element.addEventListener("touchstart",this.onTouchStart,nr),this.element.addEventListener("touchmove",this.onTouchMove,nr),this.element.addEventListener("touchend",this.onTouchEnd,nr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,nr),this.element.removeEventListener("touchstart",this.onTouchStart,nr),this.element.removeEventListener("touchmove",this.onTouchMove,nr),this.element.removeEventListener("touchend",this.onTouchEnd,nr)}},tg=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=A=>Math.min(1,1.001-Math.pow(2,-10*A)),lerp:c=.1,infinite:h=!1,orientation:f="vertical",gestureOrientation:d="vertical",touchMultiplier:u=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:S=!0,autoRaf:y=!1,__experimental__naiveDimensions:v=!1}={}){Ht(this,"_isScrolling",!1);Ht(this,"_isStopped",!1);Ht(this,"_isLocked",!1);Ht(this,"_preventNextNativeScrollEvent",!1);Ht(this,"_resetVelocityTimeout",null);Ht(this,"__rafID",null);Ht(this,"isTouching");Ht(this,"time",0);Ht(this,"userData",{});Ht(this,"lastVelocity",0);Ht(this,"velocity",0);Ht(this,"direction",0);Ht(this,"options");Ht(this,"targetScroll");Ht(this,"animatedScroll");Ht(this,"animate",new K_);Ht(this,"emitter",new gp);Ht(this,"dimensions");Ht(this,"virtualScroll");Ht(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ht(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const h=this.options.prevent;if(c.find(m=>{var p,S,y;return m instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(m))||((p=m.hasAttribute)==null?void 0:p.call(m,"data-lenis-prevent"))||i&&((S=m.hasAttribute)==null?void 0:S.call(m,"data-lenis-prevent-touch"))||s&&((y=m.hasAttribute)==null?void 0:y.call(m,"data-lenis-prevent-wheel")))}))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();const u=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(d)>5;g&&(d=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ht(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ht(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Y_,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:S,autoRaf:y,__experimental__naiveDimensions:v},this.dimensions=new J_(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new Q_(e,{touchMultiplier:u,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?d=document.querySelector(r):r instanceof HTMLElement&&(r!=null&&r.nodeType)&&(d=r),d){if(this.options.wrapper!==window){const _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}const u=d.getBoundingClientRect();r=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=_p(0,r,this.limit),r===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f!=null?f:{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),h&&(this.targetScroll=d),u||this.emit(),u&&(this.reset(),this.emit(),l==null||l(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?Z_(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function Wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function vp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},eo={duration:.5,overwrite:!1,delay:0},pu,_n,De,ci=1e8,we=1/ci,Jc=Math.PI*2,eg=Jc/4,ng=0,xp=Math.sqrt,ig=Math.cos,rg=Math.sin,an=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},ji=function(t){return typeof t=="number"},mu=function(t){return typeof t=="undefined"},Ui=function(t){return typeof t=="object"},On=function(t){return t!==!1},_u=function(){return typeof window!="undefined"},ya=function(t){return ze(t)||an(t)},yp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,Qc=/(?:-?\.?\d|\.)+/gi,Mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sp=/[+-]=-?[.\d]+/,Ep=/[^,'"\[\]\s]+/gi,sg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Ei,th,gu,ti={},wl={},Tp,bp=function(t){return(wl=ns(t,ti))&&Hn},vu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},na=function(t,e){return!e&&console.warn(t)},wp=function(t,e){return t&&(ti[t]=e)&&wl&&(wl[t]=e)||ti},ia=function(){return 0},og={suppressEvents:!0,isStart:!0,kill:!1},hl={suppressEvents:!0,kill:!1},ag={suppressEvents:!0},xu={},vr=[],eh={},Ap,$n={},ec={},pf=30,ul=[],yu="",Mu=function(t){var e=t[0],n,i;if(Ui(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ul.length;i--&&!ul[i].targetTest(e););n=ul[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new jp(t[i],n)))||t.splice(i,1);return t},qr=function(t){return t._gsap||Mu(hi(t))[0]._gsap},Cp=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():mu(n)&&t.getAttribute&&t.getAttribute(e)||n},Fn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},sn=function(t){return Math.round(t*1e7)/1e7||0},Ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},lg=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Al=function(){var t=vr.length,e=vr.slice(0),n,i;for(eh={},vr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rp=function(t,e,n,i){vr.length&&!_n&&Al(),t.render(e,n,_n&&e<0&&(t._initted||t._startAt)),vr.length&&!_n&&Al()},Pp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ep).length<2?e:an(t)?t.trim():t},Dp=function(t){return t},fi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},cg=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ns=function(t,e){for(var n in e)t[n]=e[n];return t},mf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ui(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ko=function(t){var e=t.parent||Ue,n=t.keyframes?cg(gn(t.keyframes)):fi;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hg=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Lp=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ug=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},nh=function(t,e,n,i){return t._startAt&&(_n?t._startAt.revert(hl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},fg=function r(t){return!t||t._ts&&r(t.parent)},_f=function(t){return t._repeat?no(t._tTime,t=t.duration()+t._rDelay)*t:0},no=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Rl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Xl=function(t){return t._end=sn(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Yl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=sn(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Xl(t),n._dirty||$r(n,t)),t},Ip=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Rl(t.rawTime(),e),(!e._dur||ga(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),$r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},wi=function(t,e,n,i){return e.parent&&Er(e),e._start=sn((ji(n)?n:n||t!==Ue?ri(t,n,e):t._time)+e._delay),e._end=sn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lp(t,e,"_first","_last",t._sort?"_start":0),ih(e)||(t._recent=e),i||Ip(t,e),t._ts<0&&Yl(t,t._tTime),t},Up=function(t,e){return(ti.ScrollTrigger||vu("scrollTrigger",e))&&ti.ScrollTrigger.create(e,t)},Np=function(t,e,n,i,s){if(Eu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!_n&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Ap!==Zn.frame)return vr.push(t),t._lazy=[s,i],1},dg=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ih=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},pg=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&dg(t)&&!(!t._initted&&ih(t))||(t._ts<0||t._dp._ts<0)&&!ih(t))?0:1,a=t._rDelay,l=0,c,h,f;if(a&&t._repeat&&(l=ga(0,t._tDur,e),h=no(l,a),t._yoyo&&h&1&&(o=1-o),h!==no(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||_n||i||t._zTime===we||!e&&t._zTime){if(!t._initted&&Np(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&nh(t,e,n,!0),t._onUpdate&&!n&&jn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&jn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Er(t,1),!n&&!_n&&(jn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},mg=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},io=function(t,e,n,i){var s=t._repeat,o=sn(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:sn(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Yl(t,t._tTime=t._tDur*a),t.parent&&Xl(t),n||$r(t.parent,t),t},gf=function(t){return t instanceof Rn?$r(t):io(t,t._dur)},_g={_start:0,endTime:ia,totalDuration:ia},ri=function r(t,e,n){var i=t.labels,s=t._recent||_g,o=t.duration()>=ci?s.endTime(!1):t._dur,a,l,c;return an(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ho=function(t,e,n){var i=ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;o.immediateRender=On(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Cr=function(t,e){return t||t===0?e(t):e},ga=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!an(t)||!(e=sg.exec(t))?"":e[1]},gg=function(t,e,n){return Cr(n,function(i){return ga(t,e,i)})},rh=[].slice,Op=function(t,e){return t&&Ui(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ui(t[0]))&&!t.nodeType&&t!==Ei},vg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return an(i)&&!e||Op(i,1)?(s=n).push.apply(s,hi(i)):n.push(i)})||n},hi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):an(t)&&!n&&(th||!ro())?rh.call((e||gu).querySelectorAll(t),0):gn(t)?vg(t,n):Op(t)?rh.call(t,0):t?[t]:[]},sh=function(t){return t=hi(t)[0]||na("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return hi(e,n.querySelectorAll?n:n===t?na("Invalid scope")||gu.createElement("div"):t)}},Fp=function(t){return t.sort(function(){return .5-Math.random()})},Bp=function(t){if(ze(t))return t;var e=Ui(t)?t:{each:t},n=Zr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,f=i;return an(i)?h=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],f=i[1]),function(d,u,_){var g=(_||e).length,m=o[g],p,S,y,v,A,b,E,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ci])[1],!M){for(E=-ci;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*h-.5:i%M,S=M===ci?0:l?g*f/M-.5:i/M|0,E=0,C=ci,b=0;b<g;b++)y=b%M-p,v=S-(b/M|0),m[b]=A=c?Math.abs(c==="y"?v:y):xp(y*y+v*v),A>E&&(E=A),A<C&&(C=A);i==="random"&&Fp(m),m.max=E-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=mn(e.amount||e.each)||0,n=n&&g<0?$p(n):n}return g=(m[d]-m.min)/m.max||0,sn(m.b+(n?n(g):g)*m.v)+m.u}},oh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=sn(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ji(n)?0:mn(n))}},zp=function(t,e){var n=gn(t),i,s;return!n&&Ui(t)&&(i=n=t.radius||ci,t.values?(t=hi(t.values),(s=!ji(t[0]))&&(i*=i)):t=oh(t.increment)),Cr(e,n?ze(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ci,h=0,f=t.length,d,u;f--;)s?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<c&&(c=d,h=f);return h=!i||c<=i?t[h]:o,s||h===o||ji(o)?h:h+mn(o)}:oh(t))},kp=function(t,e,n,i){return Cr(gn(t)?!e:n===!0?!!(n=0):!i,function(){return gn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},xg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},yg=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},Mg=function(t,e,n){return Vp(t,e,0,1,n)},Hp=function(t,e,n){return Cr(n,function(i){return t[~~e(i)]})},Sg=function r(t,e,n){var i=e-t;return gn(t)?Hp(t,r(0,t.length),e):Cr(n,function(s){return(i+(s-t)%i)%i+t})},Eg=function r(t,e,n){var i=e-t,s=i*2;return gn(t)?Hp(t,r(0,t.length-1),e):Cr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ra=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Ep:Qc),n+=t.substr(e,i-e)+kp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Vp=function(t,e,n,i,s){var o=e-t,a=i-n;return Cr(s,function(l){return n+((l-t)/o*a||0)})},Tg=function r(t,e,n,i){var s=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!s){var o=an(t),a={},l,c,h,f,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(gn(t)&&!gn(e)){for(h=[],f=t.length,d=f-2,c=1;c<f;c++)h.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=ns(gn(t)?[]:{},t));if(!h){for(l in e)Su.call(a,t,l,"get",e[l]);s=function(_){return wu(_,a)||(o?t.p:t)}}}return Cr(n,s)},vf=function(t,e,n){var i=t.labels,s=ci,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},jn=function(t,e,n){var i=t.vars,s=i[e],o=De,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&vr.length&&Al(),a&&(De=a),h=l?s.apply(c,l):s.call(c),De=o,h},Do=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!_n),t.progress()<1&&jn(t,"onInterrupt"),t},Bs,Gp=[],Wp=function(t){if(t)if(t=!t.name&&t.default||t,_u()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ia,render:wu,add:Su,kill:kg,modifier:zg,rawVars:0},o={targetTest:0,get:0,getSetter:bu,aliases:{},register:0};if(ro(),t!==i){if($n[e])return;fi(i,fi(Cl(t,s),o)),ns(i.prototype,ns(s,Cl(t,o))),$n[i.prop=e]=i,t.targetTest&&(ul.push(i),xu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}wp(e,i),t.register&&t.register(Hn,i,Bn)}else Gp.push(t)},Ee=255,Lo={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},nc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},Xp=function(t,e,n){var i=t?ji(t)?[t>>16,t>>8&Ee,t&Ee]:0:Lo.black,s,o,a,l,c,h,f,d,u,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lo[t])i=Lo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Qc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=nc(l+1/3,s,o),i[1]=nc(l,s,o),i[2]=nc(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Mp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Qc)||Lo.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,f=Math.max(s,o,a),d=Math.min(s,o,a),h=(f+d)/2,f===d?l=c=0:(u=f-d,c=h>.5?u/(2-f-d):u/(f+d),l=f===s?(o-a)/u+(o<a?6:0):f===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Yp=function(t){var e=[],n=[],i=-1;return t.split(xr).forEach(function(s){var o=s.match(Fs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},xf=function(t,e,n){var i="",s=(t+i).match(xr),o=e?"hsla(":"rgba(",a=0,l,c,h,f;if(!s)return t;if(s=s.map(function(d){return(d=Xp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Yp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(xr,"1").split(Fs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(xr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},xr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lo)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),bg=/hsl[a]?\(/,qp=function(t){var e=t.join(" "),n;if(xr.lastIndex=0,xr.test(e))return n=bg.test(e),t[1]=xf(t[1],n),t[0]=xf(t[0],n,Yp(t[1])),!0},sa,Zn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,f,d,u,_=function g(m){var p=r()-i,S=m===!0,y,v,A,b;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,y=A-o,(y>0||S)&&(b=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,o+=y+(y>=s?4:s-y),v=1),S||(l=c(g)),v)for(u=0;u<a.length;u++)a[u](A,d,b,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Tp&&(!th&&_u()&&(Ei=th=window,gu=Ei.document||{},ti.gsap=Hn,(Ei.gsapVersions||(Ei.gsapVersions=[])).push(Hn.version),bp(wl||Ei.GreenSockGlobals||!Ei.gsap&&Ei||{}),Gp.forEach(Wp)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&f.sleep(),c=h||function(m){return setTimeout(m,o-f.time*1e3+1|0)},sa=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),sa=0,c=ia},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,S){var y=p?function(v,A,b,E){m(v,A,b,E),f.remove(y)}:m;return f.remove(m),a[S?"unshift":"push"](y),ro(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&u>=p&&u--},_listeners:a},f}(),ro=function(){return!sa&&Zn.wake()},le={},wg=/^[\d.\-M][\d.\-,\s]/,Ag=/["']/g,Cg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Ag,"").trim():+c,i=l.substr(a+1).trim();return e},Rg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Pg=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Cg(e[1])]:Rg(t).split(",").map(Pp)):le._CE&&wg.test(t)?le._CE("",t):n},$p=function(t){return function(e){return 1-t(1-e)}},Zp=function r(t,e){for(var n=t._first,i;n;)n instanceof Rn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Zr=function(t,e){return t&&(ze(t)?t:le[t]||Pg(t))||e},us=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Fn(t,function(a){le[a]=ti[a]=s,le[o=a.toLowerCase()]=n;for(var l in s)le[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[a+"."+l]=s[l]}),s},Kp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ic=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Jc*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*rg((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Kp(a);return s=Jc/s,l.config=function(c,h){return r(t,c,h)},l},rc=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Kp(n);return i.config=function(s){return r(t,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;us(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;us("Elastic",ic("in"),ic("out"),ic());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);us("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});us("Circ",function(r){return-(xp(1-r*r)-1)});us("Sine",function(r){return r===1?1:-ig(r*eg)+1});us("Back",rc("in"),rc("out"),rc());le.SteppedEase=le.steps=ti.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((i*ga(0,o,a)|0)+s)*n}}};eo.ease=le["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return yu+=r+","+r+"Params,"});var jp=function(t,e){this.id=ng++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Cp,this.set=e?e.getSetter:bu},oa=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,io(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),sa||Zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yl(this,n),!s._dp||s.parent||Ip(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?no(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Rl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(ga(-Math.abs(this._delay),this._tDur,s),i!==!1),Xl(this),ug(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Rl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ag);var i=_n;return _n=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ri(this,n),On(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-we)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=ze(n)?n:Dp,a=function(){var c=i.then;i.then=null,ze(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Do(this)},r}();fi(oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Rn=function(r){vp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ue&&wi(n.parent||Ue,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Up(Wi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Ho(0,arguments,this),this},e.from=function(i,s,o){return Ho(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Ho(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,ri(this,o),1),this},e.call=function(i,s,o){return wi(this,qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new qe(i,o,ri(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,ko(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,f){return a.startAt=o,ko(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,l,c,h,f)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:sn(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,u,_,g,m,p,S,y,v,A,b,E;if(this!==Ue&&h>l&&i>=0&&(h=l),h!==this._tTime||o||f){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,y=this._ts,p=!y,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=sn(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),A=no(this._tTime,m),!a&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),b&&g&1&&(d=c-d,E=1),g!==A&&!this._lock){var C=b&&A&1,M=C===(b&&g&1);if(g<A&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(E?0:sn(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&jn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Zp(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=mg(this,sn(a),sn(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!g&&(jn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(_=u._next,(u._act||d>=u._start)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-we);break}}u=_}else{u=this._last;for(var x=i<0?i:d;u;){if(_=u._prev,(u._act||x<=u._end)&&u._ts&&S!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(x-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(x-u._start)*u._ts,s,o||_n&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=x?-we:we);break}}u=_}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-we)._zTime=d>=a?1:-1,this._ts))return this._start=v,Xl(this),this.render(i,s,o);this._onUpdate&&!s&&jn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(jn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ji(s)||(s=ri(this,s,i)),!(i instanceof oa)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(an(i))return this.addLabel(i,s);if(ze(i))i=qe.delayedCall(0,i);else return this}return this!==i?wi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ci);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return an(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(Wl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=sn(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ri(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=qe.delayedCall(0,s||ia,o);return a.data="isPause",this._hasPause=1,wi(this,a,ri(this,i))},e.removePause=function(i){var s=this._first;for(i=ri(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)fr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=hi(i),l=this._first,c=ji(s),h;l;)l instanceof qe?lg(l._targets,a)&&(c?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ri(o,i),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,d=l.immediateRender,u,_=qe.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!u){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&io(_,m,0,1).render(_._time,!0,!0),u=1}h&&h.apply(_,f||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,fi({startAt:{time:ri(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vf(this,ri(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vf(this,ri(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ci,c,h,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;io(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ue._ts&&(Rp(Ue,Rl(i,Ue)),Ap=Zn.frame),Zn.frame>=pf){pf+=Jn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Jn.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},t}(oa);fi(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dg=function(t,e,n,i,s,o,a){var l=new Bn(this._pt,t,e,0,1,im,null,s),c=0,h=0,f,d,u,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ra(i)),o&&(S=[n,i],o(S,t,e),n=S[0],i=S[1]),d=n.match(tc)||[];f=tc.exec(i);)_=f[0],g=i.substring(c,f.index),u?u=(u+1)%5:g.substr(-5)==="rgba("&&(u=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Ws(m,_)-m:parseFloat(_)-m,m:u&&u<4?Math.round:0},c=tc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Sp.test(i)||p)&&(l.e=0),this._pt=l,l},Su=function(t,e,n,i,s,o,a,l,c,h){ze(i)&&(i=i(s||0,t,o));var f=t[e],d=n!=="get"?n:ze(f)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,u=ze(f)?c?Og:em:Tu,_;if(an(i)&&(~i.indexOf("random(")&&(i=ra(i)),i.charAt(1)==="="&&(_=Ws(d,i)+(mn(d)||0),(_||_===0)&&(i=_))),!h||d!==i||ah)return!isNaN(d*i)&&i!==""?(_=new Bn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?Bg:nm,0,u),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!f&&!(e in t)&&vu(e,i),Dg.call(this,t,e,d,i,u,l||Jn.stringFilter,c))},Lg=function(t,e,n,i,s){if(ze(t)&&(t=Vo(t,s,e,n,i)),!Ui(t)||t.style&&t.nodeType||gn(t)||yp(t))return an(t)?Vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,n,i);return o},Jp=function(t,e,n,i,s,o){var a,l,c,h;if($n[t]&&(a=new $n[t]).init(s,a.rawVars?e[t]:Lg(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Bn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bs))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},fr,ah,Eu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,f=i.yoyoEase,d=i.keyframes,u=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!pu,v=t.timeline,A,b,E,C,M,x,P,I,B,H,$,V,q;if(v&&(!d||!s)&&(s="none"),t._ease=Zr(s,eo.ease),t._yEase=f?$p(Zr(f===!0?s:f,eo.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(I=m[0]?qr(m[0]).harness:0,V=I&&i[I.prop],A=Cl(i,xu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!u?g.render(-1,!0):g.revert(h&&_?hl:og),g._lazy=0),o){if(Er(t._startAt=qe.set(m,fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return jn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n||!a&&!u)&&t._startAt.revert(hl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),E=fi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&On(l),immediateRender:a,stagger:0,parent:p},A),V&&(E[I.prop]=V),Er(t._startAt=qe.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(_n?t._startAt.revert(hl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&On(l)||l&&!_,b=0;b<m.length;b++){if(M=m[b],P=M._gsap||Mu(m)[b]._gsap,t._ptLookup[b]=H={},eh[P.id]&&vr.length&&Al(),$=S===m?b:S.indexOf(M),I&&(B=new I).init(M,V||A,t,$,S)!==!1&&(t._pt=C=new Bn(t._pt,M,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(G){H[G]=C}),B.priority&&(x=1)),!I||V)for(E in A)$n[E]&&(B=Jp(E,A,t,$,M,S))?B.priority&&(x=1):H[E]=C=Su.call(t,M,E,"get",A[E],$,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),y&&t._pt&&(fr=t,Ue.killTweensOf(M,H,t.globalTime(e)),q=!t.parent,fr=0),t._pt&&l&&(eh[P.id]=1)}x&&rm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,d&&e<=0&&v.render(ci,!0,!0)},Ig=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,d,u;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,u=t._targets.length;u--;){if(h=d[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ah=1,t.vars[e]="+=0",Eu(t,a),ah=0,l?na(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)f=c[u],h=f._pt||f,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,f.e&&(f.e=Ve(n)+mn(f.e)),f.b&&(f.b=h.s+mn(f.b))},Ug=function(t,e){var n=t[0]?qr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=ns({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ng=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(gn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):an(t)&&~t.indexOf("random(")?ra(t):t},Qp=yu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tm={};Fn(Qp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tm[r]=1});var qe=function(r){vp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ko(i))||this;var l=a.vars,c=l.duration,h=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Ue,y=(gn(n)||yp(n)?ji(n[0]):"length"in i)?[n]:hi(n),v,A,b,E,C,M,x,P;if(a._targets=y.length?Mu(y):na("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,_||d||ya(c)||ya(h)){if(i=a.vars,v=a.timeline=new Rn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=Wi(a),v._start=0,d||ya(c)||ya(h)){if(E=y.length,x=d&&Bp(d),Ui(d))for(C in d)~Qp.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(A=0;A<E;A++)b=Cl(i,tm),b.stagger=0,p&&(b.yoyoEase=p),P&&ns(b,P),M=y[A],b.duration=+Vo(c,Wi(a),A,M,y),b.delay=(+Vo(h,Wi(a),A,M,y)||0)-a._delay,!d&&E===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),v.to(M,b,x?x(A,M,y):0),v._ease=le.none;v.duration()?c=h=0:a.timeline=0}else if(_){ko(fi(v.vars.defaults,{ease:"none"})),v._ease=Zr(_.ease||i.ease||"none");var I=0,B,H,$;if(gn(_))_.forEach(function(V){return v.to(y,V,">")}),v.duration();else{b={};for(C in _)C==="ease"||C==="easeEach"||Ng(C,_[C],b,_.easeEach);for(C in b)for(B=b[C].sort(function(V,q){return V.t-q.t}),I=0,A=0;A<B.length;A++)H=B[A],$={ease:H.e,duration:(H.t-(A?B[A-1].t:0))/100*c},$[C]=H.v,v.to(y,$,I),I+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return u===!0&&!pu&&(fr=Wi(a),Ue.killTweensOf(y),fr=0),wi(S,Wi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===sn(S._time)&&On(f)&&fg(Wi(a))&&S.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),m&&Up(Wi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,f=i>l-we&&!h?l:i<we?0:i,d,u,_,g,m,p,S,y,v;if(!c)pg(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=sn(f%g),f===l?(_=this._repeat,d=c):(_=~~(f/g),_&&_===sn(f/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,d=c-d),m=no(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(y&&this._yEase&&Zp(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(sn(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Np(this,h?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!_&&(jn(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(S,u.d),u=u._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&nh(this,i,s,o),jn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&jn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Er(this,1),!s&&!(h&&!a)&&(f||a||p)&&(jn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){sa||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Eu(this,c),h=this._ease(c/this._dur),Ig(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Yl(this,0),this.parent||Lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Do(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fr&&fr.vars.overwrite!==!0)._first||Do(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hi(i):a,c=this._ptLookup,h=this._pt,f,d,u,_,g,m,p;if((!s||s==="all")&&hg(a,l))return s==="all"&&(this._pt=0),Do(this);for(f=this._op=this._op||[],s!=="all"&&(an(s)&&(g={},Fn(s,function(S){return g[S]=1}),s=g),s=Ug(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,_=d,u={}):(u=f[p]=f[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Wl(this,m,"_pt"),delete d[g]),u!=="all"&&(u[g]=1)}return this._initted&&!this._pt&&h&&Do(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ho(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Ho(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Ue.killTweensOf(i,s,o)},t}(oa);fi(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new Rn,e=rh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Tu=function(t,e,n){return t[e]=n},em=function(t,e,n){return t[e](n)},Og=function(t,e,n,i){return t[e](i.fp,n)},Fg=function(t,e,n){return t.setAttribute(e,n)},bu=function(t,e){return ze(t[e])?em:mu(t[e])&&t.setAttribute?Fg:Tu},nm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Bg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},im=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},wu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},zg=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},kg=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Hg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},rm=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Bn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||nm,this.d=l||this,this.set=c||Tu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Hg,this.m=n,this.mt=s,this.tween=i},r}();Fn(yu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xu[r]=1});ti.TweenMax=ti.TweenLite=qe;ti.TimelineLite=ti.TimelineMax=Rn;Ue=new Rn({sortChildren:!1,defaults:eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=qp;var Kr=[],fl={},Vg=[],yf=0,Gg=0,sc=function(t){return(fl[t]||Vg).map(function(e){return e()})},lh=function(){var t=Date.now(),e=[];t-yf>2&&(sc("matchMediaInit"),Kr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ei.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),sc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),yf=t,sc("matchMedia"))},sm=function(){function r(e,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Gg++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var o=this,a=function(){var c=De,h=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=sh(s)),De=o,f=i.apply(o,arguments),ze(f)&&o._r.push(f),De=c,o.selector=h,o.isReverted=!1,f};return o.last=a,n===ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Kr.length;o--;)Kr[o].id===this.id&&Kr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),Wg=function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ui(n)||(n={matches:n});var o=new sm(0,s||this.scope),a=o.conditions={},l,c,h;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Ei.matchMedia(n[c]),l&&(Kr.indexOf(o)<0&&Kr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh)));return h&&i(o,function(f){return o.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Pl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wp(i)})},timeline:function(t){return new Rn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=hi(t)[0]);var s=qr(t||{}).get,o=n?Dp:Pp;return n==="native"&&(n=""),t&&(e?o(($n[e]&&$n[e].get||s)(t,e,n,i)):function(a,l,c){return o(($n[a]&&$n[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=hi(t),t.length>1){var i=t.map(function(h){return Hn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var f=s;f--;)i[f](h)}}t=t[0]||{};var o=$n[e],a=qr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var f=new o;Bs._pt=0,f.init(t,n?h+n:h,Bs,0,[t]),f.render(1,f),Bs._pt&&wu(1,Bs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Hn.to(t,ns((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Zr(t.ease,eo.ease)),mf(eo,t||{})},config:function(t){return mf(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!$n[a]&&!ti[a]&&na(e+" effect requires "+a+" plugin.")}),ec[e]=function(a,l,c){return n(hi(a),fi(l||{},s),c)},o&&(Rn.prototype[e]=function(a,l,c){return this.add(ec[e](a,Ui(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=Zr(e)},parseEase:function(t,e){return arguments.length?Zr(t,e):le},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Rn(t),i,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=s;return wi(Ue,n,0),n},context:function(t,e){return t?new sm(t,e):De},matchMedia:function(t){return new Wg(t)},matchMediaRefresh:function(){return Kr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||lh()},addEventListener:function(t,e){var n=fl[t]||(fl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Sg,wrapYoyo:Eg,distribute:Bp,random:kp,snap:zp,normalize:Mg,getUnit:mn,clamp:gg,splitColor:Xp,toArray:hi,selector:sh,mapRange:Vp,pipe:xg,unitize:yg,interpolate:Tg,shuffle:Fp},install:bp,effects:ec,ticker:Zn,updateRoot:Rn.updateRoot,plugins:$n,globalTimeline:Ue,core:{PropTween:Bn,globals:wp,Tween:qe,Timeline:Rn,Animation:oa,getCache:qr,_removeLinkedListItem:Wl,reverting:function(){return _n},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return pu=t}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Pl[r]=qe[r]});Zn.add(Rn.updateRoot);Bs=Pl.to({},{duration:0});var Xg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Yg=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Xg(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},oc=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(an(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Yg(a,s)}}}},Hn=Pl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},oc("roundProps",oh),oc("modifiers"),oc("snap",zp))||Pl;qe.version=Rn.version=Hn.version="3.12.5";Tp=1;_u()&&ro();le.Power0;le.Power1;le.Power2;le.Power3;le.Power4;le.Linear;le.Quad;le.Cubic;le.Quart;le.Quint;le.Strong;le.Elastic;le.Back;le.SteppedEase;le.Bounce;le.Sine;le.Expo;le.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mf,dr,Xs,Au,Gr,Sf,Cu,qg=function(){return typeof window!="undefined"},Ji={},Fr=180/Math.PI,Ys=Math.PI/180,_s=Math.atan2,Ef=1e8,Ru=/([A-Z])/g,$g=/(left|right|width|margin|padding|x)/i,Zg=/[\s,\(]\S/,Ci={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ch=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Kg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jg=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Jg=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},om=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},am=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Qg=function(t,e,n){return t.style[e]=n},t0=function(t,e,n){return t.style.setProperty(e,n)},e0=function(t,e,n){return t._gsap[e]=n},n0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},i0=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},r0=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ne="transform",zn=Ne+"Origin",s0=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ji&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ci[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Xi(i,a)}):this.tfm[t]=o.x?o[t]:Xi(i,t),t===zn&&(this.tfm.zOrigin=o.zOrigin);else return Ci.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ne)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(zn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},lm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},o0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Ru,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cu(),(!s||!s.isStart)&&!n[Ne]&&(lm(n),i.zOrigin&&n[zn]&&(n[zn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cm=function(t,e){var n={target:t,props:[],revert:o0,save:s0};return t._gsap||Hn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},hm,hh=function(t,e){var n=dr.createElementNS?dr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):dr.createElement(t);return n&&n.style?n:dr.createElement(t)},Li=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ru,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,so(e)||e,1)||""},Tf="O,Moz,ms,Ms,Webkit".split(","),so=function(t,e,n){var i=e||Gr,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Tf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Tf[o]:"")+t},uh=function(){qg()&&window.document&&(Mf=window,dr=Mf.document,Xs=dr.documentElement,Gr=hh("div")||{style:{}},hh("div"),Ne=so(Ne),zn=Ne+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",hm=!!so("perspective"),Cu=Hn.core.reverting,Au=1)},ac=function r(t){var e=hh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Xs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Xs.removeChild(e),this.style.cssText=s,o},bf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},um=function(t){var e;try{e=t.getBBox()}catch{e=ac.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===ac||(e=ac.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+bf(t,["x","cx","x1"])||0,y:+bf(t,["y","cy","y1"])||0,width:0,height:0}:e},fm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&um(t))},is=function(t,e){if(e){var n=t.style,i;e in Ji&&e!==zn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Ru,"-$1").toLowerCase())):n.removeAttribute(e)}},pr=function(t,e,n,i,s,o){var a=new Bn(t._pt,e,n,0,1,o?am:om);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},wf={deg:1,rad:1,turn:1},a0={grid:1,flex:1},Tr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Gr.style,l=$g.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",u=i==="%",_,g,m,p;if(i===o||!s||wf[i]||wf[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&fm(t),(u||o==="%")&&(Ji[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ve(u?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===dr||!g.appendChild)&&(g=dr.body),m=g._gsap,m&&u&&m.width&&l&&m.time===Zn.time&&!m.uncache)return Ve(s/m.width*f);if(u&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=f+i,_=t[h],S?t.style[e]=S:is(t,e)}else(u||o==="%")&&!a0[Li(g,"display")]&&(a.position=Li(t,"position")),g===t&&(a.position="static"),g.appendChild(Gr),_=Gr[h],g.removeChild(Gr),a.position="absolute";return l&&u&&(m=qr(g),m.time=Zn.time,m.width=g[h]),Ve(d?_*s/f:_&&s?f/_*s:0)},Xi=function(t,e,n,i){var s;return Au||uh(),e in Ci&&e!=="transform"&&(e=Ci[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ji[e]&&e!=="transform"?(s=la(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ll(Li(t,zn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[e]&&Dl[e](t,e,n)||Li(t,e)||Cp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(t,e,s,n)+n:s},l0=function(t,e,n,i){if(!n||n==="none"){var s=so(e,t,1),o=s&&Li(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Li(t,"borderTopColor"))}var a=new Bn(this._pt,t.style,e,0,1,im),l=0,c=0,h,f,d,u,_,g,m,p,S,y,v,A;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Li(t,e)||i,g?t.style[e]=g:is(t,e)),h=[n,i],qp(h),n=h[0],i=h[1],d=n.match(Fs)||[],A=i.match(Fs)||[],A.length){for(;f=Fs.exec(i);)m=f[0],S=i.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(u=parseFloat(g)||0,v=g.substr((u+"").length),m.charAt(1)==="="&&(m=Ws(u,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Fs.lastIndex-y.length,y||(y=y||Jn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(u=Tr(t,e,g,y)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:u,c:p-u,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?am:om;return Sp.test(i)&&(a.e=0),this._pt=a,a},Af={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},c0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Af[n]||n,e[1]=Af[i]||i,e.join(" ")},h0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ji[a]&&(l=1,a=a==="transformOrigin"?zn:Ne),is(n,a);l&&(is(n,Ne),o&&(o.svg&&n.removeAttribute("transform"),la(n,1),o.uncache=1,lm(i)))}},Dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Bn(t._pt,e,n,0,0,h0);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},aa=[1,0,0,1,0,0],dm={},pm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cf=function(t){var e=Li(t,Ne);return pm(e)?aa:e.substr(7).match(Mp).map(Ve)},Pu=function(t,e){var n=t._gsap||qr(t),i=t.style,s=Cf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?aa:s):(s===aa&&!t.offsetParent&&t!==Xs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Xs.appendChild(t)),s=Cf(t),l?i.display=l:is(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Xs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(t,e,n,i,s,o){var a=t._gsap,l=s||Pu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],y=e.split(" "),v=parseFloat(y[0])||0,A=parseFloat(y[1])||0,b,E,C,M;n?l!==aa&&(E=u*m-_*g)&&(C=v*(m/E)+A*(-g/E)+(g*S-m*p)/E,M=v*(-_/E)+A*(u/E)-(u*S-_*p)/E,v=C,A=M):(b=um(t),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),A=b.y+(~(y[1]||y[0]).indexOf("%")?A/100*b.height:A)),i||i!==!1&&a.smooth?(p=v-c,S=A-h,a.xOffset=f+(p*u+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[zn]="0px 0px",o&&(pr(o,a,"xOrigin",c,v),pr(o,a,"yOrigin",h,A),pr(o,a,"xOffset",f,a.xOffset),pr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+A)},la=function(t,e){var n=t._gsap||new jp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Li(t,zn)||"0",h,f,d,u,_,g,m,p,S,y,v,A,b,E,C,M,x,P,I,B,H,$,V,q,G,ot,L,ht,it,at,z,K;return h=f=d=g=m=p=S=y=v=0,u=_=1,n.svg=!!(t.getCTM&&fm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),E=Pu(t,n.svg),n.svg&&(n.uncache?(G=t.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),fh(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,E)),A=n.xOrigin||0,b=n.yOrigin||0,E!==aa&&(P=E[0],I=E[1],B=E[2],H=E[3],h=$=E[4],f=V=E[5],E.length===6?(u=Math.sqrt(P*P+I*I),_=Math.sqrt(H*H+B*B),g=P||I?_s(I,P)*Fr:0,S=B||H?_s(B,H)*Fr+g:0,S&&(_*=Math.abs(Math.cos(S*Ys))),n.svg&&(h-=A-(A*P+b*B),f-=b-(A*I+b*H))):(K=E[6],at=E[7],L=E[8],ht=E[9],it=E[10],z=E[11],h=E[12],f=E[13],d=E[14],C=_s(K,it),m=C*Fr,C&&(M=Math.cos(-C),x=Math.sin(-C),q=$*M+L*x,G=V*M+ht*x,ot=K*M+it*x,L=$*-x+L*M,ht=V*-x+ht*M,it=K*-x+it*M,z=at*-x+z*M,$=q,V=G,K=ot),C=_s(-B,it),p=C*Fr,C&&(M=Math.cos(-C),x=Math.sin(-C),q=P*M-L*x,G=I*M-ht*x,ot=B*M-it*x,z=H*x+z*M,P=q,I=G,B=ot),C=_s(I,P),g=C*Fr,C&&(M=Math.cos(C),x=Math.sin(C),q=P*M+I*x,G=$*M+V*x,I=I*M-P*x,V=V*M-$*x,P=q,$=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),u=Ve(Math.sqrt(P*P+I*I+B*B)),_=Ve(Math.sqrt(V*V+K*K)),C=_s($,V),S=Math.abs(C)>2e-4?C*Fr:0,v=z?1/(z<0?-z:z):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!pm(Li(t,Ne)),q&&t.setAttribute("transform",q))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(u*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ve(u),n.scaleY=Ve(_),n.rotation=Ve(g)+a,n.rotationX=Ve(m)+a,n.rotationY=Ve(p)+a,n.skewX=S+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[zn]=Ll(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?f0:hm?mm:u0,n.uncache=0,n},Ll=function(t){return(t=t.split(" "))[0]+" "+t[1]},lc=function(t,e,n){var i=mn(e);return Ve(parseFloat(e)+parseFloat(Tr(t,"x",n+"px",i)))+i},u0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,mm(t,e)},Rr="0deg",Mo="0px",Pr=") ",mm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,d=n.skewX,u=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,y=n.zOrigin,v="",A=p==="auto"&&t&&t!==1||p===!0;if(y&&(f!==Rr||h!==Rr)){var b=parseFloat(h)*Ys,E=Math.sin(b),C=Math.cos(b),M;b=parseFloat(f)*Ys,M=Math.cos(b),o=lc(S,o,E*M*-y),a=lc(S,a,-Math.sin(b)*-y),l=lc(S,l,C*M*-y+y)}m!==Mo&&(v+="perspective("+m+Pr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(A||o!==Mo||a!==Mo||l!==Mo)&&(v+=l!==Mo||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Rr&&(v+="rotate("+c+Pr),h!==Rr&&(v+="rotateY("+h+Pr),f!==Rr&&(v+="rotateX("+f+Pr),(d!==Rr||u!==Rr)&&(v+="skew("+d+", "+u+Pr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Pr),S.style[Ne]=v||"translate(0, 0)"},f0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,d=n.scaleY,u=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,y=parseFloat(o),v=parseFloat(a),A,b,E,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ys,c*=Ys,A=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Ys,M=Math.tan(c-h),M=Math.sqrt(1+M*M),E*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),A*=M,b*=M)),A=Ve(A),b=Ve(b),E=Ve(E),C=Ve(C)):(A=f,C=d,b=E=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=Tr(u,"x",o,"px"),v=Tr(u,"y",a,"px")),(_||g||m||p)&&(y=Ve(y+_-(_*A+g*E)+m),v=Ve(v+g-(_*b+g*C)+p)),(i||s)&&(M=u.getBBox(),y=Ve(y+i/100*M.width),v=Ve(v+s/100*M.height)),M="matrix("+A+","+b+","+E+","+C+","+y+","+v+")",u.setAttribute("transform",M),S&&(u.style[Ne]=M)},d0=function(t,e,n,i,s){var o=360,a=an(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Fr:1),c=l-i,h=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ef)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ef)%o-~~(c/o)*o)),t._pt=d=new Bn(t._pt,e,n,i,c,Kg),d.e=h,d.u="deg",t._props.push(n),d},Rf=function(t,e){for(var n in e)t[n]=e[n];return t},p0=function(t,e,n){var i=Rf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,f,d,u,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ne]=e,a=la(n,1),is(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],o[Ne]=e,a=la(n,1),o[Ne]=c);for(l in Ji)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(u=mn(c),_=mn(h),f=u!==_?Tr(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new Bn(t._pt,a,l,f,d-f,ch),t._pt.u=_||0,t._props.push(l));Rf(a,i)};Fn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Dl[t>1?"border"+r:r]=function(a,l,c,h,f){var d,u;if(arguments.length<4)return d=o.map(function(_){return Xi(a,_,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(h+"").split(" "),u={},o.forEach(function(_,g){return u[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,u,f)}});var _m={name:"css",register:uh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,f,d,u,_,g,m,p,S,y,v,A,b,E,C;Au||uh(),this.styles=this.styles||cm(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!($n[g]&&Jp(g,e,n,i,t,s)))){if(u=typeof h,_=Dl[g],u==="function"&&(h=h.call(n,i,t,s),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=ra(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",xr.lastIndex=0,xr.test(c)||(m=mn(c),p=mn(h)),p?m!==p&&(c=Tr(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(u!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],an(c)&&~c.indexOf("random(")&&(c=ra(c)),mn(c+"")||c==="auto"||(c+=Jn.units[g]||mn(Xi(t,g))||""),(c+"").charAt(1)==="="&&(c=Xi(t,g))):c=Xi(t,g),d=parseFloat(c),S=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),f=parseFloat(h),g in Ci&&(g==="autoAlpha"&&(d===1&&Xi(t,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),pr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ci[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Ji,y){if(this.styles.save(g),v||(A=t._gsap,A.renderTransform&&!e.parseTransform||la(t,e.parseTransform),b=e.smoothOrigin!==!1&&A.smooth,v=this._pt=new Bn(this._pt,a,Ne,0,1,A.renderTransform,A,0,-1),v.dep=1),g==="scale")this._pt=new Bn(this._pt,A,"scaleY",A.scaleY,(S?Ws(A.scaleY,S+f):f)-A.scaleY||0,ch),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(zn,0,a[zn]),h=c0(h),A.svg?fh(t,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&pr(this,A,"zOrigin",A.zOrigin,p),pr(this,a,g,Ll(c),Ll(h)));continue}else if(g==="svgOrigin"){fh(t,h,1,b,0,this);continue}else if(g in dm){d0(this,A,g,d,S?Ws(d,S+h):h);continue}else if(g==="smoothOrigin"){pr(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){p0(this,h,t);continue}}else g in a||(g=so(g)||g);if(y||(f||f===0)&&(d||d===0)&&!Zg.test(h)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=mn(h)||(g in Jn.units?Jn.units[g]:m),m!==p&&(d=Tr(t,g,c,p)),this._pt=new Bn(this._pt,y?A:a,g,d,(S?Ws(d,S+f):f)-d,!y&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Jg:ch),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=jg);else if(g in a)l0.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){vu(g,h);continue}y||(g in a?C.push(g,0,a[g]):C.push(g,1,c||t[g])),o.push(g)}}E&&rm(this)},render:function(t,e){if(e.tween._time||!Cu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Xi,aliases:Ci,getSetter:function(t,e,n){var i=Ci[e];return i&&i.indexOf(",")<0&&(e=i),e in Ji&&e!==zn&&(t._gsap.x||Xi(t,"x"))?n&&Sf===n?e==="scale"?n0:e0:(Sf=n||{})&&(e==="scale"?i0:r0):t.style&&!mu(t.style[e])?Qg:~e.indexOf("-")?t0:bu(t,e)},core:{_removeProperty:is,_getMatrix:Pu}};Hn.utils.checkPrefix=so;Hn.core.getStyleSaver=cm;(function(r,t,e,n){var i=Fn(r+","+t+","+e,function(s){Ji[s]=1});Fn(t,function(s){Jn.units[s]="deg",dm[s]=1}),Ci[i[13]]=r+","+t,Fn(n,function(s){var o=s.split(":");Ci[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Hn.registerPlugin(_m);var $e=Hn.registerPlugin(_m)||Hn;$e.core.Tween;function m0(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _0(r,t,e){return t&&m0(r.prototype,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hn,dl,Kn,mr,_r,qs,gm,Br,Go,vm,qi,gi,xm,ym=function(){return hn||typeof window!="undefined"&&(hn=window.gsap)&&hn.registerPlugin&&hn},Mm=1,zs=[],oe=[],Ii=[],Wo=Date.now,dh=function(t,e){return e},g0=function(){var t=Go.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Ii),oe=n,Ii=i,dh=function(o,a){return e[o](a)}},yr=function(t,e){return~Ii.indexOf(t)&&Ii[Ii.indexOf(t)+1][e]},Xo=function(t){return!!~vm.indexOf(t)},Sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Mn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ma="scrollLeft",Sa="scrollTop",ph=function(){return qi&&qi.isPressed||oe.cache++},Il=function(t,e){var n=function i(s){if(s||s===0){Mm&&(Kn.history.scrollRestoration="manual");var o=qi&&qi.isPressed;s=i.v=Math.round(s)||(qi&&qi.iOS?1:0),t(s),i.cacheID=oe.cache,o&&dh("ss",s)}else(e||oe.cache!==i.cacheID||dh("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Pn={s:Ma,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Il(function(r){return arguments.length?Kn.scrollTo(r,Je.sc()):Kn.pageXOffset||mr[Ma]||_r[Ma]||qs[Ma]||0})},Je={s:Sa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Pn,sc:Il(function(r){return arguments.length?Kn.scrollTo(Pn.sc(),r):Kn.pageYOffset||mr[Sa]||_r[Sa]||qs[Sa]||0})},Un=function(t,e){return(e&&e._ctx&&e._ctx.selector||hn.utils.toArray)(t)[0]||(typeof t=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},br=function(t,e){var n=e.s,i=e.sc;Xo(t)&&(t=mr.scrollingElement||_r);var s=oe.indexOf(t),o=i===Je.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||Sn(t,"scroll",ph);var a=oe[s+o],l=a||(oe[s+o]=Il(yr(t,n),!0)||(Xo(t)?i:Il(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=hn.getProperty(t,"scrollBehavior")==="smooth"),l},mh=function(t,e,n){var i=t,s=t,o=Wo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=Wo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},d=function(_){var g=a,m=s,p=Wo();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:f,getVelocity:d}},So=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Pf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Sm=function(){Go=hn.core.globals().ScrollTrigger,Go&&Go.core&&g0()},Em=function(t){return hn=t||ym(),!dl&&hn&&typeof document!="undefined"&&document.body&&(Kn=window,mr=document,_r=mr.documentElement,qs=mr.body,vm=[Kn,mr,_r,qs],hn.utils.clamp,xm=hn.core.context||function(){},Br="onpointerenter"in qs?"pointer":"mouse",gm=Ge.isTouch=Kn.matchMedia&&Kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gi=Ge.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Mm=0},500),Sm(),dl=1),dl};Pn.op=Je;oe.cache=0;var Ge=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){dl||Em(hn)||console.warn("Please gsap.registerPlugin(Observer)"),Go||Sm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,f=n.onStop,d=n.onStopDelay,u=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,y=n.onPress,v=n.onRelease,A=n.onRight,b=n.onLeft,E=n.onUp,C=n.onDown,M=n.onChangeX,x=n.onChangeY,P=n.onChange,I=n.onToggleX,B=n.onToggleY,H=n.onHover,$=n.onHoverEnd,V=n.onMove,q=n.ignoreCheck,G=n.isNormalizer,ot=n.onGestureStart,L=n.onGestureEnd,ht=n.onWheel,it=n.onEnable,at=n.onDisable,z=n.onClick,K=n.scrollSpeed,ft=n.capture,et=n.allowClicks,Et=n.lockAxis,Rt=n.onLockAxis;this.target=a=Un(a)||_r,this.vars=n,u&&(u=hn.utils.toArray(u)),i=i||1e-9,s=s||0,_=_||1,K=K||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Kn.getComputedStyle(qs).lineHeight)||22);var Ut,Vt,rt,tt,D,At,st,F=this,ct=0,Ft=0,bt=n.passive||!h,R=br(a,Pn),T=br(a,Je),W=R(),J=T(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&gi[0]==="pointerdown",j=Xo(a),gt=a.ownerDocument||mr,mt=[0,0,0],yt=[0,0,0],$t=0,lt=function(){return $t=Wo()},_t=function(Nt,te){return(F.event=Nt)&&u&&~u.indexOf(Nt.target)||te&&Q&&Nt.pointerType!=="touch"||q&&q(Nt,te)},kt=function(){F._vx.reset(),F._vy.reset(),Vt.pause(),f&&f(F)},zt=function(){var Nt=F.deltaX=Pf(mt),te=F.deltaY=Pf(yt),Tt=Math.abs(Nt)>=i,Zt=Math.abs(te)>=i;P&&(Tt||Zt)&&P(F,Nt,te,mt,yt),Tt&&(A&&F.deltaX>0&&A(F),b&&F.deltaX<0&&b(F),M&&M(F),I&&F.deltaX<0!=ct<0&&I(F),ct=F.deltaX,mt[0]=mt[1]=mt[2]=0),Zt&&(C&&F.deltaY>0&&C(F),E&&F.deltaY<0&&E(F),x&&x(F),B&&F.deltaY<0!=Ft<0&&B(F),Ft=F.deltaY,yt[0]=yt[1]=yt[2]=0),(tt||rt)&&(V&&V(F),rt&&(S(F),rt=!1),tt=!1),At&&!(At=!1)&&Rt&&Rt(F),D&&(ht(F),D=!1),Ut=0},Pt=function(Nt,te,Tt){mt[Tt]+=Nt,yt[Tt]+=te,F._vx.update(Nt),F._vy.update(te),c?Ut||(Ut=requestAnimationFrame(zt)):zt()},Qt=function(Nt,te){Et&&!st&&(F.axis=st=Math.abs(Nt)>Math.abs(te)?"x":"y",At=!0),st!=="y"&&(mt[2]+=Nt,F._vx.update(Nt,!0)),st!=="x"&&(yt[2]+=te,F._vy.update(te,!0)),c?Ut||(Ut=requestAnimationFrame(zt)):zt()},Wt=function(Nt){if(!_t(Nt,1)){Nt=So(Nt,h);var te=Nt.clientX,Tt=Nt.clientY,Zt=te-F.x,Ot=Tt-F.y,qt=F.isDragging;F.x=te,F.y=Tt,(qt||Math.abs(F.startX-te)>=s||Math.abs(F.startY-Tt)>=s)&&(S&&(rt=!0),qt||(F.isDragging=!0),Qt(Zt,Ot),qt||m&&m(F))}},ce=F.onPress=function(Ct){_t(Ct,1)||Ct&&Ct.button||(F.axis=st=null,Vt.pause(),F.isPressed=!0,Ct=So(Ct),ct=Ft=0,F.startX=F.x=Ct.clientX,F.startY=F.y=Ct.clientY,F._vx.reset(),F._vy.reset(),Sn(G?a:gt,gi[1],Wt,bt,!0),F.deltaX=F.deltaY=0,y&&y(F))},U=F.onRelease=function(Ct){if(!_t(Ct,1)){Mn(G?a:gt,gi[1],Wt,!0);var Nt=!isNaN(F.y-F.startY),te=F.isDragging,Tt=te&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Zt=So(Ct);!Tt&&Nt&&(F._vx.reset(),F._vy.reset(),h&&et&&hn.delayedCall(.08,function(){if(Wo()-$t>300&&!Ct.defaultPrevented){if(Ct.target.click)Ct.target.click();else if(gt.createEvent){var Ot=gt.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,Kn,1,Zt.screenX,Zt.screenY,Zt.clientX,Zt.clientY,!1,!1,!1,!1,0,null),Ct.target.dispatchEvent(Ot)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,f&&te&&!G&&Vt.restart(!0),p&&te&&p(F),v&&v(F,Tt)}},xt=function(Nt){return Nt.touches&&Nt.touches.length>1&&(F.isGesturing=!0)&&ot(Nt,F.isDragging)},Z=function(){return(F.isGesturing=!1)||L(F)},nt=function(Nt){if(!_t(Nt)){var te=R(),Tt=T();Pt((te-W)*K,(Tt-J)*K,1),W=te,J=Tt,f&&Vt.restart(!0)}},vt=function(Nt){if(!_t(Nt)){Nt=So(Nt,h),ht&&(D=!0);var te=(Nt.deltaMode===1?l:Nt.deltaMode===2?Kn.innerHeight:1)*_;Pt(Nt.deltaX*te,Nt.deltaY*te,0),f&&!G&&Vt.restart(!0)}},Mt=function(Nt){if(!_t(Nt)){var te=Nt.clientX,Tt=Nt.clientY,Zt=te-F.x,Ot=Tt-F.y;F.x=te,F.y=Tt,tt=!0,f&&Vt.restart(!0),(Zt||Ot)&&Qt(Zt,Ot)}},Xt=function(Nt){F.event=Nt,H(F)},fe=function(Nt){F.event=Nt,$(F)},Fe=function(Nt){return _t(Nt)||So(Nt,h)&&z(F)};Vt=F._dc=hn.delayedCall(d||.25,kt).pause(),F.deltaX=F.deltaY=0,F._vx=mh(0,50,!0),F._vy=mh(0,50,!0),F.scrollX=R,F.scrollY=T,F.isDragging=F.isGesturing=F.isPressed=!1,xm(this),F.enable=function(Ct){return F.isEnabled||(Sn(j?gt:a,"scroll",ph),o.indexOf("scroll")>=0&&Sn(j?gt:a,"scroll",nt,bt,ft),o.indexOf("wheel")>=0&&Sn(a,"wheel",vt,bt,ft),(o.indexOf("touch")>=0&&gm||o.indexOf("pointer")>=0)&&(Sn(a,gi[0],ce,bt,ft),Sn(gt,gi[2],U),Sn(gt,gi[3],U),et&&Sn(a,"click",lt,!0,!0),z&&Sn(a,"click",Fe),ot&&Sn(gt,"gesturestart",xt),L&&Sn(gt,"gestureend",Z),H&&Sn(a,Br+"enter",Xt),$&&Sn(a,Br+"leave",fe),V&&Sn(a,Br+"move",Mt)),F.isEnabled=!0,Ct&&Ct.type&&ce(Ct),it&&it(F)),F},F.disable=function(){F.isEnabled&&(zs.filter(function(Ct){return Ct!==F&&Xo(Ct.target)}).length||Mn(j?gt:a,"scroll",ph),F.isPressed&&(F._vx.reset(),F._vy.reset(),Mn(G?a:gt,gi[1],Wt,!0)),Mn(j?gt:a,"scroll",nt,ft),Mn(a,"wheel",vt,ft),Mn(a,gi[0],ce,ft),Mn(gt,gi[2],U),Mn(gt,gi[3],U),Mn(a,"click",lt,!0),Mn(a,"click",Fe),Mn(gt,"gesturestart",xt),Mn(gt,"gestureend",Z),Mn(a,Br+"enter",Xt),Mn(a,Br+"leave",fe),Mn(a,Br+"move",Mt),F.isEnabled=F.isPressed=F.isDragging=!1,at&&at(F))},F.kill=F.revert=function(){F.disable();var Ct=zs.indexOf(F);Ct>=0&&zs.splice(Ct,1),qi===F&&(qi=0)},zs.push(F),G&&Xo(a)&&(qi=F),F.enable(g)},_0(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ge.version="3.12.5";Ge.create=function(r){return new Ge(r)};Ge.register=Em;Ge.getAll=function(){return zs.slice()};Ge.getById=function(r){return zs.filter(function(t){return t.vars.id===r})[0]};ym()&&hn.registerPlugin(Ge);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lt,Us,ae,Ie,vi,Re,Tm,Ul,ca,Yo,Io,Ea,dn,ql,_h,wn,Df,Lf,Ns,bm,cc,wm,bn,gh,Am,Cm,cr,vh,Du,$s,Lu,Nl,xh,hc,Ta=1,pn=Date.now,uc=pn(),ui=0,Uo=0,If=function(t,e,n){var i=qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Uf=function(t,e){return e&&(!qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},v0=function r(){return Uo&&requestAnimationFrame(r)},Nf=function(){return ql=1},Of=function(){return ql=0},Ti=function(t){return t},No=function(t){return Math.round(t*1e5)/1e5||0},Rm=function(){return typeof window!="undefined"},Pm=function(){return Lt||Rm()&&(Lt=window.gsap)&&Lt.registerPlugin&&Lt},rs=function(t){return!!~Tm.indexOf(t)},Dm=function(t){return(t==="Height"?Lu:ae["inner"+t])||vi["client"+t]||Re["client"+t]},Lm=function(t){return yr(t,"getBoundingClientRect")||(rs(t)?function(){return vl.width=ae.innerWidth,vl.height=Lu,vl}:function(){return Yi(t)})},x0=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=yr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Dm(s):t["client"+s])||0}},y0=function(t,e){return!e||~Ii.indexOf(t)?Lm(t):function(){return vl}},Ri=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=yr(t,n))?o()-Lm(t)()[s]:rs(t)?(vi[n]||Re[n])-Dm(i):t[n]-t["offset"+i])},ba=function(t,e){for(var n=0;n<Ns.length;n+=3)(!e||~e.indexOf(Ns[n+1]))&&t(Ns[n],Ns[n+1],Ns[n+2])},qn=function(t){return typeof t=="string"},Dn=function(t){return typeof t=="function"},Oo=function(t){return typeof t=="number"},zr=function(t){return typeof t=="object"},Eo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},fc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},gs=Math.abs,Im="left",Um="top",Iu="right",Uu="bottom",jr="width",Jr="height",qo="Right",$o="Left",Zo="Top",Ko="Bottom",Ye="padding",si="margin",oo="Width",Nu="Height",je="px",oi=function(t){return ae.getComputedStyle(t)},M0=function(t){var e=oi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ff=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Yi=function(t,e){var n=e&&oi(t)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&Lt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ol=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Nm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},S0=function(t){return function(e){return Lt.utils.snap(Nm(t),e)}},Ou=function(t){var e=Lt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},E0=function(t){return function(e,n){return Ou(Nm(t))(e,n.direction)}},wa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},rn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},nn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Aa=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Bf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ca={toggleActions:"play",anticipatePin:0},Fl={top:0,left:0,center:.5,bottom:1,right:1},pl=function(t,e){if(qn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Fl?Fl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ra=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,f=s.fontSize,d=s.indent,u=s.fontWeight,_=Ie.createElement("div"),g=rs(n)||yr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Re:n,S=t.indexOf("start")!==-1,y=S?c:h,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Je?Iu:Uu)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=v,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],ml(_,0,i,S),_},ml=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+oo]=1,s["border"+a+oo]=0,s[n.p]=e+"px",Lt.set(t,s)},se=[],yh={},ha,zf=function(){return pn()-ui>34&&(ha||(ha=requestAnimationFrame(Zi)))},vs=function(){(!bn||!bn.isPressed||bn.startX>Re.clientWidth)&&(oe.cache++,bn?ha||(ha=requestAnimationFrame(Zi)):Zi(),ui||os("scrollStart"),ui=pn())},dc=function(){Cm=ae.innerWidth,Am=ae.innerHeight},Fo=function(){oe.cache++,!dn&&!wm&&!Ie.fullscreenElement&&!Ie.webkitFullscreenElement&&(!gh||Cm!==ae.innerWidth||Math.abs(ae.innerHeight-Am)>ae.innerHeight*.25)&&Ul.restart(!0)},ss={},T0=[],Om=function r(){return nn(jt,"scrollEnd",r)||Wr(!0)},os=function(t){return ss[t]&&ss[t].map(function(e){return e()})||T0},Yn=[],Fm=function(t){for(var e=0;e<Yn.length;e+=5)(!t||Yn[e+4]&&Yn[e+4].query===t)&&(Yn[e].style.cssText=Yn[e+1],Yn[e].getBBox&&Yn[e].setAttribute("transform",Yn[e+2]||""),Yn[e+3].uncache=1)},Fu=function(t,e){var n;for(wn=0;wn<se.length;wn++)n=se[wn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Nl=!0,e&&Fm(e),e||os("revert")},Bm=function(t,e){oe.cache++,(e||!An)&&oe.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),qn(t)&&(ae.history.scrollRestoration=Du=t)},An,Qr=0,kf,b0=function(){if(kf!==Qr){var t=kf=Qr;requestAnimationFrame(function(){return t===Qr&&Wr(!0)})}},zm=function(){Re.appendChild($s),Lu=!bn&&$s.offsetHeight||ae.innerHeight,Re.removeChild($s)},Hf=function(t){return ca(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Wr=function(t,e){if(ui&&!t&&!Nl){rn(jt,"scrollEnd",Om);return}zm(),An=jt.isRefreshing=!0,oe.forEach(function(i){return Dn(i)&&++i.cacheID&&(i.rec=i())});var n=os("refreshInit");bm&&jt.sort(),e||Fu(),oe.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),se.slice(0).forEach(function(i){return i.refresh()}),Nl=!1,se.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),xh=1,Hf(!0),se.forEach(function(i){var s=Ri(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Hf(!1),xh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bm(Du,1),Ul.pause(),Qr++,An=2,Zi(2),se.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),An=jt.isRefreshing=!1,os("refresh")},Mh=0,_l=1,jo,Zi=function(t){if(t===2||!An&&!Nl){jt.isUpdating=!0,jo&&jo.update(0);var e=se.length,n=pn(),i=n-uc>=50,s=e&&se[0].scroll();if(_l=Mh>s?-1:1,An||(Mh=s),i&&(ui&&!ql&&n-ui>200&&(ui=0,os("scrollEnd")),Io=uc,uc=n),_l<0){for(wn=e;wn-- >0;)se[wn]&&se[wn].update(0,i);_l=1}else for(wn=0;wn<e;wn++)se[wn]&&se[wn].update(0,i);jt.isUpdating=!1}ha=0},Sh=[Im,Um,Uu,Iu,si+Ko,si+qo,si+Zo,si+$o,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gl=Sh.concat([jr,Jr,"boxSizing","max"+oo,"max"+Nu,"position",si,Ye,Ye+Zo,Ye+qo,Ye+Ko,Ye+$o]),w0=function(t,e,n){Zs(n);var i=t._gsap;if(i.spacerIsNative)Zs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},pc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Sh.length,o=e.style,a=t.style,l;s--;)l=Sh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Uu]=a[Iu]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[jr]=Ol(t,Pn)+je,o[Jr]=Ol(t,Je)+je,o[Ye]=a[si]=a[Um]=a[Im]="0",Zs(i),a[jr]=a["max"+oo]=n[jr],a[Jr]=a["max"+Nu]=n[Jr],a[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},A0=/([A-Z])/g,Zs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Lt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(A0,"-$1").toLowerCase())}},Pa=function(t){for(var e=gl.length,n=t.style,i=[],s=0;s<e;s++)i.push(gl[s],n[gl[s]]);return i.t=t,i},C0=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},vl={left:0,top:0},Vf=function(t,e,n,i,s,o,a,l,c,h,f,d,u,_){Dn(t)&&(t=t(l)),qn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?pl("0"+t.substr(3),n):0));var g=u?u.time():0,m,p,S;if(u&&u.seek(0),isNaN(t)||(t=+t),Oo(t))u&&(t=Lt.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&ml(a,n,i,!0);else{Dn(e)&&(e=e(l));var y=(t||"0").split(" "),v,A,b,E;S=Un(e,l)||Re,v=Yi(S)||{},(!v||!v.left&&!v.top)&&oi(S).display==="none"&&(E=S.style.display,S.style.display="block",v=Yi(S),E?S.style.display=E:S.style.removeProperty("display")),A=pl(y[0],v[i.d]),b=pl(y[1]||"0",n),t=v[i.p]-c[i.p]-h+A+s-b,a&&ml(a,b,i,n-b<20||a._isStart&&b>20),n-=n-b}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var C=t+n,M=o._isStart;m="scroll"+i.d2,ml(o,C,i,M&&C>20||!M&&(f?Math.max(Re[m],vi[m]):o.parentNode[m])<=C+1),f&&(c=Yi(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+je))}return u&&S&&(m=Yi(S),u.seek(d),p=Yi(S),u._caScrollDist=m[i.p]-p[i.p],t=t/u._caScrollDist*d),u&&u.seek(g),u?t:Math.round(t)},R0=/(webkit|moz|length|cssText|inset)/i,Gf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Re){t._stOrig=s.cssText,a=oi(t);for(o in a)!+o&&!R0.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Lt.core.getCache(t).uncache=1,e.appendChild(t)}},km=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Da=function(t,e,n){var i={};i[e.p]="+="+n,Lt.set(t,i)},Wf=function(t,e){var n=br(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,f){var d=o.tween,u=l.onComplete,_={};c=c||n();var g=km(n,c,function(){d.kill(),o.tween=0});return f=h&&f||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&Zi()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=Lt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},rn(t,"wheel",n.wheelHandler),jt.isTouch&&rn(t,"touchmove",n.wheelHandler),s},jt=function(){function r(e,n){Us||r.register(Lt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Uo){this.update=this.refresh=this.kill=Ti;return}n=Ff(qn(n)||Oo(n)||n.nodeType?{trigger:n}:n,Ca);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,f=s.scrub,d=s.trigger,u=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,y=s.once,v=s.snap,A=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Pn:Je,P=!f&&f!==0,I=Un(n.scroller||ae),B=Lt.core.getCache(I),H=rs(I),$=("pinType"in n?n.pinType:yr(I,"pinType")||H&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=P&&n.toggleActions.split(" "),G="markers"in n?n.markers:Ca.markers,ot=H?0:parseFloat(oi(I)["border"+x.p2+oo])||0,L=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(L)},it=x0(I,H,x),at=y0(I,H),z=0,K=0,ft=0,et=br(I,x),Et,Rt,Ut,Vt,rt,tt,D,At,st,F,ct,Ft,bt,R,T,W,J,Q,j,gt,mt,yt,$t,lt,_t,kt,zt,Pt,Qt,Wt,ce,U,xt,Z,nt,vt,Mt,Xt,fe;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=I,L.scroll=E?E.time.bind(E):et,Vt=et(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(bm=1,n.refreshPriority===-9999&&(jo=L)),B.tweenScroll=B.tweenScroll||{top:Wf(I,Je),left:Wf(I,Pn)},L.tweenTo=Et=B.tweenScroll[x.p],L.scrubDuration=function(Tt){xt=Oo(Tt)&&Tt,xt?U?U.duration(Tt):U=Lt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xt,paused:!0,onComplete:function(){return p&&p(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),Wt=0,l||(l=i.vars.id)),v&&((!zr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Re.style&&Lt.set(H?[Re,vi]:I,{scrollBehavior:"auto"}),oe.forEach(function(Tt){return Dn(Tt)&&Tt.target===(H?Ie.scrollingElement||vi:I)&&(Tt.smooth=!1)}),Ut=Dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?S0(i):v.snapTo==="labelsDirectional"?E0(i):v.directional!==!1?function(Tt,Zt){return Ou(v.snapTo)(Tt,pn()-K<500?0:Zt.direction)}:Lt.utils.snap(v.snapTo),Z=v.duration||{min:.1,max:2},Z=zr(Z)?Yo(Z.min,Z.max):Yo(Z,Z),nt=Lt.delayedCall(v.delay||xt/2||.1,function(){var Tt=et(),Zt=pn()-K<500,Ot=Et.tween;if((Zt||Math.abs(L.getVelocity())<10)&&!Ot&&!ql&&z!==Tt){var qt=(Tt-tt)/R,He=i&&!P?i.totalProgress():qt,re=Zt?0:(He-ce)/(pn()-Io)*1e3||0,be=Lt.utils.clamp(-qt,1-qt,gs(re/2)*re/.185),Ze=qt+(v.inertia===!1?0:be),Me,Se,me=v,Vn=me.onStart,Ae=me.onInterrupt,yn=me.onComplete;if(Me=Ut(Ze,L),Oo(Me)||(Me=Ze),Se=Math.round(tt+Me*R),Tt<=D&&Tt>=tt&&Se!==Tt){if(Ot&&!Ot._initted&&Ot.data<=gs(Se-Tt))return;v.inertia===!1&&(be=Me-qt),Et(Se,{duration:Z(gs(Math.max(gs(Ze-He),gs(Me-He))*.185/re/.05||0)),ease:v.ease||"power3",data:gs(Se-Tt),onInterrupt:function(){return nt.restart(!0)&&Ae&&Ae(L)},onComplete:function(){L.update(),z=et(),i&&(U?U.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Wt=ce=i&&!P?i.totalProgress():L.progress,S&&S(L),yn&&yn(L)}},Tt,be*R,Se-Tt-be*R),Vn&&Vn(L,Et.tween)}}else L.isActive&&z!==Tt&&nt.restart(!0)}).pause()),l&&(yh[l]=L),d=L.trigger=Un(d||u!==!0&&u),fe=d&&d._gsap&&d._gsap.stRevert,fe&&(fe=fe(L)),u=u===!0?d:Un(u),qn(a)&&(a={targets:d,className:a}),u&&(_===!1||_===si||(_=!_&&u.parentNode&&u.parentNode.style&&oi(u.parentNode).display==="flex"?!1:Ye),L.pin=u,Rt=Lt.core.getCache(u),Rt.spacer?T=Rt.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Rt.spacerIsNative=!!b,b&&(Rt.spacerState=Pa(b))),Rt.spacer=Q=b||Ie.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Rt.pinState=T=Pa(u)),n.force3D!==!1&&Lt.set(u,{force3D:!0}),L.spacer=Q=Rt.spacer,Qt=oi(u),lt=Qt[_+x.os2],gt=Lt.getProperty(u),mt=Lt.quickSetter(u,x.a,je),pc(u,Q,Qt),J=Pa(u)),G){Ft=zr(G)?Ff(G,Bf):Bf,F=Ra("scroller-start",l,I,x,Ft,0),ct=Ra("scroller-end",l,I,x,Ft,0,F),j=F["offset"+x.op.d2];var Fe=Un(yr(I,"content")||I);At=this.markerStart=Ra("start",l,Fe,x,Ft,j,0,E),st=this.markerEnd=Ra("end",l,Fe,x,Ft,j,0,E),E&&(Xt=Lt.quickSetter([At,st],x.a,je)),!$&&!(Ii.length&&yr(I,"fixedMarkers")===!0)&&(M0(H?Re:I),Lt.set([F,ct],{force3D:!0}),kt=Lt.quickSetter(F,x.a,je),Pt=Lt.quickSetter(ct,x.a,je))}if(E){var Ct=E.vars.onUpdate,Nt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){L.update(0,0,1),Ct&&Ct.apply(E,Nt||[])})}if(L.previous=function(){return se[se.indexOf(L)-1]},L.next=function(){return se[se.indexOf(L)+1]},L.revert=function(Tt,Zt){if(!Zt)return L.kill(!0);var Ot=Tt!==!1||!L.enabled,qt=dn;Ot!==L.isReverted&&(Ot&&(vt=Math.max(et(),L.scroll.rec||0),ft=L.progress,Mt=i&&i.progress()),At&&[At,st,F,ct].forEach(function(He){return He.style.display=Ot?"none":"block"}),Ot&&(dn=L,L.update(Ot)),u&&(!A||!L.isActive)&&(Ot?w0(u,Q,T):pc(u,Q,oi(u),_t)),Ot||L.update(Ot),dn=qt,L.isReverted=Ot)},L.refresh=function(Tt,Zt,Ot,qt){if(!((dn||!L.enabled)&&!Zt)){if(u&&Tt&&ui){rn(r,"scrollEnd",Om);return}!An&&ht&&ht(L),dn=L,Et.tween&&!Ot&&(Et.tween.kill(),Et.tween=0),U&&U.pause(),g&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var He=it(),re=at(),be=E?E.duration():Ri(I,x),Ze=R<=.01,Me=0,Se=qt||0,me=zr(Ot)?Ot.end:n.end,Vn=n.endTrigger||d,Ae=zr(Ot)?Ot.start:n.start||(n.start===0||!d?0:u?"0 0":"0 100%"),yn=L.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,L),w=d&&Math.max(0,se.indexOf(L))||0,O=w,X,Y,k,ut,dt,St,Dt,Yt,Kt,It,Jt,de,_e;for(G&&zr(Ot)&&(de=Lt.getProperty(F,x.p),_e=Lt.getProperty(ct,x.p));O--;)St=se[O],St.end||St.refresh(0,1)||(dn=L),Dt=St.pin,Dt&&(Dt===d||Dt===u||Dt===yn)&&!St.isReverted&&(It||(It=[]),It.unshift(St),St.revert(!0,!0)),St!==se[O]&&(w--,O--);for(Dn(Ae)&&(Ae=Ae(L)),Ae=If(Ae,"start",L),tt=Vf(Ae,d,He,x,et(),At,F,L,re,ot,$,be,E,L._startClamp&&"_startClamp")||(u?-.001:0),Dn(me)&&(me=me(L)),qn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(qn(Ae)?Ae.split(" ")[0]:"")+me:(Me=pl(me.substr(2),He),me=qn(Ae)?Ae:(E?Lt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,tt):tt)+Me,Vn=d)),me=If(me,"end",L),D=Math.max(tt,Vf(me||(Vn?"100% 0":be),Vn,He,x,et()+Me,st,ct,L,re,ot,$,be,E,L._endClamp&&"_endClamp"))||-.001,Me=0,O=w;O--;)St=se[O],Dt=St.pin,Dt&&St.start-St._pinPush<=tt&&!E&&St.end>0&&(X=St.end-(L._startClamp?Math.max(0,St.start):St.start),(Dt===d&&St.start-St._pinPush<tt||Dt===yn)&&isNaN(Ae)&&(Me+=X*(1-St.progress)),Dt===u&&(Se+=X));if(tt+=Me,D+=Me,L._startClamp&&(L._startClamp+=Me),L._endClamp&&!An&&(L._endClamp=D||-.001,D=Math.min(D,Ri(I,x))),R=D-tt||(tt-=.01)&&.001,Ze&&(ft=Lt.utils.clamp(0,1,Lt.utils.normalize(tt,D,vt))),L._pinPush=Se,At&&Me&&(X={},X[x.a]="+="+Me,yn&&(X[x.p]="-="+et()),Lt.set([At,st],X)),u&&!(xh&&L.end>=Ri(I,x)))X=oi(u),ut=x===Je,k=et(),yt=parseFloat(gt(x.a))+Se,!be&&D>1&&(Jt=(H?Ie.scrollingElement||vi:I).style,Jt={style:Jt,value:Jt["overflow"+x.a.toUpperCase()]},H&&oi(Re)["overflow"+x.a.toUpperCase()]!=="scroll"&&(Jt.style["overflow"+x.a.toUpperCase()]="scroll")),pc(u,Q,X),J=Pa(u),Y=Yi(u,!0),Yt=$&&br(I,ut?Pn:Je)(),_?(_t=[_+x.os2,R+Se+je],_t.t=Q,O=_===Ye?Ol(u,x)+R+Se:0,O&&(_t.push(x.d,O+je),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+je)),Zs(_t),yn&&se.forEach(function(We){We.pin===yn&&We.vars.pinSpacing!==!1&&(We._subPinOffset=!0)}),$&&et(vt)):(O=Ol(u,x),O&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=O+je)),$&&(dt={top:Y.top+(ut?k-tt:Yt)+je,left:Y.left+(ut?Yt:k-tt)+je,boxSizing:"border-box",position:"fixed"},dt[jr]=dt["max"+oo]=Math.ceil(Y.width)+je,dt[Jr]=dt["max"+Nu]=Math.ceil(Y.height)+je,dt[si]=dt[si+Zo]=dt[si+qo]=dt[si+Ko]=dt[si+$o]="0",dt[Ye]=X[Ye],dt[Ye+Zo]=X[Ye+Zo],dt[Ye+qo]=X[Ye+qo],dt[Ye+Ko]=X[Ye+Ko],dt[Ye+$o]=X[Ye+$o],W=C0(T,dt,A),An&&et(0)),i?(Kt=i._initted,cc(1),i.render(i.duration(),!0,!0),$t=gt(x.a)-yt+R+Se,zt=Math.abs(R-$t)>1,$&&zt&&W.splice(W.length-2,2),i.render(0,!0,!0),Kt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),cc(0)):$t=R,Jt&&(Jt.value?Jt.style["overflow"+x.a.toUpperCase()]=Jt.value:Jt.style.removeProperty("overflow-"+x.a));else if(d&&et()&&!E)for(Y=d.parentNode;Y&&Y!==Re;)Y._pinOffset&&(tt-=Y._pinOffset,D-=Y._pinOffset),Y=Y.parentNode;It&&It.forEach(function(We){return We.revert(!1,!0)}),L.start=tt,L.end=D,Vt=rt=An?vt:et(),!E&&!An&&(Vt<vt&&et(vt),L.scroll.rec=0),L.revert(!1,!0),K=pn(),nt&&(z=-1,nt.restart(!0)),dn=0,i&&P&&(i._initted||Mt)&&i.progress()!==Mt&&i.progress(Mt||0,!0).render(i.time(),!0,!0),(Ze||ft!==L.progress||E||g)&&(i&&!P&&i.totalProgress(E&&tt<-.001&&!ft?Lt.utils.normalize(tt,D,0):ft,!0),L.progress=Ze||(Vt-tt)/R===ft?0:ft),u&&_&&(Q._pinOffset=Math.round(L.progress*$t)),U&&U.invalidate(),isNaN(de)||(de-=Lt.getProperty(F,x.p),_e-=Lt.getProperty(ct,x.p),Da(F,x,de),Da(At,x,de-(qt||0)),Da(ct,x,_e),Da(st,x,_e-(qt||0))),Ze&&!An&&L.update(),h&&!An&&!bt&&(bt=!0,h(L),bt=!1)}},L.getVelocity=function(){return(et()-rt)/(pn()-Io)*1e3||0},L.endAnimation=function(){Eo(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?P||Eo(i,L.direction<0,1):Eo(i,i.reversed()))},L.labelToScroll=function(Tt){return i&&i.labels&&(tt||L.refresh()||tt)+i.labels[Tt]/i.duration()*R||0},L.getTrailing=function(Tt){var Zt=se.indexOf(L),Ot=L.direction>0?se.slice(0,Zt).reverse():se.slice(Zt+1);return(qn(Tt)?Ot.filter(function(qt){return qt.vars.preventOverlaps===Tt}):Ot).filter(function(qt){return L.direction>0?qt.end<=tt:qt.start>=D})},L.update=function(Tt,Zt,Ot){if(!(E&&!Ot&&!Tt)){var qt=An===!0?vt:L.scroll(),He=Tt?0:(qt-tt)/R,re=He<0?0:He>1?1:He||0,be=L.progress,Ze,Me,Se,me,Vn,Ae,yn,w;if(Zt&&(rt=Vt,Vt=E?et():qt,v&&(ce=Wt,Wt=i&&!P?i.totalProgress():re)),m&&u&&!dn&&!Ta&&ui&&(!re&&tt<qt+(qt-rt)/(pn()-Io)*m?re=1e-4:re===1&&D>qt+(qt-rt)/(pn()-Io)*m&&(re=.9999)),re!==be&&L.enabled){if(Ze=L.isActive=!!re&&re<1,Me=!!be&&be<1,Ae=Ze!==Me,Vn=Ae||!!re!=!!be,L.direction=re>be?1:-1,L.progress=re,Vn&&!dn&&(Se=re&&!be?0:re===1?1:be===1?2:3,P&&(me=!Ae&&q[Se+1]!=="none"&&q[Se+1]||q[Se],w=i&&(me==="complete"||me==="reset"||me in i))),M&&(Ae||w)&&(w||f||!i)&&(Dn(M)?M(L):L.getTrailing(M).forEach(function(k){return k.endAnimation()})),P||(U&&!dn&&!Ta?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",re,i._tTime/i._tDur):(U.vars.totalProgress=re,U.invalidate().restart())):i&&i.totalProgress(re,!!(dn&&(K||Tt)))),u){if(Tt&&_&&(Q.style[_+x.os2]=lt),!$)mt(No(yt+$t*re));else if(Vn){if(yn=!Tt&&re>be&&D+1>qt&&qt+1>=Ri(I,x),A)if(!Tt&&(Ze||yn)){var O=Yi(u,!0),X=qt-tt;Gf(u,Re,O.top+(x===Je?X:0)+je,O.left+(x===Je?0:X)+je)}else Gf(u,Q);Zs(Ze||yn?W:J),zt&&re<1&&Ze||mt(yt+(re===1&&!yn?$t:0))}}v&&!Et.tween&&!dn&&!Ta&&nt.restart(!0),a&&(Ae||y&&re&&(re<1||!hc))&&ca(a.targets).forEach(function(k){return k.classList[Ze||y?"add":"remove"](a.className)}),o&&!P&&!Tt&&o(L),Vn&&!dn?(P&&(w&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),o&&o(L)),(Ae||!hc)&&(c&&Ae&&fc(L,c),V[Se]&&fc(L,V[Se]),y&&(re===1?L.kill(!1,1):V[Se]=0),Ae||(Se=re===1?1:3,V[Se]&&fc(L,V[Se]))),C&&!Ze&&Math.abs(L.getVelocity())>(Oo(C)?C:2500)&&(Eo(L.callbackAnimation),U?U.progress(1):Eo(i,me==="reverse"?1:!re,1))):P&&o&&!dn&&o(L)}if(Pt){var Y=E?qt/E.duration()*(E._caScrollDist||0):qt;kt(Y+(F._isFlipped?1:0)),Pt(Y)}Xt&&Xt(-qt/E.duration()*(E._caScrollDist||0))}},L.enable=function(Tt,Zt){L.enabled||(L.enabled=!0,rn(I,"resize",Fo),H||rn(I,"scroll",vs),ht&&rn(r,"refreshInit",ht),Tt!==!1&&(L.progress=ft=0,Vt=rt=z=et()),Zt!==!1&&L.refresh())},L.getTween=function(Tt){return Tt&&Et?Et.tween:U},L.setPositions=function(Tt,Zt,Ot,qt){if(E){var He=E.scrollTrigger,re=E.duration(),be=He.end-He.start;Tt=He.start+be*Tt/re,Zt=He.start+be*Zt/re}L.refresh(!1,!1,{start:Uf(Tt,Ot&&!!L._startClamp),end:Uf(Zt,Ot&&!!L._endClamp)},qt),L.update()},L.adjustPinSpacing=function(Tt){if(_t&&Tt){var Zt=_t.indexOf(x.d)+1;_t[Zt]=parseFloat(_t[Zt])+Tt+je,_t[1]=parseFloat(_t[1])+Tt+je,Zs(_t)}},L.disable=function(Tt,Zt){if(L.enabled&&(Tt!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,Zt||U&&U.pause(),vt=0,Rt&&(Rt.uncache=1),ht&&nn(r,"refreshInit",ht),nt&&(nt.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!H)){for(var Ot=se.length;Ot--;)if(se[Ot].scroller===I&&se[Ot]!==L)return;nn(I,"resize",Fo),H||nn(I,"scroll",vs)}},L.kill=function(Tt,Zt){L.disable(Tt,Zt),U&&!Zt&&U.kill(),l&&delete yh[l];var Ot=se.indexOf(L);Ot>=0&&se.splice(Ot,1),Ot===wn&&_l>0&&wn--,Ot=0,se.forEach(function(qt){return qt.scroller===L.scroller&&(Ot=1)}),Ot||An||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Tt&&i.revert({kill:!1}),Zt||i.kill()),At&&[At,st,F,ct].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),jo===L&&(jo=0),u&&(Rt&&(Rt.uncache=1),Ot=0,se.forEach(function(qt){return qt.pin===u&&Ot++}),Ot||(Rt.spacer=0)),n.onKill&&n.onKill(L)},se.push(L),L.enable(!1,!1),fe&&fe(L),i&&i.add&&!R){var te=L.update;L.update=function(){L.update=te,tt||D||L.refresh()},Lt.delayedCall(.01,L.update),R=.01,tt=D=0}else L.refresh();u&&b0()},r.register=function(n){return Us||(Lt=n||Pm(),Rm()&&window.document&&r.enable(),Us=Uo),Us},r.defaults=function(n){if(n)for(var i in n)Ca[i]=n[i];return Ca},r.disable=function(n,i){Uo=0,se.forEach(function(o){return o[i?"kill":"disable"](n)}),nn(ae,"wheel",vs),nn(Ie,"scroll",vs),clearInterval(Ea),nn(Ie,"touchcancel",Ti),nn(Re,"touchstart",Ti),wa(nn,Ie,"pointerdown,touchstart,mousedown",Nf),wa(nn,Ie,"pointerup,touchend,mouseup",Of),Ul.kill(),ba(nn);for(var s=0;s<oe.length;s+=3)Aa(nn,oe[s],oe[s+1]),Aa(nn,oe[s],oe[s+2])},r.enable=function(){if(ae=window,Ie=document,vi=Ie.documentElement,Re=Ie.body,Lt&&(ca=Lt.utils.toArray,Yo=Lt.utils.clamp,vh=Lt.core.context||Ti,cc=Lt.core.suppressOverwrites||Ti,Du=ae.history.scrollRestoration||"auto",Mh=ae.pageYOffset,Lt.core.globals("ScrollTrigger",r),Re)){Uo=1,$s=document.createElement("div"),$s.style.height="100vh",$s.style.position="absolute",zm(),v0(),Ge.register(Lt),r.isTouch=Ge.isTouch,cr=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gh=Ge.isTouch===1,rn(ae,"wheel",vs),Tm=[ae,Ie,vi,Re],Lt.matchMedia?(r.matchMedia=function(l){var c=Lt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Lt.addEventListener("matchMediaInit",function(){return Fu()}),Lt.addEventListener("matchMediaRevert",function(){return Fm()}),Lt.addEventListener("matchMedia",function(){Wr(0,1),os("matchMedia")}),Lt.matchMedia("(orientation: portrait)",function(){return dc(),dc})):console.warn("Requires GSAP 3.11.0 or later"),dc(),rn(Ie,"scroll",vs);var n=Re.style,i=n.borderTopStyle,s=Lt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Yi(Re),Je.m=Math.round(o.top+Je.sc())||0,Pn.m=Math.round(o.left+Pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ea=setInterval(zf,250),Lt.delayedCall(.5,function(){return Ta=0}),rn(Ie,"touchcancel",Ti),rn(Re,"touchstart",Ti),wa(rn,Ie,"pointerdown,touchstart,mousedown",Nf),wa(rn,Ie,"pointerup,touchend,mouseup",Of),_h=Lt.utils.checkPrefix("transform"),gl.push(_h),Us=pn(),Ul=Lt.delayedCall(.2,Wr).pause(),Ns=[Ie,"visibilitychange",function(){var l=ae.innerWidth,c=ae.innerHeight;Ie.hidden?(Df=l,Lf=c):(Df!==l||Lf!==c)&&Fo()},Ie,"DOMContentLoaded",Wr,ae,"load",Wr,ae,"resize",Fo],ba(rn),se.forEach(function(l){return l.enable(0,1)}),a=0;a<oe.length;a+=3)Aa(nn,oe[a],oe[a+1]),Aa(nn,oe[a],oe[a+2])}},r.config=function(n){"limitCallbacks"in n&&(hc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ea)||(Ea=i)&&setInterval(zf,i),"ignoreMobileResize"in n&&(gh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ba(nn)||ba(rn,n.autoRefreshEvents||"none"),wm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),o=oe.indexOf(s),a=rs(s);~o&&oe.splice(o,a?6:2),i&&(a?Ii.unshift(ae,i,Re,i,vi,i):Ii.unshift(s,i))},r.clearMatchMedia=function(n){se.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(qn(n)?Un(n):n).getBoundingClientRect(),a=o[s?jr:Jr]*i||0;return s?o.right-a>0&&o.left+a<ae.innerWidth:o.bottom-a>0&&o.top+a<ae.innerHeight},r.positionInViewport=function(n,i,s){qn(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[s?jr:Jr],l=i==null?a/2:i in Fl?Fl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ae.innerWidth:(o.top+l)/ae.innerHeight},r.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r}();jt.version="3.12.5";jt.saveStyles=function(r){return r?ca(r).forEach(function(t){if(t&&t.style){var e=Yn.indexOf(t);e>=0&&Yn.splice(e,5),Yn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Lt.core.getCache(t),vh())}}):Yn};jt.revert=function(r,t){return Fu(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?Fo():(Us||jt.register())&&Wr(!0)};jt.update=function(r){return++oe.cache&&Zi(r===!0?2:0)};jt.clearScrollMemory=Bm;jt.maxScroll=function(r,t){return Ri(r,t?Pn:Je)};jt.getScrollFunc=function(r,t){return br(Un(r),t?Pn:Je)};jt.getById=function(r){return yh[r]};jt.getAll=function(){return se.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!ui};jt.snapDirectional=Ou;jt.addEventListener=function(r,t){var e=ss[r]||(ss[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=ss[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var f=[],d=[],u=Lt.delayedCall(i,function(){h(f,d),f=[],d=[]}).pause();return function(_){f.length||u.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Dn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Dn(s)&&(s=s(),rn(jt,"refresh",function(){return s=t.batchMax()})),ca(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Xf=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},mc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===vi&&r(Re,e)},La={auto:1,scroll:1},P0=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Lt.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Re&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(La[(l=oi(s)).overflowY]||La[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!rs(s)&&(La[(l=oi(s)).overflowY]||La[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Hm=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&P0,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&rn(Ie,Ge.eventTypes[0],qf,!1,!0)},onDisable:function(){return nn(Ie,Ge.eventTypes[0],qf,!0)}})},D0=/(input|label|select|textarea)/i,Yf,qf=function(t){var e=D0.test(t.target.tagName);(e||Yf)&&(t._gsapAllow=!0,Yf=e)},L0=function(t){zr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Un(t.target)||vi,h=Lt.core.globals().ScrollSmoother,f=h&&h.get(),d=cr&&(t.content&&Un(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=br(c,Je),_=br(c,Pn),g=1,m=(Ge.isTouch&&ae.visualViewport?ae.visualViewport.scale*ae.visualViewport.width:ae.outerWidth)/ae.innerWidth,p=0,S=Dn(i)?function(){return i(a)}:function(){return i||2.8},y,v,A=Hm(c,t.type,!0,s),b=function(){return v=!1},E=Ti,C=Ti,M=function(){l=Ri(c,Je),C=Yo(cr?1:0,l),n&&(E=Yo(0,Ri(c,Pn))),y=Qr},x=function(){d._gsap.y=No(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(v){requestAnimationFrame(b);var G=No(a.deltaY/2),ot=C(u.v-G);if(d&&ot!==u.v+u.offset){u.offset=ot-u.v;var L=No((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",u.cacheID=oe.cache,Zi()}return!0}u.offset&&x(),v=!0},I,B,H,$,V=function(){M(),I.isActive()&&I.vars.scrollY>l&&(u()>l?I.progress(1)&&u(l):I.resetTo("scrollY",l))};return d&&Lt.set(d,{y:"+=0"}),t.ignoreCheck=function(q){return cr&&q.type==="touchmove"&&P()||g>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},t.onPress=function(){v=!1;var q=g;g=No((ae.visualViewport&&ae.visualViewport.scale||1)/m),I.pause(),q!==g&&mc(c,g>1.01?!0:n?!1:"x"),B=_(),H=u(),M(),y=Qr},t.onRelease=t.onGestureStart=function(q,G){if(u.offset&&x(),!G)$.restart(!0);else{oe.cache++;var ot=S(),L,ht;n&&(L=_(),ht=L+ot*.05*-q.velocityX/.227,ot*=Xf(_,L,ht,Ri(c,Pn)),I.vars.scrollX=E(ht)),L=u(),ht=L+ot*.05*-q.velocityY/.227,ot*=Xf(u,L,ht,Ri(c,Je)),I.vars.scrollY=C(ht),I.invalidate().duration(ot).play(.01),(cr&&I.vars.scrollY>=l||L>=l-1)&&Lt.to({},{onUpdate:V,duration:ot})}o&&o(q)},t.onWheel=function(){I._ts&&I.pause(),pn()-p>1e3&&(y=0,p=pn())},t.onChange=function(q,G,ot,L,ht){if(Qr!==y&&M(),G&&n&&_(E(L[2]===G?B+(q.startX-q.x):_()+G-L[1])),ot){u.offset&&x();var it=ht[2]===ot,at=it?H+q.startY-q.y:u()+ot-ht[1],z=C(at);it&&at!==z&&(H+=z-at),u(z)}(ot||G)&&Zi()},t.onEnable=function(){mc(c,n?!1:"x"),jt.addEventListener("refresh",V),rn(ae,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){mc(c,!0),nn(ae,"resize",V),jt.removeEventListener("refresh",V),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=cr,cr&&!u()&&u(1),cr&&Lt.ticker.add(Ti),$=a._dc,I=Lt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:km(u,u(),function(){return I.pause()})},onUpdate:Zi,onComplete:$.vars.onComplete}),a};jt.sort=function(r){return se.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new Ge(r)};jt.normalizeScroll=function(r){if(typeof r=="undefined")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var t=r instanceof Ge?r:L0(r);return bn&&bn.target===t.target&&bn.kill(),rs(t.target)&&(bn=t),t};jt.core={_getVelocityProp:mh,_inputObserver:Hm,_scrollers:oe,_proxies:Ii,bridge:{ss:function(){ui||os("scrollStart"),ui=pn()},ref:function(){return dn}}};Pm()&&Lt.registerPlugin(jt);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bu="170",Ks={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},I0=0,$f=1,U0=2,Vm=1,Gm=2,Gi=3,wr=0,kn=1,Ai=2,Mr=0,js=1,Zf=2,Kf=3,jf=4,N0=5,Hr=100,O0=101,F0=102,B0=103,z0=104,k0=200,H0=201,V0=202,G0=203,Eh=204,Th=205,W0=206,X0=207,Y0=208,q0=209,$0=210,Z0=211,K0=212,j0=213,J0=214,bh=0,wh=1,Ah=2,ao=3,Ch=4,Rh=5,Ph=6,Dh=7,Wm=0,Q0=1,tv=2,Sr=0,ev=1,nv=2,iv=3,Xm=4,rv=5,sv=6,ov=7,Ym=300,lo=301,co=302,Lh=303,Ih=304,$l=306,ua=1e3,Xr=1001,Uh=1002,Qn=1003,av=1004,Ia=1005,Pi=1006,_c=1007,Yr=1008,Qi=1009,qm=1010,$m=1011,fa=1012,zu=1013,as=1014,Di=1015,va=1016,ku=1017,Hu=1018,ho=1020,Zm=35902,Km=1021,jm=1022,xi=1023,Jm=1024,Qm=1025,Js=1026,uo=1027,Vu=1028,Gu=1029,t_=1030,Wu=1031,Xu=1033,xl=33776,yl=33777,Ml=33778,Sl=33779,Nh=35840,Oh=35841,Fh=35842,Bh=35843,zh=36196,kh=37492,Hh=37496,Vh=37808,Gh=37809,Wh=37810,Xh=37811,Yh=37812,qh=37813,$h=37814,Zh=37815,Kh=37816,jh=37817,Jh=37818,Qh=37819,tu=37820,eu=37821,El=36492,nu=36494,iu=36495,e_=36283,ru=36284,su=36285,ou=36286,lv=3200,cv=3201,n_=0,hv=1,ur="",Cn="srgb",mo="srgb-linear",Zl="linear",xe="srgb",xs=7680,Jf=519,uv=512,fv=513,dv=514,i_=515,pv=516,mv=517,_v=518,gv=519,Qf=35044,td="300 es",$i=2e3,Bl=2001;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const Qs=Math.PI/180,da=180/Math.PI;function ds(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function on(r,t,e){return Math.max(t,Math.min(e,r))}function Yu(r,t){return(r%t+t)%t}function vv(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function xv(r,t,e){return r!==t?(e-r)/(t-r):0}function Jo(r,t,e){return(1-e)*r+e*t}function yv(r,t,e,n){return Jo(r,t,1-Math.exp(-e*n))}function Mv(r,t=1){return t-Math.abs(Yu(r,t*2)-t)}function Sv(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Ev(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Tv(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bv(r,t){return r+Math.random()*(t-r)}function wv(r){return r*(.5-Math.random())}function Av(r){r!==void 0&&(ed=r);let t=ed+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cv(r){return r*Qs}function Rv(r){return r*da}function Pv(r){return(r&r-1)===0&&r!==0}function Dv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Lv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Iv(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),f=s((t-n)/2),d=o((t-n)/2),u=s((n-t)/2),_=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*f,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*f,a*c);break;case"ZXZ":r.set(l*f,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*u,a*c);break;case"YXY":r.set(l*u,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Os(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Hs={DEG2RAD:Qs,RAD2DEG:da,generateUUID:ds,clamp:on,euclideanModulo:Yu,mapLinear:vv,inverseLerp:xv,lerp:Jo,damp:yv,pingpong:Mv,smoothstep:Sv,smootherstep:Ev,randInt:Tv,randFloat:bv,randFloatSpread:wv,seededRandom:Av,degToRad:Cv,radToDeg:Rv,isPowerOfTwo:Pv,ceilPowerOfTwo:Dv,floorPowerOfTwo:Lv,setQuaternionFromProperEuler:Iv,normalize:En,denormalize:Os};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ee{constructor(t,e,n,i,s,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],u=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],y=i[4],v=i[7],A=i[2],b=i[5],E=i[8];return s[0]=o*g+a*S+l*A,s[3]=o*m+a*y+l*b,s[6]=o*p+a*v+l*E,s[1]=c*g+h*S+f*A,s[4]=c*m+h*y+f*b,s[7]=c*p+h*v+f*E,s[2]=d*g+u*S+_*A,s[5]=d*m+u*y+_*b,s[8]=d*p+u*v+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,d=a*l-h*s,u=c*s-o*l,_=e*f+n*d+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=u*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gc.makeScale(t,e)),this}rotate(t){return this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new ee;function r_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uv(){const r=zl("canvas");return r.style.display="block",r}const nd={};function Bo(r){r in nd||(nd[r]=!0,console.warn(r))}function Nv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Ov(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fv(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const he={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===xe&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===xe&&(r.r=to(r.r),r.g=to(r.g),r.b=to(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Zl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function to(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const id=[.64,.33,.3,.6,.15,.06],rd=[.2126,.7152,.0722],sd=[.3127,.329],od=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ad=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[mo]:{primaries:id,whitePoint:sd,transfer:Zl,toXYZ:od,fromXYZ:ad,luminanceCoefficients:rd,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:id,whitePoint:sd,transfer:xe,toXYZ:od,fromXYZ:ad,luminanceCoefficients:rd,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});let ys;class Bv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ys===void 0&&(ys=zl("canvas")),ys.width=t.width,ys.height=t.height;const n=ys.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ys}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=zl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ki(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zv=0;class s_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=ds(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vc(i[o].image)):s.push(vc(i[o]))}else s=vc(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function vc(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Bv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kv=0;class vn extends fs{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=Xr,i=Xr,s=Pi,o=Yr,a=xi,l=Qi,c=vn.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=ds(),this.name="",this.source=new s_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ym)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ua:t.x=t.x-Math.floor(t.x);break;case Xr:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ua:t.y=t.y-Math.floor(t.y);break;case Xr:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ym;vn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(u+1)/2,A=(p+1)/2,b=(h+d)/4,E=(f+g)/4,C=(_+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=E/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=b/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=E/s,i=C/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hv extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new s_(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends Hv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class o_ extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vv extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3];const d=s[o+0],u=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=u,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==u||h!==_){let m=1-a;const p=l*d+c*u+h*_+f*g,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),b=Math.atan2(A,p*S);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const v=a*S;if(l=l*m+d*v,c=c*m+u*v,h=h*m+_*v,f=f*m+g*v,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=A,c*=A,h*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=s[o],d=s[o+1],u=s[o+2],_=s[o+3];return t[e]=a*_+h*f+l*u-c*d,t[e+1]=l*_+h*d+c*f-a*u,t[e+2]=c*_+h*u+a*d-l*f,t[e+3]=h*_-a*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),f=a(s/2),d=l(n/2),u=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f+d*u*_;break;case"YZX":this._x=d*h*f+c*u*_,this._y=c*u*f+d*h*_,this._z=c*h*_-d*u*f,this._w=c*h*f-d*u*_;break;case"XZY":this._x=d*h*f-c*u*_,this._y=c*u*f-d*h*_,this._z=c*h*_+d*u*f,this._w=c*h*f+d*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ld.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),f=2*(s*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-s*f,this.z=i+l*f+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xc.copy(this).projectOnVector(t),this.sub(xc)}reflect(t){return this.sub(xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(on(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new N,ld=new cs;class ps{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pi):pi.fromBufferAttribute(s,o),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Na.subVectors(this.max,To),Ms.subVectors(t.a,To),Ss.subVectors(t.b,To),Es.subVectors(t.c,To),ir.subVectors(Ss,Ms),rr.subVectors(Es,Ss),Dr.subVectors(Ms,Es);let e=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Dr.z,Dr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Dr.z,0,-Dr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Dr.y,Dr.x,0];return!yc(e,Ms,Ss,Es,Na)||(e=[1,0,0,0,1,0,0,0,1],!yc(e,Ms,Ss,Es,Na))?!1:(Oa.crossVectors(ir,rr),e=[Oa.x,Oa.y,Oa.z],yc(e,Ms,Ss,Es,Na))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Bi=[new N,new N,new N,new N,new N,new N,new N,new N],pi=new N,Ua=new ps,Ms=new N,Ss=new N,Es=new N,ir=new N,rr=new N,Dr=new N,To=new N,Na=new N,Oa=new N,Lr=new N;function yc(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Lr.fromArray(r,s);const a=i.x*Math.abs(Lr.x)+i.y*Math.abs(Lr.y)+i.z*Math.abs(Lr.z),l=t.dot(Lr),c=e.dot(Lr),h=n.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Gv=new ps,bo=new N,Mc=new N;class _o{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const e=bo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(Mc)),this.expandByPoint(bo.copy(t.center).sub(Mc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new N,Sc=new N,Fa=new N,sr=new N,Ec=new N,Ba=new N,Tc=new N;class qu{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sc.copy(t).add(e).multiplyScalar(.5),Fa.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(Sc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Fa),a=sr.dot(this.direction),l=-sr.dot(Fa),c=sr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,_;if(h>0)if(f=o*l-a,d=o*a-l,_=s*h,f>=0)if(d>=-_)if(d<=_){const g=1/h;f*=g,d*=g,u=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),u=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Sc).addScaledVector(Fa,d),u}intersectSphere(t,e){zi.subVectors(t.center,this.origin);const n=zi.dot(this.direction),i=zi.dot(zi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,n,i,s){Ec.subVectors(e,t),Ba.subVectors(n,t),Tc.crossVectors(Ec,Ba);let o=this.direction.dot(Tc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,t);const l=a*this.direction.dot(Ba.crossVectors(sr,Ba));if(l<0)return null;const c=a*this.direction.dot(Ec.cross(sr));if(c<0||l+c>o)return null;const h=-a*sr.dot(Tc);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,f,d,u,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ts.setFromMatrixColumn(t,0).length(),s=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+_*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=_+u*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d+g*a,e[4]=_*a-u,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-_,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,u=l*f,_=c*h,g=c*f;e[0]=d-g*a,e[4]=-o*f,e[8]=_+u*a,e[1]=u+_*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,u=o*f,_=a*h,g=a*f;e[0]=l*h,e[4]=_*c-u,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=u*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-d*f,e[8]=_*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*l,u=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=o*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=a*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wv,t,Xv)}lookAt(t,e,n){const i=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),or.crossVectors(n,Wn),or.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),or.crossVectors(n,Wn)),or.normalize(),za.crossVectors(Wn,or),i[0]=or.x,i[4]=za.x,i[8]=Wn.x,i[1]=or.y,i[5]=za.y,i[9]=Wn.y,i[2]=or.z,i[6]=za.z,i[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],u=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],y=n[7],v=n[11],A=n[15],b=i[0],E=i[4],C=i[8],M=i[12],x=i[1],P=i[5],I=i[9],B=i[13],H=i[2],$=i[6],V=i[10],q=i[14],G=i[3],ot=i[7],L=i[11],ht=i[15];return s[0]=o*b+a*x+l*H+c*G,s[4]=o*E+a*P+l*$+c*ot,s[8]=o*C+a*I+l*V+c*L,s[12]=o*M+a*B+l*q+c*ht,s[1]=h*b+f*x+d*H+u*G,s[5]=h*E+f*P+d*$+u*ot,s[9]=h*C+f*I+d*V+u*L,s[13]=h*M+f*B+d*q+u*ht,s[2]=_*b+g*x+m*H+p*G,s[6]=_*E+g*P+m*$+p*ot,s[10]=_*C+g*I+m*V+p*L,s[14]=_*M+g*B+m*q+p*ht,s[3]=S*b+y*x+v*H+A*G,s[7]=S*E+y*P+v*$+A*ot,s[11]=S*C+y*I+v*V+A*L,s[15]=S*M+y*B+v*q+A*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*u-n*l*u)+g*(+e*l*u-e*c*d+s*o*d-i*o*u+i*c*h-s*l*h)+m*(+e*c*f-e*a*u-s*o*f+n*o*u+s*a*h-n*c*h)+p*(-i*a*h-e*l*f+e*a*d+i*o*f-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=f*m*c-g*d*c+g*l*u-a*m*u-f*l*p+a*d*p,y=_*d*c-h*m*c-_*l*u+o*m*u+h*l*p-o*d*p,v=h*g*c-_*f*c+_*a*u-o*g*u-h*a*p+o*f*p,A=_*f*l-h*g*l-_*a*d+o*g*d+h*a*m-o*f*m,b=e*S+n*y+i*v+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=S*E,t[1]=(g*d*s-f*m*s-g*i*u+n*m*u+f*i*p-n*d*p)*E,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*u-n*l*u)*E,t[4]=y*E,t[5]=(h*m*s-_*d*s+_*i*u-e*m*u-h*i*p+e*d*p)*E,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*u+e*l*u)*E,t[8]=v*E,t[9]=(_*f*s-h*g*s-_*n*u+e*g*u+h*n*p-e*f*p)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*f*s-h*n*c+e*f*c+o*n*u-e*a*u)*E,t[12]=A*E,t[13]=(h*g*i-_*f*i+_*n*d-e*g*d-h*n*m+e*f*m)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*f*i-h*a*i+h*n*l-e*f*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,f=a+a,d=s*c,u=s*h,_=s*f,g=o*h,m=o*f,p=a*f,S=l*c,y=l*h,v=l*f,A=n.x,b=n.y,E=n.z;return i[0]=(1-(g+p))*A,i[1]=(u+v)*A,i[2]=(_-y)*A,i[3]=0,i[4]=(u-v)*b,i[5]=(1-(d+p))*b,i[6]=(m+S)*b,i[7]=0,i[8]=(_+y)*E,i[9]=(m-S)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ts.set(i[0],i[1],i[2]).length();const o=Ts.set(i[4],i[5],i[6]).length(),a=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],mi.copy(this);const c=1/s,h=1/o,f=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=f,mi.elements[9]*=f,mi.elements[10]*=f,e.setFromRotationMatrix(mi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=$i){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let u,_;if(a===$i)u=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bl)u=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=$i){const l=this.elements,c=1/(e-t),h=1/(n-i),f=1/(o-s),d=(e+t)*c,u=(n+i)*h;let _,g;if(a===$i)_=(o+s)*f,g=-2*f;else if(a===Bl)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new N,mi=new Te,Wv=new N(0,0,0),Xv=new N(1,1,1),or=new N,za=new N,Wn=new N,cd=new Te,hd=new cs;class Ni{constructor(t=0,e=0,n=0,i=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hd.setFromEuler(this),this.setFromQuaternion(hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class a_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yv=0;const ud=new N,bs=new cs,ki=new Te,ka=new N,wo=new N,qv=new N,$v=new cs,fd=new N(1,0,0),dd=new N(0,1,0),pd=new N(0,0,1),md={type:"added"},Zv={type:"removed"},ws={type:"childadded",child:null},bc={type:"childremoved",child:null};class ke extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new N,e=new Ni,n=new cs,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new ee}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(fd,t)}rotateY(t){return this.rotateOnAxis(dd,t)}rotateZ(t){return this.rotateOnAxis(pd,t)}translateOnAxis(t,e){return ud.copy(t).applyQuaternion(this.quaternion),this.position.add(ud.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fd,t)}translateY(t){return this.translateOnAxis(dd,t)}translateZ(t){return this.translateOnAxis(pd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ka.copy(t):ka.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(wo,ka,this.up):ki.lookAt(ka,wo,this.up),this.quaternion.setFromRotationMatrix(ki),i&&(ki.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(ki),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(md),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zv),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(md),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,t,qv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,$v,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new N(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new N,Hi=new N,wc=new N,Vi=new N,As=new N,Cs=new N,_d=new N,Ac=new N,Cc=new N,Rc=new N,Pc=new Be,Dc=new Be,Lc=new Be;class li{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_i.subVectors(t,e),i.cross(_i);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_i.subVectors(i,e),Hi.subVectors(n,e),wc.subVectors(t,e);const o=_i.dot(_i),a=_i.dot(Hi),l=_i.dot(wc),c=Hi.dot(Hi),h=Hi.dot(wc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,u=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-u-_,_,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Pc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(t,e),Dc.fromBufferAttribute(t,n),Lc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Pc,s.x),o.addScaledVector(Dc,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(t,e,n,i){return _i.subVectors(n,e),Hi.subVectors(t,e),_i.cross(Hi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),_i.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;As.subVectors(i,n),Cs.subVectors(s,n),Ac.subVectors(t,n);const l=As.dot(Ac),c=Cs.dot(Ac);if(l<=0&&c<=0)return e.copy(n);Cc.subVectors(t,i);const h=As.dot(Cc),f=Cs.dot(Cc);if(h>=0&&f<=h)return e.copy(i);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(As,o);Rc.subVectors(t,s);const u=As.dot(Rc),_=Cs.dot(Rc);if(_>=0&&u<=_)return e.copy(s);const g=u*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Cs,a);const m=h*_-u*f;if(m<=0&&f-h>=0&&u-_>=0)return _d.subVectors(s,i),a=(f-h)/(f-h+(u-_)),e.copy(i).addScaledVector(_d,a);const p=1/(m+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(As,o).addScaledVector(Cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Ic(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=Yu(t,1),e=on(e,0,1),n=on(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ic(o,s,t+1/3),this.g=Ic(o,s,t),this.b=Ic(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Cn){const n=l_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=to(t.r),this.g=to(t.g),this.b=to(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Cn){return he.fromWorkingColorSpace(fn.copy(this),t),Math.round(on(fn.r*255,0,255))*65536+Math.round(on(fn.g*255,0,255))*256+Math.round(on(fn.b*255,0,255))}getHexString(t=Cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Cn){he.fromWorkingColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,i=fn.b;return t!==Cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ar),this.setHSL(ar.h+t,ar.s+e,ar.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ar),t.getHSL(Ha);const n=Jo(ar.h,Ha.h,e),i=Jo(ar.s,Ha.s,e),s=Jo(ar.l,Ha.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new ie;ie.NAMES=l_;let Kv=0;class go extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ds(),this.name="",this.blending=js,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Eh&&(n.blendSrc=this.blendSrc),this.blendDst!==Th&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class c_ extends go{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new N,Va=new pt;class Mi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qf,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Va.fromBufferAttribute(this,e),Va.applyMatrix3(t),this.setXY(e,Va.x,Va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Os(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Os(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Os(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Os(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Os(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),i=En(i,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qf&&(t.usage=this.usage),t}}class h_ extends Mi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class u_ extends Mi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends Mi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jv=0;const ii=new Te,Uc=new ke,Rs=new N,Xn=new ps,Ao=new ps,en=new N;class Ln extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jv++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r_(t)?u_:h_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ee().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return Uc.lookAt(t),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Xn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Xn.min,Ao.min),Xn.expandByPoint(en),en.addVectors(Xn.max,Ao.max),Xn.expandByPoint(en)):(Xn.expandByPoint(Ao.min),Xn.expandByPoint(Ao.max))}Xn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)en.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(en));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(t,c),en.add(Rs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,h=new N,f=new N,d=new pt,u=new pt,_=new pt,g=new N,m=new N;function p(C,M,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),f.fromBufferAttribute(n,x),d.fromBufferAttribute(s,C),u.fromBufferAttribute(s,M),_.fromBufferAttribute(s,x),h.sub(c),f.sub(c),u.sub(d),_.sub(d);const P=1/(u.x*_.y-_.x*u.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-u.y).multiplyScalar(P),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-_.x).multiplyScalar(P),a[C].add(g),a[M].add(g),a[x].add(g),l[C].add(m),l[M].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,M=S.length;C<M;++C){const x=S[C],P=x.start,I=x.count;for(let B=P,H=P+I;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new N,v=new N,A=new N,b=new N;function E(C){A.fromBufferAttribute(i,C),b.copy(A);const M=a[C];y.copy(M),y.sub(A.multiplyScalar(A.dot(M))).normalize(),v.crossVectors(b,M);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,M=S.length;C<M;++C){const x=S[C],P=x.start,I=x.count;for(let B=P,H=P+I;B<H;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let d=0,u=t.count;d<u;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),f.subVectors(i,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h);let u=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[u++]}return new Mi(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ln,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){const d=c[h],u=t(d,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gd=new Te,Ir=new qu,Ga=new _o,vd=new N,Wa=new N,Xa=new N,Ya=new N,Nc=new N,qa=new N,xd=new N,$a=new N;class ue extends ke{constructor(t=new Ln,e=new c_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],f=s[l];h!==0&&(Nc.fromBufferAttribute(f,t),o?qa.addScaledVector(Nc,h):qa.addScaledVector(Nc.sub(e),h))}e.add(qa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ir.copy(t.ray).recast(t.near),!(Ga.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Ga,vd)===null||Ir.origin.distanceToSquared(vd)>(t.far-t.near)**2))&&(gd.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(gd),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ir)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=S,A=y;v<A;v+=3){const b=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=Za(this,p,t,n,c,h,f,b,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){const S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Za(this,o,t,n,c,h,f,S,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=S,A=y;v<A;v+=3){const b=v,E=v+1,C=v+2;i=Za(this,p,t,n,c,h,f,b,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=_,p=g;m<p;m+=3){const S=m,y=m+1,v=m+2;i=Za(this,o,t,n,c,h,f,S,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Jv(r,t,e,n,i,s,o,a){let l;if(t.side===kn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===wr,a),l===null)return null;$a.copy(a),$a.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo($a);return c<e.near||c>e.far?null:{distance:c,point:$a.clone(),object:r}}function Za(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Wa),r.getVertexPosition(l,Xa),r.getVertexPosition(c,Ya);const h=Jv(r,t,e,n,Wa,Xa,Ya,xd);if(h){const f=new N;li.getBarycoord(xd,Wa,Xa,Ya,f),i&&(h.uv=li.getInterpolatedAttribute(i,a,l,c,f,new pt)),s&&(h.uv1=li.getInterpolatedAttribute(s,a,l,c,f,new pt)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};li.getNormal(Wa,Xa,Ya,d.normal),h.face=d,h.barycoord=f}return h}class Nn extends Ln{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],f=[];let d=0,u=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function _(g,m,p,S,y,v,A,b,E,C,M){const x=v/E,P=A/C,I=v/2,B=A/2,H=b/2,$=E+1,V=C+1;let q=0,G=0;const ot=new N;for(let L=0;L<V;L++){const ht=L*P-B;for(let it=0;it<$;it++){const at=it*x-I;ot[g]=at*S,ot[m]=ht*y,ot[p]=H,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[m]=0,ot[p]=b>0?1:-1,h.push(ot.x,ot.y,ot.z),f.push(it/E),f.push(1-L/C),q+=1}}for(let L=0;L<C;L++)for(let ht=0;ht<E;ht++){const it=d+ht+$*L,at=d+ht+$*(L+1),z=d+(ht+1)+$*(L+1),K=d+(ht+1)+$*L;l.push(it,at,K),l.push(at,z,K),G+=6}a.addGroup(u,G,M),u+=G,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fo(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(r){const t={};for(let e=0;e<r.length;e++){const n=fo(r[e]);for(const i in n)t[i]=n[i]}return t}function Qv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function f_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const tx={clone:fo,merge:Tn};var ex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends go{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ex,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=Qv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class d_ extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=$i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new N,yd=new pt,Md=new pt;class ai extends d_{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,e){return this.getViewBounds(t,yd,Md),e.subVectors(Md,yd)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ps=-90,Ds=1;class ix extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ai(Ps,Ds,t,e);i.layers=this.layers,this.add(i);const s=new ai(Ps,Ds,t,e);s.layers=this.layers,this.add(s);const o=new ai(Ps,Ds,t,e);o.layers=this.layers,this.add(o);const a=new ai(Ps,Ds,t,e);a.layers=this.layers,this.add(a);const l=new ai(Ps,Ds,t,e);l.layers=this.layers,this.add(l);const c=new ai(Ps,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===$i)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class p_ extends vn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:lo,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rx extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new p_(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nn(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Mr});s.uniforms.tEquirect.value=e;const o=new ue(i,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Pi),new ix(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Oc=new N,sx=new N,ox=new ee;class hr{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Oc.subVectors(n,e).cross(sx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ox.getNormalMatrix(t),i=this.coplanarPoint(Oc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new _o,Ka=new N;class $u{constructor(t=new hr,e=new hr,n=new hr,i=new hr,s=new hr,o=new hr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$i){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],f=i[6],d=i[7],u=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,m-u,v-p).normalize(),n[1].setComponents(l+s,d+c,m+u,v+p).normalize(),n[2].setComponents(l+o,d+h,m+_,v+S).normalize(),n[3].setComponents(l-o,d-h,m-_,v-S).normalize(),n[4].setComponents(l-a,d-f,m-g,v-y).normalize(),e===$i)n[5].setComponents(l+a,d+f,m+g,v+y).normalize();else if(e===Bl)n[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(t){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ka.x=i.normal.x>0?t.max.x:t.min.x,Ka.y=i.normal.y>0?t.max.y:t.min.y,Ka.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function m_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ax(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(r.bindBuffer(c,a),f.length===0)r.bufferSubData(c,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){const _=f[d],g=f[u];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){const g=f[u];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class xa extends Ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,f=t/a,d=e/l,u=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let y=0;y<c;y++){const v=y*f-s;_.push(v,-S,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const y=S+c*p,v=S+c*(p+1),A=S+1+c*(p+1),b=S+1+c*p;u.push(y,v,b),u.push(v,A,b)}this.setIndex(u),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(g,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xa(t.width,t.height,t.widthSegments,t.heightSegments)}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_x=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",zx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ny=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_M=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:lx,alphahash_pars_fragment:cx,alphamap_fragment:hx,alphamap_pars_fragment:ux,alphatest_fragment:fx,alphatest_pars_fragment:dx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:_x,batching_vertex:gx,begin_vertex:vx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:Mx,bumpmap_pars_fragment:Sx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:wx,color_fragment:Ax,color_pars_fragment:Cx,color_pars_vertex:Rx,color_vertex:Px,common:Dx,cube_uv_reflection_fragment:Lx,defaultnormal_vertex:Ix,displacementmap_pars_vertex:Ux,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Fx,colorspace_fragment:Bx,colorspace_pars_fragment:zx,envmap_fragment:kx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:ty,envmap_vertex:Wx,fog_vertex:Xx,fog_pars_vertex:Yx,fog_fragment:qx,fog_pars_fragment:$x,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:Kx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:cy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:_y,map_particle_pars_fragment:gy,metalnessmap_fragment:vy,metalnessmap_pars_fragment:xy,morphinstance_vertex:yy,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:by,normal_fragment_maps:wy,normal_pars_fragment:Ay,normal_pars_vertex:Cy,normal_vertex:Ry,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Ny,packing:Oy,premultiplied_alpha_fragment:Fy,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:ky,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Vy,shadowmap_pars_fragment:Gy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:$y,skinning_vertex:Zy,skinnormal_vertex:Ky,specularmap_fragment:jy,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:tM,transmission_fragment:eM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:rM,uv_vertex:sM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:hM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:pM,distanceRGBA_vert:mM,distanceRGBA_frag:_M,equirect_vert:gM,equirect_frag:vM,linedashed_vert:xM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:EM,meshlambert_frag:TM,meshmatcap_vert:bM,meshmatcap_frag:wM,meshnormal_vert:AM,meshnormal_frag:CM,meshphong_vert:RM,meshphong_frag:PM,meshphysical_vert:DM,meshphysical_frag:LM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:NM,points_frag:OM,shadow_vert:FM,shadow_frag:BM,sprite_vert:zM,sprite_frag:kM},wt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},bi={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new ie(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};bi.physical={uniforms:Tn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ja={r:0,b:0,g:0},Nr=new Ni,HM=new Te;function VM(r,t,e,n,i,s,o){const a=new ie(0);let l=s===!0?0:1,c,h,f=null,d=0,u=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function g(S){let y=!1;const v=_(S);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===$l)?(h===void 0&&(h=new ue(new Nn(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:fo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Nr.copy(y.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Nr)),h.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,(f!==v||d!==v.version||u!==r.toneMapping)&&(h.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ue(new xa(2,2),new Ar({name:"BackgroundMaterial",uniforms:fo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==xe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,u=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(ja,f_(r)),n.buffers.color.setClear(ja.r,ja.g,ja.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m}}function GM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(x,P,I,B,H){let $=!1;const V=f(B,I,P);s!==V&&(s=V,c(s.object)),$=u(x,B,I,H),$&&_(x,B,I,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(x,P,I,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function h(x){return r.deleteVertexArray(x)}function f(x,P,I){const B=I.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let $=H[P.id];$===void 0&&($={},H[P.id]=$);let V=$[B];return V===void 0&&(V=d(l()),$[B]=V),V}function d(x){const P=[],I=[],B=[];for(let H=0;H<e;H++)P[H]=0,I[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:B,object:x,attributes:{},index:null}}function u(x,P,I,B){const H=s.attributes,$=P.attributes;let V=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){const L=H[G];let ht=$[G];if(ht===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor)),L===void 0||L.attribute!==ht||ht&&L.data!==ht.data)return!0;V++}return s.attributesNum!==V||s.index!==B}function _(x,P,I,B){const H={},$=P.attributes;let V=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){let L=$[G];L===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ht={};ht.attribute=L,L&&L.data&&(ht.data=L.data),H[G]=ht,V++}s.attributes=H,s.attributesNum=V,s.index=B}function g(){const x=s.newAttributes;for(let P=0,I=x.length;P<I;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const I=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;I[x]=1,B[x]===0&&(r.enableVertexAttribArray(x),B[x]=1),H[x]!==P&&(r.vertexAttribDivisor(x,P),H[x]=P)}function S(){const x=s.newAttributes,P=s.enabledAttributes;for(let I=0,B=P.length;I<B;I++)P[I]!==x[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function y(x,P,I,B,H,$,V){V===!0?r.vertexAttribIPointer(x,P,I,H,$):r.vertexAttribPointer(x,P,I,B,H,$)}function v(x,P,I,B){g();const H=B.attributes,$=I.getAttributes(),V=P.defaultAttributeValues;for(const q in $){const G=$[q];if(G.location>=0){let ot=H[q];if(ot===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),ot!==void 0){const L=ot.normalized,ht=ot.itemSize,it=t.get(ot);if(it===void 0)continue;const at=it.buffer,z=it.type,K=it.bytesPerElement,ft=z===r.INT||z===r.UNSIGNED_INT||ot.gpuType===zu;if(ot.isInterleavedBufferAttribute){const et=ot.data,Et=et.stride,Rt=ot.offset;if(et.isInstancedInterleavedBuffer){for(let Ut=0;Ut<G.locationSize;Ut++)p(G.location+Ut,et.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)m(G.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,at);for(let Ut=0;Ut<G.locationSize;Ut++)y(G.location+Ut,ht/G.locationSize,z,L,Et*K,(Rt+ht/G.locationSize*Ut)*K,ft)}else{if(ot.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)p(G.location+et,ot.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);r.bindBuffer(r.ARRAY_BUFFER,at);for(let et=0;et<G.locationSize;et++)y(G.location+et,ht/G.locationSize,z,L,ht*K,ht/G.locationSize*et*K,ft)}}else if(V!==void 0){const L=V[q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(G.location,L);break;case 3:r.vertexAttrib3fv(G.location,L);break;case 4:r.vertexAttrib4fv(G.location,L);break;default:r.vertexAttrib1fv(G.location,L)}}}}S()}function A(){C();for(const x in n){const P=n[x];for(const I in P){const B=P[I];for(const H in B)h(B[H].object),delete B[H];delete P[I]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const I in P){const B=P[I];for(const H in B)h(B[H].object),delete B[H];delete P[I]}delete n[x.id]}function E(x){for(const P in n){const I=n[P];if(I[x.id]===void 0)continue;const B=I[x.id];for(const H in B)h(B[H].object),delete B[H];delete I[x.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function WM(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let u=0;for(let _=0;_<f;_++)u+=h[_];e.update(u,n,1)}function l(c,h,f,d){if(f===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function XM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==xi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Qi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Di&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:b}}function YM(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new hr,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const S=s?0:n,y=S*4;let v=p.clippingState||null;l.value=v,v=h(_,d,y,u);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=u+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=u;y!==g;++y,v+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function qM(r){let t=new WeakMap;function e(o,a){return a===Lh?o.mapping=lo:a===Ih&&(o.mapping=co),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lh||a===Ih)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new rx(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class __ extends d_{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vs=4,Sd=[.125,.215,.35,.446,.526,.582],Vr=20,Fc=new __,Ed=new ie;let Bc=null,zc=0,kc=0,Hc=!1;const kr=(1+Math.sqrt(5))/2,Ls=1/kr,Td=[new N(-kr,Ls,0),new N(kr,Ls,0),new N(-Ls,0,kr),new N(Ls,0,kr),new N(0,kr,-Ls),new N(0,kr,Ls),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bc,zc,kc),this._renderer.xr.enabled=Hc,t.scissorTest=!1,Ja(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lo||t.mapping===co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bc=this._renderer.getRenderTarget(),zc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:va,format:xi,colorSpace:mo,depthBuffer:!1},i=wd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wd(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$M(s)),this._blurMaterial=ZM(s,t,e)}return i}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Fc)}_sceneToCubeUV(t,e,n,i){const a=new ai(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ed),h.toneMapping=Sr,h.autoClear=!1;const u=new c_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),_=new ue(new Nn,u);let g=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,g=!0):(u.color.copy(Ed),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Ja(i,S*y,p>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===lo||t.mapping===co;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ja(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Fc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Td[(i-s-1)%Td.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ue(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Vr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Vr;m>Vr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const p=[];let S=0;for(let E=0;E<Vr;++E){const C=E/g,M=Math.exp(-C*C/2);p.push(M),E===0?S+=M:E<m&&(S+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Vs?i-y+Vs:0),b=4*(this._cubeSize-v);Ja(e,A,b,3*v,2*v),l.setRenderTarget(e),l.render(f,Fc)}}function $M(r){const t=[],e=[],n=[];let i=r;const s=r-Vs+1+Sd.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Vs?l=Sd[o-r+Vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*u),y=new Float32Array(m*_*u),v=new Float32Array(p*_*u);for(let b=0;b<u;b++){const E=b%3*2/3-1,C=b>2?0:-1,M=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];S.set(M,g*_*b),y.set(d,m*_*b);const x=[b,b,b,b,b,b];v.set(x,p*_*b)}const A=new Ln;A.setAttribute("position",new Mi(S,g)),A.setAttribute("uv",new Mi(y,m)),A.setAttribute("faceIndex",new Mi(v,p)),t.push(A),i>Vs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wd(r,t,e){const n=new ls(r,t,e);return n.texture.mapping=$l,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ZM(r,t,e){const n=new Float32Array(Vr),i=new N(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ad(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Cd(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lh||l===Ih,h=l===lo||l===co;if(c||h){let f=t.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new bd(r)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new bd(r)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function JM(r,t,e,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const u=s.get(d);u&&(t.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const u=f.morphAttributes;for(const _ in u){const g=u[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(f){const d=[],u=f.index,_=f.attributes.position;let g=0;if(u!==null){const S=u.array;g=u.version;for(let y=0,v=S.length;y<v;y+=3){const A=S[y+0],b=S[y+1],E=S[y+2];d.push(A,b,b,E,E,A)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const A=y+0,b=y+1,E=y+2;d.push(A,b,b,E,E,A)}}else return;const m=new(r_(d)?u_:h_)(d,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function h(f){const d=s.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function QM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),e.update(u,n,1)}function c(d,u,_){_!==0&&(r.drawElementsInstanced(n,u,s,d*o,_),e.update(u,n,_))}function h(d,u,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=u[p];e.update(m,n,1)}function f(d,u,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=u[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function tS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eS(r,t,e){const n=new WeakMap,i=new Be;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var u=x;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,b=1;A>t.maxTextureSize&&(b=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*b*4*f),C=new o_(E,A,b,f);C.type=Di,C.needsUpdate=!0;const M=v*4;for(let P=0;P<f;P++){const I=p[P],B=S[P],H=y[P],$=A*b*4*P;for(let V=0;V<I.count;V++){const q=V*M;_===!0&&(i.fromBufferAttribute(I,V),E[$+q+0]=i.x,E[$+q+1]=i.y,E[$+q+2]=i.z,E[$+q+3]=0),g===!0&&(i.fromBufferAttribute(B,V),E[$+q+4]=i.x,E[$+q+5]=i.y,E[$+q+6]=i.z,E[$+q+7]=0),m===!0&&(i.fromBufferAttribute(H,V),E[$+q+8]=i.x,E[$+q+9]=i.y,E[$+q+10]=i.z,E[$+q+11]=H.itemSize===4?i.w:1)}}d={count:f,texture:C,size:new pt(A,b)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function nS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class g_ extends vn{constructor(t,e,n,i,s,o,a,l,c,h=Js){if(h!==Js&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Js&&(n=as),n===void 0&&h===uo&&(n=ho),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const v_=new vn,Rd=new g_(1,1),x_=new o_,y_=new Vv,M_=new p_,Pd=[],Dd=[],Ld=new Float32Array(16),Id=new Float32Array(9),Ud=new Float32Array(4);function vo(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Pd[i];if(s===void 0&&(s=new Float32Array(i),Pd[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Qe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function tn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Kl(r,t){let e=Dd[t];e===void 0&&(e=new Int32Array(t),Dd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function iS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function rS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2fv(this.addr,t),tn(e,t)}}function sS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;r.uniform3fv(this.addr,t),tn(e,t)}}function oS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4fv(this.addr,t),tn(e,t)}}function aS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ud.set(n),r.uniformMatrix2fv(this.addr,!1,Ud),tn(e,n)}}function lS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Id.set(n),r.uniformMatrix3fv(this.addr,!1,Id),tn(e,n)}}function cS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;Ld.set(n),r.uniformMatrix4fv(this.addr,!1,Ld),tn(e,n)}}function hS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function uS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2iv(this.addr,t),tn(e,t)}}function fS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3iv(this.addr,t),tn(e,t)}}function dS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4iv(this.addr,t),tn(e,t)}}function pS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function mS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;r.uniform2uiv(this.addr,t),tn(e,t)}}function _S(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;r.uniform3uiv(this.addr,t),tn(e,t)}}function gS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;r.uniform4uiv(this.addr,t),tn(e,t)}}function vS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Rd.compareFunction=i_,s=Rd):s=v_,e.setTexture2D(t||s,i)}function xS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||y_,i)}function yS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||M_,i)}function MS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||x_,i)}function SS(r){switch(r){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return oS;case 35674:return aS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return hS;case 35667:case 35671:return uS;case 35668:case 35672:return fS;case 35669:case 35673:return dS;case 5125:return pS;case 36294:return mS;case 36295:return _S;case 36296:return gS;case 35678:case 36198:case 36298:case 36306:case 35682:return vS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return MS}}function ES(r,t){r.uniform1fv(this.addr,t)}function TS(r,t){const e=vo(t,this.size,2);r.uniform2fv(this.addr,e)}function bS(r,t){const e=vo(t,this.size,3);r.uniform3fv(this.addr,e)}function wS(r,t){const e=vo(t,this.size,4);r.uniform4fv(this.addr,e)}function AS(r,t){const e=vo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function CS(r,t){const e=vo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function RS(r,t){const e=vo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function PS(r,t){r.uniform1iv(this.addr,t)}function DS(r,t){r.uniform2iv(this.addr,t)}function LS(r,t){r.uniform3iv(this.addr,t)}function IS(r,t){r.uniform4iv(this.addr,t)}function US(r,t){r.uniform1uiv(this.addr,t)}function NS(r,t){r.uniform2uiv(this.addr,t)}function OS(r,t){r.uniform3uiv(this.addr,t)}function FS(r,t){r.uniform4uiv(this.addr,t)}function BS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||v_,s[o])}function zS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||y_,s[o])}function kS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||M_,s[o])}function HS(r,t,e){const n=this.cache,i=t.length,s=Kl(e,i);Qe(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||x_,s[o])}function VS(r){switch(r){case 5126:return ES;case 35664:return TS;case 35665:return bS;case 35666:return wS;case 35674:return AS;case 35675:return CS;case 35676:return RS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return IS;case 5125:return US;case 36294:return NS;case 36295:return OS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return kS;case 36289:case 36303:case 36311:case 36292:return HS}}class GS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=SS(e.type)}}class WS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=VS(e.type)}}class XS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Nd(r,t){r.seq.push(t),r.map[t.id]=t}function YS(r,t,e){const n=r.name,i=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),o=Vc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nd(e,c===void 0?new GS(a,r,t):new WS(a,r,t));break}else{let f=e.map[a];f===void 0&&(f=new XS(a),Nd(e,f)),e=f}}}class Tl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);YS(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Od(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const qS=37297;let $S=0;function ZS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Fd=new ee;function KS(r){he._getMatrix(Fd,he.workingColorSpace,r);const t=`mat3( ${Fd.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Zl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Bd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ZS(r.getShaderSource(t),o)}else return i}function jS(r,t){const e=KS(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function JS(r,t){let e;switch(t){case ev:e="Linear";break;case nv:e="Reinhard";break;case iv:e="Cineon";break;case Xm:e="ACESFilmic";break;case sv:e="AgX";break;case ov:e="Neutral";break;case rv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qa=new N;function QS(){he.getLuminanceCoefficients(Qa);const r=Qa.x.toFixed(4),t=Qa.y.toFixed(4),e=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function eE(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nE(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function zo(r){return r!==""}function zd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kd(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iE=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(r){return r.replace(iE,sE)}const rE=new Map;function sE(r,t){let e=ne[t];if(e===void 0){const n=rE.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return au(e)}const oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(r){return r.replace(oE,aE)}function aE(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lE(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function cE(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case lo:case co:t="ENVMAP_TYPE_CUBE";break;case $l:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hE(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case co:t="ENVMAP_MODE_REFRACTION";break}return t}function uE(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wm:t="ENVMAP_BLENDING_MULTIPLY";break;case Q0:t="ENVMAP_BLENDING_MIX";break;case tv:t="ENVMAP_BLENDING_ADD";break}return t}function fE(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dE(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lE(e),c=cE(e),h=hE(e),f=uE(e),d=fE(e),u=tE(e),_=eE(s),g=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(m=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[Vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sr?"#define TONE_MAPPING":"",e.toneMapping!==Sr?ne.tonemapping_pars_fragment:"",e.toneMapping!==Sr?JS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,jS("linearToOutputTexel",e.outputColorSpace),QS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),o=au(o),o=zd(o,e),o=kd(o,e),a=au(a),a=zd(a,e),a=kd(a,e),o=Hd(o),a=Hd(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+m+o,v=S+p+a,A=Od(i,i.VERTEX_SHADER,y),b=Od(i,i.FRAGMENT_SHADER,v);i.attachShader(g,A),i.attachShader(g,b),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(b).trim();let $=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,b);else{const q=Bd(i,A,"vertex"),G=Bd(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+q+`
`+G)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(B===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:$,programLog:I,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(A),i.deleteShader(b),C=new Tl(i,g),M=nE(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,qS)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$S++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _E(t),e.set(t,n)),n}}class _E{constructor(t){this.id=pE++,this.code=t,this.usedTimes=0}}function gE(r,t,e,n,i,s,o){const a=new a_,l=new mE,c=new Set,h=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let u=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,P,I,B){const H=I.fog,$=B.geometry,V=M.isMeshStandardMaterial?I.environment:null,q=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),G=q&&q.mapping===$l?q.image.height:null,ot=_[M.type];M.precision!==null&&(u=i.getMaxPrecision(M.precision),u!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=L!==void 0?L.length:0;let it=0;$.morphAttributes.position!==void 0&&(it=1),$.morphAttributes.normal!==void 0&&(it=2),$.morphAttributes.color!==void 0&&(it=3);let at,z,K,ft;if(ot){const Ct=bi[ot];at=Ct.vertexShader,z=Ct.fragmentShader}else at=M.vertexShader,z=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);const et=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Rt=B.isInstancedMesh===!0,Ut=B.isBatchedMesh===!0,Vt=!!M.map,rt=!!M.matcap,tt=!!q,D=!!M.aoMap,At=!!M.lightMap,st=!!M.bumpMap,F=!!M.normalMap,ct=!!M.displacementMap,Ft=!!M.emissiveMap,bt=!!M.metalnessMap,R=!!M.roughnessMap,T=M.anisotropy>0,W=M.clearcoat>0,J=M.dispersion>0,Q=M.iridescence>0,j=M.sheen>0,gt=M.transmission>0,mt=T&&!!M.anisotropyMap,yt=W&&!!M.clearcoatMap,$t=W&&!!M.clearcoatNormalMap,lt=W&&!!M.clearcoatRoughnessMap,_t=Q&&!!M.iridescenceMap,kt=Q&&!!M.iridescenceThicknessMap,zt=j&&!!M.sheenColorMap,Pt=j&&!!M.sheenRoughnessMap,Qt=!!M.specularMap,Wt=!!M.specularColorMap,ce=!!M.specularIntensityMap,U=gt&&!!M.transmissionMap,xt=gt&&!!M.thicknessMap,Z=!!M.gradientMap,nt=!!M.alphaMap,vt=M.alphaTest>0,Mt=!!M.alphaHash,Xt=!!M.extensions;let fe=Sr;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Fe={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:at,fragmentShader:z,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&B._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&B.instanceColor!==null,instancingMorph:Rt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:et===null?r.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:mo,alphaToCoverage:!!M.alphaToCoverage,map:Vt,matcap:rt,envMap:tt,envMapMode:tt&&q.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:At,bumpMap:st,normalMap:F,displacementMap:d&&ct,emissiveMap:Ft,normalMapObjectSpace:F&&M.normalMapType===hv,normalMapTangentSpace:F&&M.normalMapType===n_,metalnessMap:bt,roughnessMap:R,anisotropy:T,anisotropyMap:mt,clearcoat:W,clearcoatMap:yt,clearcoatNormalMap:$t,clearcoatRoughnessMap:lt,dispersion:J,iridescence:Q,iridescenceMap:_t,iridescenceThicknessMap:kt,sheen:j,sheenColorMap:zt,sheenRoughnessMap:Pt,specularMap:Qt,specularColorMap:Wt,specularIntensityMap:ce,transmission:gt,transmissionMap:U,thicknessMap:xt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===js&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:Mt,combine:M.combine,mapUv:Vt&&g(M.map.channel),aoMapUv:D&&g(M.aoMap.channel),lightMapUv:At&&g(M.lightMap.channel),bumpMapUv:st&&g(M.bumpMap.channel),normalMapUv:F&&g(M.normalMap.channel),displacementMapUv:ct&&g(M.displacementMap.channel),emissiveMapUv:Ft&&g(M.emissiveMap.channel),metalnessMapUv:bt&&g(M.metalnessMap.channel),roughnessMapUv:R&&g(M.roughnessMap.channel),anisotropyMapUv:mt&&g(M.anisotropyMap.channel),clearcoatMapUv:yt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:$t&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(M.sheenRoughnessMap.channel),specularMapUv:Qt&&g(M.specularMap.channel),specularColorMapUv:Wt&&g(M.specularColorMap.channel),specularIntensityMapUv:ce&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:xt&&g(M.thicknessMap.channel),alphaMapUv:nt&&g(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(F||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Vt||nt),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Et,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:it,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Vt&&M.map.isVideoTexture===!0&&he.getTransfer(M.map.colorSpace)===xe,decodeVideoTextureEmissive:Ft&&M.emissiveMap.isVideoTexture===!0&&he.getTransfer(M.emissiveMap.colorSpace)===xe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ai,flipSided:M.side===kn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(S(x,M),y(x,M),x.push(r.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function S(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=_[M.type];let P;if(x){const I=bi[x];P=tx.clone(I.uniforms)}else P=M.uniforms;return P}function A(M,x){let P;for(let I=0,B=h.length;I<B;I++){const H=h[I];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new dE(r,x,M,s),h.push(P)),P}function b(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function E(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:C}}function vE(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function xE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Gd(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Wd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(f,d,u,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function a(f,d,u,_,g,m){const p=o(f,d,u,_,g,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function l(f,d,u,_,g,m){const p=o(f,d,u,_,g,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||xE),n.length>1&&n.sort(d||Gd),i.length>1&&i.sort(d||Gd)}function h(){for(let f=t,d=r.length;f<d;f++){const u=r[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function yE(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new Wd,r.set(n,[o])):i>=s.length?(o=new Wd,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function ME(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ie};break;case"SpotLight":e={position:new N,direction:new N,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function SE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let EE=0;function TE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function bE(r){const t=new ME,e=SE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Te,o=new Te;function a(c){let h=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let u=0,_=0,g=0,m=0,p=0,S=0,y=0,v=0,A=0,b=0,E=0;c.sort(TE);for(let M=0,x=c.length;M<x;M++){const P=c[M],I=P.color,B=P.intensity,H=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*B,f+=I.g*B,d+=I.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);E++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=$,n.directionalShadowMatrix[u]=P.shadow.matrix,S++}n.directional[u]=V,u++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(I).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;const q=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,q.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[g]=q.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=$,v++}g++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(I).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const q=P.shadow,G=e.get(P);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,y++}n.point[_]=V,_++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==u||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==E)&&(n.directional.length=u,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-b,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,C.directionalLength=u,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=E,n.version=EE++)}function l(c,h){let f=0,d=0,u=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Xd(r){const t=new bE(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wE(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Xd(r),t.set(i,[a])):s>=o.length?(a=new Xd(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class AE extends go{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class CE extends go{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const RE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DE(r,t,e){let n=new $u;const i=new pt,s=new pt,o=new Be,a=new AE({depthPacking:cv}),l=new CE,c={},h=e.maxTextureSize,f={[wr]:kn,[kn]:wr,[Ai]:Ai},d=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:RE,fragmentShader:PE}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const _=new Ln;_.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ue(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vm;let p=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Mr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const B=p!==Gi&&this.type===Gi,H=p===Gi&&this.type!==Gi;for(let $=0,V=b.length;$<V;$++){const q=b[$],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ot=G.getFrameExtents();if(i.multiply(ot),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||B===!0||H===!0){const ht=this.type!==Gi?{minFilter:Qn,magFilter:Qn}:{};G.map!==null&&G.map.dispose(),G.map=new ls(i.x,i.y,ht),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const L=G.getViewportCount();for(let ht=0;ht<L;ht++){const it=G.getViewport(ht);o.set(s.x*it.x,s.y*it.y,s.x*it.z,s.y*it.w),I.viewport(o),G.updateMatrices(q,ht),n=G.getFrustum(),v(E,C,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Gi&&S(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,x,P)};function S(b,E){const C=t.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ls(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,g,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,C,u,g,null)}function y(b,E,C,M){let x=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=x.uuid,B=E.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let $=H[B];$===void 0&&($=x.clone(),H[B]=$,E.addEventListener("dispose",A)),x=$}if(x.visible=E.visible,x.wireframe=E.wireframe,M===Gi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=r.properties.get(x);I.light=C}return x}function v(b,E,C,M,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Gi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const B=t.update(b),H=b.material;if(Array.isArray(H)){const $=B.groups;for(let V=0,q=$.length;V<q;V++){const G=$[V],ot=H[G.materialIndex];if(ot&&ot.visible){const L=y(b,ot,M,x);b.onBeforeShadow(r,b,E,C,B,L,G),r.renderBufferDirect(C,null,B,L,b,G),b.onAfterShadow(r,b,E,C,B,L,G)}}}else if(H.visible){const $=y(b,H,M,x);b.onBeforeShadow(r,b,E,C,B,$,null),r.renderBufferDirect(C,null,B,$,b,null),b.onAfterShadow(r,b,E,C,B,$,null)}}const I=b.children;for(let B=0,H=I.length;B<H;B++)v(I[B],E,C,M,x)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const LE={[bh]:wh,[Ah]:Ph,[Ch]:Dh,[ao]:Rh,[wh]:bh,[Ph]:Ah,[Dh]:Ch,[Rh]:ao};function IE(r,t){function e(){let U=!1;const xt=new Be;let Z=null;const nt=new Be(0,0,0,0);return{setMask:function(vt){Z!==vt&&!U&&(r.colorMask(vt,vt,vt,vt),Z=vt)},setLocked:function(vt){U=vt},setClear:function(vt,Mt,Xt,fe,Fe){Fe===!0&&(vt*=fe,Mt*=fe,Xt*=fe),xt.set(vt,Mt,Xt,fe),nt.equals(xt)===!1&&(r.clearColor(vt,Mt,Xt,fe),nt.copy(xt))},reset:function(){U=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,Z=null,nt=null,vt=null;return{setReversed:function(Mt){if(xt!==Mt){const Xt=t.get("EXT_clip_control");xt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const fe=vt;vt=null,this.setClear(fe)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?et(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(Mt){Z!==Mt&&!U&&(r.depthMask(Mt),Z=Mt)},setFunc:function(Mt){if(xt&&(Mt=LE[Mt]),nt!==Mt){switch(Mt){case bh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case Ch:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Dh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}nt=Mt}},setLocked:function(Mt){U=Mt},setClear:function(Mt){vt!==Mt&&(xt&&(Mt=1-Mt),r.clearDepth(Mt),vt=Mt)},reset:function(){U=!1,Z=null,nt=null,vt=null,xt=!1}}}function i(){let U=!1,xt=null,Z=null,nt=null,vt=null,Mt=null,Xt=null,fe=null,Fe=null;return{setTest:function(Ct){U||(Ct?et(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Ct){xt!==Ct&&!U&&(r.stencilMask(Ct),xt=Ct)},setFunc:function(Ct,Nt,te){(Z!==Ct||nt!==Nt||vt!==te)&&(r.stencilFunc(Ct,Nt,te),Z=Ct,nt=Nt,vt=te)},setOp:function(Ct,Nt,te){(Mt!==Ct||Xt!==Nt||fe!==te)&&(r.stencilOp(Ct,Nt,te),Mt=Ct,Xt=Nt,fe=te)},setLocked:function(Ct){U=Ct},setClear:function(Ct){Fe!==Ct&&(r.clearStencil(Ct),Fe=Ct)},reset:function(){U=!1,xt=null,Z=null,nt=null,vt=null,Mt=null,Xt=null,fe=null,Fe=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,S=null,y=null,v=null,A=null,b=null,E=new ie(0,0,0),C=0,M=!1,x=null,P=null,I=null,B=null,H=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=q>=2);let ot=null,L={};const ht=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),at=new Be().fromArray(ht),z=new Be().fromArray(it);function K(U,xt,Z,nt){const vt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(U,Mt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<Z;Xt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,nt,0,r.RGBA,r.UNSIGNED_BYTE,vt):r.texImage2D(xt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,vt);return Mt}const ft={};ft[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),ft[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ft[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(r.DEPTH_TEST),o.setFunc(ao),st(!1),F($f),et(r.CULL_FACE),D(Mr);function et(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Et(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Rt(U,xt){return f[U]!==xt?(r.bindFramebuffer(U,xt),f[U]=xt,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=xt),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function Ut(U,xt){let Z=u,nt=!1;if(U){Z=d.get(xt),Z===void 0&&(Z=[],d.set(xt,Z));const vt=U.textures;if(Z.length!==vt.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Xt=vt.length;Mt<Xt;Mt++)Z[Mt]=r.COLOR_ATTACHMENT0+Mt;Z.length=vt.length,nt=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,nt=!0);nt&&r.drawBuffers(Z)}function Vt(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const rt={[Hr]:r.FUNC_ADD,[O0]:r.FUNC_SUBTRACT,[F0]:r.FUNC_REVERSE_SUBTRACT};rt[B0]=r.MIN,rt[z0]=r.MAX;const tt={[k0]:r.ZERO,[H0]:r.ONE,[V0]:r.SRC_COLOR,[Eh]:r.SRC_ALPHA,[$0]:r.SRC_ALPHA_SATURATE,[Y0]:r.DST_COLOR,[W0]:r.DST_ALPHA,[G0]:r.ONE_MINUS_SRC_COLOR,[Th]:r.ONE_MINUS_SRC_ALPHA,[q0]:r.ONE_MINUS_DST_COLOR,[X0]:r.ONE_MINUS_DST_ALPHA,[Z0]:r.CONSTANT_COLOR,[K0]:r.ONE_MINUS_CONSTANT_COLOR,[j0]:r.CONSTANT_ALPHA,[J0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(U,xt,Z,nt,vt,Mt,Xt,fe,Fe,Ct){if(U===Mr){g===!0&&(Et(r.BLEND),g=!1);return}if(g===!1&&(et(r.BLEND),g=!0),U!==N0){if(U!==m||Ct!==M){if((p!==Hr||v!==Hr)&&(r.blendEquation(r.FUNC_ADD),p=Hr,v=Hr),Ct)switch(U){case js:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zf:r.blendFunc(r.ONE,r.ONE);break;case Kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case js:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Kf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,y=null,A=null,b=null,E.set(0,0,0),C=0,m=U,M=Ct}return}vt=vt||xt,Mt=Mt||Z,Xt=Xt||nt,(xt!==p||vt!==v)&&(r.blendEquationSeparate(rt[xt],rt[vt]),p=xt,v=vt),(Z!==S||nt!==y||Mt!==A||Xt!==b)&&(r.blendFuncSeparate(tt[Z],tt[nt],tt[Mt],tt[Xt]),S=Z,y=nt,A=Mt,b=Xt),(fe.equals(E)===!1||Fe!==C)&&(r.blendColor(fe.r,fe.g,fe.b,Fe),E.copy(fe),C=Fe),m=U,M=!1}function At(U,xt){U.side===Ai?Et(r.CULL_FACE):et(r.CULL_FACE);let Z=U.side===kn;xt&&(Z=!Z),st(Z),U.blending===js&&U.transparent===!1?D(Mr):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const nt=U.stencilWrite;a.setTest(nt),nt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){x!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),x=U)}function F(U){U!==I0?(et(r.CULL_FACE),U!==P&&(U===$f?r.cullFace(r.BACK):U===U0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),P=U}function ct(U){U!==I&&(V&&r.lineWidth(U),I=U)}function Ft(U,xt,Z){U?(et(r.POLYGON_OFFSET_FILL),(B!==xt||H!==Z)&&(r.polygonOffset(xt,Z),B=xt,H=Z)):Et(r.POLYGON_OFFSET_FILL)}function bt(U){U?et(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+$-1),ot!==U&&(r.activeTexture(U),ot=U)}function T(U,xt,Z){Z===void 0&&(ot===null?Z=r.TEXTURE0+$-1:Z=ot);let nt=L[Z];nt===void 0&&(nt={type:void 0,texture:void 0},L[Z]=nt),(nt.type!==U||nt.texture!==xt)&&(ot!==Z&&(r.activeTexture(Z),ot=Z),r.bindTexture(U,xt||ft[U]),nt.type=U,nt.texture=xt)}function W(){const U=L[ot];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $t(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function zt(U){at.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function Pt(U){z.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),z.copy(U))}function Qt(U,xt){let Z=c.get(xt);Z===void 0&&(Z=new WeakMap,c.set(xt,Z));let nt=Z.get(U);nt===void 0&&(nt=r.getUniformBlockIndex(xt,U.name),Z.set(U,nt))}function Wt(U,xt){const nt=c.get(xt).get(U);l.get(xt)!==nt&&(r.uniformBlockBinding(xt,nt,U.__bindingPointIndex),l.set(xt,nt))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ot=null,L={},f={},d=new WeakMap,u=[],_=null,g=!1,m=null,p=null,S=null,y=null,v=null,A=null,b=null,E=new ie(0,0,0),C=0,M=!1,x=null,P=null,I=null,B=null,H=null,at.set(0,0,r.canvas.width,r.canvas.height),z.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:et,disable:Et,bindFramebuffer:Rt,drawBuffers:Ut,useProgram:Vt,setBlending:D,setMaterial:At,setFlipSided:st,setCullFace:F,setLineWidth:ct,setPolygonOffset:Ft,setScissorTest:bt,activeTexture:R,bindTexture:T,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:_t,texImage3D:kt,updateUBOMapping:Qt,uniformBlockBinding:Wt,texStorage2D:$t,texStorage3D:lt,texSubImage2D:j,texSubImage3D:gt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:zt,viewport:Pt,reset:ce}}function Yd(r,t,e,n){const i=UE(n);switch(e){case Km:return r*t;case Jm:return r*t;case Qm:return r*t*2;case Vu:return r*t/i.components*i.byteLength;case Gu:return r*t/i.components*i.byteLength;case t_:return r*t*2/i.components*i.byteLength;case Wu:return r*t*2/i.components*i.byteLength;case jm:return r*t*3/i.components*i.byteLength;case xi:return r*t*4/i.components*i.byteLength;case Xu:return r*t*4/i.components*i.byteLength;case xl:case yl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ml:case Sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Oh:case Bh:return Math.max(r,16)*Math.max(t,8)/4;case Nh:case Fh:return Math.max(r,8)*Math.max(t,8)/2;case zh:case kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Wh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Xh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case qh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Qh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case tu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case eu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case El:case nu:case iu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case e_:case ru:return Math.ceil(r/4)*Math.ceil(t/4)*8;case su:case ou:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function UE(r){switch(r){case Qi:case qm:return{byteLength:1,components:1};case fa:case $m:case va:return{byteLength:2,components:1};case ku:case Hu:return{byteLength:2,components:4};case as:case zu:case Di:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function NE(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let f;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,T){return u?new OffscreenCanvas(R,T):zl("canvas")}function g(R,T,W){let J=1;const Q=bt(R);if((Q.width>W||Q.height>W)&&(J=W/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){const j=Math.floor(J*Q.width),gt=Math.floor(J*Q.height);f===void 0&&(f=_(j,gt));const mt=T?_(j,gt):f;return mt.width=j,mt.height=gt,mt.getContext("2d").drawImage(R,0,0,j,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+gt+")."),mt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,T,W,J,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=T;if(T===r.RED&&(W===r.FLOAT&&(j=r.R32F),W===r.HALF_FLOAT&&(j=r.R16F),W===r.UNSIGNED_BYTE&&(j=r.R8)),T===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.R8UI),W===r.UNSIGNED_SHORT&&(j=r.R16UI),W===r.UNSIGNED_INT&&(j=r.R32UI),W===r.BYTE&&(j=r.R8I),W===r.SHORT&&(j=r.R16I),W===r.INT&&(j=r.R32I)),T===r.RG&&(W===r.FLOAT&&(j=r.RG32F),W===r.HALF_FLOAT&&(j=r.RG16F),W===r.UNSIGNED_BYTE&&(j=r.RG8)),T===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RG8UI),W===r.UNSIGNED_SHORT&&(j=r.RG16UI),W===r.UNSIGNED_INT&&(j=r.RG32UI),W===r.BYTE&&(j=r.RG8I),W===r.SHORT&&(j=r.RG16I),W===r.INT&&(j=r.RG32I)),T===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGB8UI),W===r.UNSIGNED_SHORT&&(j=r.RGB16UI),W===r.UNSIGNED_INT&&(j=r.RGB32UI),W===r.BYTE&&(j=r.RGB8I),W===r.SHORT&&(j=r.RGB16I),W===r.INT&&(j=r.RGB32I)),T===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),W===r.UNSIGNED_INT&&(j=r.RGBA32UI),W===r.BYTE&&(j=r.RGBA8I),W===r.SHORT&&(j=r.RGBA16I),W===r.INT&&(j=r.RGBA32I)),T===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),T===r.RGBA){const gt=Q?Zl:he.getTransfer(J);W===r.FLOAT&&(j=r.RGBA32F),W===r.HALF_FLOAT&&(j=r.RGBA16F),W===r.UNSIGNED_BYTE&&(j=gt===xe?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(R,T){let W;return R?T===null||T===as||T===ho?W=r.DEPTH24_STENCIL8:T===Di?W=r.DEPTH32F_STENCIL8:T===fa&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===as||T===ho?W=r.DEPTH_COMPONENT24:T===Di?W=r.DEPTH_COMPONENT32F:T===fa&&(W=r.DEPTH_COMPONENT16),W}function A(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qn&&R.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function b(R){const T=R.target;T.removeEventListener("dispose",b),C(T),T.isVideoTexture&&h.delete(T)}function E(R){const T=R.target;T.removeEventListener("dispose",E),x(T)}function C(R){const T=n.get(R);if(T.__webglInit===void 0)return;const W=R.source,J=d.get(W);if(J){const Q=J[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(R),Object.keys(J).length===0&&d.delete(W)}n.remove(R)}function M(R){const T=n.get(R);r.deleteTexture(T.__webglTexture);const W=R.source,J=d.get(W);delete J[T.__cacheKey],o.memory.textures--}function x(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let Q=0;Q<T.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)r.deleteFramebuffer(T.__webglFramebuffer[J]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=R.textures;for(let J=0,Q=W.length;J<Q;J++){const j=n.get(W[J]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(R)}let P=0;function I(){P=0}function B(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function $(R,T){const W=n.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(W,R,T);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+T)}function V(R,T){const W=n.get(R);if(R.version>0&&W.__version!==R.version){z(W,R,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+T)}function q(R,T){const W=n.get(R);if(R.version>0&&W.__version!==R.version){z(W,R,T);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+T)}function G(R,T){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+T)}const ot={[ua]:r.REPEAT,[Xr]:r.CLAMP_TO_EDGE,[Uh]:r.MIRRORED_REPEAT},L={[Qn]:r.NEAREST,[av]:r.NEAREST_MIPMAP_NEAREST,[Ia]:r.NEAREST_MIPMAP_LINEAR,[Pi]:r.LINEAR,[_c]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},ht={[uv]:r.NEVER,[gv]:r.ALWAYS,[fv]:r.LESS,[i_]:r.LEQUAL,[dv]:r.EQUAL,[_v]:r.GEQUAL,[pv]:r.GREATER,[mv]:r.NOTEQUAL};function it(R,T){if(T.type===Di&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===_c||T.magFilter===Ia||T.magFilter===Yr||T.minFilter===Pi||T.minFilter===_c||T.minFilter===Ia||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ot[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ot[T.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ot[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ht[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==Ia&&T.minFilter!==Yr||T.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function at(R,T){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",b));const J=T.source;let Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));const j=H(T);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[j].usedTimes++;const gt=Q[R.__cacheKey];gt!==void 0&&(Q[R.__cacheKey].usedTimes--,gt.usedTimes===0&&M(T)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return W}function z(R,T,W){let J=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=r.TEXTURE_3D);const Q=at(R,T),j=T.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+W);const gt=n.get(j);if(j.version!==gt.__version||Q===!0){e.activeTexture(r.TEXTURE0+W);const mt=he.getPrimaries(he.workingColorSpace),yt=T.colorSpace===ur?null:he.getPrimaries(T.colorSpace),$t=T.colorSpace===ur||mt===yt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let lt=g(T.image,!1,i.maxTextureSize);lt=Ft(T,lt);const _t=s.convert(T.format,T.colorSpace),kt=s.convert(T.type);let zt=y(T.internalFormat,_t,kt,T.colorSpace,T.isVideoTexture);it(J,T);let Pt;const Qt=T.mipmaps,Wt=T.isVideoTexture!==!0,ce=gt.__version===void 0||Q===!0,U=j.dataReady,xt=A(T,lt);if(T.isDepthTexture)zt=v(T.format===uo,T.type),ce&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,zt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,zt,lt.width,lt.height,0,_t,kt,null));else if(T.isDataTexture)if(Qt.length>0){Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,xt,zt,Qt[0].width,Qt[0].height);for(let Z=0,nt=Qt.length;Z<nt;Z++)Pt=Qt[Z],Wt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,_t,kt,Pt.data):e.texImage2D(r.TEXTURE_2D,Z,zt,Pt.width,Pt.height,0,_t,kt,Pt.data);T.generateMipmaps=!1}else Wt?(ce&&e.texStorage2D(r.TEXTURE_2D,xt,zt,lt.width,lt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,_t,kt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,zt,lt.width,lt.height,0,_t,kt,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Wt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,zt,Qt[0].width,Qt[0].height,lt.depth);for(let Z=0,nt=Qt.length;Z<nt;Z++)if(Pt=Qt[Z],T.format!==xi)if(_t!==null)if(Wt){if(U)if(T.layerUpdates.size>0){const vt=Yd(Pt.width,Pt.height,T.format,T.type);for(const Mt of T.layerUpdates){const Xt=Pt.data.subarray(Mt*vt/Pt.data.BYTES_PER_ELEMENT,(Mt+1)*vt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Mt,Pt.width,Pt.height,1,_t,Xt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,lt.depth,_t,Pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,zt,Pt.width,Pt.height,lt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Pt.width,Pt.height,lt.depth,_t,kt,Pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,zt,Pt.width,Pt.height,lt.depth,0,_t,kt,Pt.data)}else{Wt&&ce&&e.texStorage2D(r.TEXTURE_2D,xt,zt,Qt[0].width,Qt[0].height);for(let Z=0,nt=Qt.length;Z<nt;Z++)Pt=Qt[Z],T.format!==xi?_t!==null?Wt?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,_t,Pt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Pt.width,Pt.height,_t,kt,Pt.data):e.texImage2D(r.TEXTURE_2D,Z,zt,Pt.width,Pt.height,0,_t,kt,Pt.data)}else if(T.isDataArrayTexture)if(Wt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,zt,lt.width,lt.height,lt.depth),U)if(T.layerUpdates.size>0){const Z=Yd(lt.width,lt.height,T.format,T.type);for(const nt of T.layerUpdates){const vt=lt.data.subarray(nt*Z/lt.data.BYTES_PER_ELEMENT,(nt+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,_t,kt,vt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,_t,kt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,lt.width,lt.height,lt.depth,0,_t,kt,lt.data);else if(T.isData3DTexture)Wt?(ce&&e.texStorage3D(r.TEXTURE_3D,xt,zt,lt.width,lt.height,lt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,_t,kt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,zt,lt.width,lt.height,lt.depth,0,_t,kt,lt.data);else if(T.isFramebufferTexture){if(ce)if(Wt)e.texStorage2D(r.TEXTURE_2D,xt,zt,lt.width,lt.height);else{let Z=lt.width,nt=lt.height;for(let vt=0;vt<xt;vt++)e.texImage2D(r.TEXTURE_2D,vt,zt,Z,nt,0,_t,kt,null),Z>>=1,nt>>=1}}else if(Qt.length>0){if(Wt&&ce){const Z=bt(Qt[0]);e.texStorage2D(r.TEXTURE_2D,xt,zt,Z.width,Z.height)}for(let Z=0,nt=Qt.length;Z<nt;Z++)Pt=Qt[Z],Wt?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,_t,kt,Pt):e.texImage2D(r.TEXTURE_2D,Z,zt,_t,kt,Pt);T.generateMipmaps=!1}else if(Wt){if(ce){const Z=bt(lt);e.texStorage2D(r.TEXTURE_2D,xt,zt,Z.width,Z.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,_t,kt,lt)}else e.texImage2D(r.TEXTURE_2D,0,zt,_t,kt,lt);m(T)&&p(J),gt.__version=j.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function K(R,T,W){if(T.image.length!==6)return;const J=at(R,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const j=n.get(Q);if(Q.version!==j.__version||J===!0){e.activeTexture(r.TEXTURE0+W);const gt=he.getPrimaries(he.workingColorSpace),mt=T.colorSpace===ur?null:he.getPrimaries(T.colorSpace),yt=T.colorSpace===ur||gt===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,lt=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!$t&&!lt?_t[nt]=g(T.image[nt],!0,i.maxCubemapSize):_t[nt]=lt?T.image[nt].image:T.image[nt],_t[nt]=Ft(T,_t[nt]);const kt=_t[0],zt=s.convert(T.format,T.colorSpace),Pt=s.convert(T.type),Qt=y(T.internalFormat,zt,Pt,T.colorSpace),Wt=T.isVideoTexture!==!0,ce=j.__version===void 0||J===!0,U=Q.dataReady;let xt=A(T,kt);it(r.TEXTURE_CUBE_MAP,T);let Z;if($t){Wt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,kt.width,kt.height);for(let nt=0;nt<6;nt++){Z=_t[nt].mipmaps;for(let vt=0;vt<Z.length;vt++){const Mt=Z[vt];T.format!==xi?zt!==null?Wt?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Qt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,Mt.width,Mt.height,zt,Pt,Mt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,Qt,Mt.width,Mt.height,0,zt,Pt,Mt.data)}}}else{if(Z=T.mipmaps,Wt&&ce){Z.length>0&&xt++;const nt=bt(_t[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Qt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,zt,Pt,_t[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,_t[nt].width,_t[nt].height,0,zt,Pt,_t[nt].data);for(let vt=0;vt<Z.length;vt++){const Xt=Z[vt].image[nt].image;Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Xt.width,Xt.height,zt,Pt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Qt,Xt.width,Xt.height,0,zt,Pt,Xt.data)}}else{Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,zt,Pt,_t[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Qt,zt,Pt,_t[nt]);for(let vt=0;vt<Z.length;vt++){const Mt=Z[vt];Wt?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,zt,Pt,Mt.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,Qt,zt,Pt,Mt.image[nt])}}}m(T)&&p(r.TEXTURE_CUBE_MAP),j.__version=Q.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ft(R,T,W,J,Q,j){const gt=s.convert(W.format,W.colorSpace),mt=s.convert(W.type),yt=y(W.internalFormat,gt,mt,W.colorSpace),$t=n.get(T),lt=n.get(W);if(lt.__renderTarget=T,!$t.__hasExternalTextures){const _t=Math.max(1,T.width>>j),kt=Math.max(1,T.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,yt,_t,kt,T.depth,0,gt,mt,null):e.texImage2D(Q,j,yt,_t,kt,0,gt,mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,lt.__webglTexture,0,st(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,lt.__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function et(R,T,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){const J=T.depthTexture,Q=J&&J.isDepthTexture?J.type:null,j=v(T.stencilBuffer,Q),gt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=st(T);F(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,mt,j,T.width,T.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,j,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,j,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,gt,r.RENDERBUFFER,R)}else{const J=T.textures;for(let Q=0;Q<J.length;Q++){const j=J[Q],gt=s.convert(j.format,j.colorSpace),mt=s.convert(j.type),yt=y(j.internalFormat,gt,mt,j.colorSpace),$t=st(T);W&&F(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$t,yt,T.width,T.height):F(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$t,yt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,yt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Et(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(T.depthTexture);J.__renderTarget=T,(!J.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Q=J.__webglTexture,j=st(T);if(T.depthTexture.format===Js)F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(T.depthTexture.format===uo)F(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Rt(R){const T=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),J){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=J}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Et(T.__webglFramebuffer,R)}else if(W){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]===void 0)T.__webglDepthbuffer[J]=r.createRenderbuffer(),et(T.__webglDepthbuffer[J],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),et(T.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(R,T,W){const J=n.get(R);T!==void 0&&ft(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&Rt(R)}function Vt(R){const T=R.texture,W=n.get(R),J=n.get(T);R.addEventListener("dispose",E);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,gt=Q.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=T.version,o.memory.textures++),j){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let yt=0;yt<T.mipmaps.length;yt++)W.__webglFramebuffer[mt][yt]=r.createFramebuffer()}else W.__webglFramebuffer[mt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)W.__webglFramebuffer[mt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(gt)for(let mt=0,yt=Q.length;mt<yt;mt++){const $t=n.get(Q[mt]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&F(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<Q.length;mt++){const yt=Q[mt];W.__webglColorRenderbuffer[mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const $t=s.convert(yt.format,yt.colorSpace),lt=s.convert(yt.type),_t=y(yt.internalFormat,$t,lt,yt.colorSpace,R.isXRRenderTarget===!0),kt=st(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,_t,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),et(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),it(r.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)ft(W.__webglFramebuffer[mt][yt],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else ft(W.__webglFramebuffer[mt],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let mt=0,yt=Q.length;mt<yt;mt++){const $t=Q[mt],lt=n.get($t);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),it(r.TEXTURE_2D,$t),ft(W.__webglFramebuffer,R,$t,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,0),m($t)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let mt=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(mt,J.__webglTexture),it(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)ft(W.__webglFramebuffer[yt],R,T,r.COLOR_ATTACHMENT0,mt,yt);else ft(W.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,mt,0);m(T)&&p(mt),e.unbindTexture()}R.depthBuffer&&Rt(R)}function rt(R){const T=R.textures;for(let W=0,J=T.length;W<J;W++){const Q=T[W];if(m(Q)){const j=S(R),gt=n.get(Q).__webglTexture;e.bindTexture(j,gt),p(j),e.unbindTexture()}}}const tt=[],D=[];function At(R){if(R.samples>0){if(F(R)===!1){const T=R.textures,W=R.width,J=R.height;let Q=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=n.get(R),mt=T.length>1;if(mt)for(let yt=0;yt<T.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<T.length;yt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);const $t=n.get(T[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$t,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,Q,r.NEAREST),l===!0&&(tt.length=0,D.length=0,tt.push(r.COLOR_ATTACHMENT0+yt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<T.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);const $t=n.get(T[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,gt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,$t,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function st(R){return Math.min(i.maxSamples,R.samples)}function F(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Ft(R,T){const W=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==mo&&W!==ur&&(he.getTransfer(W)===xe?(J!==xi||Q!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function bt(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=G,this.rebindTextures=Ut,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=F}function OE(r,t){function e(n,i=ur){let s;const o=he.getTransfer(i);if(n===Qi)return r.UNSIGNED_BYTE;if(n===ku)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Zm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===qm)return r.BYTE;if(n===$m)return r.SHORT;if(n===fa)return r.UNSIGNED_SHORT;if(n===zu)return r.INT;if(n===as)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===va)return r.HALF_FLOAT;if(n===Km)return r.ALPHA;if(n===jm)return r.RGB;if(n===xi)return r.RGBA;if(n===Jm)return r.LUMINANCE;if(n===Qm)return r.LUMINANCE_ALPHA;if(n===Js)return r.DEPTH_COMPONENT;if(n===uo)return r.DEPTH_STENCIL;if(n===Vu)return r.RED;if(n===Gu)return r.RED_INTEGER;if(n===t_)return r.RG;if(n===Wu)return r.RG_INTEGER;if(n===Xu)return r.RGBA_INTEGER;if(n===xl||n===yl||n===Ml||n===Sl)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nh||n===Oh||n===Fh||n===Bh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zh||n===kh||n===Hh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===zh||n===kh)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vh||n===Gh||n===Wh||n===Xh||n===Yh||n===qh||n===$h||n===Zh||n===Kh||n===jh||n===Jh||n===Qh||n===tu||n===eu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$h)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Kh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===eu)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===nu||n===iu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===El)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===iu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===e_||n===ru||n===su||n===ou)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===El)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ou)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class FE extends ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yi extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BE={type:"move"};class Gc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;c.inputState.pinching&&d>u+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BE)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new vn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ar({vertexShader:zE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VE extends fs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,_=null;const g=new HE,m=e.getContextAttributes();let p=null,S=null;const y=[],v=[],A=new pt;let b=null;const E=new ai;E.viewport=new Be;const C=new ai;C.viewport=new Be;const M=[E,C],x=new FE;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=y[z];return K===void 0&&(K=new Gc,y[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=y[z];return K===void 0&&(K=new Gc,y[z]=K),K.getGripSpace()},this.getHand=function(z){let K=y[z];return K===void 0&&(K=new Gc,y[z]=K),K.getHandSpace()};function B(z){const K=v.indexOf(z.inputSource);if(K===-1)return;const ft=y[K];ft!==void 0&&(ft.update(z.inputSource,z.frame,c||o),ft.dispatchEvent({type:z.type,data:z.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",$);for(let z=0;z<y.length;z++){const K=v[z];K!==null&&(v[z]=null,y[z].disconnect(K))}P=null,I=null,g.reset(),t.setRenderTarget(p),u=null,d=null,f=null,i=null,S=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new ls(u.framebufferWidth,u.framebufferHeight,{format:xi,type:Qi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,ft=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=m.stencil?uo:Js,ft=m.stencil?ho:as);const Et={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(Et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new ls(d.textureWidth,d.textureHeight,{format:xi,type:Qi,depthTexture:new g_(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(z){for(let K=0;K<z.removed.length;K++){const ft=z.removed[K],et=v.indexOf(ft);et>=0&&(v[et]=null,y[et].disconnect(ft))}for(let K=0;K<z.added.length;K++){const ft=z.added[K];let et=v.indexOf(ft);if(et===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=v.length){v.push(ft),et=Rt;break}else if(v[Rt]===null){v[Rt]=ft,et=Rt;break}if(et===-1)break}const Et=y[et];Et&&Et.connect(ft)}}const V=new N,q=new N;function G(z,K,ft){V.setFromMatrixPosition(K.matrixWorld),q.setFromMatrixPosition(ft.matrixWorld);const et=V.distanceTo(q),Et=K.projectionMatrix.elements,Rt=ft.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),Vt=Et[14]/(Et[10]+1),rt=(Et[9]+1)/Et[5],tt=(Et[9]-1)/Et[5],D=(Et[8]-1)/Et[0],At=(Rt[8]+1)/Rt[0],st=Ut*D,F=Ut*At,ct=et/(-D+At),Ft=ct*-D;if(K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ft),z.translateZ(ct),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Et[10]===-1)z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const bt=Ut+ct,R=Vt+ct,T=st-Ft,W=F+(et-Ft),J=rt*Vt/R*bt,Q=tt*Vt/R*bt;z.projectionMatrix.makePerspective(T,W,J,Q,bt,R),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function ot(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let K=z.near,ft=z.far;g.texture!==null&&(g.depthNear>0&&(K=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),x.near=C.near=E.near=K,x.far=C.far=E.far=ft,(P!==x.near||I!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,I=x.far),E.layers.mask=z.layers.mask|2,C.layers.mask=z.layers.mask|4,x.layers.mask=E.layers.mask|C.layers.mask;const et=z.parent,Et=x.cameras;ot(x,et);for(let Rt=0;Rt<Et.length;Rt++)ot(Et[Rt],et);Et.length===2?G(x,E,C):x.projectionMatrix.copy(E.projectionMatrix),L(z,x,et)};function L(z,K,ft){ft===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(ft.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=da*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ht=null;function it(z,K){if(h=K.getViewerPose(c||o),_=K,h!==null){const ft=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let et=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let Rt=0;Rt<ft.length;Rt++){const Ut=ft[Rt];let Vt=null;if(u!==null)Vt=u.getViewport(Ut);else{const tt=f.getViewSubImage(d,Ut);Vt=tt.viewport,Rt===0&&(t.setRenderTargetTextures(S,tt.colorTexture,d.ignoreDepthValues?void 0:tt.depthStencilTexture),t.setRenderTarget(S))}let rt=M[Rt];rt===void 0&&(rt=new ai,rt.layers.enable(Rt),rt.viewport=new Be,M[Rt]=rt),rt.matrix.fromArray(Ut.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ut.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Rt===0&&(x.matrix.copy(rt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(rt)}const Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=f.getDepthInformation(ft[0]);Rt&&Rt.isValid&&Rt.texture&&g.init(t,Rt,i.renderState)}}for(let ft=0;ft<y.length;ft++){const et=v[ft],Et=y[ft];et!==null&&Et!==void 0&&Et.update(et,K,c||o)}ht&&ht(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}const at=new m_;at.setAnimationLoop(it),this.setAnimationLoop=function(z){ht=z},this.dispose=function(){}}}const Or=new Ni,GE=new Te;function WE(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,f_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,Or.copy(v),Or.x*=-1,Or.y*=-1,Or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(GE.makeRotationFromEuler(Or)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XE(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=i[S.id];v===void 0&&(_(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(S,A);const b=t.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function h(S){const y=f();S.__bindingPointIndex=y;const v=r.createBuffer(),A=S.__size,b=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=i[S.id],v=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,E=v.length;b<E;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,x=C.length;M<x;M++){const P=C[M];if(u(P,b,M,A)===!0){const I=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let $=0;$<B.length;$++){const V=B[$],q=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,I+H,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,H),H+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,y,v,A){const b=S.value,E=y+"_"+v;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const C=A[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(S){const y=S.uniforms;let v=0;const A=16;for(let E=0,C=y.length;E<C;E++){const M=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,P=M.length;x<P;x++){const I=M[x],B=Array.isArray(I.value)?I.value:[I.value];for(let H=0,$=B.length;H<$;H++){const V=B[H],q=g(V),G=v%A,ot=G%q.boundary,L=G+ot;v+=ot,L!==0&&A-L<q.storage&&(v+=A-L),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=q.storage}}}const b=v%A;return b>0&&(v+=A-b),S.__size=v,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class YE{constructor(t={}){const{canvas:e=Uv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=Sr,this.toneMappingExposure=1;const v=this;let A=!1,b=0,E=0,C=null,M=-1,x=null;const P=new Be,I=new Be;let B=null;const H=new ie(0);let $=0,V=e.width,q=e.height,G=1,ot=null,L=null;const ht=new Be(0,0,V,q),it=new Be(0,0,V,q);let at=!1;const z=new $u;let K=!1,ft=!1;const et=new Te,Et=new Te,Rt=new N,Ut=new Be,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function tt(){return C===null?G:1}let D=n;function At(w,O){return e.getContext(w,O)}try{const w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bu}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),D===null){const O="webgl2";if(D=At(O,w),D===null)throw At(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let st,F,ct,Ft,bt,R,T,W,J,Q,j,gt,mt,yt,$t,lt,_t,kt,zt,Pt,Qt,Wt,ce,U;function xt(){st=new jM(D),st.init(),Wt=new OE(D,st),F=new XM(D,st,t,Wt),ct=new IE(D,st),F.reverseDepthBuffer&&d&&ct.buffers.depth.setReversed(!0),Ft=new tS(D),bt=new vE,R=new NE(D,st,ct,bt,F,Wt,Ft),T=new qM(v),W=new KM(v),J=new ax(D),ce=new GM(D,J),Q=new JM(D,J,Ft,ce),j=new nS(D,Q,J,Ft),zt=new eS(D,F,R),lt=new YM(bt),gt=new gE(v,T,W,st,F,ce,lt),mt=new WE(v,bt),yt=new yE,$t=new wE(st),kt=new VM(v,T,W,ct,j,u,l),_t=new DE(v,j,F),U=new XE(D,Ft,F,ct),Pt=new WM(D,st,Ft),Qt=new QM(D,st,Ft),Ft.programs=gt.programs,v.capabilities=F,v.extensions=st,v.properties=bt,v.renderLists=yt,v.shadowMap=_t,v.state=ct,v.info=Ft}xt();const Z=new VE(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(V,q,!1))},this.getSize=function(w){return w.set(V,q)},this.setSize=function(w,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,q=O,e.width=Math.floor(w*G),e.height=Math.floor(O*G),X===!0&&(e.style.width=w+"px",e.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(V*G,q*G).floor()},this.setDrawingBufferSize=function(w,O,X){V=w,q=O,G=X,e.width=Math.floor(w*X),e.height=Math.floor(O*X),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,O,X,Y){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,O,X,Y),ct.viewport(P.copy(ht).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,O,X,Y){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,O,X,Y),ct.scissor(I.copy(it).multiplyScalar(G).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(w){ct.setScissorTest(at=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(w=!0,O=!0,X=!0){let Y=0;if(w){let k=!1;if(C!==null){const ut=C.texture.format;k=ut===Xu||ut===Wu||ut===Gu}if(k){const ut=C.texture.type,dt=ut===Qi||ut===as||ut===fa||ut===ho||ut===ku||ut===Hu,St=kt.getClearColor(),Dt=kt.getClearAlpha(),Yt=St.r,Kt=St.g,It=St.b;dt?(_[0]=Yt,_[1]=Kt,_[2]=It,_[3]=Dt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Yt,g[1]=Kt,g[2]=It,g[3]=Dt,D.clearBufferiv(D.COLOR,0,g))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT),X&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),yt.dispose(),$t.dispose(),bt.dispose(),T.dispose(),W.dispose(),j.dispose(),ce.dispose(),U.dispose(),gt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Tt),Z.removeEventListener("sessionend",Zt),Ot.stop()};function nt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Ft.autoReset,O=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,k=_t.type;xt(),Ft.autoReset=w,_t.enabled=O,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=k}function Mt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Xt(w){const O=w.target;O.removeEventListener("dispose",Xt),fe(O)}function fe(w){Fe(w),bt.remove(w)}function Fe(w){const O=bt.get(w).programs;O!==void 0&&(O.forEach(function(X){gt.releaseProgram(X)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,X,Y,k,ut){O===null&&(O=Vt);const dt=k.isMesh&&k.matrixWorld.determinant()<0,St=Vn(w,O,X,Y,k);ct.setMaterial(Y,dt);let Dt=X.index,Yt=1;if(Y.wireframe===!0){if(Dt=Q.getWireframeAttribute(X),Dt===void 0)return;Yt=2}const Kt=X.drawRange,It=X.attributes.position;let Jt=Kt.start*Yt,de=(Kt.start+Kt.count)*Yt;ut!==null&&(Jt=Math.max(Jt,ut.start*Yt),de=Math.min(de,(ut.start+ut.count)*Yt)),Dt!==null?(Jt=Math.max(Jt,0),de=Math.min(de,Dt.count)):It!=null&&(Jt=Math.max(Jt,0),de=Math.min(de,It.count));const _e=de-Jt;if(_e<0||_e===1/0)return;ce.setup(k,Y,St,X,Dt);let We,ge=Pt;if(Dt!==null&&(We=J.get(Dt),ge=Qt,ge.setIndex(We)),k.isMesh)Y.wireframe===!0?(ct.setLineWidth(Y.wireframeLinewidth*tt()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(k.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),ct.setLineWidth(Bt*tt()),k.isLineSegments?ge.setMode(D.LINES):k.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else k.isPoints?ge.setMode(D.POINTS):k.isSprite&&ge.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ge.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ge.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,Fi=k._multiDrawCounts,ve=k._multiDrawCount,di=Dt?J.get(Dt).bytesPerElement:1,ms=bt.get(Y).currentProgram.getUniforms();for(let Gn=0;Gn<ve;Gn++)ms.setValue(D,"_gl_DrawID",Gn),ge.render(Bt[Gn]/di,Fi[Gn])}else if(k.isInstancedMesh)ge.renderInstances(Jt,_e,k.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Fi=Math.min(X.instanceCount,Bt);ge.renderInstances(Jt,_e,Fi)}else ge.render(Jt,_e)};function Ct(w,O,X){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,Me(w,O,X),w.side=wr,w.needsUpdate=!0,Me(w,O,X),w.side=Ai):Me(w,O,X)}this.compile=function(w,O,X=null){X===null&&(X=w),p=$t.get(X),p.init(O),y.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==X&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const Y=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ut=k.material;if(ut)if(Array.isArray(ut))for(let dt=0;dt<ut.length;dt++){const St=ut[dt];Ct(St,X,k),Y.add(St)}else Ct(ut,X,k),Y.add(ut)}),y.pop(),p=null,Y},this.compileAsync=function(w,O,X=null){const Y=this.compile(w,O,X);return new Promise(k=>{function ut(){if(Y.forEach(function(dt){bt.get(dt).currentProgram.isReady()&&Y.delete(dt)}),Y.size===0){k(w);return}setTimeout(ut,10)}st.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Nt=null;function te(w){Nt&&Nt(w)}function Tt(){Ot.stop()}function Zt(){Ot.start()}const Ot=new m_;Ot.setAnimationLoop(te),typeof self!="undefined"&&Ot.setContext(self),this.setAnimationLoop=function(w){Nt=w,Z.setAnimationLoop(w),w===null?Ot.stop():Ot.start()},Z.addEventListener("sessionstart",Tt),Z.addEventListener("sessionend",Zt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,O,C),p=$t.get(w,y.length),p.init(O),y.push(p),Et.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),z.setFromProjectionMatrix(Et),ft=this.localClippingEnabled,K=lt.init(this.clippingPlanes,ft),m=yt.get(w,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ut=v.xr.getDepthSensingMesh();ut!==null&&qt(ut,O,-1/0,v.sortObjects)}qt(w,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,L),rt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,rt&&kt.addToRenderList(m,w),this.info.render.frame++,K===!0&&lt.beginShadows();const X=p.state.shadowsArray;_t.render(X,w,O),K===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){const ut=O.cameras;if(k.length>0)for(let dt=0,St=ut.length;dt<St;dt++){const Dt=ut[dt];re(Y,k,w,Dt)}rt&&kt.render(w);for(let dt=0,St=ut.length;dt<St;dt++){const Dt=ut[dt];He(m,w,Dt,Dt.viewport)}}else k.length>0&&re(Y,k,w,O),rt&&kt.render(w),He(m,w,O);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(v,w,O),ce.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],K===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function qt(w,O,X,Y){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||z.intersectsSprite(w)){Y&&Ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const dt=j.update(w),St=w.material;St.visible&&m.push(w,dt,St,X,Ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||z.intersectsObject(w))){const dt=j.update(w),St=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ut.copy(w.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ut.copy(dt.boundingSphere.center)),Ut.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(St)){const Dt=dt.groups;for(let Yt=0,Kt=Dt.length;Yt<Kt;Yt++){const It=Dt[Yt],Jt=St[It.materialIndex];Jt&&Jt.visible&&m.push(w,dt,Jt,X,Ut.z,It)}}else St.visible&&m.push(w,dt,St,X,Ut.z,null)}}const ut=w.children;for(let dt=0,St=ut.length;dt<St;dt++)qt(ut[dt],O,X,Y)}function He(w,O,X,Y){const k=w.opaque,ut=w.transmissive,dt=w.transparent;p.setupLightsView(X),K===!0&&lt.setGlobalState(v.clippingPlanes,X),Y&&ct.viewport(P.copy(Y)),k.length>0&&be(k,O,X),ut.length>0&&be(ut,O,X),dt.length>0&&be(dt,O,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function re(w,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ls(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?va:Qi,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const ut=p.state.transmissionRenderTarget[Y.id],dt=Y.viewport||P;ut.setSize(dt.z,dt.w);const St=v.getRenderTarget();v.setRenderTarget(ut),v.getClearColor(H),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),rt&&kt.render(X);const Dt=v.toneMapping;v.toneMapping=Sr;const Yt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),K===!0&&lt.setGlobalState(v.clippingPlanes,Y),be(w,X,Y),R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut),st.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let It=0,Jt=O.length;It<Jt;It++){const de=O[It],_e=de.object,We=de.geometry,ge=de.material,Bt=de.group;if(ge.side===Ai&&_e.layers.test(Y.layers)){const Fi=ge.side;ge.side=kn,ge.needsUpdate=!0,Ze(_e,X,Y,We,ge,Bt),ge.side=Fi,ge.needsUpdate=!0,Kt=!0}}Kt===!0&&(R.updateMultisampleRenderTarget(ut),R.updateRenderTargetMipmap(ut))}v.setRenderTarget(St),v.setClearColor(H,$),Yt!==void 0&&(Y.viewport=Yt),v.toneMapping=Dt}function be(w,O,X){const Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ut=w.length;k<ut;k++){const dt=w[k],St=dt.object,Dt=dt.geometry,Yt=Y===null?dt.material:Y,Kt=dt.group;St.layers.test(X.layers)&&Ze(St,O,X,Dt,Yt,Kt)}}function Ze(w,O,X,Y,k,ut){w.onBeforeRender(v,O,X,Y,k,ut),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(v,O,X,Y,w,ut),k.transparent===!0&&k.side===Ai&&k.forceSinglePass===!1?(k.side=kn,k.needsUpdate=!0,v.renderBufferDirect(X,O,Y,k,w,ut),k.side=wr,k.needsUpdate=!0,v.renderBufferDirect(X,O,Y,k,w,ut),k.side=Ai):v.renderBufferDirect(X,O,Y,k,w,ut),w.onAfterRender(v,O,X,Y,k,ut)}function Me(w,O,X){O.isScene!==!0&&(O=Vt);const Y=bt.get(w),k=p.state.lights,ut=p.state.shadowsArray,dt=k.state.version,St=gt.getParameters(w,k.state,ut,O,X),Dt=gt.getProgramCacheKey(St);let Yt=Y.programs;Y.environment=w.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(w.isMeshStandardMaterial?W:T).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",Xt),Yt=new Map,Y.programs=Yt);let Kt=Yt.get(Dt);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===dt)return me(w,St),Kt}else St.uniforms=gt.getUniforms(w),w.onBeforeCompile(St,v),Kt=gt.acquireProgram(St,Dt),Yt.set(Dt,Kt),Y.uniforms=St.uniforms;const It=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(It.clippingPlanes=lt.uniform),me(w,St),Y.needsLights=yn(w),Y.lightsStateVersion=dt,Y.needsLights&&(It.ambientLightColor.value=k.state.ambient,It.lightProbe.value=k.state.probe,It.directionalLights.value=k.state.directional,It.directionalLightShadows.value=k.state.directionalShadow,It.spotLights.value=k.state.spot,It.spotLightShadows.value=k.state.spotShadow,It.rectAreaLights.value=k.state.rectArea,It.ltc_1.value=k.state.rectAreaLTC1,It.ltc_2.value=k.state.rectAreaLTC2,It.pointLights.value=k.state.point,It.pointLightShadows.value=k.state.pointShadow,It.hemisphereLights.value=k.state.hemi,It.directionalShadowMap.value=k.state.directionalShadowMap,It.directionalShadowMatrix.value=k.state.directionalShadowMatrix,It.spotShadowMap.value=k.state.spotShadowMap,It.spotLightMatrix.value=k.state.spotLightMatrix,It.spotLightMap.value=k.state.spotLightMap,It.pointShadowMap.value=k.state.pointShadowMap,It.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function Se(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Tl.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function me(w,O){const X=bt.get(w);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Vn(w,O,X,Y,k){O.isScene!==!0&&(O=Vt),R.resetTextureUnits();const ut=O.fog,dt=Y.isMeshStandardMaterial?O.environment:null,St=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:mo,Dt=(Y.isMeshStandardMaterial?W:T).get(Y.envMap||dt),Yt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!X.morphAttributes.position,Jt=!!X.morphAttributes.normal,de=!!X.morphAttributes.color;let _e=Sr;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(_e=v.toneMapping);const We=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=We!==void 0?We.length:0,Bt=bt.get(Y),Fi=p.state.lights;if(K===!0&&(ft===!0||w!==x)){const ni=w===x&&Y.id===M;lt.setState(Y,w,ni)}let ve=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Fi.state.version||Bt.outputColorSpace!==St||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Dt||Y.fog===!0&&Bt.fog!==ut||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==lt.numPlanes||Bt.numIntersection!==lt.numIntersection)||Bt.vertexAlphas!==Yt||Bt.vertexTangents!==Kt||Bt.morphTargets!==It||Bt.morphNormals!==Jt||Bt.morphColors!==de||Bt.toneMapping!==_e||Bt.morphTargetsCount!==ge)&&(ve=!0):(ve=!0,Bt.__version=Y.version);let di=Bt.currentProgram;ve===!0&&(di=Me(Y,O,k));let ms=!1,Gn=!1,xo=!1;const Ce=di.getUniforms(),Si=Bt.uniforms;if(ct.useProgram(di.program)&&(ms=!0,Gn=!0,xo=!0),Y.id!==M&&(M=Y.id,Gn=!0),ms||x!==w){ct.buffers.depth.getReversed()?(et.copy(w.projectionMatrix),Ov(et),Fv(et),Ce.setValue(D,"projectionMatrix",et)):Ce.setValue(D,"projectionMatrix",w.projectionMatrix),Ce.setValue(D,"viewMatrix",w.matrixWorldInverse);const tr=Ce.map.cameraPosition;tr!==void 0&&tr.setValue(D,Rt.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Gn=!0,xo=!0)}if(k.isSkinnedMesh){Ce.setOptional(D,k,"bindMatrix"),Ce.setOptional(D,k,"bindMatrixInverse");const ni=k.skeleton;ni&&(ni.boneTexture===null&&ni.computeBoneTexture(),Ce.setValue(D,"boneTexture",ni.boneTexture,R))}k.isBatchedMesh&&(Ce.setOptional(D,k,"batchingTexture"),Ce.setValue(D,"batchingTexture",k._matricesTexture,R),Ce.setOptional(D,k,"batchingIdTexture"),Ce.setValue(D,"batchingIdTexture",k._indirectTexture,R),Ce.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ce.setValue(D,"batchingColorTexture",k._colorsTexture,R));const yo=X.morphAttributes;if((yo.position!==void 0||yo.normal!==void 0||yo.color!==void 0)&&zt.update(k,X,di),(Gn||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,Ce.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Si.envMap.value=Dt,Si.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(Si.envMapIntensity.value=O.environmentIntensity),Gn&&(Ce.setValue(D,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Ae(Si,xo),ut&&Y.fog===!0&&mt.refreshFogUniforms(Si,ut),mt.refreshMaterialUniforms(Si,Y,G,q,p.state.transmissionRenderTarget[w.id]),Tl.upload(D,Se(Bt),Si,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tl.upload(D,Se(Bt),Si,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(D,"center",k.center),Ce.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(D,"normalMatrix",k.normalMatrix),Ce.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const ni=Y.uniformsGroups;for(let tr=0,er=ni.length;tr<er;tr++){const ff=ni[tr];U.update(ff,di),U.bind(ff,di)}}return di}function Ae(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function yn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,O,X){bt.get(w.texture).__webglTexture=O,bt.get(w.depthTexture).__webglTexture=X;const Y=bt.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const X=bt.get(w);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,X=0){C=w,b=O,E=X;let Y=!0,k=null,ut=!1,dt=!1;if(w){const Dt=bt.get(w);if(Dt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Dt.__hasExternalTextures)R.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const It=w.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&bt.has(It)&&(w.width!==It.image.width||w.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(dt=!0);const Kt=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[O])?k=Kt[O][X]:k=Kt[O],ut=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[X]:k=Kt,P.copy(w.viewport),I.copy(w.scissor),B=w.scissorTest}else P.copy(ht).multiplyScalar(G).floor(),I.copy(it).multiplyScalar(G).floor(),B=at;if(ct.bindFramebuffer(D.FRAMEBUFFER,k)&&Y&&ct.drawBuffers(w,k),ct.viewport(P),ct.scissor(I),ct.setScissorTest(B),ut){const Dt=bt.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,X)}else if(dt){const Dt=bt.get(w.texture),Yt=O||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Yt)}M=-1},this.readRenderTargetPixels=function(w,O,X,Y,k,ut,dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){ct.bindFramebuffer(D.FRAMEBUFFER,St);try{const Dt=w.texture,Yt=Dt.format,Kt=Dt.type;if(!F.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Y&&X>=0&&X<=w.height-k&&D.readPixels(O,X,Y,k,Wt.convert(Yt),Wt.convert(Kt),ut)}finally{const Dt=C!==null?bt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(w,O,X,Y,k,ut,dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){const Dt=w.texture,Yt=Dt.format,Kt=Dt.type;if(!F.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-Y&&X>=0&&X<=w.height-k){ct.bindFramebuffer(D.FRAMEBUFFER,St);const It=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.bufferData(D.PIXEL_PACK_BUFFER,ut.byteLength,D.STREAM_READ),D.readPixels(O,X,Y,k,Wt.convert(Yt),Wt.convert(Kt),0);const Jt=C!==null?bt.get(C).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,Jt);const de=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nv(D,de,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,It),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ut),D.deleteBuffer(It),D.deleteSync(de),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,X=0){w.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(w.image.width*Y),ut=Math.floor(w.image.height*Y),dt=O!==null?O.x:0,St=O!==null?O.y:0;R.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,dt,St,k,ut),ct.unbindTexture()},this.copyTextureToTexture=function(w,O,X=null,Y=null,k=0){w.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let ut,dt,St,Dt,Yt,Kt,It,Jt,de;const _e=w.isCompressedTexture?w.mipmaps[k]:w.image;X!==null?(ut=X.max.x-X.min.x,dt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,Yt=X.min.y,Kt=X.isBox3?X.min.z:0):(ut=_e.width,dt=_e.height,St=_e.depth||1,Dt=0,Yt=0,Kt=0),Y!==null?(It=Y.x,Jt=Y.y,de=Y.z):(It=0,Jt=0,de=0);const We=Wt.convert(O.format),ge=Wt.convert(O.type);let Bt;O.isData3DTexture?(R.setTexture3D(O,0),Bt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Bt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const Fi=D.getParameter(D.UNPACK_ROW_LENGTH),ve=D.getParameter(D.UNPACK_IMAGE_HEIGHT),di=D.getParameter(D.UNPACK_SKIP_PIXELS),ms=D.getParameter(D.UNPACK_SKIP_ROWS),Gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Kt);const xo=w.isDataArrayTexture||w.isData3DTexture,Ce=O.isDataArrayTexture||O.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Si=bt.get(w),yo=bt.get(O),ni=bt.get(Si.__renderTarget),tr=bt.get(yo.__renderTarget);ct.bindFramebuffer(D.READ_FRAMEBUFFER,ni.__webglFramebuffer),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let er=0;er<St;er++)xo&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(w).__webglTexture,k,Kt+er),w.isDepthTexture?(Ce&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,bt.get(O).__webglTexture,k,de+er),D.blitFramebuffer(Dt,Yt,ut,dt,It,Jt,ut,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):Ce?D.copyTexSubImage3D(Bt,k,It,Jt,de+er,Dt,Yt,ut,dt):D.copyTexSubImage2D(Bt,k,It,Jt,de+er,Dt,Yt,ut,dt);ct.bindFramebuffer(D.READ_FRAMEBUFFER,null),ct.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ce?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Bt,k,It,Jt,de,ut,dt,St,We,ge,_e.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,k,It,Jt,de,ut,dt,St,We,_e.data):D.texSubImage3D(Bt,k,It,Jt,de,ut,dt,St,We,ge,_e):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,It,Jt,ut,dt,We,ge,_e.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,It,Jt,_e.width,_e.height,We,_e.data):D.texSubImage2D(D.TEXTURE_2D,k,It,Jt,ut,dt,We,ge,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,Fi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve),D.pixelStorei(D.UNPACK_SKIP_PIXELS,di),D.pixelStorei(D.UNPACK_SKIP_ROWS,ms),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Gn),k===0&&O.generateMipmaps&&D.generateMipmap(Bt),ct.unbindTexture()},this.copyTextureToTexture3D=function(w,O,X=null,Y=null,k=0){return w.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],O=arguments[3],k=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,X,Y,k)},this.initRenderTarget=function(w){bt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){b=0,E=0,C=null,ct.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}class Ku{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ie(t),this.near=e,this.far=n}clone(){return new Ku(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qE extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $E extends vn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Qn,h=Qn,f,d){super(null,o,a,l,c,h,i,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qd extends Mi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Is=new Te,$d=new Te,tl=[],Zd=new ps,ZE=new Te,Co=new ue,Ro=new _o;class gr extends ue{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ZE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Zd.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Zd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Ro.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Ro)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Co.geometry=this.geometry,Co.material=this.material,Co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),t.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Is),$d.multiplyMatrices(n,Is),Co.matrixWorld=$d,Co.raycast(t,tl);for(let o=0,a=tl.length;o<a;o++){const l=tl[o];l.instanceId=s,l.object=this,e.push(l)}tl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $E(new Float32Array(i*this.count),i,this.count,Vu,Di));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class kl extends go{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Hl=new N,Vl=new N,Kd=new Te,Po=new qu,el=new _o,Wc=new N,jd=new N;class S_ extends ke{constructor(t=new Ln,e=new kl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Hl.fromBufferAttribute(e,i-1),Vl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Hl.distanceTo(Vl);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),el.copy(n.boundingSphere),el.applyMatrix4(i),el.radius+=s,t.ray.intersectsSphere(el)===!1)return;Kd.copy(i).invert(),Po.copy(t.ray).applyMatrix4(Kd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){const p=h.getX(g),S=h.getX(g+1),y=nl(this,t,Po,l,p,S);y&&e.push(y)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(u),p=nl(this,t,Po,l,g,m);p&&e.push(p)}}else{const u=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=u,m=_-1;g<m;g+=c){const p=nl(this,t,Po,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){const g=nl(this,t,Po,l,_-1,u);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function nl(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Hl.fromBufferAttribute(o,i),Vl.fromBufferAttribute(o,s),e.distanceSqToSegment(Hl,Vl,Wc,jd)>n)return;Wc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Wc);if(!(l<t.near||l>t.far))return{distance:l,point:jd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Jd=new N,Qd=new N;class E_ extends S_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Jd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jd.distanceTo(Qd);t.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T_ extends vn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,u=(o-h)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],s=[],o=[],a=new N,l=new Te;for(let u=0;u<=t;u++){const _=u/t;i[u]=this.getTangentAt(_,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(on(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(l.makeRotationAxis(a,_))}o[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos(on(s[0].dot(s[t]),-1,1));u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(u=-u);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],u*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ju extends Oi{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new pt){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class KE extends ju{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ju(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,f){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+f)+(l-a)/f;d*=h,u*=h,i(o,a,d,u)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const il=new N,Xc=new Ju,Yc=new Ju,qc=new Ju;class b_ extends Oi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(il.subVectors(i[0],i[1]).add(i[0]),c=il);const f=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(il.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=il),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Xc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,_,g,m),Yc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,_,g,m),qc.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Yc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),qc.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return n.set(Xc.calc(l),Yc.calc(l),qc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tp(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function jE(r,t){const e=1-r;return e*e*t}function JE(r,t){return 2*(1-r)*r*t}function QE(r,t){return r*r*t}function Qo(r,t,e,n){return jE(r,t)+JE(r,e)+QE(r,n)}function tT(r,t){const e=1-r;return e*e*e*t}function eT(r,t){const e=1-r;return 3*e*e*r*t}function nT(r,t){return 3*(1-r)*r*r*t}function iT(r,t){return r*r*r*t}function ta(r,t,e,n,i){return tT(r,t)+eT(r,e)+nT(r,n)+iT(r,i)}class w_ extends Oi{constructor(t=new pt,e=new pt,n=new pt,i=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new pt){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ta(t,i.x,s.x,o.x,a.x),ta(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rT extends Oi{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ta(t,i.x,s.x,o.x,a.x),ta(t,i.y,s.y,o.y,a.y),ta(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A_ extends Oi{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sT extends Oi{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C_ extends Oi{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qo(t,i.x,s.x,o.x),Qo(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R_ extends Oi{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Qo(t,i.x,s.x,o.x),Qo(t,i.y,s.y,o.y),Qo(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P_ extends Oi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(tp(a,l.x,c.x,h.x,f.x),tp(a,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new pt().fromArray(i))}return this}}var Gl=Object.freeze({__proto__:null,ArcCurve:KE,CatmullRomCurve3:b_,CubicBezierCurve:w_,CubicBezierCurve3:rT,EllipseCurve:ju,LineCurve:A_,LineCurve3:sT,QuadraticBezierCurve:C_,QuadraticBezierCurve3:R_,SplineCurve:P_});class oT extends Oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Gl[i.type]().fromJSON(i))}return this}}class ep extends oT{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new A_(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new C_(this.currentPoint.clone(),new pt(t,e),new pt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new w_(this.currentPoint.clone(),new pt(t,e),new pt(n,i),new pt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new P_(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new ju(t,e,n,i,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cn extends Ln{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],f=[],d=[],u=[];let _=0;const g=[],m=n/2;let p=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2));function S(){const v=new N,A=new N;let b=0;const E=(e-t)/n;for(let C=0;C<=s;C++){const M=[],x=C/s,P=x*(e-t)+t;for(let I=0;I<=i;I++){const B=I/i,H=B*l+a,$=Math.sin(H),V=Math.cos(H);A.x=P*$,A.y=-x*n+m,A.z=P*V,f.push(A.x,A.y,A.z),v.set($,E,V).normalize(),d.push(v.x,v.y,v.z),u.push(B,1-x),M.push(_++)}g.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){const x=g[M][C],P=g[M+1][C],I=g[M+1][C+1],B=g[M][C+1];(t>0||M!==0)&&(h.push(x,P,B),b+=3),(e>0||M!==s-1)&&(h.push(P,I,B),b+=3)}c.addGroup(p,b,0),p+=b}function y(v){const A=_,b=new pt,E=new N;let C=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,m*x,0),d.push(0,x,0),u.push(.5,.5),_++;const P=_;for(let I=0;I<=i;I++){const H=I/i*l+a,$=Math.cos(H),V=Math.sin(H);E.x=M*V,E.y=m*x,E.z=M*$,f.push(E.x,E.y,E.z),d.push(0,x,0),b.x=$*.5+.5,b.y=V*.5*x+.5,u.push(b.x,b.y),_++}for(let I=0;I<i;I++){const B=A+I,H=P+I;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qu extends cn{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Qu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tf extends Ln{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(s.slice(),3)),this.setAttribute("uv",new Le(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new N,v=new N,A=new N;for(let b=0;b<e.length;b+=3)u(e[b+0],y),u(e[b+1],v),u(e[b+2],A),l(y,v,A,S)}function l(S,y,v,A){const b=A+1,E=[];for(let C=0;C<=b;C++){E[C]=[];const M=S.clone().lerp(v,C/b),x=y.clone().lerp(v,C/b),P=b-C;for(let I=0;I<=P;I++)I===0&&C===b?E[C][I]=M:E[C][I]=M.clone().lerp(x,I/P)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){const x=Math.floor(M/2);M%2===0?(d(E[C][x+1]),d(E[C+1][x]),d(E[C][x])):(d(E[C][x+1]),d(E[C+1][x+1]),d(E[C+1][x]))}}function c(S){const y=new N;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(S),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function h(){const S=new N;for(let y=0;y<s.length;y+=3){S.x=s[y+0],S.y=s[y+1],S.z=s[y+2];const v=m(S)/2/Math.PI+.5,A=p(S)/Math.PI+.5;o.push(v,1-A)}_(),f()}function f(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],A=o[S+4],b=Math.max(y,v,A),E=Math.min(y,v,A);b>.9&&E<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),A<.2&&(o[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function u(S,y){const v=S*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function _(){const S=new N,y=new N,v=new N,A=new N,b=new pt,E=new pt,C=new pt;for(let M=0,x=0;M<s.length;M+=9,x+=6){S.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),b.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),A.copy(S).add(y).add(v).divideScalar(3);const P=m(A);g(b,x+0,S,P),g(E,x+2,y,P),g(C,x+4,v,P)}}function g(S,y,v,A){A<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tf(t.vertices,t.indices,t.radius,t.details)}}const rl=new N,sl=new N,$c=new N,ol=new li;class D_ extends Ln{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Qs*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d={},u=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:m,c:p}=ol;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ol.getNormal($c),f[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,f[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){const y=(S+1)%3,v=f[S],A=f[y],b=ol[h[S]],E=ol[h[y]],C=`${v}_${A}`,M=`${A}_${v}`;M in d&&d[M]?($c.dot(d[M].normal)<=s&&(u.push(b.x,b.y,b.z),u.push(E.x,E.y,E.z)),d[M]=null):C in d||(d[C]={index0:c[S],index1:c[y],normal:$c.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:m}=d[_];rl.fromBufferAttribute(a,g),sl.fromBufferAttribute(a,m),u.push(rl.x,rl.y,rl.z),u.push(sl.x,sl.y,sl.z)}this.setAttribute("position",new Le(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class L_ extends ep{constructor(t){super(t),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ep().fromJSON(i))}return this}}const aT={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=I_(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,f,d,u;if(n&&(s=fT(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let _=e;_<i;_+=e)f=r[_],d=r[_+1],f<a&&(a=f),d<l&&(l=d),f>c&&(c=f),d>h&&(h=d);u=Math.max(c-a,h-l),u=u!==0?32767/u:0}return pa(s,o,e,a,l,u,0),o}};function I_(r,t,e,n,i){let s,o;if(i===ET(r,t,e,n)>0)for(s=t;s<e;s+=n)o=np(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=np(s,r[s],r[s+1],o);return o&&jl(o,o.next)&&(_a(o),o=o.next),o}function hs(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(jl(e,e.next)||Oe(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function pa(r,t,e,n,i,s,o){if(!r)return;!o&&s&&gT(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?cT(r,n,i,s):lT(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),_a(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=hT(hs(r),t,e),pa(r,t,e,n,i,s,2)):o===2&&uT(r,t,e,n,i,s):pa(hs(r),t,e,n,i,s,1);break}}}function lT(r){const t=r.prev,e=r,n=r.next;if(Oe(t,e,n)>=0)return!1;const i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,u=a>l?a>c?a:c:l>c?l:c;let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=u&&Gs(i,a,s,l,o,c,_.x,_.y)&&Oe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function cT(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Oe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,f=s.y,d=o.y,u=a<l?a<c?a:c:l<c?l:c,_=h<f?h<d?h:d:f<d?f:d,g=a>l?a>c?a:c:l>c?l:c,m=h>f?h>d?h:d:f>d?f:d,p=lu(u,_,t,e,n),S=lu(g,m,t,e,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=p&&v&&v.z<=S;){if(y.x>=u&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&Gs(a,h,l,f,c,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=u&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Gs(a,h,l,f,c,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=u&&y.x<=g&&y.y>=_&&y.y<=m&&y!==i&&y!==o&&Gs(a,h,l,f,c,d,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=u&&v.x<=g&&v.y>=_&&v.y<=m&&v!==i&&v!==o&&Gs(a,h,l,f,c,d,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hT(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!jl(i,s)&&U_(i,n,n.next,s)&&ma(i,s)&&ma(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),_a(n),_a(n.next),n=r=s),n=n.next}while(n!==r);return hs(n)}function uT(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yT(o,a)){let l=N_(o,a);o=hs(o,o.next),l=hs(l,l.next),pa(o,t,e,n,i,s,0),pa(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function fT(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=I_(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(xT(c));for(i.sort(dT),s=0;s<i.length;s++)e=pT(i[s],e);return e}function dT(r,t){return r.x-t.x}function pT(r,t){const e=mT(r,t);if(!e)return t;const n=N_(e,r);return hs(n,n.next),hs(e,e.next)}function mT(r,t){let e=t,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,f;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Gs(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(f=Math.abs(o-e.y)/(s-e.x),ma(e,r)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&_T(i,e)))&&(i=e,h=f)),e=e.next;while(e!==a);return i}function _T(r,t){return Oe(r.prev,r,t.prev)<0&&Oe(t.next,r,r.next)<0}function gT(r,t,e,n){let i=r;do i.z===0&&(i.z=lu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,vT(i)}function vT(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function lu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function xT(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Gs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function yT(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!MT(r,t)&&(ma(r,t)&&ma(t,r)&&ST(r,t)&&(Oe(r.prev,r,t.prev)||Oe(r,t.prev,t))||jl(r,t)&&Oe(r.prev,r,r.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function jl(r,t){return r.x===t.x&&r.y===t.y}function U_(r,t,e,n){const i=ll(Oe(r,t,e)),s=ll(Oe(r,t,n)),o=ll(Oe(e,n,r)),a=ll(Oe(e,n,t));return!!(i!==s&&o!==a||i===0&&al(r,e,t)||s===0&&al(r,n,t)||o===0&&al(e,r,n)||a===0&&al(e,t,n))}function al(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ll(r){return r>0?1:r<0?-1:0}function MT(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&U_(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ma(r,t){return Oe(r.prev,r,r.next)<0?Oe(r,t,r.next)>=0&&Oe(r,r.prev,t)>=0:Oe(r,t,r.prev)<0||Oe(r,r.next,t)<0}function ST(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function N_(r,t){const e=new cu(r.i,r.x,r.y),n=new cu(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function np(r,t,e,n){const i=new cu(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _a(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function cu(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ET(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class ea{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return ea.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ip(t),rp(n,t);let o=t.length;e.forEach(ip);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,rp(n,e[l]);const a=aT.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ip(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function rp(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class ef extends Ln{constructor(t=new L_([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Le(i,3)),this.setAttribute("uv",new Le(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:TT;let y,v=!1,A,b,E,C;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,A=p.computeFrenetFrames(h,!1),b=new N,E=new N,C=new N),d||(m=0,u=0,_=0,g=0);const M=a.extractPoints(c);let x=M.shape;const P=M.holes;if(!ea.isClockWise(x)){x=x.reverse();for(let rt=0,tt=P.length;rt<tt;rt++){const D=P[rt];ea.isClockWise(D)&&(P[rt]=D.reverse())}}const B=ea.triangulateShape(x,P),H=x;for(let rt=0,tt=P.length;rt<tt;rt++){const D=P[rt];x=x.concat(D)}function $(rt,tt,D){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(tt,D)}const V=x.length,q=B.length;function G(rt,tt,D){let At,st,F;const ct=rt.x-tt.x,Ft=rt.y-tt.y,bt=D.x-rt.x,R=D.y-rt.y,T=ct*ct+Ft*Ft,W=ct*R-Ft*bt;if(Math.abs(W)>Number.EPSILON){const J=Math.sqrt(T),Q=Math.sqrt(bt*bt+R*R),j=tt.x-Ft/J,gt=tt.y+ct/J,mt=D.x-R/Q,yt=D.y+bt/Q,$t=((mt-j)*R-(yt-gt)*bt)/(ct*R-Ft*bt);At=j+ct*$t-rt.x,st=gt+Ft*$t-rt.y;const lt=At*At+st*st;if(lt<=2)return new pt(At,st);F=Math.sqrt(lt/2)}else{let J=!1;ct>Number.EPSILON?bt>Number.EPSILON&&(J=!0):ct<-Number.EPSILON?bt<-Number.EPSILON&&(J=!0):Math.sign(Ft)===Math.sign(R)&&(J=!0),J?(At=-Ft,st=ct,F=Math.sqrt(T)):(At=ct,st=Ft,F=Math.sqrt(T/2))}return new pt(At/F,st/F)}const ot=[];for(let rt=0,tt=H.length,D=tt-1,At=rt+1;rt<tt;rt++,D++,At++)D===tt&&(D=0),At===tt&&(At=0),ot[rt]=G(H[rt],H[D],H[At]);const L=[];let ht,it=ot.concat();for(let rt=0,tt=P.length;rt<tt;rt++){const D=P[rt];ht=[];for(let At=0,st=D.length,F=st-1,ct=At+1;At<st;At++,F++,ct++)F===st&&(F=0),ct===st&&(ct=0),ht[At]=G(D[At],D[F],D[ct]);L.push(ht),it=it.concat(ht)}for(let rt=0;rt<m;rt++){const tt=rt/m,D=u*Math.cos(tt*Math.PI/2),At=_*Math.sin(tt*Math.PI/2)+g;for(let st=0,F=H.length;st<F;st++){const ct=$(H[st],ot[st],At);et(ct.x,ct.y,-D)}for(let st=0,F=P.length;st<F;st++){const ct=P[st];ht=L[st];for(let Ft=0,bt=ct.length;Ft<bt;Ft++){const R=$(ct[Ft],ht[Ft],At);et(R.x,R.y,-D)}}}const at=_+g;for(let rt=0;rt<V;rt++){const tt=d?$(x[rt],it[rt],at):x[rt];v?(E.copy(A.normals[0]).multiplyScalar(tt.x),b.copy(A.binormals[0]).multiplyScalar(tt.y),C.copy(y[0]).add(E).add(b),et(C.x,C.y,C.z)):et(tt.x,tt.y,0)}for(let rt=1;rt<=h;rt++)for(let tt=0;tt<V;tt++){const D=d?$(x[tt],it[tt],at):x[tt];v?(E.copy(A.normals[rt]).multiplyScalar(D.x),b.copy(A.binormals[rt]).multiplyScalar(D.y),C.copy(y[rt]).add(E).add(b),et(C.x,C.y,C.z)):et(D.x,D.y,f/h*rt)}for(let rt=m-1;rt>=0;rt--){const tt=rt/m,D=u*Math.cos(tt*Math.PI/2),At=_*Math.sin(tt*Math.PI/2)+g;for(let st=0,F=H.length;st<F;st++){const ct=$(H[st],ot[st],At);et(ct.x,ct.y,f+D)}for(let st=0,F=P.length;st<F;st++){const ct=P[st];ht=L[st];for(let Ft=0,bt=ct.length;Ft<bt;Ft++){const R=$(ct[Ft],ht[Ft],At);v?et(R.x,R.y+y[h-1].y,y[h-1].x+D):et(R.x,R.y,f+D)}}}z(),K();function z(){const rt=i.length/3;if(d){let tt=0,D=V*tt;for(let At=0;At<q;At++){const st=B[At];Et(st[2]+D,st[1]+D,st[0]+D)}tt=h+m*2,D=V*tt;for(let At=0;At<q;At++){const st=B[At];Et(st[0]+D,st[1]+D,st[2]+D)}}else{for(let tt=0;tt<q;tt++){const D=B[tt];Et(D[2],D[1],D[0])}for(let tt=0;tt<q;tt++){const D=B[tt];Et(D[0]+V*h,D[1]+V*h,D[2]+V*h)}}n.addGroup(rt,i.length/3-rt,0)}function K(){const rt=i.length/3;let tt=0;ft(H,tt),tt+=H.length;for(let D=0,At=P.length;D<At;D++){const st=P[D];ft(st,tt),tt+=st.length}n.addGroup(rt,i.length/3-rt,1)}function ft(rt,tt){let D=rt.length;for(;--D>=0;){const At=D;let st=D-1;st<0&&(st=rt.length-1);for(let F=0,ct=h+m*2;F<ct;F++){const Ft=V*F,bt=V*(F+1),R=tt+At+Ft,T=tt+st+Ft,W=tt+st+bt,J=tt+At+bt;Rt(R,T,W,J)}}}function et(rt,tt,D){l.push(rt),l.push(tt),l.push(D)}function Et(rt,tt,D){Ut(rt),Ut(tt),Ut(D);const At=i.length/3,st=S.generateTopUV(n,i,At-3,At-2,At-1);Vt(st[0]),Vt(st[1]),Vt(st[2])}function Rt(rt,tt,D,At){Ut(rt),Ut(tt),Ut(At),Ut(tt),Ut(D),Ut(At);const st=i.length/3,F=S.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Vt(F[0]),Vt(F[1]),Vt(F[3]),Vt(F[1]),Vt(F[2]),Vt(F[3])}function Ut(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function Vt(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bT(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gl[i.type]().fromJSON(i)),new ef(n,t.options)}}const TT={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new pt(s,o),new pt(a,l),new pt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[i*3],u=t[i*3+1],_=t[i*3+2],g=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new pt(o,1-l),new pt(c,1-f),new pt(d,1-_),new pt(g,1-p)]:[new pt(a,1-l),new pt(h,1-f),new pt(u,1-_),new pt(m,1-p)]}};function bT(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Jl extends tf{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jl(t.radius,t.detail)}}class nf extends Ln{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new N,f=new N,d=new N;for(let u=0;u<=n;u++)for(let _=0;_<=i;_++){const g=_/i*s,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(g),f.y=(t+e*Math.cos(m))*Math.sin(g),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(f,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let _=1;_<=i;_++){const g=(i+1)*u+_-1,m=(i+1)*(u-1)+_-1,p=(i+1)*(u-1)+_,S=(i+1)*u+_;o.push(g,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rf extends Ln{constructor(t=new R_(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new pt;let h=new N;const f=[],d=[],u=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2));function g(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),S(),p()}function m(y){h=t.getPointAt(y/e,h);const v=o.normals[y],A=o.binormals[y];for(let b=0;b<=i;b++){const E=b/i*Math.PI*2,C=Math.sin(E),M=-Math.cos(E);l.x=M*v.x+C*A.x,l.y=M*v.y+C*A.y,l.z=M*v.z+C*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,f.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const A=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),E=(i+1)*y+v,C=(i+1)*(y-1)+v;_.push(A,b,C),_.push(b,E,C)}}function S(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rf(new Gl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class sf extends go{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=n_,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class O_ extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wT extends O_{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Zc=new Te,sp=new N,op=new N;class AT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sp.setFromMatrixPosition(t.matrixWorld),e.position.copy(sp),op.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(op),e.updateMatrixWorld(),Zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class CT extends AT{constructor(){super(new __(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ap extends O_{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new CT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class RT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=lp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function lp(){return performance.now()}class cp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(on(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class PT extends fs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);const hp={type:"change"},of={type:"start"},F_={type:"end"},cl=new qu,up=new hr,DT=Math.cos(70*Hs.DEG2RAD),Ke=new N,In=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6;class LT extends PT{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new cs,this._lastTargetPosition=new N,this._quat=new cs().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cp,this._sphericalDelta=new cp,this._scale=1,this._panOffset=new N,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new N,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UT.bind(this),this._onPointerDown=IT.bind(this),this._onPointerUp=NT.bind(this),this._onContextMenu=VT.bind(this),this._onMouseWheel=BT.bind(this),this._onKeyDown=zT.bind(this),this._onTouchStart=kT.bind(this),this._onTouchMove=HT.bind(this),this._onMouseDown=OT.bind(this),this._onMouseMove=FT.bind(this),this._interceptControlDown=GT.bind(this),this._interceptControlUp=WT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hp),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),i<-Math.PI?i+=In:i>Math.PI&&(i-=In),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<DT?this.object.lookAt(this.target):(up.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane(up,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(hp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ke.copy(i).sub(this.target);let s=Ke.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(In*this._rotateDelta.x/e.clientHeight),this._rotateUp(In*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function IT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function UT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function NT(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(F_),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function OT(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ye.DOLLY;break;case Ks.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ye.ROTATE}break;case Ks.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(of)}function FT(r){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BT(r){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(r.preventDefault(),this.dispatchEvent(of),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(F_))}function zT(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function kT(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ye.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ye.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(of)}function HT(r){switch(this._trackPointer(r),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ye.NONE}}function VT(r){this.enabled!==!1&&r.preventDefault()}function GT(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function WT(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ln=(r,t=.85,e={})=>new sf({color:r,roughness:t,metalness:0,...e}),Gt={card:ln(16184042,.92),concrete:ln(13814977,.95),concreteDark:ln(11117207,.95),timber:ln(8014638,.7),timberLight:ln(11566933,.75),timberDark:ln(4008996,.7),charcoal:ln(3091241,.8),glass:ln(2964286,.12,{metalness:.35,transparent:!0,opacity:.62}),glassWarm:ln(5981750,.2,{metalness:.2,transparent:!0,opacity:.7,emissive:3810322,emissiveIntensity:.25}),green:ln(7109191,.95,{flatShading:!0}),greenLight:ln(9411682,.95,{flatShading:!0}),terracotta:ln(10107930,.85),rose:ln(9259605,.8),roseLight:ln(13081244,.85),water:ln(10465453,.2,{metalness:.1}),white:ln(16777215,.9)},XT=new kl({color:2761760,transparent:!0,opacity:.18});function B_(r,t=25){const e=new E_(new D_(r.geometry,t),XT);return r.add(e),r}function Pe(r,t,e,n,i=0,s=0,o=0,a=!0){const l=new ue(new Nn(r,t,e),n);return l.position.set(i,s,o),a&&B_(l),l}function Ql(r){return r.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),r}function YT(r,t,e=40,n=!1){const i=document.createElement("canvas");i.width=i.height=256;const s=i.getContext("2d");s.fillStyle=r,s.fillRect(0,0,256,256),s.fillStyle=t;const o=256/e;for(let l=0;l<e;l++)n?s.fillRect(l*o,0,o*.28,256):s.fillRect(0,l*o,256,o*.28);const a=new T_(i);return a.colorSpace=Cn,a.wrapS=a.wrapT=ua,a.anisotropy=4,a}function af(r=1){let t=r>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function po(r,t=7){const e=af(t),n=new yi,i=new cn(.05,.07,1,5),s=new Jl(1,0),o=new gr(i,Gt.timberDark,r.length),a=new gr(s,Gt.green,r.length),l=new ke,c=new ie;return r.forEach((h,f)=>{var u,_,g;const d=(u=h.s)!=null?u:.7+e()*.6;l.position.set(h.x,((_=h.y)!=null?_:0)+.6*d,h.z),l.rotation.set(0,0,0),l.scale.set(d,1.2*d,d),l.updateMatrix(),o.setMatrixAt(f,l.matrix),l.position.y=((g=h.y)!=null?g:0)+1.55*d,l.rotation.set(e()*3,e()*3,e()*3),l.scale.set(.75*d,.85*d,.75*d),l.updateMatrix(),a.setMatrixAt(f,l.matrix),c.setHSL(.2+e()*.06,.18+e()*.12,.6+e()*.16),a.setColorAt(f,c)}),o.castShadow=a.castShadow=!0,a.receiveShadow=!0,n.add(o,a),n}function qT(){const r=new yi,t=new ue(new cn(3.9,4,.35,72),Gt.concrete);t.position.y=.175,r.add(t);const e=YT("#b9946b","#7c5a3c",46);e.repeat.set(6,1);const n=new sf({map:e,roughness:.8}),i=new ue(new cn(2.5,2.5,3.3,72),n);i.position.y=.35+1.65,r.add(i),[[.35,1],[2.2,.9],[3.7,.8]].forEach(([c,h])=>{const f=new ue(new cn(2.56,2.56,3.3,24,1,!0,c,h),Gt.timberDark);f.material.side=Ai,f.position.y=2,r.add(f)}),[-.55,-.05].forEach(c=>{const h=Pe(1,2.3,.08,Gt.glass,Math.sin(c)*2.58,1.5,Math.cos(c)*2.58,!1);h.rotation.y=c;const f=Pe(1.08,2.38,.04,Gt.white,0,0,-.03,!1);h.add(f),r.add(h)});for(let c=.5;c<1.75;c+=.11){const h=Pe(.07,3.7,.45,Gt.timberDark,Math.sin(c)*2.95,2.2,Math.cos(c)*2.95,!1);h.rotation.y=c,r.add(h)}const s=new Nn(9.6,.2,7.6,60,1,44),o=s.attributes.position;for(let c=0;c<o.count;c++){const h=o.getX(c),f=o.getZ(c);o.setY(c,o.getY(c)+.55*Math.sin(h*.55+.6)+.22*Math.cos(f*.6))}s.computeVertexNormals();const a=new ue(s,Gt.timberDark);a.position.set(.3,4.15,0),r.add(a),[[-3.6,2.2],[3.9,-2],[3.6,2.6],[-3.2,-2.6]].forEach(([c,h])=>{const f=4.15+.55*Math.sin((c-.3)*.55+.6)+.22*Math.cos(h*.6)-.35;r.add(Pe(.1,f,.1,Gt.charcoal,c,.35+f/2,h,!1))}),r.add(Pe(1.6,.4,.5,Gt.timberLight,-3,.55,2));const l=new ue(new cn(.22,.22,1.6,10),Gt.timber);return l.rotation.z=Math.PI/2,l.position.set(2.6,.57,3.1),r.add(l),r.add(po([{x:-4.6,z:-3.6,s:1.3},{x:4.8,z:-3.4,s:1.1},{x:-5.2,z:1.5,s:.9},{x:5.4,z:1.2,s:1.2},{x:.5,z:-4.8,s:1}],11)),Ql(r)}function $T(){const r=new yi,t=af(23);r.add(Pe(13,3.4,9,Gt.card,0,1.7,0)),r.add(Pe(10,3.2,7.6,Gt.card,-1.4,3.4+1.6,-.6));for(let u=0;u<6;u++){const _=.7+u*.55;r.add(Pe(.95,_,.4,Gt.card,-5.8+u*1,6.6+_/2,-4.2))}r.add(Pe(8.2,.65,.8,Gt.timberDark,-2.2,6.95,3.4)),r.add(Pe(.7,6.9,.8,Gt.timberDark,-6.6,3.45,3.4)),r.add(Pe(.7,3.6,.8,Gt.timberDark,1.9,5.2,3.4));const e=9,n=7,i=.42,s=new gr(new Nn(i*.92,i*.92,.12),Gt.white,e*n),o=new ke,a=new ie,l=[2827554,15986406,8014638,2827554,14472392];let c=0;for(let u=0;u<e;u++)for(let _=0;_<n;_++)o.position.set(-1.3+u*i,3.75+_*i,3.27),o.updateMatrix(),s.setMatrixAt(c,o.matrix),s.setColorAt(c++,a.set(l[Math.floor(t()*l.length)]));r.add(s),r.add(Pe(4.6,2.3,.08,Gt.glassWarm,-3.6,1.55,4.52,!1)),r.add(Pe(2.8,2,.08,Gt.glassWarm,-4.4,5,3.22,!1)),r.add(Pe(1.2,2.5,.1,Gt.timber,.4,1.25,4.52,!1));const h=new yi;h.position.set(2.4,3.5,5);for(let u=0;u<12;u++){const _=Hs.degToRad(6+u*7),g=new ue(new Nn(5.6,.2,.5),Gt.timberDark);g.geometry.translate(2.8,0,0),g.rotation.z=_,g.position.z=u%2*.12,h.add(g)}r.add(h);const f=new ue(new cn(.75,.75,.12,40),Gt.timber);f.rotation.x=Math.PI/2,f.position.set(-1.6,1.9,4.56),r.add(f);const d=new ue(new nf(.75,.06,8,40),Gt.charcoal);d.position.set(-1.6,1.9,4.64),r.add(d);for(let u=0;u<5;u++)r.add(Pe(15.5,.24,.12,Gt.charcoal,.5,.45+u*.42,6.6,!1));return[-7.2,-2,3.5,8.2].forEach(u=>r.add(Pe(.14,2.4,.14,Gt.charcoal,u,1.2,6.6,!1))),r.add(Pe(4.2,.35,1.2,Gt.greenLight,-3.8,.17,5.7,!1)),r.add(po([{x:-8.6,z:4.8,s:1.4},{x:-9.2,z:-2.4,s:1.6},{x:8.4,z:-3.6,s:1.3},{x:7.6,z:4.8,s:.9}],31)),Ql(r)}function ZT(){const r=new yi,t=af(77),e=v=>10.4+2.4*Math.sin((v+23)/46*Math.PI*1.15-.35),n=v=>5.6+2.5*Math.sin((v+23)/46*Math.PI*1.6+2.2);r.add(Pe(50,1.2,24,Gt.concrete,0,.6,0)),r.add(Pe(40,4.2,15,Gt.glassWarm,0,1.2+2.1,0,!1));const i=new gr(new Nn(.14,4.2,.14),Gt.charcoal,42),s=new ke;for(let v=0;v<21;v++)s.position.set(-20+v*2,3.3,7.55),s.updateMatrix(),i.setMatrixAt(v,s.matrix),s.position.z=-7.55,s.updateMatrix(),i.setMatrixAt(21+v,s.matrix);r.add(i);const o=Pe(14,3.2,1,Gt.concreteDark,-17,2.2,8.4);o.rotation.z=.08,r.add(o),r.add(Pe(43,.5,17.5,Gt.card,0,5.65,0)),r.add(Pe(38,3.6,14,Gt.glass,0,5.9+1.8,-.3,!1));const a=new Nn(50,.5,23,90,1,20),l=a.attributes.position;for(let v=0;v<l.count;v++){const A=l.getX(v),b=l.getZ(v);l.setY(v,l.getY(v)+e(A)-10.4-.0035*b*b),l.setZ(v,b*(.82+.18*Math.cos(A/50*Math.PI)))}a.computeVertexNormals();const c=new ue(a,ln(11901048,.8));c.position.y=10.4,r.add(c);const h=new gr(new Nn(.28,.7,19),Gt.timber,30);for(let v=0;v<30;v++){const A=-22+v*1.52;s.position.set(A,e(A)-.55,0),s.rotation.set(0,0,0),s.updateMatrix(),h.setMatrixAt(v,s.matrix)}r.add(h);const f=88,d=new gr(new Nn(.16,1,.75),Gt.timber,f),u=new Jl(.42,0),_=f*5+60,g=new gr(u,Gt.green,_),m=new ie;let p=0;for(let v=0;v<f;v++){const A=-22+v*.505,b=e(A)-.25,E=n(A),C=b-E;s.position.set(A,E+C/2,9),s.rotation.set(0,0,0),s.scale.set(1,C,1),s.updateMatrix(),d.setMatrixAt(v,s.matrix);const M=2+Math.floor(t()*4);for(let x=0;x<M&&p<_;x++){s.position.set(A+(t()-.5)*.4,b-.2-x*.55-t()*.3,9.35+t()*.2),s.rotation.set(t()*3,t()*3,t()*3);const P=.7+t()*.6-x*.08;s.scale.set(P,P*1.2,P),s.updateMatrix(),g.setMatrixAt(p,s.matrix),g.setColorAt(p++,m.setHSL(.21+t()*.05,.25+t()*.15,.32+t()*.16))}}for(let v=0;v<60&&p<_;v++){const A=-23+v*.78;s.position.set(A,e(A)+.35,8.6+t()*.6),s.rotation.set(t()*3,t()*3,t()*3);const b=.9+t()*.5;s.scale.set(b,b*.8,b),s.updateMatrix(),g.setMatrixAt(p,s.matrix),g.setColorAt(p++,m.setHSL(.22+t()*.05,.3,.36+t()*.14))}g.count=p,r.add(d,g);const S=[];for(let v=-22.2;v<=22.2;v+=1)S.push(new N(v,n(v),9));const y=new ue(new rf(new b_(S),120,.2,6),Gt.timberDark);r.add(y);for(let v=0;v<5;v++){const A=-14+v*3.4;r.add(Pe(.08,2.4,.08,Gt.charcoal,A,2.4,10.8,!1));const b=new ue(new Qu(1.3,.55,8),Gt.card);b.position.set(A,3.75,10.8),r.add(b)}return r.add(po([{x:-23,z:10.5,s:2.3,y:1.2},{x:22.5,z:10.2,s:2,y:1.2},{x:8,z:11,s:1.6,y:1.2},{x:-22,z:-9.5,s:2.2,y:1.2},{x:21,z:-9.8,s:2.4,y:1.2},{x:0,z:-10.5,s:1.8,y:1.2}],41)),Ql(r)}function fp(r,t,e,n,i,s){const o=new L_;o.absarc(0,0,t,e,n,!1),o.absarc(0,0,r,n,e,!0);const a=new ef(o,{depth:i,bevelEnabled:!1,curveSegments:48});return a.rotateX(-Math.PI/2),B_(new ue(a,s),30)}function KT(){const r=new yi,t=15,e=3.2,n=A=>7.6+2.8*Math.sin(Math.PI*A/t),i=A=>A*.12,s=new ue(new cn(1,1,.12,64),Gt.water);s.scale.set(16,1,7),s.position.set(-6,.06,20),r.add(s);const o=new ue(new cn(3,3,t*e+2,24),Gt.concrete);o.position.y=(t*e+2)/2,r.add(o);const a=11,l=t*a,c=new cn(1.25,1.25,2.7,3);c.rotateX(Math.PI/2),c.rotateZ(Math.PI);const h=new gr(c,Gt.white,l),f=new ke,d=new ie,u=[9259605,13081244,15722466,7223876];let _=0;for(let A=0;A<t;A++){const b=1.5+A*e,E=n(A+.5),C=i(A),M=new ue(new cn(E+.3,E+.3,.32,9),Gt.card);M.position.y=b,M.rotation.y=C,r.add(M);const x=new ue(new cn(E-.9,E-.9,e-.32,9,1,!0),Gt.glass);if(x.position.y=b+e/2,x.rotation.y=C,r.add(x),A!==6)for(let P=0;P<a;P++){const I=C+P/a*Math.PI*2+A%2*(Math.PI/a),B=E+.6;f.position.set(Math.sin(I)*B,b+1.45,Math.cos(I)*B),f.rotation.set(0,I,0);const H=.78+(A*7+P*13)%10/22;f.scale.set(H,H,.8+H*.3),f.updateMatrix(),h.setMatrixAt(_,f.matrix),h.setColorAt(_++,d.set(u[(A*3+P)%u.length]))}}h.count=_,r.add(h);const g=1.5+t*e,m=new ue(new cn(n(t)+.3,n(t)+.3,.4,9),Gt.card);m.position.y=g,m.rotation.y=i(t),r.add(m);const p=new ue(new cn(n(t)-.8,n(t)-.8,.3,9),Gt.greenLight);p.position.y=g+.3,p.rotation.y=i(t),r.add(p),r.add(po([{x:2,z:2,y:g+.4,s:1.1},{x:-2.5,z:1,y:g+.4,s:.9},{x:.5,z:-3,y:g+.4,s:1.2},{x:-3,z:-2.4,y:g+.4,s:.8}],61));const S=.45,y=2.85;[1.6,4.8,8].forEach((A,b)=>{const E=fp(15+b*.6,23-b*.4,S+b*.08,y-b*.05,.45,Gt.card);if(E.position.y=A,r.add(E),b<2){const C=22.2-b*.6,M=new ue(new cn(C,C,2.75,64,1,!0,S+Math.PI/2+b*.08,y-S-b*.13),Gt.glass);M.position.y=A+.45+1.38,r.add(M)}});const v=fp(13.8,24.5,S-.05,y+.05,.35,Gt.timberDark);v.position.y=10.9,r.add(v);for(let A=S+.1;A<y;A+=.22){const E=Math.cos(A)*20,C=-Math.sin(A)*20;[-.35,.35].forEach(M=>{const x=Pe(.22,1.9,.22,Gt.charcoal,E,.75,C,!1);x.rotation.set(0,-A,M),r.add(x)})}return r.add(po([{x:-24,z:10,s:2.4},{x:18,z:22,s:2.2},{x:26,z:4,s:2.6},{x:-26,z:-6,s:2.4},{x:8,z:-16,s:2.8},{x:-12,z:-16,s:2.2},{x:4,z:26,s:2}],71)),Ql(r)}const jc=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),dp=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;function jT(r,{hero:t,projects:e,outro:n}){const i=()=>window.innerWidth<820||window.innerWidth<=1100&&window.innerHeight>window.innerWidth,s=window.matchMedia("(pointer: coarse)").matches,o=new YE({canvas:r,antialias:!s,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio,s?1.5:1.75)),o.shadowMap.enabled=!0,o.shadowMap.type=Gm,o.toneMapping=Xm,o.toneMappingExposure=1.05,o.outputColorSpace=Cn;const a=new qE,l=new ie(15657698);a.background=l,a.fog=new Ku(l,90,230);const c=new ai(32,1,.5,600);a.add(new wT(16775920,12168088,1.35));const h=new ap(16773596,2.4);h.position.set(-40,70,45),h.castShadow=!0,h.shadow.mapSize.set(s?1024:2048,s?1024:2048),Object.assign(h.shadow.camera,{left:-60,right:60,top:45,bottom:-45,near:10,far:200}),h.shadow.bias=-4e-4,h.shadow.normalBias=.04,h.shadow.radius=4,a.add(h);const f=new ap(15326415,.55);f.position.set(50,25,-30),a.add(f);const d=(()=>{const it=document.createElement("canvas");it.width=it.height=512;const at=it.getContext("2d");at.fillStyle="#efebe3",at.fillRect(0,0,512,512),at.strokeStyle="rgba(60,45,35,0.07)",at.lineWidth=2;for(let K=0;K<=512;K+=64)at.beginPath(),at.moveTo(K,0),at.lineTo(K,512),at.stroke(),at.beginPath(),at.moveTo(0,K),at.lineTo(512,K),at.stroke();const z=new T_(it);return z.wrapS=z.wrapT=ua,z.repeat.set(40,40),z.colorSpace=Cn,z.anisotropy=8,z})(),u=new ue(new xa(400,400),new sf({map:d,roughness:1}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);const _=new kl({color:9071189,transparent:!0,opacity:.16});for(let it=1;it<9;it++){const at=[];for(let z=0;z<=Math.PI*2+.01;z+=.05){const K=it*9+Math.sin(z*3+it)*3+Math.cos(z*5-it)*1.6;at.push(new N(Math.cos(z)*K*1.5,.02,Math.sin(z)*K))}a.add(new S_(new Ln().setFromPoints(at),_))}const g=[{build:qT,pos:[-30,0,8],scale:.85,plinth:[11,10]},{build:$T,pos:[-11,0,-5],scale:.62,plinth:[12.5,10.5]},{build:ZT,pos:[10,0,7],scale:.32,plinth:[18,9.5]},{build:KT,pos:[31,0,-6],scale:.3,plinth:[17,15]}];g.map(it=>{const at=new yi;at.position.set(...it.pos);const z=new ue(new Nn(it.plinth[0],.6,it.plinth[1]),Gt.card);z.position.y=.3,z.castShadow=z.receiveShadow=!0,z.add(new E_(new D_(z.geometry),new kl({color:2761760,transparent:!0,opacity:.25}))),at.add(z);const K=it.build();return K.scale.setScalar(it.scale),K.position.y=.6,at.add(K),a.add(at),{holder:at,model:K}});const m=[],p=(()=>{let it=99;return()=>(it=it*1664525+1013904223>>>0)/4294967296})();for(;m.length<46;){const it=(p()-.5)*150,at=(p()-.5)*90;g.every(K=>Math.abs(it-K.pos[0])>K.plinth[0]/2+3||Math.abs(at-K.pos[2])>K.plinth[1]/2+3)&&m.push({x:it,z:at,s:.6+p()*.8})}a.add(po(m,5));const S=(it,at,z)=>new N(it,at,z),y=g.map(it=>S(it.pos[0],0,it.pos[2])),v=[{look:S(0,2.4,0).add(y[0]),r:18,h:[6,3.2],a:[.65,-.85]},{look:S(0,3,0).add(y[1]),r:25,h:[10,4.5],a:[.85,-.6]},{look:S(0,3,0).add(y[2]),r:26,h:[10,4],a:[-.45,.75]},{look:S(0,8.5,0).add(y[3]),r:44,h:[5,20],a:[1.05,-.1]}],A=(it,at)=>{const z=window.innerWidth/window.innerHeight,K=z>=1.3?1:Math.min(2.4,1.3/z+(i()?.25:0)),ft=Hs.lerp(it.a[0],it.a[1],at),et=it.r*K*(1-.12*Math.sin(at*Math.PI)),Et=Hs.lerp(it.h[0],it.h[1],at)*(i()?1.15:1);return{pos:it.look.clone().add(S(Math.sin(ft)*et,Et,Math.cos(ft)*et)),look:it.look.clone()}},b=it=>{const at=i()&&window.innerHeight>window.innerWidth,z=at?1.25:i()?1.3:1,K=(at?1.05:.22)+Math.sin(it*.06)*.14;return{pos:S(4+Math.sin(K)*100*z,56*z,Math.cos(K)*100*z),look:S(4,0,0)}},E=it=>{const at=-.4+it*.02,z=i()?1.5:1;return{pos:S(Math.sin(at)*75*z,70*z,Math.cos(at)*75*z),look:S(0,0,0)}},C=(it,at,z)=>({pos:it.pos.clone().lerp(at.pos,z),look:it.look.clone().lerp(at.look,z)}),M=new LT(c,r);M.enabled=!1,M.enableDamping=!0,M.dampingFactor=.07,M.minPolarAngle=.15,M.maxPolarAngle=Math.PI/2.08,M.enablePan=!1;let x=-1;const P={pos:S(80,60,80),look:S(0,0,0)};let I=0,B=0;function H(){const it=window.innerWidth,at=window.innerHeight;o.setSize(it,at,!1),c.aspect=it/at,c.updateProjectionMatrix()}window.addEventListener("resize",H),H();function $(it){const at=window.innerHeight;let z=b(it),K=.12;if(e.forEach((ft,et)=>{const Et=ft.getBoundingClientRect(),Rt=jc(1-Et.top/at);if(Rt<=0)return;const Ut=jc(-Et.top/(Et.height-at)),Vt=et===0?b(it):A(v[et-1],1);z=Rt<1?C(Vt,A(v[et],0),dp(Rt)):A(v[et],Ut),K=et===0?Hs.lerp(.12,.17,Rt):.17}),n){const ft=n.getBoundingClientRect(),et=jc(1-ft.top/at);et>0&&(z=C(z,E(it),dp(et)),K=Hs.lerp(.17,0,et))}return{p:z,shift:K}}function V(){const it=window.innerHeight;return[t,...e,n].some(at=>{if(!at)return!1;const z=at.getBoundingClientRect();return z.bottom>0&&z.top<it})}const q=new RT;let G=!0;function ot(it){const at=it!=null?it:Math.min(q.getDelta(),.05),z=q.elapsedTime;if(!V()&&x<0)return;if(x>=0)M.update(),I+=(0-I)*.08,B+=(0-B)*.08;else{const{p:et,shift:Et}=$(z),Rt=G?1:1-Math.exp(-at*5.5);G=!1,P.pos.lerp(et.pos,Rt),P.look.lerp(et.look,Rt),c.position.copy(P.pos),c.lookAt(P.look);const Ut=i();I+=((Ut?0:-Et)-I)*Rt,B+=((Ut?.15*Et/.17:0)-B)*Rt}const K=window.innerWidth,ft=window.innerHeight;c.setViewOffset(K,ft,I*K,B*ft,K,ft),o.render(a,c)}function L(it){x=it;const at=v[it];M.target.copy(at.look),M.minDistance=at.r*.45,M.maxDistance=at.r*2.2,M.enabled=!0,M.autoRotate=!1,r.classList.add("is-exploring")}function ht(){x=-1,M.enabled=!1,r.classList.remove("is-exploring"),P.pos.copy(c.position),P.look.copy(M.target)}return{frame:ot,enterExplore:L,exitExplore:ht,resize:H}}$e.registerPlugin(jt);const pe=(r,t=document)=>t.querySelector(r),xn=(r,t=document)=>[...t.querySelectorAll(r)],hu=window.matchMedia("(prefers-reduced-motion: reduce)").matches,JT=window.matchMedia("(hover: hover) and (pointer: fine)").matches;"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);document.body.classList.add("is-loading");pe(".js-year").textContent=new Date().getFullYear();const ei=new tg({lerp:hu?1:.085,smoothWheel:!hu,wheelMultiplier:.95,touchMultiplier:1.3});ei.stop();ei.on("scroll",jt.update);const pp=pe(".webgl"),z_=xn(".project");let ts=null;try{ts=jT(pp,{hero:pe("#hero"),projects:z_,outro:pe("#contact")})}catch(r){console.warn("WebGL unavailable, continuing without 3D",r),pp.remove(),xn(".btn--explore").forEach(t=>t.remove())}$e.ticker.add(r=>{ei.raf(r*1e3),ts==null||ts.frame()});$e.ticker.lagSmoothing(0);function k_(r,t="wm"){const e=(i,s)=>{i.childNodes.forEach(o=>{if(o.nodeType===3)o.textContent.split(/(\s+)/).forEach(a=>{if(!a)return;if(/^\s+$/.test(a))return s.appendChild(document.createTextNode(" "));const l=document.createElement("span");l.className=t;const c=document.createElement("span");c.textContent=a,l.appendChild(c),s.appendChild(l)});else if(o.nodeType===1){const a=o.cloneNode(!1);e(o,a),s.appendChild(a)}})},n=document.createDocumentFragment();return e(r,n),r.innerHTML="",r.appendChild(n),xn(`.${t} > span`,r)}function QT(r){const t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){const i=document.createDocumentFragment();[...n.textContent].forEach(s=>{const o=document.createElement("span");o.className="ch",o.textContent=s,i.appendChild(o)}),n.replaceWith(i)}else n.nodeType===1&&t(n)})};return t(r),xn(".ch",r)}const t1=QT(pe(".hero__line > span"));xn("[data-split]").forEach(r=>{const t=k_(r);r.closest(".hero")||$e.from(t,{yPercent:115,rotate:4,duration:1.2,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:r,start:"top 88%"}})});xn("[data-reveal]").forEach(r=>{$e.from(r,{y:50,autoAlpha:0,duration:1.2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 90%"}})});xn("[data-img-reveal]").forEach(r=>{const t=pe("img",r);$e.fromTo(r,{clipPath:"inset(100% 0% 0% 0%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:1.6,ease:"expo.inOut",scrollTrigger:{trigger:r,start:"top 80%"}}),$e.fromTo(t,{scale:1.35},{scale:1,duration:2,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 80%"}}),$e.fromTo(t,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:!0}})});xn("[data-scrub-words]").forEach(r=>{const t=k_(r,"w").map(e=>e.parentElement);jt.create({trigger:r,start:"top 82%",end:"bottom 50%",onUpdate:e=>{const n=e.progress*t.length*1.05;t.forEach((i,s)=>{i.style.opacity=Math.max(.16,Math.min(1,n-s))})}})});xn("[data-count]:not([data-plain])").forEach(r=>{const t={v:0};$e.to(t,{v:+r.dataset.count,duration:1.8,ease:"power3.out",onUpdate:()=>{r.textContent=Math.round(t.v)},scrollTrigger:{trigger:r,start:"top 92%"}})});const e1=$e.to(".marquee__track",{xPercent:-50,duration:32,ease:"none",repeat:-1});let bl=0;ei.on("scroll",({velocity:r})=>{bl=r});$e.ticker.add(()=>{bl*=.92;const r=1+Math.min(Math.abs(bl)*.25,6);e1.timeScale(bl<-.5?-r:r)});z_.forEach(r=>{const t=xn(".panel",r),e=pe(".project__progress span",r);let n=0;jt.create({trigger:r,start:"top top",end:"bottom bottom",onUpdate:i=>{e.style.transform=`scaleX(${i.progress})`;const s=Math.min(t.length-1,Math.floor(i.progress*t.length*.999));s!==n&&(t[n].classList.remove("is-active"),t[s].classList.add("is-active"),n=s)}})});const H_=pe(".gallery"),lf=pe(".gallery__track"),n1=pe(".gallery__bar span"),i1=xn(".g:not(.g--tall) .g__img img",lf);function cf(){const r=Math.max(0,lf.scrollWidth-window.innerWidth);return H_.style.height=`${r+window.innerHeight}px`,r}let hf=cf();jt.create({trigger:H_,start:"top top",end:"bottom bottom",onUpdate:r=>{lf.style.transform=`translate3d(${-r.progress*hf}px,0,0)`,n1.style.transform=`scaleX(${r.progress})`;const t=window.innerWidth;i1.forEach(e=>{const n=e.parentElement.getBoundingClientRect(),i=(n.left+n.width/2-t/2)/t;e.style.transform=`translate3d(${i*-8}%,0,0) scale(1.18)`})}});const uu=pe(".nav");ei.on("scroll",({scroll:r,direction:t})=>{uu.classList.toggle("is-scrolled",r>40),!document.body.classList.contains("menu-open")&&uu.classList.toggle("is-hidden",t===1&&r>300)});const r1=[["#works","#works"],["#about","#about"],["#gallery","#gallery"],["#contact","#contact"]];r1.forEach(([r,t])=>{const e=pe(t);jt.create({trigger:e,start:"top 50%",end:"bottom 50%",onToggle:({isActive:n})=>xn(`.nav__links a[href="${r}"]`).forEach(i=>i.classList.toggle("is-active",n))})});function uf(){document.body.classList.remove("menu-open"),pe(".nav__burger").setAttribute("aria-expanded","false"),pe(".menu").setAttribute("aria-hidden","true"),ei.start()}pe(".nav__burger").addEventListener("click",()=>{if(!!document.body.classList.contains("menu-open"))return uf();document.body.classList.add("menu-open"),uu.classList.remove("is-hidden"),pe(".nav__burger").setAttribute("aria-expanded","true"),pe(".menu").setAttribute("aria-hidden","false"),ei.stop()});document.addEventListener("click",r=>{var o;const t=r.target.closest('a[href^="#"]');if(!t)return;const e=t.getAttribute("href");r.preventDefault(),document.body.classList.contains("menu-open")&&uf();const i=e==="#top"?0:pe(e),s=i&&((o=i.classList)!=null&&o.contains("project"))?window.innerHeight*.15:0;ei.scrollTo(i,{offset:s,duration:1.8,easing:a=>1-Math.pow(1-a,4)})});if(JT){const r=pe(".cursor"),t=pe(".cursor__label"),e=$e.quickTo(r,"x",{duration:.45,ease:"power3"}),n=$e.quickTo(r,"y",{duration:.45,ease:"power3"});window.addEventListener("pointermove",a=>{r.classList.add("is-visible"),e(a.clientX),n(a.clientY)}),document.addEventListener("pointerleave",()=>r.classList.remove("is-visible")),document.addEventListener("pointerover",a=>{const l=a.target.closest("[data-cursor]"),c=a.target.closest("a, button");r.classList.toggle("is-hover",!!l),r.classList.toggle("is-link",!l&&!!c),t.textContent=l?l.dataset.cursor:""}),xn("[data-magnetic]").forEach(a=>{const l=$e.quickTo(a,"x",{duration:.6,ease:"elastic.out(1, 0.4)"}),c=$e.quickTo(a,"y",{duration:.6,ease:"elastic.out(1, 0.4)"});a.addEventListener("pointermove",h=>{const f=a.getBoundingClientRect();l((h.clientX-f.left-f.width/2)*.3),c((h.clientY-f.top-f.height/2)*.35)}),a.addEventListener("pointerleave",()=>{l(0),c(0)})});const i=pe(".hover-img"),s=$e.quickTo(i,"left",{duration:.6,ease:"power3"}),o=$e.quickTo(i,"top",{duration:.6,ease:"power3"});xn("[data-hover-img]").forEach(a=>{a.addEventListener("pointerenter",()=>{i.src=a.dataset.hoverImg,i.classList.add("is-on")}),a.addEventListener("pointerleave",()=>i.classList.remove("is-on")),a.addEventListener("pointermove",l=>{s(l.clientX+170),o(l.clientY)})})}const s1=["01 — Public Toilet","02 — The Living Unit","03 — After Hours","04 — Step by Step"];let fu=!1;function o1(r){ts&&(fu=!0,ei.stop(),document.body.classList.add("is-exploring"),pe(".explore").setAttribute("aria-hidden","false"),pe(".js-explore-name").textContent=s1[r],ts.enterExplore(r))}function V_(){fu&&(fu=!1,ts.exitExplore(),document.body.classList.remove("is-exploring"),pe(".explore").setAttribute("aria-hidden","true"),ei.start())}xn("[data-explore]").forEach(r=>r.addEventListener("click",()=>o1(+r.dataset.explore)));pe(".js-explore-close").addEventListener("click",V_);const es=pe(".lightbox"),du=pe("img",es);function a1(r,t=""){du.src=r,du.alt=t,pe(".lightbox__scroll").scrollTop=0,es.classList.add("is-open"),es.setAttribute("aria-hidden","false"),ei.stop()}function G_(){es.classList.contains("is-open")&&(es.classList.remove("is-open"),es.setAttribute("aria-hidden","true"),ei.start())}document.addEventListener("click",r=>{var e;const t=r.target.closest("[data-lightbox]");t&&a1(t.dataset.lightbox,(e=pe("img",t))==null?void 0:e.alt)});es.addEventListener("click",r=>{r.target!==du&&G_()});window.addEventListener("keydown",r=>{r.key==="Escape"&&(G_(),V_(),document.body.classList.contains("menu-open")&&uf())});function l1(){var i,s;const r={v:0},t=pe(".js-count"),e=Promise.all([(s=(i=document.fonts)==null?void 0:i.ready)!=null?s:Promise.resolve(),new Promise(o=>setTimeout(o,hu?200:1500))]);$e.timeline().from(".loader__word",{yPercent:40,autoAlpha:0,duration:1,ease:"expo.out"}).to(r,{v:88,duration:1.3,ease:"power2.inOut",onUpdate:()=>{t.textContent=Math.round(r.v)}},0).to(".loader__bar span",{scaleX:.88,duration:1.3,ease:"power2.inOut"},0),e.then(()=>{$e.timeline({onComplete:()=>{pe(".loader").remove(),document.body.classList.remove("is-loading"),ei.start(),jt.refresh()}}).to(r,{v:100,duration:.4,onUpdate:()=>{t.textContent=Math.round(r.v)}}).to(".loader__bar span",{scaleX:1,duration:.4},"<").to(".loader__inner",{yPercent:-30,autoAlpha:0,duration:.7,ease:"expo.in"},"+=0.05").to(".loader",{clipPath:"inset(0% 0% 100% 0%)",duration:1.1,ease:"expo.inOut"},"-=0.25").from(t1,{yPercent:110,rotate:6,duration:1.4,ease:"expo.out",stagger:.045},"-=0.55").from(".hero__meta > *, .hero__by",{y:16,autoAlpha:0,duration:1,ease:"expo.out",stagger:.08},"-=1.1").from(xn(".hero .wm > span"),{yPercent:115,duration:1.1,ease:"expo.out",stagger:.02},"-=1.0").from(".hero__index li",{y:24,autoAlpha:0,duration:1,ease:"expo.out",stagger:.07},"-=1.0").fromTo(".hero__scroll, .nav",{autoAlpha:0},{autoAlpha:1,duration:1,clearProps:"opacity,visibility"},"-=0.8")})}l1();let mp;window.addEventListener("resize",()=>{clearTimeout(mp),mp=setTimeout(()=>{hf=cf(),jt.refresh()},200)});window.addEventListener("load",()=>{hf=cf(),jt.refresh()});
