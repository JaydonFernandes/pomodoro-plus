(this["webpackJsonppoc-easytimer-react"]=this["webpackJsonppoc-easytimer-react"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(8),i=n(0),c=n.n(i),a=n(10),r=n.n(a),s=(n(28),n(13)),l=(n(29),n(51)),u=n(50),d=n(19),f=n.n(d);n(30);var g=function(){var e=Object(i.useState)(new f.a),t=Object(s.a)(e,1)[0],n=Object(i.useState)(25),c=Object(s.a)(n,2),a=c[0],r=c[1],d=Object(i.useState)(a),g=Object(s.a)(d,2),h=g[0],v=g[1],p=Object(i.useState)(0),b=Object(s.a)(p,2),w=b[0],j=b[1],m=Object(i.useState)(!0),O=Object(s.a)(m,2),S=O[0],k=O[1],y=function(e,t){return String(e).padStart(t,"0")};return Object(i.useEffect)((function(){document.title=h+":"+y(w),console.log("timer: "+t.getTimeValues().toString())})),t.addEventListener("secondsUpdated",(function(e){r(t.getTimeValues().toString()),v(t.getTimeValues().minutes),j(t.getTimeValues().seconds)})),t.addEventListener("reset",(function(e){v(t.getTimeValues().minutes),j(t.getTimeValues().seconds)})),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(u.a,{children:[h," : ",y(w,2)]}),Object(o.jsx)(l.a,{onClick:function(){S?(console.log("Start"),t.start({countdown:!0,startValues:{minutes:a}}),k(!1)):(console.log("Pause"),t.pause(),k(!0))},variant:"contained",children:S?"Play":"Pause"}),Object(o.jsx)(l.a,{onClick:function(){t.reset(),t.pause(),k(!0)},variant:"contained",children:"Restart"})]})},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/poc-easytimer-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/poc-easytimer-react","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):v(t,e)}))}}(),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.b4a8a481.chunk.js.map