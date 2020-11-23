var XhrContentSwitcher=function(){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){t=t.get(e);if(!t)throw new TypeError("attempted to get private field on non-instance");return t.get?t.get.call(e):t.value}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var l=new WeakMap,c=new WeakMap,s=new WeakSet,u=new WeakSet,h=new WeakSet,e=function(){function r(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),h.add(this),u.add(this),s.add(this),l.set(this,{writable:!0,value:"XhrContentSwitcher"}),c.set(this,{writable:!0,value:null}),this.containerSelector=e,this.linkSelector=t,this.debugging=n}var e,t,n;return e=r,(t=[{key:"init",value:function(){var t=this;this.container=a(this,s,d).call(this,this.containerSelector),document.addEventListener("DOMContentLoaded",function(){document.querySelector("body").addEventListener("click",function(e){e.target.classList.contains(t.linkSelector.replace(".",""))&&(e.preventDefault(),a(t,u,f).call(t,e))});var e=document.querySelector(t.linkSelector);null!==e&&0!==e.length||!t.debugging||console.log(i(t,l)+": No elements of the class "+t.linkSelector+" were found")})}},{key:"onSwitch",value:function(e){!function(e,t,n){if(!(t=t.get(e)))throw new TypeError("attempted to set private field on non-instance");if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(this,c,e)}}])&&o(e.prototype,t),n&&o(e,n),r}(),d=function(e){var t=document.querySelector(e);return null!==t&&0!==t.length||!this.debugging||console.log(i(this,l)+": No elements of the class "+e+" were found"),t},f=function(t){var n=this,r=new XMLHttpRequest;r.onreadystatechange=function(){var e;r.readyState===XMLHttpRequest.DONE&&(e=(new DOMParser).parseFromString(r.responseText,"text/html"),n.container.innerHTML=e.querySelector(n.containerSelector).innerHTML,a(n,h,w).call(n,t.target),i(n,c)&&i(n,c).call(n,t))},r.open("GET",t.target,!0),r.send()},w=function(e){window.history.pushState(null,"",e)};return e}();
//# sourceMappingURL=XhrContentSwitcher.js.map
