"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[359],{359:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a,c,s=t(885),u=t(2791),o=t(6871),i=t(367),p=t(168),l=t(1993),h=l.Z.div(r||(r=(0,p.Z)(["\n    margin: 8px 0;\n    padding-right: 16px;\n    display: flex;\n    gap: 16px;\n    border-radius: 8px;\n    background-color: #01b4e450;\n"]))),d=l.Z.img(a||(a=(0,p.Z)(["\n    width: 300px;\n    border-radius: 8px;\n"]))),f=l.Z.ul(c||(c=(0,p.Z)(["\n    color: #0d253f;\n    \n    li {\n        border-bottom: 1px dotted  #0d253f;\n    }\n    h2, h3 {\n        text-transform: uppercase;\n    }\n"]))),v=t(184),x=function(){var e=(0,u.useState)(null),n=(0,s.Z)(e,2),t=n[0],r=n[1],a=(0,o.UO)().movieId;return(0,u.useEffect)((function(){(0,i.vq)(a).then(r)}),[a]),(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsxs)(h,{children:[(0,v.jsx)(d,{src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),(0,v.jsxs)(f,{children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:"".concat(t.title," (").concat(t.release_date.slice(0,4),")")}),(0,v.jsx)("p",{children:"User Score: ".concat(10*t.vote_average,"%")})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:t.overview})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:t.genres.map((function(e){return e.name})).join(" ")})]})]})]})})}},367:function(e,n,t){t.d(n,{Df:function(){return i},Wf:function(){return l},tx:function(){return m},vq:function(){return d},zv:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),s=t(4569),u=t.n(s),o="7ad341c7e4bb32efb00f19fee102dc39";function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var n,t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,u().get("trending/movie/day?".concat(n));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o,query:n,page:1,include_adult:!0}),e.prev=1,e.next=4,u().get("search/movie?".concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,u().get("movie/".concat(n,"?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,u().get("movie/".concat(n,"/credits?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:o}),e.prev=1,e.next=4,u().get("movie/".concat(n,"/reviews?").concat(t));case 4:return r=e.sent,a=r.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=359.08d470ae.chunk.js.map