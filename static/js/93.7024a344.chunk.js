"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[93],{93:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),s=n(439),i=n(757),a=n.n(i),c=n(689),o=n(791),u=n(390),l=n(87),p="moviedetails_image__89sTr",h="moviedetails_container__Jnos7",v="moviedetails_section1__O3Erm",d="moviedetails_movieInfo__9uuhX",f="moviedetails_additionalInfo__JRVdf",m="moviedetails_additionalInfo_headline__Os6QQ",j=n(184);var x=function(){var e,t,n=(0,c.UO)().id,i=(0,o.useState)({}),x=(0,s.Z)(i,2),g=x[0],_=x[1],w=null!==(e=null===(t=(0,c.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.TP)(n);case 2:t=e.sent,_({id:t.id,title:t.title,overview:t.overview,userScore:t.popularity,genres:t.genres,poster_path:t.poster_path});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var y=g&&g.genres&&g.genres.map((function(e){return e.name})).join(", ");return(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)(l.rU,{to:w,children:"Go back"}),(0,j.jsxs)("div",{className:v,children:[g&&g.poster_path&&(0,j.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w300".concat(g.poster_path),alt:"Movie poster",width:"100%"}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsxs)("h1",{children:[" ",g.title]}),(0,j.jsxs)("p",{children:["User score: ",g.userScore," %"]}),(0,j.jsx)("h3",{children:"Overview:"}),(0,j.jsx)("p",{children:g.overview}),(0,j.jsxs)("h4",{children:["Genres: ",y,"."]})]})]}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("h4",{className:m,children:"Additional information:"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"cast",state:{id:n,from:w},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"reviews",state:{id:n,from:w},children:"Reviews"})})]})]}),(0,j.jsx)(c.j3,{})]})}},390:function(e,t,n){n.d(t,{Bt:function(){return l},TP:function(){return o},d5:function(){return u},vw:function(){return p}});var r=n(861),s=n(757),i=n.n(s),a={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjljNGQ1OGI3Nzc5Y2E3ZjU0NzQzOGVjMDY1YTdkMiIsInN1YiI6IjYzYWRlYjM2MWY3NDhiMDBjOGI3NTk3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yuBGdZBeGbe4GxiKZv6q5aaLChprjgO_x8cJYcfPPzA",accept:"application/json"};function c(){return(c=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",{headers:a});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}t.ZP=function(){return c.apply(this,arguments)};var o=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),{headers:a});case 3:return n=e.sent,r=n.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),{headers:a});case 3:return n=e.sent,r=n.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),{headers:a});case 3:return n=e.sent,r=n.json(),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();function p(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),{headers:a});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r.results);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},861:function(e,t,n){function r(e,t,n,r,s,i,a){try{var c=e[i](a),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(r,s)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(s,i){var a=e.apply(t,n);function c(e){r(a,s,i,c,o,"next",e)}function o(e){r(a,s,i,c,o,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return s}})}}]);
//# sourceMappingURL=93.7024a344.chunk.js.map