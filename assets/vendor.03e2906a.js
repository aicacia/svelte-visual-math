const t={toVector:(t,e)=>(void 0===t&&(t=e),Array.isArray(t)?t:[t,t]),add:(t,e)=>[t[0]+e[0],t[1]+e[1]],sub:(t,e)=>[t[0]-e[0],t[1]-e[1]],addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function e(t,e,i){return 0===e||Math.abs(e)===1/0?Math.pow(t,5*i):t*e*i/(e+i*t)}function i(t,i,n,s=.15){return 0===s?function(t,e,i){return Math.max(e,Math.min(t,i))}(t,i,n):t<i?-e(i-t,n-i,s)+i:t>n?+e(t-n,n-i,s)+n:t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const o={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function a(t){return t?t[0].toUpperCase()+t.slice(1):""}function c(t){return"touches"in t}function h(t){return c(t)?function(t){return"touchend"===t.type?t.changedTouches:t.targetTouches}(t)[0]:t}function u(t){return function(t){return Array.from(t.touches).filter((e=>{var i,n;return e.target===t.currentTarget||(null===(i=t.currentTarget)||void 0===i||null===(n=i.contains)||void 0===n?void 0:n.call(i,e.target))}))}(t).map((t=>t.identifier))}function l(t){const e=h(t);return c(t)?e.identifier:e.pointerId}function d(t){const e=h(t);return[e.clientX,e.clientY]}function p(t,...e){return"function"==typeof t?t(...e):t}function f(){}function g(...t){return 0===t.length?f:1===t.length?t[0]:function(){let e;for(const i of t)e=i.apply(this,arguments)||e;return e}}function v(t,e){return Object.assign({},e,t||{})}class m extends class{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={values:[0,0],initial:[0,0]},this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:i,config:n,ingKey:s,args:r}=this,{transform:o,threshold:a=[0,0]}=n;i[s]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._delta=[0,0],e._threshold=t.sub(o(a),o([0,0])).map(Math.abs),e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=r,e.axis=void 0,e.memo=void 0,e.elapsedTime=0,e.direction=[0,0],e.distance=[0,0],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.initial=e.values,e.lastOffset=i.from?p(i.from,e):e.offset,e.offset=e.lastOffset),e.startTime=e.timeStamp=t.timeStamp}compute(e){const{state:n,config:s,shared:r}=this;n.args=this.args;let o=0;if(e&&(n.event=e,n.type=e.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,function(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:i,altKey:n,metaKey:s,ctrlKey:r}=t;Object.assign(e,{shiftKey:i,altKey:n,metaKey:s,ctrlKey:r})}return e}(e)),r.down=r.pressed=r.buttons%2==1||r.touches>0,o=e.timeStamp-n.timeStamp,n.timeStamp=e.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const e=n._delta.map(Math.abs);t.addTo(n._distance,e)}const[a,c]=s.transform(n._movement),[h,u]=n._threshold;let[l,d]=n._step;if(!1===l&&(l=Math.abs(a)>=h&&Math.sign(a)*h),!1===d&&(d=Math.abs(c)>=u&&Math.sign(c)*u),n.intentional=!1!==l||!1!==d,!n.intentional)return;n._step=[l,d];const f=[0,0];if(f[0]=!1!==l?a-l:0,f[1]=!1!==d?c-d:0,this.intent&&this.intent(f),(n._active&&!n._blocked||n.active)&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=r[this.ingKey]=n._active,e)){n.first&&("bounds"in s&&(n._bounds=p(s.bounds,n)),this.setup&&this.setup());const e=n.movement;if(n.movement=f,this.computeOffset(),!n.last){n.delta=t.sub(f,e);const i=n.delta.map(Math.abs);t.addTo(n.distance,i),n.direction=n.delta.map(Math.sign),!n.first&&o>0&&(n.velocity=[i[0]/o,i[1]/o])}}const g=n._active&&s.rubberband||[0,0];n.offset=function(t,[e,n],[s,r]){const[[o,a],[c,h]]=t;return[i(e,o,a,s),i(n,c,h,r)]}(n._bounds,n.offset,g),this.computeMovement()}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const n=this.handler(r(r(r({},e),t),{},{[this.aliasKey]:t.values}));void 0!==n&&(t.memo=n)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}{constructor(...t){super(...t),n(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=t.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=t.sub(this.state.offset,this.state.lastOffset)}intent(t){this.state.axis=this.state.axis||function([t,e]){const i=Math.abs(t)-Math.abs(e);return i>0?"x":i<0?"y":void 0}(t),this.state._blocked=(this.config.lockDirection||!!this.config.axis)&&!this.state.axis||!!this.config.axis&&this.config.axis!==this.state.axis,this.state._blocked||(this.config.axis||this.config.lockDirection)&&function(t,e){switch(e){case"x":t[1]=0;break;case"y":t[0]=0}}(t,this.state.axis)}}const b={enabled:(t=!0)=>t,triggerAllEvents:(t=!1)=>t,rubberband(e=0){switch(e){case!0:return[.15,.15];case!1:return[0,0];default:return t.toVector(e)}},from:e=>"function"==typeof e?e:null!=e?t.toVector(e):void 0,transform:(t,e,i)=>t||i.shared.transform},y=r(r({},b),{},{axis(t,e,{axis:i}){if(this.lockDirection="lock"===i,!this.lockDirection)return i},bounds(t={}){if("function"==typeof t)return e=>y.bounds(t(e));if("current"in t)return()=>t.current;if("function"==typeof HTMLElement&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:i=1/0,top:n=-1/0,bottom:s=1/0}=t;return[[e,i],[n,s]]}}),w={ArrowRight:(t=1)=>[10*t,0],ArrowLeft:(t=1)=>[-10*t,0],ArrowUp:(t=1)=>[0,-10*t],ArrowDown:(t=1)=>[0,10*t]};const _="undefined"!=typeof window&&window.document&&window.document.createElement;function O(){return _&&"ontouchstart"in window}const S={isBrowser:_,gesture:function(){try{return"constructor"in GestureEvent}catch(t){return!1}}(),touch:O(),touchscreen:O()||_&&navigator.maxTouchPoints>1,pointer:_&&"onpointerdown"in window,pointerLock:_&&"exitPointerLock"in window.document},k=r(r({},y),{},{pointerLock(t,e,{pointer:{lock:i=!1,touch:n=!1}={}}){return this.useTouch=S.touch&&n,S.pointerLock&&i},device(t,e){return this.useTouch?"touch":this.pointerLock?"mouse":S.pointer?"pointer":S.touch?"touch":"mouse"},preventScroll(t=!1,e,{preventScrollAxis:i="y"}){return i&&(this.preventScrollAxis=i),!!S.touchscreen&&("number"==typeof t?t:!!t&&250)},pointerCapture(t,e,{pointer:{capture:i=!0}={}}){return!this.pointerLock&&"pointer"===this.device&&i},threshold(e,i,{filterTaps:n=!1,axis:s}){const r=t.toVector(e,n?3:s?1:0);return this.filterTaps=n,r},swipe({velocity:e=.5,distance:i=50,duration:n=250}={}){return{velocity:this.transform(t.toVector(e)),distance:this.transform(t.toVector(i)),duration:n}},delay(t=0){switch(t){case!0:return 180;case!1:return 0;default:return t}}});r(r({},b),{},{useTouch:(t,e,{pointer:{touch:i=!1}={}})=>S.touch&&i,device(t,e,i){if(i.shared.target&&!S.touch&&S.gesture)return"gesture";if(this.useTouch)return"touch";if(S.touchscreen){if(S.pointer)return"pointer";if(S.touch)return"touch"}},bounds(t,e,{scaleBounds:i={},angleBounds:n={}}){const s=t=>{const e=v(p(i,t),{min:-1/0,max:1/0});return[e.min,e.max]},r=t=>{const e=v(p(n,t),{min:-1/0,max:1/0});return[e.min,e.max]};return"function"!=typeof i&&"function"!=typeof n?[s(),r()]:t=>[s(t),r(t)]},threshold(e,i,n){this.lockDirection="lock"===n.axis;return t.toVector(e,this.lockDirection?[.1,3]:0)}}),r(r({},y),{},{mouseOnly:(t=!0)=>t});const T=y;r(r({},y),{},{mouseOnly:(t=!0)=>t});const x=new Map,P=new Map;function D(t){x.set(t.key,t.engine),P.set(t.key,t.resolver)}const j={key:"drag",engine:class extends m{constructor(...t){super(...t),n(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),n={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=y.bounds(n)}}cancel(){const t=this.state;t.canceled||setTimeout((()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()}),0)}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){if(null!=t.buttons&&t.buttons%2!=1)return;this.ctrl.setEventIds(t),this.config.pointerCapture&&t.target.setPointerCapture(t.pointerId);const e=this.state,i=this.config;e._pointerActive||(this.start(t),this.setupPointer(t),e._pointerId=l(t),e._pointerActive=!0,e.values=d(t),e.initial=e.values,i.preventScroll?this.setupScrollPrevention(t):i.delay>0?this.setupDelayTrigger(t):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(e){const i=this.state,n=this.config;if(!i._pointerActive)return;if(i.type===e.type&&e.timeStamp===i.timeStamp)return;const s=l(e);if(i._pointerId&&s!==i._pointerId)return;const r=d(e);return document.pointerLockElement===e.target?i._delta=[e.movementX,e.movementY]:(i._delta=t.sub(r,i.values),i.values=r),t.addTo(i._movement,i._delta),this.compute(e),i._delayed?(this.timeoutStore.remove("dragDelay"),void this.startPointerDrag(e)):n.preventScroll&&!i._preventScroll?i.axis?i.axis===n.preventScrollAxis||"xy"===n.preventScrollAxis?(i._active=!1,void this.clean()):(this.timeoutStore.remove("startPointerDrag"),void this.startPointerDrag(e)):void 0:void this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch(o){}const e=this.state,i=this.config;if(!e._pointerActive)return;const n=l(t);if(e._pointerId&&n!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[s,r]=e._distance;if(e.tap=s<=3&&r<=3,e.tap&&i.filterTaps)e._force=!0;else{const[t,n]=e.direction,[s,r]=e.velocity,[o,a]=e.movement,[c,h]=i.swipe.velocity,[u,l]=i.swipe.distance,d=i.swipe.duration;e.elapsedTime<d&&(Math.abs(s)>c&&Math.abs(o)>u&&(e.swipe[0]=t),Math.abs(r)>h&&Math.abs(a)>l&&(e.swipe[1]=n))}this.emit()}pointerClick(t){this.state.tap||(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config;let i=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){!function(t){"persist"in t&&"function"==typeof t.persist&&t.persist()}(t),this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","end",this.clean.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","cancel",this.clean.bind(this),{passive:!1}),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScroll,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",this.startPointerDrag.bind(this),this.config.delay,t)}keyDown(e){const i=w[e.key],n=this.state;if(i){const s=e.shiftKey?10:e.altKey?.1:1;n._delta=i(s),this.start(e),n._keyboardActive=!0,t.addTo(n._movement,n._delta),this.compute(e),this.emit()}}keyUp(t){t.key in w&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this))),t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this)),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0})}},resolver:k},E={key:"wheel",engine:class extends m{constructor(...t){super(...t),n(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const i=this.state;i._delta=function(t){let{deltaX:e,deltaY:i,deltaMode:n}=t;return 1===n?(e*=40,i*=40):2===n&&(e*=800,i*=800),[e,i]}(e),t.addTo(this.state._movement,i._delta),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}},resolver:T};function M(t,e){if(null==t)return{};var i,n,s=function(t,e){if(null==t)return{};var i,n,s={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(s[i]=t[i]);return s}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(s[i]=t[i])}return s}const A=t=>t,C={target(t){if(t)return()=>"current"in t?t.current:t},enabled:(t=!0)=>t,window:(t=(S.isBrowser?window:void 0))=>t,eventOptions:({passive:t=!0,capture:e=!1}={})=>({passive:t,capture:e}),transform:(t=A)=>t},I=["target","eventOptions","window","enabled","transform"];function K(t={},e){const i={};for(const[n,s]of Object.entries(e))switch(typeof s){case"function":i[n]=s.call(i,t[n],n,t);break;case"object":i[n]=K(t[n],s);break;case"boolean":s&&(i[n]=t[n])}return i}class L{constructor(t){n(this,"_listeners",[]),this._ctrl=t}add(t,e,i,n,s){const a=function(t,e=""){const i=o[t];return t+(i&&i[e]||e)}(e,i),c=r(r({},this._ctrl.config.shared.eventOptions),s);t.addEventListener(a,n,c),this._listeners.push((()=>t.removeEventListener(a,n,c)))}clean(){this._listeners.forEach((t=>t())),this._listeners=[]}}class H{constructor(){n(this,"_timeouts",new Map)}add(t,e,i=140,...n){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...n))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach((t=>{window.clearTimeout(t)})),this._timeouts.clear()}}class U{constructor(t){n(this,"gestures",new Set),n(this,"_targetEventStore",new L(this)),n(this,"gestureEventStores",{}),n(this,"gestureTimeoutStores",{}),n(this,"handlers",{}),n(this,"config",{}),n(this,"pointerIds",new Set),n(this,"touchIds",new Set),n(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),function(t,e){e.drag&&V(t,"drag");e.wheel&&V(t,"wheel");e.scroll&&V(t,"scroll");e.move&&V(t,"move");e.pinch&&V(t,"pinch");e.hover&&V(t,"hover")}(this,t)}setEventIds(t){c(t)?this.touchIds=new Set(u(t)):"pointerId"in t&&("pointerup"===t.type?this.pointerIds.delete(t.pointerId):this.pointerIds.add(t.pointerId))}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=function(t,e){const i=t,{target:n,eventOptions:s,window:o,enabled:a,transform:c}=i,h=M(i,I),u={shared:K({target:n,eventOptions:s,window:o,enabled:a},C)};if(e){const t=P.get(e);u[e]=K(r({shared:u.shared},h),t)}else for(const l in h){const t=P.get(l);t&&(u[l]=K(r({shared:u.shared},h[l]),t))}return u}(t,e)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i=e.eventOptions,n={};let s;if(e.target&&(s=e.target(),!s))return;const o=B(n,i,!!s);if(e.enabled){for(const e of this.gestures)if(this.config[e].enabled){new(x.get(e))(this,t,e).bind(o)}for(const e in this.nativeHandlers)o(e,"",(i=>this.nativeHandlers[e](r(r({},this.state.shared),{},{event:i,args:t}))),void 0,!0)}for(const r in n)n[r]=g(...n[r]);if(!s)return n;for(const r in n){let t=r.substr(2).toLowerCase();const e=!!~t.indexOf("capture"),i=!!~t.indexOf("passive");(e||i)&&(t=t.replace(/capture|passive/g,"")),this._targetEventStore.add(s,t,"",n[r],{capture:e,passive:i})}}}function V(t,e){t.gestures.add(e),t.gestureEventStores[e]=new L(t),t.gestureTimeoutStores[e]=new H}const B=(t,e,i)=>(n,s,r,c={},h=!1)=>{var u,l;const d=null!==(u=c.capture)&&void 0!==u?u:e.capture,p=null!==(l=c.passive)&&void 0!==l?l:e.passive;let f=h?n:function(t,e="",i=!1){const n=o[t],s=n&&n[e]||e;return"on"+a(t)+a(s)+(i?"Capture":"")}(n,s,d);i&&p&&(f+="Passive"),t[f]=t[f]||[],t[f].push(r)};function R(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function X(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function Y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?X(Object(i),!0).forEach((function(e){R(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):X(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const z=function(t,e,i,n,s){this._gestureKey=n,this._ctrl=new U(e),this._ctrl.applyHandlers(e,s),this._ctrl.applyConfig(Y(Y({},i),{},{target:t}),this._gestureKey),this._ctrl.effect()};z.prototype.destroy=function(){this._ctrl.clean()};const q=function(t,e,i={}){return D(j),new z(t,{drag:e},i,"drag")},G=function(t,e,i={}){return D(E),new z(t,{wheel:e},i,"wheel")};export{q as D,G as W};