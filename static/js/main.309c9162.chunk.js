(this["webpackJsonppoc-easytimer-react"]=this["webpackJsonppoc-easytimer-react"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(8),c=n(0),s=n.n(c),o=n(10),i=n.n(o),r=(n(28),n(13)),u=(n(29),n(51)),l=n(50),d=n(19),j=n.n(d);n(30);var b=function(){var e=Object(c.useState)(new j.a),t=Object(r.a)(e,1)[0],n=Object(c.useState)(25),s=Object(r.a)(n,2),o=s[0],i=s[1],d=Object(c.useState)(o),b=Object(r.a)(d,2),m=b[0],g=b[1],f=Object(c.useState)(0),h=Object(r.a)(f,2),O=h[0],v=h[1],p=Object(c.useState)(!0),w=Object(r.a)(p,2),S=w[0],T=w[1],V=function(e,t){return String(e).padStart(t,"0")};return Object(c.useEffect)((function(){document.title=m+":"+V(O,2)})),t.addEventListener("secondsUpdated",(function(e){i(t.getTimeValues().toString()),g(t.getTimeValues().minutes),v(t.getTimeValues().seconds)})),t.addEventListener("reset",(function(e){g(t.getTimeValues().minutes),v(t.getTimeValues().seconds)})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)(l.a,{children:[m," : ",V(O,2)]}),Object(a.jsx)(u.a,{onClick:function(){S?(console.log("Start"),t.start({countdown:!0,startValues:{minutes:o}}),T(!1)):(console.log("Pause"),t.pause(),T(!0))},variant:"contained",children:S?"Play":"Pause"}),Object(a.jsx)(u.a,{onClick:function(){t.start({countdown:!0,startValues:{minutes:o}}),t.reset(),t.pause(),T(!0)},variant:"contained",children:"Restart"})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),m()}},[[35,1,2]]]);
//# sourceMappingURL=main.309c9162.chunk.js.map