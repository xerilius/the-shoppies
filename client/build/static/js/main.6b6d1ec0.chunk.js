(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(18),i=a.n(n),r=(a(25),a(7)),o=a(19),j=a(2),l=(a(26),a(0));function h(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{className:"nav",children:Object(l.jsx)("a",{href:"/",children:"The Shoppies"})})})}a(28);function m(){return Object(l.jsxs)("div",{className:"landing-container",children:[Object(l.jsxs)("div",{className:"landing-wrapper",children:[Object(l.jsx)("div",{className:"landing-year",children:"2021"}),Object(l.jsxs)("div",{className:"landing-main",children:["The Shoppies",Object(l.jsxs)("div",{className:"sub",children:[Object(l.jsx)("span",{children:"Mov"}),"i",Object(l.jsx)("span",{children:"e"}),Object(l.jsx)("span",{children:" Award"}),"s"]})]})]}),Object(l.jsx)("div",{className:"landing-sub",children:" Nominate your top 5 movies "})]})}a(29);function d(e){var t=e.handleSubmit,a=Object(s.useState)(""),c=Object(r.a)(a,2),n=c[0],i=c[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"searchbar",children:Object(l.jsxs)("form",{onSubmit:function(e){return t(e,n)},children:[Object(l.jsx)("input",{value:n,onChange:function(e){return i(e.target.value)},name:"search",type:"text",placeholder:"\ud83c\udfac Search a movie title"}),""!==n&&Object(l.jsx)("div",{className:"clear",onClick:function(){return i("")},children:Object(l.jsx)("i",{className:"fas fa-backspace fa-2x"})})]})})})}var A=a(17),b=a(8),g=(a(30),a.p+"static/media/tomato.c1fa3afb.png"),u=a.p+"static/media/splat.cf448ca2.png";function O(e){var t,a,s=e.movie,c=e.nominateMovie,n=!!e.nominated.find((function(e){return s.imdbID===e.imdbID}));t=!1===n?"Nominate":Object(l.jsx)("i",{className:"fas fa-star "});var i=s.Genre;i&&(a=(i=s.Genre.split(",")).map((function(e){return Object(l.jsx)("span",{className:"movie-genre",children:e.trim()})})));var r=[];return s&&s.Ratings.map((function(e){("Internet Movie Database"===e.Source&&r.push(Object(l.jsxs)("span",{className:"rating-type",children:[" ",Object(l.jsx)("img",{className:"rating-icons",src:"data:image/png;base64,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"})," ",e.Value," "]})),"Rotten Tomatoes"===e.Source)&&(e.Value.substring(0,e.Value.length-1)<"60"?r.push(Object(l.jsxs)("span",{className:"rating-type",children:[Object(l.jsx)("img",{className:"rating-icons",src:u})," ",e.Value," "]})):r.push(Object(l.jsxs)("span",{className:"rating-type",children:[Object(l.jsx)("img",{className:"rating-icons",src:g})," ",e.Value," "]})));if("Metacritic"===e.Source){var t=parseInt(e.Value.split("/")[0]);t>60?r.push(Object(l.jsxs)("span",{className:"rating-type",children:[Object(l.jsx)("span",{className:"metacritic metascore-green",children:t})," Metascore"]})):39<t&&t<61?r.push(Object(l.jsxs)("span",{className:"rating-type",children:[Object(l.jsx)("span",{className:"metacritic metascore-yellow",children:t})," Metascore"]})):t<40&&r.push(Object(l.jsxs)("span",{className:"rating-type",children:[Object(l.jsx)("span",{className:"metacritic metascore-red",children:t})," Metascore"]}))}})),console.log(r),Object(l.jsx)("div",{className:"search-result-card",children:Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"card-content--items",children:[Object(l.jsx)("div",{className:"container-img",children:Object(l.jsx)("img",{className:"movie-img",src:s.Poster})}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsxs)("div",{className:"movie-title",children:[s.Title," (",s.Year,")"]}),Object(l.jsx)("div",{className:"plot",children:s.Plot}),Object(l.jsxs)("div",{className:"dir",children:["Director: ",Object(l.jsxs)("span",{className:"text-light",children:[s.Director," "]})]}),Object(l.jsxs)("div",{className:"stars",children:["Starring: ",Object(l.jsx)("span",{className:"text-light",children:s.Actors})]}),Object(l.jsxs)("div",{className:"ratings",children:[r," "]}),Object(l.jsxs)("div",{className:"genres",children:["Genres: ",a]})]})]}),Object(l.jsx)("button",{className:"nomination",onClick:function(){return c(s)},disabled:n,children:Object(l.jsx)("span",{className:"btn-text",children:t})})]})})}a(31);function Q(e){var t=e.query,a=e.data,s=e.total,c=e.nominated,n=e.nominateMovie,i=e.prev,r=e.next,o=e.page,j=1===o,h=Math.floor(s/10)<=o,m="";return a&&(m=a.map((function(e){return Object(l.jsx)(O,{nominated:c,nominateMovie:n,movie:e},e.imdbID)}))),Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsxs)("div",{className:"container-results",children:[Object(l.jsxs)("div",{className:"results-header",children:[s,' Results for "',t,'"']}),Object(l.jsx)("div",{className:"results",children:m}),Object(l.jsxs)("div",{className:"page-navigation",children:[Object(l.jsxs)("button",{disabled:j,onClick:function(){return i()},className:"page prev",children:[Object(l.jsx)("i",{class:"fas fa-chevron-left"}),Object(l.jsx)("span",{className:"prev-text",children:"Prev"})]}),Object(l.jsxs)("button",{onClick:function(){return r()},className:"page next",disabled:h,children:[Object(l.jsx)("span",{className:"next-text",children:"Next"}),Object(l.jsx)("i",{class:"fas fa-chevron-right"})]})]})]}),!a&&Object(l.jsx)("div",{className:"container-results center",children:Object(l.jsxs)("div",{className:"results-header",children:['0 Results for "',t,'"']})})]})}a(32);function x(e){var t=e.movie,a=e.remove,s=e.rank;return Object(l.jsxs)("div",{className:"nomination-card",children:[Object(l.jsxs)("div",{className:"rank",children:["0",s]}),Object(l.jsxs)("div",{className:"nom-content",children:[Object(l.jsxs)("div",{className:"nom-info",children:[Object(l.jsx)("img",{className:"nom-img",src:t.Poster}),Object(l.jsxs)("div",{className:"nom-title",children:[t.Title," (",t.Year,")"]})]}),Object(l.jsxs)("div",{className:"banner",children:[Object(l.jsx)("div",{className:"nom-banner",children:"Nominated"}),Object(l.jsx)("div",{className:"nom-banner-bottom"}),Object(l.jsx)("button",{className:"remove",onClick:function(){return a(t)},children:Object(l.jsx)("i",{class:"fas fa-minus"})})]})]})]})}a(33);function p(e){e.data;var t=e.nominated,a=e.remove,s=t.map((function(e,t){return Object(l.jsx)(x,{rank:t+1,remove:a,movie:e})}));return Object(l.jsx)(l.Fragment,{children:0!==t.length&&Object(l.jsxs)("div",{className:"container-nominations",children:[Object(l.jsx)("h1",{className:"top5",children:"Top 5 Movies"}),Object(l.jsx)("div",{className:"nominations",children:s})]})})}a(34);function E(){return Object(l.jsx)("div",{className:"loading-screen",children:Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("i",{class:"fas fa-circle-notch fa-spin fa-5x"})})})}a(35);function v(e){var t=e.query,a=e.setMessage,c=e.message,n=Object(s.useState)([]),i=Object(r.a)(n,2),o=i[0],j=i[1],h=Object(s.useState)([]),m=Object(r.a)(h,2),d=m[0],g=m[1],u=Object(s.useState)(1),O=Object(r.a)(u,2),x=O[0],v=O[1],f=Object(s.useState)(!0),N=Object(r.a)(f,2),C=N[0],J=N[1],q=Object(s.useRef)(null);function B(e){fetch("/api/movies/".concat(t,"/").concat(e)).then((function(e){return e.json()})).then((function(t){"True"===t.response?(g({movies:t.data,total:t.total}),a(Object(b.a)(Object(b.a)({},c),{},{error:""})),v(e)):(g({movies:null,total:0}),a(Object(b.a)(Object(b.a)({},c),{},{error:t.data.Error})))})).catch((function(e){return console.error(e)})).finally(setTimeout((function(){J(!1)}),600))}return Object(s.useEffect)((function(){J(!0),B(1)}),[t]),Object(s.useEffect)((function(){J(!0),B(x)}),[x]),Object(s.useEffect)((function(){5===o.length?a(Object(b.a)(Object(b.a)({},c),{},{alert:"Thank you for nominating 5 movies!",error:""})):a(Object(b.a)(Object(b.a)({},c),{},{alert:""}))}),[o]),Object(l.jsx)(l.Fragment,{children:C?Object(l.jsx)(E,{}):Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"container-contents",children:[Object(l.jsx)(p,{data:d.movies,nominated:o,remove:function(e){var t=Object(A.a)(o).filter((function(t){return t!==e}));j(t)}}),Object(l.jsx)(Q,{ref:q,query:t,data:d.movies,total:d.total,nominated:o,nominateMovie:function(e){o.length<5&&j([].concat(Object(A.a)(o),[e]))},next:function(){v(x+1)},prev:function(){1!==x&&v(x-1)},page:x})]})})})}a(36);function f(e){var t=e.message;return Object(l.jsxs)(l.Fragment,{children:[""!==t.alert&&Object(l.jsx)("div",{className:"msg-banner",children:Object(l.jsx)("div",{children:t.alert})}),""!==t.error&&Object(l.jsx)("div",{className:"msg-banner",children:Object(l.jsx)("div",{children:t.error})})]})}a(37);var N=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),A=i[0],b=i[1],g=Object(s.useState)({alert:"",error:""}),u=Object(r.a)(g,2),O=u[0],Q=u[1];return Object(s.useEffect)((function(){c(!0)}),[]),Object(l.jsx)(o.a,{children:Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(j.c,{children:Object(l.jsxs)("div",{className:"page-container",children:[Object(l.jsx)(h,{}),Object(l.jsx)(f,{message:O,query:A}),a&&""===A&&Object(l.jsx)(m,{}),Object(l.jsx)(d,{handleSubmit:function(e,t){e.preventDefault(),b(t),c(!1)}}),""!==A&&Object(l.jsx)(v,{query:A,setMessage:Q,message:O})]})})})})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.6b6d1ec0.chunk.js.map