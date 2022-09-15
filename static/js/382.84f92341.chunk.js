"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[382],{1382:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var r,a,c=t(885),u=t(2791),o=t(6871),i=t(367),p=t(168),s=t(1993),l=s.Z.ul(r||(r=(0,p.Z)(["\n    padding: 8px;\n    display: grid;  \n    grid-template-rows: auto;\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n    column-gap: 8px;\n    row-gap: 8px;\n    align-items: center;\n\n\n    border: 2px solid #01b4e4;\n    border-radius: 0 4px 4px 4px;\n\n"]))),d=s.Z.li(a||(a=(0,p.Z)(["\n    display: block;\n    height: 200px;\n    border: 1px solid #e3e3e3;\n    color: #0d253f;\n    border-radius: 2px;\n    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);\n       \n    img {\n        width: 100%;\n        display: block;\n        border-radius: 2px 2px 0 0; \n    }\n   \n    p {\n        padding: 4px 8px;\n        font-size: 12px;\n        color: inherit;\n    }\n\n   \n\n"]))),f=t(184),h=function(){var n=(0,u.useState)(null),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,o.UO)().movieId;return(0,u.useEffect)((function(){(0,i.zv)(a).then((function(n){return r(null===n||void 0===n?void 0:n.cast)}))}),[a]),(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(l,{children:t.map((function(n){var e=n.id,t=n.name,r=n.profile_path;return(0,f.jsxs)(d,{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(r),alt:t}),(0,f.jsx)("p",{children:t})]},e)}))})})}},367:function(n,e,t){t.d(e,{Df:function(){return p},Wf:function(){return l},tx:function(){return m},vq:function(){return f},zv:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(4569),o=t.n(u),i="7ad341c7e4bb32efb00f19fee102dc39";function p(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var e,t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:i}),n.prev=1,n.next=4,o().get("trending/movie/day?".concat(e));case 4:return t=n.sent,r=t.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i,query:e,page:1,include_adult:!0}),n.prev=1,n.next=4,o().get("search/movie?".concat(t));case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.prev=1,n.next=4,o().get("movie/".concat(e,"?").concat(t));case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.prev=1,n.next=4,o().get("movie/".concat(e,"/credits?").concat(t));case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({api_key:i}),n.prev=1,n.next=4,o().get("movie/".concat(e,"/reviews?").concat(t));case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}o().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=382.84f92341.chunk.js.map