parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Aqh5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.qsa=t,exports.addClass=o,exports.removeClass=n,exports.on=r,exports.css=s;var e=Function.prototype.bind.call(Function.prototype.call,[].slice);function t(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return e(o.querySelectorAll(t))}function o(e,t){e.classList.add(t)}function n(e,t){e.classList.remove(t)}function r(e,t,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.addEventListener(t,o),function(){e.removeEventListener(t,o,n)}}function s(e,t){for(var o in t)e.style[o]=t[o]}
},{}],"DCTx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadPage=c;var n=require("./domHelpers");function e(n,e){return a(n)||t(n,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function t(n,e){var r=[],t=!0,a=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==c.return||c.return()}finally{if(a)throw o}}return r}function a(n){if(Array.isArray(n))return n}var o="cached";function i(r){var t=r.container,a=(0,r.events)(t);return a?Object.entries(a).map(function(r){var a=e(r,2),o=a[0],i=a[1],c=e(o.split(":"),2),u=c[0],s=c[1];return(0,n.on)(t.querySelector(u),s,i)}):[]}function c(e,r){(0,n.qsa)(".page:not(.cached)").map(function(e){(0,n.addClass)(e,o),e._unlistens&&(e._unlistens.forEach(function(n){return n()}),e._unlistens=null),e._onCached&&e._onCached(e)}),(0,n.removeClass)(e.container,o),e.container._unlistens=i(e),e.render(e.container,r),e.container._onCached=e.cached}
},{"./domHelpers":"Aqh5"}],"SPav":[function(require,module,exports) {
!function(){var t=function(t,e,s,i,r,n,a,o,l,h,c,m,u,d,_,p){this.elements=window.Float32Array?new Float32Array(16):[];var f=this.elements;f[0]=void 0!==t?t:1,f[4]=e||0,f[8]=s||0,f[12]=i||0,f[1]=r||0,f[5]=void 0!==n?n:1,f[9]=a||0,f[13]=o||0,f[2]=l||0,f[6]=h||0,f[10]=void 0!==c?c:1,f[14]=m||0,f[3]=u||0,f[7]=d||0,f[11]=_||0,f[15]=void 0!==p?p:1};function e(t,e,i){for(var r=0,n=e.length;r<n;r++){s(t,e[r],i)}}function s(t,e,s){Object.defineProperty(t,e,{get:function(){return this["__"+e]},set:function(t){t!==this["__"+e]&&(this["__"+e]=t,s())}})}t.DEG_TO_RAD=Math.PI/180,t.prototype={set:function(t,e,s,i,r,n,a,o,l,h,c,m,u,d,_,p){var f=this.elements;return f[0]=t,f[4]=e,f[8]=s,f[12]=i,f[1]=r,f[5]=n,f[9]=a,f[13]=o,f[2]=l,f[6]=h,f[10]=c,f[14]=m,f[3]=u,f[7]=d,f[11]=_,f[15]=p,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,e){var s=t.elements,i=this.elements,r=s[0],n=s[4],a=s[8],o=s[12],l=s[1],h=s[5],c=s[9],m=s[13],u=s[2],d=s[6],_=s[10],p=s[14],f=s[3],y=s[7],M=s[11],D=s[15],T=e[0],v=e[1],w=e[2],X=e[3],Y=e[4],A=e[5],Z=e[6],g=e[7],O=e[8],k=e[9],E=e[10],G=e[11],R=e[12],x=e[13],b=e[14],j=e[15];return i[0]=r*T+n*Y+a*O+o*R,i[4]=r*v+n*A+a*k+o*x,i[8]=r*w+n*Z+a*E+o*b,i[12]=r*X+n*g+a*G+o*j,i[1]=l*T+h*Y+c*O+m*R,i[5]=l*v+h*A+c*k+m*x,i[9]=l*w+h*Z+c*E+m*b,i[13]=l*X+h*g+c*G+m*j,i[2]=u*T+d*Y+_*O+p*R,i[6]=u*v+d*A+_*k+p*x,i[10]=u*w+d*Z+_*E+p*b,i[14]=u*X+d*g+_*G+p*j,i[3]=f*T+y*Y+M*O+D*R,i[7]=f*v+y*A+M*k+D*x,i[11]=f*w+y*Z+M*E+D*b,i[15]=f*X+y*g+M*G+D*j,this},_rounded:function(t,e){return e=Math.pow(10,e||15),Math.round(t*e)/e},appendTransform:function(e,s,i,r,n,a,o,l,h,c,m,u,d,_){var p=o*t.DEG_TO_RAD,f=this._rounded(Math.cos(p)),y=this._rounded(Math.sin(p)),M=l*t.DEG_TO_RAD,D=this._rounded(Math.cos(M)),T=this._rounded(Math.sin(M)),v=h*t.DEG_TO_RAD,w=this._rounded(Math.cos(-1*v)),X=this._rounded(Math.sin(-1*v));return this.multiplyMatrices(this,[1,0,0,e,0,f,y,s,0,-y,f,i,0,0,0,1]),this.multiplyMatrices(this,[D,0,T,0,0,1,0,0,-T,0,D,0,0,0,0,1]),this.multiplyMatrices(this,[w*r,X*n,0,0,-X*r,w*n,0,0,0,0,1*a,0,0,0,0,1]),(c||m)&&this.multiplyMatrices(this,[this._rounded(Math.cos(c*t.DEG_TO_RAD)),this._rounded(Math.sin(c*t.DEG_TO_RAD)),0,0,-1*this._rounded(Math.sin(m*t.DEG_TO_RAD)),this._rounded(Math.cos(m*t.DEG_TO_RAD)),0,0,0,0,1,0,0,0,0,1]),(u||d||_)&&(this.elements[12]-=u*this.elements[0]+d*this.elements[4]+_*this.elements[8],this.elements[13]-=u*this.elements[1]+d*this.elements[5]+_*this.elements[9],this.elements[14]-=u*this.elements[2]+d*this.elements[6]+_*this.elements[10]),this}},window.Transform=function(s){e(s,["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],function(){var t=s.matrix3D.identity().appendTransform(s.translateX,s.translateY,s.translateZ,s.scaleX,s.scaleY,s.scaleZ,s.rotateX,s.rotateY,s.rotateZ,s.skewX,s.skewY,s.originX,s.originY,s.originZ);s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform="perspective("+s.perspective+"px) matrix3d("+Array.prototype.slice.call(t.elements).join(",")+")"}),e(s,["perspective"],function(){s.style.transform=s.style.msTransform=s.style.OTransform=s.style.MozTransform=s.style.webkitTransform="perspective("+s.perspective+"px) matrix3d("+Array.prototype.slice.call(s.matrix3D.elements).join(",")+")"}),s.matrix3D=new t,s.perspective=500,s.scaleX=s.scaleY=s.scaleZ=1,s.translateX=s.translateY=s.translateZ=s.rotateX=s.rotateY=s.rotateZ=s.skewX=s.skewY=s.originX=s.originY=s.originZ=0}}();
},{}],"5a/q":[function(require,module,exports) {
!function(){function t(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(e,i){var s=function(e,i){var s=t(e)*t(i);if(0===s)return 0;var h=function(t,e){return t.x*e.x+t.y*e.y}(e,i)/s;return h>1&&(h=1),Math.acos(h)}(e,i);return function(t,e){return t.x*e.y-e.x*t.y}(e,i)>0&&(s*=-1),180*s/Math.PI}var i=function(t){this.handlers=[],this.el=t};function s(t,e){var s=new i(t);return s.add(e),s}i.prototype.add=function(t){this.handlers.push(t)},i.prototype.del=function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)},i.prototype.dispatch=function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}};var h=function(t,e){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var i=function(){};this.rotate=s(this.element,e.rotate||i),this.touchStart=s(this.element,e.touchStart||i),this.multipointStart=s(this.element,e.multipointStart||i),this.multipointEnd=s(this.element,e.multipointEnd||i),this.pinch=s(this.element,e.pinch||i),this.swipe=s(this.element,e.swipe||i),this.tap=s(this.element,e.tap||i),this.doubleTap=s(this.element,e.doubleTap||i),this.longTap=s(this.element,e.longTap||i),this.singleTap=s(this.element,e.singleTap||i),this.pressMove=s(this.element,e.pressMove||i),this.twoFingerPressMove=s(this.element,e.twoFingerPressMove||i),this.touchMove=s(this.element,e.touchMove||i),this.touchEnd=s(this.element,e.touchEnd||i),this.touchCancel=s(this.element,e.touchCancel||i),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};h.prototype={start:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var i=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var s={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};i.x=s.x,i.y=s.y,this.pinchStartLen=t(i),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}},move:function(i){if(i.touches){var s=this.preV,h=i.touches.length,n=i.touches[0].pageX,o=i.touches[0].pageY;if(this.isDoubleTap=!1,h>1){var l=i.touches[1].pageX,a=i.touches[1].pageY,u={x:i.touches[1].pageX-n,y:i.touches[1].pageY-o};null!==s.x&&(this.pinchStartLen>0&&(i.zoom=t(u)/this.pinchStartLen,this.pinch.dispatch(i,this.element)),i.angle=e(u,s),this.rotate.dispatch(i,this.element)),s.x=u.x,s.y=u.y,null!==this.x2&&null!==this.sx2?(i.deltaX=(n-this.x2+l-this.sx2)/2,i.deltaY=(o-this.y2+a-this.sy2)/2):(i.deltaX=0,i.deltaY=0),this.twoFingerPressMove.dispatch(i,this.element),this.sx2=l,this.sy2=a}else{if(null!==this.x2){i.deltaX=n-this.x2,i.deltaY=o-this.y2;var p=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(p>10||c>10)&&(this._preventTap=!0)}else i.deltaX=0,i.deltaY=0;this.pressMove.dispatch(i,this.element)}this.touchMove.dispatch(i,this.element),this._cancelLongTap(),this.x2=n,this.y2=o,h>1&&i.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){e.swipe.dispatch(t,e.element)},0)):(this.tapTimeout=setTimeout(function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)},0),e.isDoubleTap||(e.singleTapTimeout=setTimeout(function(){e.singleTap.dispatch(t,e.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,i,s){return Math.abs(t-e)>=Math.abs(i-s)?t-e>0?"Left":"Right":i-s>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},"undefined"!=typeof module&&"object"==typeof exports?module.exports=h:window.AlloyFinger=h}();
},{}],"zn/I":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createBox=a,exports.transformImage=o,exports.renderCover=r,exports.calculateRect=l,exports.drawCrop=h;var t=require("./domHelpers");require("./transform");var e=i(require("alloyfinger"));function i(t){return t&&t.__esModule?t:{default:t}}var n=window.Transform;function a(){var e=document.createElement("div");return e.className="crop-box",(0,t.css)(e,{color:"white",textAlign:"center",fontSize:"18px",textDecoration:"none",visibility:"visible"}),e}function o(i,a,o){var r=i.naturalWidth,l=i.naturalHeight;n(i,!0);var c=window.innerWidth/r,h=c,s=c;i.scaleX=i.scaleY=c;var d=1;new e.default(o,{multipointStart:function(t){var e=(t.touches[0].pageX+t.touches[1].pageX)/2,n=(t.touches[0].pageY+t.touches[1].pageY)/2,a=i.getBoundingClientRect(),o=e-(a.left+a.width/2),r=n-(a.top+a.height/2),l=i.originX,c=i.originY;i.originX=o/i.scaleX,i.originY=r/i.scaleY,i.translateX+=o-l*i.scaleX,i.translateY+=r-c*i.scaleX,1==d&&(i.scaleX=i.scaleY=1.1*h,++d),h=i.scaleX},rotate:function(t){console.log("TODO: rotate ",t)},pinch:function(t){var e=i.getBoundingClientRect(),n=(document.documentElement.clientHeight-a.height)/2,o=t.zoom,r=(e.width*o-e.width)/2,l=(e.height-e.height*o)/2;h*o<=1.6&&h*o>=s&&r>=e.left&&-r<=e.right-a.width&&l<=n-e.top&&l<=e.bottom-n-a.height&&(i.scaleX=i.scaleY=h*o)},pressMove:function(t){var e=i.getBoundingClientRect(),n=(document.documentElement.clientHeight-a.height)/2;n-e.top-t.deltaY>=0&&e.bottom+t.deltaY-n>=a.height&&(i.translateY+=t.deltaY);var o=(document.documentElement.clientWidth-a.width)/2;e.left+t.deltaX<=o&&e.right+t.deltaX-o>=a.width&&(i.translateX+=t.deltaX),t.preventDefault()}}),(0,t.css)(i,{position:"fixed",zIndex:"99",left:"50%",top:window.innerHeight/2+"px",marginLeft:r/-2+"px",marginTop:l/-2+"px"})}function r(e,i){var n=e.getContext("2d"),a=e.width,o=e.height,r=i.width,l=i.height;n.save(),n.fillStyle="black",n.globalAlpha=.7,n.fillRect(0,0,a,o),n.restore(),n.save(),n.globalCompositeOperation="destination-out",n.beginPath(),n.rect(a/2-r/2,o/2-l/2,r,l),n.fill(),n.restore(),n.save(),n.beginPath(),n.strokeStyle="white",n.rect(a/2-r/2,o/2-l/2,r,l),n.stroke(),(0,t.css)(e,{position:"fixed",zIndex:"100",left:"0px",top:"0px"})}function l(t,e){var i=t.getBoundingClientRect(),n=window.innerWidth/2-e.width/2,a=window.innerHeight/2-e.height/2,o=[n,a,e.width+n,e.height+a],r=[i.left,i.top,i.width+i.left,i.height+i.top],l=c.apply(null,o.concat(r)),h=(l[0]-r[0])/t.scaleX,s=(l[1]-r[1])/t.scaleY,d=l[2]/t.scaleX,u=l[3]/t.scaleY;return h<0&&(h=0),s<0&&(s=0),h+d>t.naturalWidth&&(d=t.naturalWidth-h),s+u>t.naturalHeight&&(u=t.naturalHeight-s),[h,s,d,u]}function c(t,e,i,n,a,o,r,l){if(i<a||n<o||t>r||e>l)return[0,0,0,0];var c=Math.max(t,a),h=Math.max(e,o);return[c,h,Math.min(i,r)-c,Math.min(n,l)-h]}function h(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5;t.drawImage(e,i[0],i[1],i[2],i[3],0,0,i[2]*e.scaleX*n,i[3]*e.scaleY*n)}
},{"./domHelpers":"Aqh5","./transform":"SPav","alloyfinger":"5a/q"}],"ovVa":[function(require,module,exports) {
"use strict";function e(e,t){var n=document.createElement("canvas"),o=n.getContext("2d"),r=document.createElement("img");r.src=e,r.onload=function(){var e=r.width,a=r.height,i=3*window.innerWidth,d=3*window.innerHeight,c=e,h=a;(e>i||a>d)&&(e/a>i/d?(c=i,h=Math.round(i*(a/e))):(h=d,c=Math.round(d*(e/a)))),n.width=c,n.height=h,o.clearRect(0,0,c,h),o.drawImage(r,0,0,c,h),t(n.toDataURL())}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.compressor=e;
},{}],"H99C":[function(require,module,exports) {
"use strict";var e=require("./pages"),t=require("./cropBox"),n=require("./compressor"),r={height:200,width:100},c=function(t){var n=t.target.files;n.length>0&&(0,e.loadPage)(a,{imageSrc:window.URL.createObjectURL(n[0])})},o={pageName:"home",container:document.body.querySelector("[data-page=home]"),events:function(){return{"#imageSelector:change":c,"#imageLoader:change":c,"#imageLoaderButton:click":function(){document.getElementById("imageLoader").click()}}},render:function(){},cached:function(){}},a={pageName:"crop",container:document.body.querySelector("[data-page=crop]"),events:function(n){return{".button-cancel:click":function(){(0,e.loadPage)(o)},".button-ok:click":function(){var c=n.querySelector(".crop-image");(0,e.loadPage)(i,{imgEl:c,cropRect:(0,t.calculateRect)(c,r)})}}},render:function(e,c){var o=c.imageSrc,a=(0,t.createBox)(),i=document.createElement("img");i.className="crop-image",a.appendChild(i),(0,n.compressor)(o,function(e){i.src=e}),i.onload=function(){(0,t.transformImage)(i,r,a)};var u=document.createElement("canvas");u.width=window.innerWidth,u.height=window.innerHeight,a.appendChild(u),(0,t.renderCover)(u,r),e.querySelector(".page-content").appendChild(a)},cached:function(e){var t=e.querySelector(".crop-box");t&&e.querySelector(".page-content").removeChild(t)}},i={pageName:"result",container:document.body.querySelector("[data-page=result]"),events:function(){return{".button:click":function(){location.reload()}}},render:function(e,n){var r=n.imgEl,c=n.cropRect,o=e.querySelector("#resultCanvas");(0,t.drawCrop)(o.getContext("2d"),r,c,1.5)}};(0,e.loadPage)(o);
},{"./pages":"DCTx","./cropBox":"zn/I","./compressor":"ovVa"}]},{},["H99C"], null)
//# sourceMappingURL=src.38db1289.map