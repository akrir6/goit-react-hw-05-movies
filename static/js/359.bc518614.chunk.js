"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{359:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a,c,i=t(885),s=t(2791),o=t(6871),u=t(367),p=t(168),l=t(9584),d=l.Z.div(r||(r=(0,p.Z)(["\n    margin: 8px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 8px;\n    background-color: #01b4e450;\n\n\n    @media screen and (min-width: 768px) {\n        flex-direction: row;\n        align-items: flex-start;\n    }\n\n"]))),h=l.Z.img(a||(a=(0,p.Z)(["\n    width: 100%;\n    max-width: 768px;\n    @media screen and (min-width: 768px) {\n        max-width: 250px;\n    }\n\n    border-radius: 8px;\n"]))),f=l.Z.ul(c||(c=(0,p.Z)(["\n    color: #0d253f;\n    padding: 0 16px;\n    \n    li:not(:last-child) {\n        border-bottom: 1px dotted  #0d253f;\n    }\n    h2, h3 {\n        text-transform: uppercase;\n    }\n"]))),v=t(184),x=function(){var e=(0,s.useState)(null),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,u.vq)(a).then(r)}),[a]),(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsxs)(d,{children:[(0,v.jsx)(h,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,v.jsxs)(f,{children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:"".concat(t.title," (").concat(t.release_date.slice(0,4),")")}),(0,v.jsx)("p",{children:"User Score: ".concat(10*t.vote_average,"%")})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:t.overview})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:t.genres.map((function(e){return e.name})).join(" ")})]})]})]})})}},367:function(e,n,t){t.d(n,{Df:function(){return u},Wf:function(){return l},tx:function(){return m},vq:function(){return h},zv:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),i=t(4569),s=t.n(i),o="7ad341c7e4bb32efb00f19fee102dc39";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,s().get("trending/movie/day?".concat(n));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o,query:n,page:1,include_adult:!1}),e.prev=1,e.next=4,s().get("search/movie?".concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,s().get("movie/".concat(n,"?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,s().get("movie/".concat(n,"/credits?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,s().get("movie/".concat(n,"/reviews?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=359.bc518614.chunk.js.map