var tns=function(){function t(){for(var t,e,n,i=arguments[0]||{},a=1,o=arguments.length;a<o;a++)if(null!==(t=arguments[a]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i}function e(t,e){localStorage.getItem(t)||localStorage.setItem(t,e);var n=localStorage.getItem(t);return["true","false","null"].indexOf(n)>=0?JSON.parse(n):n}function n(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function i(t,e){var n=t.parentNode,i=t.nextSibling;e.appendChild(t),i?n.insertBefore(e,i):n.appendChild(e)}function a(t){for(var e=t.parentNode;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}function o(t){var e=document.createElement("style");return t&&e.setAttribute("media",t),document.querySelector("head").appendChild(e),e.sheet?e.sheet:e.styleSheet}function r(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):"addRule"in t&&t.addRule(e,n,i)}function s(t,e){return Math.atan2(t,e)*(180/Math.PI)}function l(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function c(t,e){return t.hasAttribute(e)}function u(t,e){return t.getAttribute(e)}function d(t){return void 0!==t.item}function f(t,e){if(t=d(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function h(t,e){t=d(t)||t instanceof Array?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function p(t){var e=t.cloneNode(!0);t.parentNode.insertBefore(e,t),t.remove(),t=null}function v(t){c(t,"hidden")||f(t,{hidden:""})}function m(t){c(t,"hidden")&&h(t,"hidden")}function y(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function g(t){for(var e=document.createElement("fakeelement"),n=(t.length,0);n<t.length;n++)if(prop=t[n],void 0!==e.style[prop])return prop;return!1}function b(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function x(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.addEventListener(n,e[n],i)}}function E(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&M;t.removeEventListener(n,e[n],i)}}function C(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}function w(t,e,n,i,a,o,r){function s(){o-=l,u+=d,t.style[e]=n+u+c+i,o>0?setTimeout(s,l):r()}var l=Math.min(o,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/o*l;setTimeout(s,l)}!function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var t,e,n,i=window,a=document,o=Object,r="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in o||"__defineGetter__"in o[d]||null,h=function(t,e,n,i){o.defineProperty?o.defineProperty(t,e,{configurable:!1===f||!!i,get:n}):t.__defineGetter__(e,n)},p=function(t,e){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(t){h(n,t,function(){return v(),i[t]},!1)}(f)},v=function(){var n,o,s=arguments,l=/\s+/;if(s[r])for(o=0;o<s[r];++o)if(l.test(s[o]))throw n=new SyntaxError('String "'+s[o]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+t[e]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},o=0;o<i[r];++o)a[i[o]]=!0;d=i[r],p()};return v(),h(n,r,function(){return v(),d}),n[s[6]]=n[s[5]]=function(){return v(),i.join(" ")},n.item=function(t){return v(),i[t]},n.contains=function(t){return v(),!!a[t]},n[l]=function(){v.apply(n,o=arguments);for(var o,s,l=0,c=o[r];l<c;++l)s=o[l],a[s]||(i.push(s),a[s]=!0);d!==i[r]&&(d=i[r]>>>0,t[e]=i.join(" "),p())},n[c]=function(){v.apply(n,o=arguments);for(var o,s={},l=0,c=[];l<o[r];++l)s[o[l]]=!0,delete a[o[l]];for(l=0;l<i[r];++l)s[i[l]]||c.push(i[l]);i=c,d=c[r]>>>0,t[e]=i.join(" "),p()},n[u]=function(t,e){return v.apply(n,[t]),void 0!==e?e?(n[l](t),!0):(n[c](t),!1):a[t]?(n[c](t),!1):(n[l](t),!0)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,s[n],{enumerable:!1})}(n,o.defineProperty),n},v=function(t,e,n){h(t[d],e,function(){var t,i=this,o="__defineGetter__defineProperty"+e;if(i[o])return t;if(i[o]=!0,!1===f){for(var s,l=v.mirror=v.mirror||a.createElement("div"),c=l.childNodes,u=c[r],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),t=p.call(s,i,n)}else t=new p(i,n);return h(i,e,function(){return t}),delete i[o],t},!0)};if(i.DOMTokenList)t=a.createElement("div").classList,d=i.DOMTokenList[d],t[l].apply(t,s),2>t[r]&&(e=d[l],n=d[c],d[l]=function(){for(var t=0,n=arguments;t<n[r];++t)e.call(this,n[t])},d[c]=function(){for(var t=0,e=arguments;t<e[r];++t)n.call(this,e[t])}),t[u]("List",!1)&&(d[u]=function(t,e){var n=this;return n[(e=void 0===e?!n.contains(t):e)?l:c](t),!!e});else{if(f)try{h({},"support")}catch(t){f=!1}p.polyfill=!0,i.DOMTokenList=p,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var T=!1;try{var S=Object.defineProperty({},"passive",{get:function(){T=!0}});window.addEventListener("test",null,S)}catch(t){}var M=!!T&&{passive:!0},L=navigator.userAgent;localStorage.tnsApp?localStorage.tnsApp!==L&&(localStorage.tnsApp=L,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(t){localStorage.removeItem(t)})):localStorage.tnsApp=L;var D=document,N={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},A=e("tnsCalc",function(){var t=document,e=t.body,n=t.createElement("div"),i=!1;e.appendChild(n);try{for(var a,o=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],r=0;r<3;r++)if(a=o[r],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(t){}return e.removeChild(n),i}()),k=e("tnsSubpixel",function(){var t,e=document,n=e.body,i=e.createElement("div"),a=e.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",t=a.cloneNode(!0),i.appendChild(a),i.appendChild(t),n.appendChild(i);var o=a.offsetTop!==t.offsetTop;return n.removeChild(i),o}()),O=e("tnsCSSMQ",function(){var t=document,e=t.body,n=t.createElement("div");n.className="tns-mq-test",e.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return e.removeChild(n),"absolute"===i}()),I=e("tnsTf",g(["transform","WebkitTransform","MozTransform","msTransform","OTransform"])),P=e("tnsTsDu",g(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"])),W=e("tnsTsDe",g(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"])),z=e("tnsAnDu",g(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"])),H=e("tnsAnDe",g(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"])),R=e("tnsTsEn",b(P,"Transition")),B=e("tnsAnEn",b(z,"Animation"));return function(e){function c(){if(Rt<=Bt){Ut=!1;le=Ot?ee:0,void 0!==le&&ve.emit("indexChanged",wt()),Me&&v(Me),we&&v(we),Be&&v(Be)}else Ut=e.arrowKeys,Se&&m(Me),Ee&&m(we),Pe&&m(Be)}function d(t){clearTimeout(At),At=setTimeout(function(){Nt!==en()&&(g(),"outer"===Gt&&ve.emit("outerResized",wt(t)))},100)}function g(){Nt=en();var t=le,e=Bt;(Qt||qt)&&(Bt=tn()),It||(j(),xt(),Y()),qt&&Ft&&bt(),S(),Qt&&Bt!==e&&(ve.emit("itemsChanged"),c(),nn(),qt||O||b(),K(0),_(),T(),Ct(),F(),le!==t&&(ve.emit("indexChanged",wt()),q()),navigator.msMaxTouchPoints&&G())}function b(){zt.style.width=100*ne/Bt+"%"}function T(){if(Zt){var t=le,e=le+Bt;for(Ft&&(t-=1,e+=1);t<e;t++)[].forEach.call(Ht[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};e[R]=function(t){t.stopPropagation()},x(t,e),t.classList.contains("loaded")||(t.src=u(t,"data-src"),t.classList.add("loaded"))})}}function S(){if(Vt){for(var t=[],e=le;e<le+Bt;e++)[].forEach.call(Ht[e].querySelectorAll("img"),function(e){t.push(e)});0===t.length?L():M(t)}}function M(t){t.forEach(function(e,n){y(e)&&t.splice(n,1)}),0===t.length?L():setTimeout(function(){M(t)},16)}function L(){for(var t,e=[],n=le;n<le+Bt;n++)e.push(Ht[n].offsetHeight);t=Math.max.apply(null,e),zt.style.height!==t&&(P&&U(Xt),zt.style.height=t+"px")}function j(){Dt=[0];for(var t,e=Ht[0].getBoundingClientRect().top,n=1;n<ne;n++)t=Ht[n].getBoundingClientRect().top,Dt.push(t-e)}function G(){Pt.style.msScrollSnapPointsX="snapInterval(0%, "+100/Bt+"%)"}function _(){var t,e,n,i;le!==ce&&(le>ce?(t=ce,e=Math.min(ce+Bt,le),n=Math.max(ce+Bt,le),i=le+Bt):(t=Math.max(le+Bt,ce),e=ce+Bt,n=le,i=Math.min(le+Bt,ce))),jt%1!=0&&(t=Math.round(t),e=Math.round(e),n=Math.round(n),i=Math.round(i));for(var a=t;a<e;a++)f(Ht[a],{"aria-hidden":"true",tabindex:"-1"});for(var o=n;o<i;o++)f(Ht[o],{"aria-hidden":"false"}),h(Ht[o],["tabindex"])}function F(){Se&&(ke=Ae!==-1?Ae:!Kt&&Ft?(le-1)%Rt:le%Rt,Ae=-1,ke!==Oe&&(f(Te[Oe],{tabindex:"-1","aria-selected":"false"}),f(Te[ke],{tabindex:"0","aria-selected":"true"}),Oe=ke))}function q(){if(Ee&&!Kt){var t=[],e=[];le===de?(t.push(be),e.push(xe),ct(be,xe)):Yt||le!==fe?e.push(be,xe):(t.push(xe),e.push(be),ct(xe,be)),t.length>0&&t.forEach(function(t){t.disabled||(t.disabled=!0)}),e.length>0&&e.forEach(function(t){t.disabled&&(t.disabled=!1)})}}function U(t,e){t=t?t/1e3+"s":"",e=e||zt,e.style[P]=t,Ot||(e.style[z]=t),It||(Wt.style[P]=t)}function X(){var t;if(It)if(qt)t=-qt*le+"px";else{var e=I?ne:Bt;t=100*-le/e+"%"}else t=-Dt[le]+"px";return t}function Y(t){t||(t=X()),zt.style[oe]=re+t+se}function K(t,e){void 0===t&&(t=Xt),P&&U(t),an(t,e)}function V(){he=!0,ae&&nn(),le%Rt!=ce%Rt&&ve.emit("indexChanged",wt()),ve.emit("transitionStart",wt()),K()}function Q(t){function e(t){return t.toLowerCase().replace(/-/g,"")}if(ve.emit("transitionEnd",wt(t)),!Ot&&te.length>0)for(var n=0;n<Bt;n++){var i=te[n];P&&U(0,i),Lt&&W&&(i.style[W]=i.style[H]=""),i.classList.remove(St),i.classList.add(Mt),i.style.left=""}if(!t||!Ot&&t.target.parentNode===zt||t.target===zt&&e(t.propertyName)===e(oe)){if(!ae){var a=le;nn(),le!==a&&(K(0),ve.emit("indexChanged",wt()))}_(),(Se&&!Kt||Se&&Kt&&De.indexOf(le%Rt)===-1)&&Ct(),F(),q(),T(),S(),"inner"===Gt&&ve.emit("innerLoaded",wt()),he=!1,ce=le}}function J(t){if(!he){var e,n=le%Rt;switch(n<0&&(n+=Rt),t){case"next":e=1;break;case"prev":e=-1;break;case"first":e=-n;break;case"last":e=Rt-1-n;break;default:if("number"==typeof t){var i=t%Rt;i<0&&(i+=Rt),!Kt&&Ft&&(i+=1),e=i-n}}le+=e,ae&&nn(),le%Rt!=ce%Rt&&V()}}function $(t){he||(le+=t*jt,V())}function Z(){$(-1)}function tt(){Yt&&le===fe?J(0):$(1)}function et(t){if(!he){for(var e,n=t.target||t.srcElement;null===u(n,"data-nav");)n=n.parentNode;e=Ae=Number(u(n,"data-nav")),J(e)}}function nt(){ot(),f(Be,{"data-action":"stop"}),Be.innerHTML=_e+He[1],je=!0}function it(){at(),f(Be,{"data-action":"start"}),Be.innerHTML=_e.replace("Stop","Start")+He[0],je=!1}function at(){je="paused",clearInterval(Ie)}function ot(){je!==!0&&(clearInterval(Ie),Ie=setInterval(function(){$(ze)},We))}function rt(){je?it():nt()}function st(){qe!=D.hidden&&je!==!1&&(D.hidden?at():ot()),qe=D.hidden}function lt(t){switch(t=t||window.event,t.keyCode){case N.LEFT:Z();break;case N.RIGHT:tt()}}function ct(t,e){"object"==typeof t&&"object"==typeof e&&t===D.activeElement&&(t.blur(),e.focus())}function ut(t){t=t||window.event;var e=t.keyCode;D.activeElement;switch(e){case N.LEFT:case N.UP:case N.PAGEUP:be.disabled||Z();break;case N.RIGHT:case N.DOWN:case N.PAGEDOWN:xe.disabled||tt();break;case N.HOME:J(0);break;case N.END:J(Rt-1)}}function dt(t){t=t||window.event;var e=t.keyCode,n=D.activeElement,i=u(n,"data-nav");switch(e){case N.LEFT:case N.PAGEUP:i>0&&ct(n,n.previousElementSibling);break;case N.UP:case N.HOME:0!==i&&ct(n,Te[0]);break;case N.RIGHT:case N.PAGEDOWN:i<Le-1&&ct(n,n.nextElementSibling);break;case N.DOWN:case N.END:i<Le-1&&ct(n,Te[Le-1]);break;case N.ENTER:case N.SPACE:et(t)}}function ft(){K(0,zt.scrollLeft()),ce=le}function ht(t){return t.target||t.srcElement}function pt(t){return"a"===t.tagName.toLowerCase()}function vt(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function mt(t){t=t||window.event,pt(ht(t))&&"touchstart"!==t.type&&vt(t);var e="touchstart"===t.type?t.changedTouches[0]:t;Ve=parseInt(e.clientX),Qe=parseInt(e.clientY),Ue=Number(zt.style[oe].replace(re,"").replace(se,"").replace(/(px|%)/g,"")),"touchstart"===t.type?ve.emit("touchStart",wt(t)):(ve.emit("dragStart",wt(t)),$e=!0)}function yt(t){if(t=t||window.event,$e&&"mousemove"===t.type&&!Ze&&(Ze=!0),null!==Ve){pt(ht(t))&&"touchmove"!==t.type&&vt(t);var n="touchmove"===t.type?t.changedTouches[0]:t;if(Xe=parseInt(n.clientX)-Ve,Ye=parseInt(n.clientY)-Qe,l(s(Ye,Xe),15)===e.axis){kt=!0,"touchmove"===t.type?ve.emit("touchMove",wt(t)):ve.emit("dragMove",wt(t));var i=Ue;if(It){i+=I?Xe*Bt*100/(Nt*ne):100*Xe/Nt,i+="%"}else i+=Ye,i+="px";I&&U(0),zt.style[oe]=re+i+se}}}function gt(t){if(t=t||window.event,$e&&($e=!1),kt){kt=!1;var e=0===t.type.indexOf("touch")?t.changedTouches[0]:t;if(Xe=parseInt(e.clientX)-Ve,Ye=parseInt(e.clientY)-Qe,Ve=Qe=null,It){var n=-Xe*Bt/Nt;n=Xe>0?Math.floor(n):Math.ceil(n),le+=n}else{var i=-(Ue+Ye);if(i<=0)le=de;else if(i>=Dt[Dt.length-1])le=fe;else{var a=0;do{a++,le=Ye<0?a+1:a}while(a<ne&&i>=Dt[a+1])}}0===t.type.indexOf("touch")?ve.emit("touchEnd",wt(t)):ve.emit("dragEnd",wt(t)),V()}if(Ze){Ze=!1;var o=ht(t);pt(o)&&x(o,{click:function t(e){vt(e),E(o,{click:t})}})}}function bt(){Nt||(Nt=en()),Wt.style.cssText+="margin: 0px "+(Nt%qt+_t)/2+"px"}function xt(){Wt.style.height=Dt[le+Bt]-Dt[le]+"px"}function Et(){De=[];for(var t=!Kt&&Ft?le-1:le,e=t%Rt%Bt;e<Rt;)!Kt&&e+Bt>Rt&&(e=Rt-Bt),De.push(e),e+=Bt;(Kt&&De.length*Bt<Rt||!Kt&&De[0]>0)&&De.unshift(0)}function Ct(){Se&&!e.navContainer&&(Et(),De!==Ne&&(Ne.length>0&&Ne.forEach(function(t){f(Te[t],{hidden:""})}),De.length>0&&De.forEach(function(t){h(Te[t],"hidden")}),Ne=De))}function wt(t){return{container:zt,slideItems:Ht,navItems:Te,prevButton:be,nextButton:xe,items:Bt,index:le,indexCached:ce,navCurrent:ke,navCurrentCached:Oe,slideCount:Rt,cloneCount:ee,slideCountNew:ne,event:t||{}}}if(e=t({container:D.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},e||{}),"object"==typeof e.container&&null!==e.container){if("gallery"===e.mode){e.axis="horizontal",e.edgePadding=!1,e.loop=!0,e.autoHeight=!0,e.slideBy="page";var Tt="tns-fadeIn",St="tns-fadeOut",Mt="tns-normal",Lt=!1;z&&(Tt=e.animateIn,St=e.animateOut,Mt=e.animateNormal,Lt=e.animateDelay)}var Dt,Nt,At,kt,Ot="carousel"===e.mode,It="horizontal"===e.axis,Pt=D.createElement("div"),Wt=D.createElement("div"),zt=e.container,Ht=zt.children,Rt=Ht.length,Bt=e.items,jt="page"===e.slideBy?Bt:e.slideBy,Gt=e.nested,_t=e.gutter,Ft=e.edgePadding,qt=!!e.fixedWidth&&e.fixedWidth+Number(e.gutter),Ut=e.arrowKeys,Xt=e.speed,Yt=e.rewind,Kt=!e.rewind&&e.loop,Vt=e.autoHeight,Qt=!qt&&e.responsive,Jt=!1,$t=o(),Zt=e.lazyload,te=[],ee=Kt?2*Rt:Ft?1:0,ne=Ot?Rt+2*ee:Rt+ee,ie=!(!qt||Kt||Ft),ae=!Ot||!Kt,oe=It?"left":"top",re="",se="",le=Ot?ee:0,ce=le,ue=Ft?1:0,de=ue,fe=ne-Bt-ue,he=!1,pe=e.onInit,ve=new C,me=zt.id,ye=zt.className,ge=zt.id||n();if(Qt&&(Qt[0]||(Qt[0]=e.items),Jt=Object.keys(Qt).sort(function(t,e){return t-e})),e.controls)var be,xe,Ee=e.controls,Ce=e.controlsText,we=!!e.controlsContainer&&e.controlsContainer;if(e.nav)var Te,Se=e.nav,Me=e.navContainer||!1,Le=e.navContainer?Rt:Math.ceil(Rt/Bt),De=[],Ne=De,Ae=-1,ke=0,Oe=0;if(e.autoplay)var Ie,Pe=e.autoplay,We=e.autoplayTimeout,ze="forward"===e.autoplayDirection?1:-1,He=e.autoplayText,Re=e.autoplayHoverPause,Be=e.autoplayButton,je=!1,Ge=!1,_e="<span hidden>Stop Animation</span>",Fe=e.autoplayResetOnVisibility,qe=!1;if(e.touch)var Ue,Xe,Ye,Ke=e.touch,Ve=null,Qe=null;if(e.mouseDrag)var Je=e.mouseDrag,$e=!1,Ze=!1;I&&(oe=I,re="translate",re+=It?"X(":"Y(",se=")");var tn=function(){return qt?function(){return Math.max(1,Math.min(Rt,Math.floor(Nt/qt)))}:function(){var t;return Nt||(Nt=en()),Jt.forEach(function(e){Nt>=e&&(t=Qt[e])}),Math.max(1,Math.min(Rt,t))}}(),en=function(){return It&&!qt&&Ft?function(){return Pt.clientWidth-2*(Ft+_t)}:function(){return Pt.clientWidth}}();ve.on("itemsChanged",function(){fe=ne-Bt-ue,"page"===e.slideBy&&(jt=Bt),Se&&!e.navContainer&&(Le=Math.ceil(Rt/Bt))}),function(){i(zt,Wt),i(Wt,Pt),Nt=en();var t=It?"tns-outer tns-hdx":"tns-outer";if(Pt.className=t,t=It?"tns-inner":"tns-inner tns-hdy",Wt.className=t,""===zt.id&&(zt.id=ge),t=" tns-slider tns-"+e.mode+" tns-"+e.axis,t+=k?" tns-subpixel":" tns-no-subpixel",t+=A?" tns-calc":" tns-no-calc",Ot&&Vt&&(t+=" tns-hdy"),zt.className+=t,Ft)if(qt)bt();else{var n=Ft+_t,a=Ft;Wt.style.cssText+=It?"margin: 0 "+a+"px 0 "+n+"px":"padding: "+n+"px 0 "+a+"px 0"}for(var o=0;o<Rt;o++){var s=Ht[o];s.id=ge+"-item"+o,!Ot&&Mt&&s.classList.add(Mt),f(s,{"aria-hidden":"true",tabindex:"-1"})}if(Kt||Ft){for(var l=D.createDocumentFragment(),u=D.createDocumentFragment(),p=ee;p--;){var v=p%Rt,m=Ht[v].cloneNode(!0);if(h(m,"id"),u.insertBefore(m,u.firstChild),Ot){var y=Ht[Rt-1-v].cloneNode(!0);h(y,"id"),l.appendChild(y)}}zt.insertBefore(l,zt.firstChild),zt.appendChild(u),Ht=zt.children}if(!k&&Ot&&It)for(var E=0;E<Ht.length;E++){var C=A?A+"("+100*E+"% / "+ne+")":100*E/ne+"%";Ht[E].style.marginLeft=C}for(var w=le;w<le+Bt;w++){var s=Ht[w];if(f(s,{"aria-hidden":"false"}),h(s,["tabindex"]),!Ot){var M=A?A+"("+100*(w-le)+"% / "+Bt+")":100*(w-le)/Bt+"%";s.style.left=M,s.classList.remove(Mt),s.classList.add(Tt)}}if((Qt||qt)&&(Bt=tn(),ve.emit("itemsChanged")),It){var L=stringSlideWidth="width: ",N=stringSlideFontSize=stringSlideGutter="";if(Ot?qt?(L+=qt*ne+"px",stringSlideWidth+=qt+"px"):(O?L+=A?A+"("+100*ne+"% / "+e.items+")":100*ne/e.items+"%":b(),stringSlideWidth+=A?A+"(100% / "+ne+")":100/ne+"%"):(L+="auto",stringSlideWidth+=A?A+"(100% / "+e.items+")":100/e.items+"%"),L+=";",stringSlideWidth+=";",Ot&&k){var I=window.getComputedStyle(Ht[0]).fontSize;I.indexOf("em")!==-1&&(I=16*Number(I.replace(/r?em/,""))+"px"),N=" font-size: 0;",stringSlideFontSize=" font-size: "+I+";"}if(_t&&(Ft||qt||(Wt.style.marginRight=-_t+"px"),stringSlideGutter="padding-right: "+_t+"px;"),r($t,"#"+ge,L+N,0),r($t,"#"+ge+"> div, #"+ge+"> li",stringSlideWidth+stringSlideGutter+stringSlideFontSize,1),Qt&&O)for(var P=Jt.length,w=0;w<P;w++){var W=Jt[w],z=Qt[W],H=A?A+"(100% * "+ne+" / "+z+")":100*ne/z+"%";$t.insertRule("@media (min-width: "+W/16+"em) { #"+ge+"{ width: "+H+" }}",$t.cssRules.length)}}else _t&&(Ft||(Wt.style.marginBottom=-_t+"px"),r($t,"#"+ge+"> div, #"+ge+"> li","margin-bottom: "+_t+"px;",0)),j(),xt();if(Ot&&Y(),navigator.msMaxTouchPoints&&(Pt.classList.add("ms-touch"),x(Pt,{scroll:ft}),G()),Se){if(e.navContainer)f(Me,{"aria-label":"Carousel Pagination"}),Te=Me.children,[].forEach.call(Te,function(t,e){f(t,{"data-nav":e,tabindex:"-1","aria-selected":"false","aria-controls":ge+"-item"+e})});else{for(var B="",w=0;w<Rt;w++)B+='<button data-nav="'+w+'" tabindex="-1" aria-selected="false" aria-controls="'+ge+"-item"+w+'" hidden type="button"></button>';B='<div class="tns-nav" aria-label="Carousel Pagination">'+B+"</div>",Pt.insertAdjacentHTML("afterbegin",B),[].forEach.call(Pt.children,function(t){t.classList.contains("tns-nav")&&(Me=t)}),Te=Me.children,Ct()}f(Te[0],{tabindex:"0","aria-selected":"true"})}if(Pe&&(Be?f(Be,{"data-action":"stop"}):(Me||(Pt.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),Me=Pt.querySelector(".tns-nav")),Me.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+_e+He[0]+"</button>"),Be=Me.querySelector("[data-action]")),nt()),Ee&&(e.controlsContainer?(be=we.children[0],xe=we.children[1],f(we,{"aria-label":"Carousel Navigation",tabindex:"0"}),f(be,{"data-controls":"prev"}),f(xe,{"data-controls":"next"}),f(we.children,{"aria-controls":ge,tabindex:"-1"})):(Pt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ge+'" type="button">'+Ce[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ge+'" type="button">'+Ce[1]+"</button></div>"),[].forEach.call(Pt.children,function(t){t.classList.contains("tns-controls")&&(we=t)}),be=we.children[0],xe=we.children[1]),Kt||(be.disabled=!0)),Ot){if(R){var _={};_[R]=Q,x(zt,_)}Ke&&x(zt,{touchstart:mt,touchmove:yt,touchend:gt,touchcancel:gt}),Je&&x(zt,{mousedown:mt,mousemove:yt,mouseup:gt,mouseleave:gt})}if(Se)for(var F=0;F<Rt;F++)x(Te[F],{click:et,keydown:dt});Ee&&(x(we,{keydown:ut}),x(be,{click:Z}),x(xe,{click:tt})),Pe&&(x(Be,{click:rt}),Re&&(x(zt,{mouseover:function(){je&&(it(),Ge=!0)}}),x(zt,{mouseout:function(){!je&&Ge&&(nt(),Ge=!1)}})),Fe&&x(document,{visibilitychange:st})),Ut&&x(document,{keydown:lt}),"inner"===Gt?ve.on("outerResized",function(){g(),ve.emit("innerLoaded",wt())}):(x(window,{resize:d}),"outer"===Gt&&ve.on("innerLoaded",S)),c(),T(),S(),"function"==typeof pe&&pe(wt()),"inner"===Gt&&ve.emit("innerLoaded",wt())}();var nn=function(){return Kt?function(){var t=de,e=fe;if(Ot&&(t+=jt,e-=jt),qt&&Nt%(qt+_t)!=0&&(e-=1),le>e)for(;le>=t+Rt;)le-=Rt;else if(le<t)for(;le<=e-Rt;)le+=Rt}:function(){le=Math.max(de,Math.min(fe,le))}}(),an=function(){return Ot?function(t,e){if(e||(e=X()),ie&&le===fe){var n=I?100*-((ne-Bt)/ne):100*-(ne/Bt-1);e=Math.max(Number(e.replace("%","")),n)+"%"}P||!t?Y(e):w(zt,oe,re,se,e,Xt,Q),It||xt()}:function(){te=[];var t={};t[R]=t[B]=Q,E(Ht[ce],t),x(Ht[le],t),function(){for(var t=ce,e=ce+Bt;t<e;t++){var n=Ht[t];if(P&&U(Xt,n),Lt&&W){var i=Lt*(t-ce)/1e3;n.style[W]=i+"s",n.style[H]=i+"s"}n.classList.remove(Tt),n.classList.add(St),te.push(n)}}(),function(){for(var t=le,e=le+Bt;t<e;t++){var n=Ht[t];if(P&&U(Xt,n),Lt&&W){var i=Lt*(t-le)/1e3;n.style[W]=i+"s",n.style[H]=i+"s"}n.classList.remove(Mt),n.classList.add(Tt);var a=A?A+"("+100*(t-le)+"% / "+Bt+")":100*(t-le)/Bt+"%";t>le&&(n.style.left=a)}}(),R||setTimeout(Q,Xt)}}();return{getInfo:wt,events:ve,goTo:J,destroy:function(){if($t.disabled=!0,a(Pt),a(Wt),Pt=Wt=null,zt.id=me||"",zt.className=ye||"",h(zt,["style"]),Kt)for(var t=ee;t--;)Ht[0].remove(),Ht[Ht.length-1].remove();h(Ht,["id","style","aria-hidden","tabindex"]),ge=Rt=null,Ee&&(e.controlsContainer?(h(we,["aria-label","tabindex"]),h(we.children,["aria-controls","tabindex"]),p(we)):(we.remove(),we=be=xe=null)),Se&&(e.navContainer?(h(Me,["aria-label"]),h(Te,["aria-selected","aria-controls","tabindex"]),p(Me)):(Me.remove(),Me=null),Te=null),Pe&&(e.navContainer||null===Me?p(Be):(Me.remove(),Me=null),E(document,{visibilitychange:st})),p(zt),Ut&&E(document,{keydown:lt}),E(window,{resize:d})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
