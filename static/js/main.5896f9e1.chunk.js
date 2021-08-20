(this["webpackJsonpgit-hub-starts"]=this["webpackJsonpgit-hub-starts"]||[]).push([[0],{61:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var r,a=n(6),s=n.n(a),c=n(48),i=n.n(c),o=(n(61),n(44)),l=n(78),u=n(26),d=n(77),h=n(79),b=n(75),j=new l.a({uri:"https://api.github.com/graphql"}),p=new u.a((function(e,t){return e.setContext((function(e){var t=e.headers,n=void 0===t?{}:t;return{headers:Object(o.a)(Object(o.a)({},n),{},{Authorization:"Bearer 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"})}})),t(e)})),O=new d.a({cache:new h.a,link:Object(b.a)(p,j)}),f=n(76),g=n(43),m=n(36),v=n(81),x=n(51),S=n(80),w=Object(S.a)(r||(r=Object(x.a)(['\n  query GetRepos($first: Int!, $after: String) {\n      search(query: "language:JavaScript stars:>10000", type: REPOSITORY, first: $first, after: $after) {\n        repositoryCount\n        edges {\n          cursor\n          node {\n            ... on Repository {\n              name\n              description\n              owner {\n                ... on Organization {\n                  name\n                }\n              }\n              openGraphImageUrl\n              stargazers(orderBy: {field: STARRED_AT, direction: DESC}) {\n                totalCount\n              }\n              issues {\n                totalCount\n              }\n              updatedAt\n            }\n          }\n        }\n      }\n    }\n']))),C=n(52),M=n.n(C),y=function(e){return Math.abs(e)>999?Math.sign(e)*(Math.abs(e)/1e3).toFixed(1)+"k":Math.sign(e)*Math.abs(e)},N=n(9);var R=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(10),c=Object(m.a)(s,2),i=c[0],o=(c[1],Object(a.useState)(null)),l=Object(m.a)(o,2),u=l[0],d=(l[1],Object(a.useRef)()),h=Object(v.a)(w,{variables:{first:i,after:u}}),b=(h.error,h.data),j=h.loading,p=h.fetchMore;return Object(a.useEffect)((function(){b&&r(b.search.edges)}),[b]),Object(N.jsxs)("div",{className:"repo-list",onScroll:function(){return function(){if(d.current){var e=d.current,t=e.scrollTop,a=e.scrollHeight;t+e.clientHeight===a&&p({variables:{after:n[n.length-1].cursor},updateQuery:function(e,t){var a=t.fetchMoreResult;if(!a.search.edges)return e;var s=[].concat(Object(g.a)(n),Object(g.a)(a.search.edges));r(s)}})}}()},ref:d,children:[j&&Object(N.jsx)("h1",{className:"loadingText",children:"Loading"}),n.length>0&&n.map((function(e,t){var n,r=e.node;return Object(N.jsx)("div",{className:"product-list-wrapper",children:Object(N.jsxs)("div",{className:"repo-card",children:[Object(N.jsx)("div",{className:"image-holder",children:Object(N.jsx)("img",{src:r.openGraphImageUrl,alt:""})}),Object(N.jsxs)("div",{className:"repo-info",children:[Object(N.jsx)("h1",{children:r.name}),Object(N.jsx)("p",{children:"".concat(r.description.substring(0,100))}),Object(N.jsxs)("div",{className:"issues-stars",children:[Object(N.jsxs)("label",{children:["Start: ",y(r.stargazers.totalCount)]}),Object(N.jsxs)("label",{children:["Issues: ",y(r.issues.totalCount)]}),Object(N.jsxs)("p",{children:["Submitted ",(n=r.updatedAt,M()(n).startOf("hours").fromNow())," by ",r.owner.name]})]})]})]},t)})}))]})},E=n(54);Object(E.a)((function(e){var t=e.graphqlErrors;e.networkError;t.map((function(e){var t=e.message;e.location,e.path;alert("Graphql error ".concat(t))}))}));var I=function(){return Object(N.jsx)(f.a,{client:O,children:Object(N.jsx)("div",{className:"app",children:Object(N.jsx)(R,{})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(I,{})}),document.getElementById("root")),T()}},[[65,1,2]]]);
//# sourceMappingURL=main.5896f9e1.chunk.js.map