(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),r=n.n(i),s=n(645),a=n.n(s)()(r());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(r," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",r="minute",s="hour",a="day",o="week",l="month",c="quarter",d="year",p="date",u="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},b={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),s=n-r<0,a=t.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:p,h:s,m:r,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=v;var g="$isDayjsObject",C=function(e){return e instanceof k||!(!e||!e[g])},$=function e(t,n,i){var r;if(!t)return _;if("string"==typeof t){var s=t.toLowerCase();y[s]&&(r=s),n&&(y[s]=n,r=s);var a=t.split("-");if(!r&&a.length>1)return e(a[0])}else{var o=t.name;y[o]=t,r=o}return!i&&r&&(_=r),r||!i&&_},w=function(e,t){if(C(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new k(n)},M=b;M.l=$,M.i=C,M.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var k=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var m=v.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(h);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return M},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!M.u(t)||t,u=M.p(e),h=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},f=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,m=this.$M,b=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case d:return c?h(1,0):h(31,11);case l:return c?h(1,m):h(0,m+1);case o:var y=this.$locale().weekStart||0,g=(v<y?v+7:v)-y;return h(c?b-g:b+(6-g),m);case a:case p:return f(_+"Hours",0);case s:return f(_+"Minutes",1);case r:return f(_+"Seconds",2);case i:return f(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=M.p(e),u="set"+(this.$u?"UTC":""),h=(o={},o[a]=u+"Date",o[p]=u+"Date",o[l]=u+"Month",o[d]=u+"FullYear",o[s]=u+"Hours",o[r]=u+"Minutes",o[i]=u+"Seconds",o[n]=u+"Milliseconds",o)[c],f=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var v=this.clone().set(p,1);v.$d[h](f),v.init(),this.$d=v.set(p,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[M.p(e)]()},m.add=function(n,c){var p,u=this;n=Number(n);var h=M.p(c),f=function(e){var t=w(u);return M.w(t.date(t.date()+Math.round(e*n)),u)};if(h===l)return this.set(l,this.$M+n);if(h===d)return this.set(d,this.$y+n);if(h===a)return f(1);if(h===o)return f(7);var v=(p={},p[r]=e,p[s]=t,p[i]=1e3,p)[h]||1,m=this.$d.getTime()+n*v;return M.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=M.z(this),s=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=n.meridiem,p=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},h=function(e){return M.s(s%12||12,e,"0")},v=d||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return o+1;case"MM":return M.s(o+1,2,"0");case"MMM":return p(n.monthsShort,o,c,3);case"MMMM":return p(c,o);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return p(n.weekdaysMin,t.$W,l,2);case"ddd":return p(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return v(s,a,!0);case"A":return v(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,p,u){var h,f=this,v=M.p(p),m=w(n),b=(m.utcOffset()-this.utcOffset())*e,_=this-m,y=function(){return M.m(f,m)};switch(v){case d:h=y()/12;break;case l:h=y();break;case c:h=y()/3;break;case o:h=(_-b)/6048e5;break;case a:h=(_-b)/864e5;break;case s:h=_/t;break;case r:h=_/e;break;case i:h=_/1e3;break;default:h=_}return u?h:M.a(h)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return M.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},v}(),S=k.prototype;return w.prototype=S,[["$ms",n],["$s",i],["$m",r],["$H",s],["$W",a],["$M",l],["$y",d],["$D",p]].forEach((function(e){S[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,k,w),e.$i=!0),w},w.locale=$,w.isDayjs=C,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],d=s[c]||0,p="".concat(c," ").concat(d);s[c]=d+1;var u=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,i);i.byIndex=o,t.splice(o,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var o=n(s[a]);t[o].references--}for(var l=i(e,r),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,r&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={id:i,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";const e="afterbegin";function t(e,t,n="beforeend"){if(!(e instanceof g))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function i(e,t){if(!(e instanceof g&&t instanceof g))throw new Error("Can replace only components");const n=e.element,i=t.element,r=i.parentElement;if(null===r)throw new Error("Parent element doesn't exist");r.replaceChild(n,i)}function r(e){if(null!==e){if(!(e instanceof g))throw new Error("Can remove only components");e.element.remove(),e.removeElement()}}var s=n(379),a=n.n(s),o=n(795),l=n.n(o),c=n(569),d=n.n(c),p=n(565),u=n.n(p),h=n(216),f=n.n(h),v=n(589),m=n.n(v),b=n(10),_={};_.styleTagTransform=m(),_.setAttributes=u(),_.insert=d().bind(null,"head"),_.domAPI=l(),_.insertStyleElement=f(),a()(b.Z,_),b.Z&&b.Z.locals&&b.Z.locals;const y="shake";class g{#e=null;constructor(){if(new.target===g)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(y),setTimeout((()=>{this.element.classList.remove(y),e?.()}),600)}}const C="time",$="price";class w extends g{#t=null;constructor({onSortTypeChange:e}){super(),this.#t=e,this.element.addEventListener("click",this.#n)}get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n        <div class="trip-sort__item  trip-sort__item--day">\n        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n        <label class="trip-sort__btn" for="sort-day" data-sort-type="day">Day</label>\n      </div>\n\n        <div class="trip-sort__item  trip-sort__item--event">\n          <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n          <label class="trip-sort__btn" for="sort-event">Event</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--time">\n          <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n          <label class="trip-sort__btn" for="sort-time" data-sort-type="${C}">Time</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--price">\n          <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n          <label class="trip-sort__btn" for="sort-price" data-sort-type="${$}">Price</label>\n        </div>\n\n        <div class="trip-sort__item  trip-sort__item--offer">\n          <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n          <label class="trip-sort__btn" for="sort-offer">Offers</label>\n        </div>\n    </form>`}#n=e=>{e.target.closest("div").firstElementChild.checked=!0,e.target.closest("label")&&(e.preventDefault(),this.#t(e.target.closest("label").dataset.sortType))}}class M extends g{get template(){return'<ul class="trip-events__list"></ul>'}}class k extends g{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var S=n(484),E=n.n(S);function D(e){return e?E()(e).format("DD/MM/YY HH:mm"):""}function T(e,t){return t.basePrice-e.basePrice}function A(e,t){const n=E()(e.dateTo).diff(E()(e.dateFrom)),i=E()(t.dateTo).diff(E()(t.dateFrom));return console.log(n-i),i-n}const P=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class taxi",price:120},{id:"b4c3e4e6-9053-42ce-b747-e281314baa32",title:"Tea in taxi",price:20},{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"classical music",price:150}]},{type:"bus",offers:[]},{type:"train",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa41",title:"Tea in room(train)",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa42",title:"Bed sheets",price:60}]},{type:"ship",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa51",title:"Что-то на корабле",price:1e3},{id:"b4c3e4e6-9053-42ce-b747-e281314baa52",title:"Upper cabins",price:250}]},{type:"drive",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa61",title:"Rent a car",price:300},{id:"b4c3e4e6-9053-42ce-b747-e281314baa62",title:"Rent a driver",price:200},{id:"b4c3e4e6-9053-42ce-b747-e281314baa63",title:"Rent a navigator",price:150}]},{type:"flight",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa71",title:"Add luggage",price:50},{id:"b4c3e4e6-9053-42ce-b747-e281314baa72",title:"Switch to comfort",price:80},{id:"b4c3e4e6-9053-42ce-b747-e281314baa73",title:"Add meal",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa74",title:"Choose seats",price:5},{id:"b4c3e4e6-9053-42ce-b747-e281314baa75",title:"Travel by train",price:40}]},{type:"check-in",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa81",title:"Add breakfast",price:70},{id:"b4c3e4e6-9053-42ce-b747-e281314baa82",title:"Transfer",price:45}]},{type:"sightseeing",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa91",title:"Book tickets",price:30},{id:"b4c3e4e6-9053-42ce-b747-e281314baa92",title:"Lunch in city",price:40}]},{type:"restaurant",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa11",title:"Water",price:700},{id:"b4c3e4e6-9053-42ce-b747-e281314baa12",title:"napkin",price:15},{id:"b4c3e4e6-9053-42ce-b747-e281314baa13",title:"Snacks",price:35},{id:"b4c3e4e6-9053-42ce-b747-e281314baa14",title:"Mishlen",price:250}]}];function x(e){const{title:t,price:n}=e;return`<li class="event__offer">\n  <span class="event__offer-title">${t}</span>\n  &plus;&euro;&nbsp;\n  <span class="event__offer-price">${n}</span>\n</li>`}function F(e){const{type:t,dateFrom:n,dateTo:i,destination:r,basePrice:s,isFavorite:a,offers:o}=e,l=(c=n)?E()(c).format("MMM D"):"";var c;const d=E()(n).format("HH:mm"),p=E()(i).format("HH:mm"),u=(h=P.find((e=>e.type===t)).offers.filter((e=>o.includes(e.id))),`<ul class="event__selected-offers">\n      ${function(e){const t=[];if(e.length>0)for(let n=0;n<e.length;n++)t[n]=x(e[n]);return t.join("")}([...h])}\n    </ul>`);var h;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="${E()(n).format("YYYY-MM-D")}">${l}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${t} ${r}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${d}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${p}</time>\n      </p>\n      <p class="event__duration">${(()=>{const e=function(e,t){const n=E()(t).diff(E()(e)),i=n%864e5,r=n%36e5,s=e=>e<0?0:e;return{days:s(Math.floor(n/864e5)),hours:s(Math.floor(i/36e5)),minutes:s(Math.floor(r/6e4))}}(n,i),{days:t,hours:r,minutes:s}=e;return`${t}D ${r}H ${s}M`})()}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${s}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    ${u}\n    <button class="event__favorite-btn ${a?"event__favorite-btn--active":""}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n  </li>`}class L extends g{#i=null;#r=null;#s=null;constructor({point:e,onEditClick:t,onFavoriteClick:n}){super(),this.#i=e,this.#r=t,this.#s=n,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#o)}get template(){return F(this.#i)}#a=e=>{e.preventDefault(),this.#r()};#o=e=>{e.preventDefault(),this.#s()}}const H=e=>{const t=[...e];return function(){const e=(n=t)[Math.floor(Math.random()*n.length)];var n;const i=t.indexOf(e);return t.splice(i,1),e}};function O(e,t){return e.map((e=>e.id===t.id?t:e))}const B=H([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]),j=[{id:`${B()}`,description:"Moscow, is a beautiful city, a true asian pearl, with crowded streets.",name:"Moscow",pictures:[{src:"img/photos/1.jpg",description:" parliament building"}]},{id:`${B()}`,description:"Krasnodar, is a beautiful city, a true asian pearl, with crowded streets.",name:"Krasnodar",pictures:[{src:"img/photos/2.jpg",description:" parliament building"}]},{id:`${B()}`,description:"Tomsk, is a beautiful city, a true asian pearl, with crowded streets.",name:"Tomsk",pictures:[{src:"img/photos/3.jpg",description:" parliament building"}]},{id:`${B()}`,description:"Norilsk, is a beautiful city, a true asian pearl, with crowded streets.",name:"Norilsk",pictures:[{src:"img/photos/4.jpg",description:"parliament building"}]},{id:`${B()}`,description:"Krasnoyarsk, is a beautiful city, a true asian pearl, with crowded streets.",name:"Krasnoyarsk",pictures:[{src:"img/photos/5.jpg",description:"$ame} parliament building"}]},{id:`${B()}`,description:"Perm, is a beautiful city, a true asian pearl, with crowded streets.",name:"Perm",pictures:[{src:`http://picsum.photos/300/200?r=${Math.random()}`,description:"this.name} parliament building"}]},{id:`${B()}`,description:"Voronej is a beautiful city, a true asian pearl, with crowded streets.",name:"Voronej",pictures:[{src:`http://picsum.photos/300/200?r=${Math.random()}`,description:"$ parliament building"}]}];class I extends g{#l=null;constructor(e){super(),this.#l=e}get template(){return function(e){const{description:t,pictures:n}=(e=>{let t={};if(e)for(let n=0;n<j.length;n++)if(j[n].name===e.destination){t=structuredClone(j[n]);break}return t})(e);return`<section class="event__section  event__section--destination">\n  <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n  <p class="event__destination-description">${t}</p>\n\n  <div class="event__photos-container">\n    <div class="event__photos-tape">\n    ${(e=>{const t=[];for(let n=0;n<e.length;n++)t[n]=`<img class="event__photo" src="${e[n].src}" alt="Event photo">`;return t.join("")})(n)}\n    </div>\n  </div>\n  </section>`}(this.#l)}}const Y={id:"",basePrice:"",dateFrom:null,dateTo:null,destination:"",isFavorite:!1,offers:[],type:"taxi"},N=(e,t)=>{const{id:n,title:i,price:r}=e,s=t.includes(n),a=i.split(" ");return`<div class="event__offer-selector">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${a[a.length-1]}-1"\n  type="checkbox" name="event-offer-${a[a.length-1]}" ${s?"checked":""}>\n  <label class="event__offer-label" for="event-offer-${a[a.length-1]}-1">\n    <span class="event__offer-title">${i}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${r}</span>\n  </label>\n</div>`};class U extends g{#i=null;#c=null;#d=null;#p=null;#u=null;constructor({point:e=Y,onFormSubmit:t}){super(),this.#i=e,this.#c=t,this.element.querySelector("form").addEventListener("submit",this.#h),this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#h)}get template(){return(e=>{const{type:t,dateFrom:n,dateTo:i,basePrice:r,destination:s,offers:a}=e,o=D(n),l=D(i),c=P.find((e=>e.type===t)).offers,d=((e,t)=>{const n=[...e],i=[];if(n.length>0)for(let e=0;e<n.length;e++)i[e]=N(n[e],t);return i.join("")})(c,a),p=j.map((e=>`<option value="${e.name}"></option>`)).join("");return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n  <header class="event__header">\n    <div class="event__type-wrapper">\n      <label class="event__type  event__type-btn" for="event-type-toggle-1">\n        <span class="visually-hidden">Choose event type</span>\n        <img class="event__type-icon" width="17" height="17" src="img/icons/${t}.png" alt="Event type icon">\n      </label>\n      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n      <div class="event__type-list">\n        <fieldset class="event__type-group">\n          <legend class="visually-hidden">Event type</legend>\n\n          <div class="event__type-item">\n            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n          </div>\n\n          <div class="event__type-item">\n            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n          </div>\n        </fieldset>\n      </div>\n    </div>\n\n    <div class="event__field-group  event__field-group--destination">\n      <label class="event__label  event__type-output" for="event-destination-1">\n        ${t}\n      </label>\n      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${s}" list="destination-list-1">\n      <datalist id="destination-list-1">\n      ${p}\n      </datalist>\n    </div>\n\n    <div class="event__field-group  event__field-group--time">\n      <label class="visually-hidden" for="event-start-time-1">From</label>\n      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o}">\n      &mdash;\n      <label class="visually-hidden" for="event-end-time-1">To</label>\n      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${l}">\n    </div>\n\n    <div class="event__field-group  event__field-group--price">\n      <label class="event__label" for="event-price-1">\n        <span class="visually-hidden">Price</span>\n        &euro;\n      </label>\n      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${r}">\n    </div>\n\n    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n    <button class="event__reset-btn" type="reset">Delete</button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </header>\n  <section class="event__details">\n    <section class="event__section  event__section--offers">\n      <h3 class="event__section-title  event__section-title--offers">${c.length?"Offers":""}</h3>\n\n      <div class="event__available-offers">\n        ${d}\n      </div>\n    </section>\n\n\n  </section>\n</form>\n</li>`})(this.#i)}init(){const e=this.element.querySelector(".event__details");this.#p=new I(this.#i),t(this.#p,e)}#h=e=>{e.preventDefault(),this.#c(this.#i)}}const W="DEFAULT",q="EDITING";class K{#f=null;#v=null;#m=null;#b=null;#i=null;#_=null;#y=W;constructor({pointListContainer:e,onDataChange:t,onModeChange:n}){this.#f=e,this.#v=t,this.#_=n}#g=()=>{this.#C()};init(e){this.#i=e;const n=this.#m,s=this.#b;this.#m=new L({point:this.#i,onEditClick:this.#g,onFavoriteClick:this.#s}),this.#b=new U({point:this.#i,onFormSubmit:this.#c}),null!==n&&null!==s?(this.#f.contains(n.element)&&i(this.#m,n),this.#f.contains(s.element)&&(this.#y=q,i(this.#b,s),this.#b.init()),r(n),r(s)):t(this.#m,this.#f)}destroy(){r(this.#m),r(this.#b)}resetView(){this.#y!==W&&this.#$()}#C(){this.#_(),i(this.#b,this.#m),this.#b.init(),this.#y=q,document.addEventListener("keydown",this.#w)}#$(){i(this.#m,this.#b),document.removeEventListener("keydown",this.#w),this.#y=W}#w=e=>{"Escape"===e.key&&(e.preventDefault(),this.#$(),document.removeEventListener("keydown",this.#w))};#s=()=>{this.#v({...this.#i,isFavorite:!this.#i.isFavorite})};#c=e=>{this.#v(e),alert("formSubmit"),this.#$()}}let R=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")),"");const V=H(["Moscow","Krasnodar","Tomsk","Norilsk","Krasnoyarsk","Perm","Voronej"]),Z=H([{type:"ship",basePrice:Math.floor(200*Math.random()),dateFrom:new Date("2023-01-25 20:24:00"),dateTo:new Date("2023-01-28 23:24:00"),destination:V(),isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa51"]},{type:"flight",basePrice:Math.floor(200*Math.random()),dateFrom:new Date("2023-05-01 07:24:00"),dateTo:new Date("2023-05-25 08:24:00"),destination:V(),isFavorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa71","b4c3e4e6-9053-42ce-b747-e281314baa72"]},{type:"restaurant",basePrice:Math.floor(200*Math.random()),dateFrom:new Date("2023-08-15 13:24:00"),dateTo:new Date("2023-08-17 03:24:00"),destination:V(),isFavorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa11","b4c3e4e6-9053-42ce-b747-e281314baa12","b4c3e4e6-9053-42ce-b747-e281314baa13"]},{type:"bus",basePrice:Math.floor(200*Math.random()),dateFrom:new Date("2023-09-24 03:24:00"),dateTo:new Date("2023-09-25 10:30:00"),destination:V(),isFavorite:!0,offers:[]}]),z=document.querySelector(".trip-controls__filters"),J=document.querySelector(".trip-events"),X=new class{#M=null;constructor(e){this.#M=e}get points(){return this.#M}}(Array.from({length:3},(function(){return{id:R(),...Z()}}))),G=new class{#k=new M;#S=null;#E=null;#D=[];#T=null;#A=new k;#P=new Map;#x="day";#F=[];constructor({boardContainer:e,pointsModel:t}){this.#S=e,this.#E=t}init(){this.#D=[...this.#E.points],this.#F=[...this.#E.points],this.#L()}#L(){if(this.#D.every((e=>null===e||void 0)))this.#H();else{this.#O(),this.#B();for(let e=0;e<this.#D.length;e++)this.#j(this.#D[e])}}#I=e=>{this.#D=O(this.#D,e),this.#F=O(this.#F,e),this.#P.get(e.id).init(e)};#O(){this.#T=new w({onSortTypeChange:this.#Y}),t(this.#T,this.#S,e)}#B(){t(this.#k,this.#S)}#H(){t(this.#A,this.#S.element,e)}#j(e){const t=new K({pointListContainer:this.#k.element,onDataChange:this.#I,onModeChange:this.#_});t.init(e),this.#P.set(e.id,t)}#N(){this.#P.forEach((e=>e.destroy())),this.#P.clear()}#_=()=>{this.#P.forEach((e=>e.resetView()))};#Y=e=>{if(this.#x!==e){this.#U(e),this.#N(),this.#B();for(let e=0;e<this.#D.length;e++)this.#j(this.#D[e])}};#U(e){switch(e){case C:this.#D.sort(A);break;case $:this.#D.sort(T);break;default:this.#D=[...this.#F]}this.#x=e}}({boardContainer:J,pointsModel:X});t(new class extends g{get template(){return'<form class="trip-filters" action="#" method="get">\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n    <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n    </div> <div class="trip-filters__filter">\n    <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n    <label class="trip-filters__filter-label" for="filter-future">Future</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n    <label class="trip-filters__filter-label" for="filter-present">Present</label>\n  </div>\n\n  <div class="trip-filters__filter">\n    <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n    <label class="trip-filters__filter-label" for="filter-past">Past</label>\n  </div>\n\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>'}},z),G.init()})()})();
//# sourceMappingURL=bundle.db1ee7c9e9d14f8d656d.js.map