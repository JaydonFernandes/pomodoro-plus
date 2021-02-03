(this["webpackJsonppoc-easytimer-react"]=this["webpackJsonppoc-easytimer-react"]||[]).push([[0],{83:function(e,t,a){},84:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a(0),r=a.n(o),s=a(11),c=a.n(s),i=(a(83),a(12)),l=(a(84),a(136)),u=a(140),m=a(152),j=a(47),d=a(141),b=a(145),g=a(96),O=a(142),p=a(150),h=a(143),f=a(153);Object(l.a)({avatar:{backgroundColor:j.a[100],color:j.a[600]}});var k=function(e){var t=e.onClose,a=e.open,r=e.pomodoroTime,s=e.shortBreakTime,c=e.longBreakTime,l=e.longBreakInterval,j=e.autoStartRound,k=e.setPomodoroTime,v=e.setShortBreakTime,S=e.setLongBreakTime,x=e.setLongBreakInterval,I=e.setAutoStartRound,y=Object(o.useState)(r),B=Object(i.a)(y,2),T=B[0],w=B[1],C=Object(o.useState)(s),V=Object(i.a)(C,2),P=V[0],L=V[1],E=Object(o.useState)(c),R=Object(i.a)(E,2),A=R[0],F=R[1],z=Object(o.useState)(l),W=Object(i.a)(z,2),J=W[0],D=W[1],H=Object(o.useState)(j),M=Object(i.a)(H,2),N=M[0],U=M[1];return Object(n.jsxs)(m.a,{onClose:function(){t()},"aria-labelledby":"settings-dialog-title",open:a,children:[Object(n.jsx)(u.a,{id:"settings-dialog-title",children:"Settings"}),Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsx)(p.a,{label:"Pomodoro Time",type:"number",InputLabelProps:{shrink:!0},margin:"normal",style:{width:"30%",margin:".5rem"},variant:"outlined",defaultValue:r,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?w(parseInt(e.target.value)):w(parseInt(r))}}),Object(n.jsx)(p.a,{label:"Short Break Time",type:"number",InputLabelProps:{shrink:!0},margin:"normal",min:"1",variant:"outlined",style:{width:"30%",margin:".5rem"},defaultValue:s,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?L(parseInt(e.target.value)):L(parseInt(s))}}),Object(n.jsx)(p.a,{width:"sm",label:"Long Break Time",type:"number",InputLabelProps:{shrink:!0},InputProps:{inputProps:{max:60,min:1}},margin:"normal",variant:"outlined",style:{width:"30%",margin:".5rem"},defaultValue:c,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?F(parseInt(e.target.value)):F(parseInt(c))}})]}),Object(n.jsx)(O.a,{variant:"middle",style:{margin:"1rem"}}),Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{control:Object(n.jsx)(p.a,{width:"sm",type:"number",InputLabelProps:{shrink:!0},InputProps:{inputProps:{max:60,min:1}},margin:"normal",style:{margin:".5rem"},defaultValue:l,onChange:function(e){parseInt(e.target.value)>=1?D(parseInt(e.target.value)):D(parseInt(l))}}),label:"Long Break Interval:",labelPlacement:"start"})}),Object(n.jsx)(O.a,{variant:"middle",style:{margin:"1rem"}}),Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{control:Object(n.jsx)(f.a,{checked:N,onChange:function(e){U(!N)},name:"checkedB",color:"primary"}),label:"Auto start next round?",labelPlacement:"start"})})]})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(g.a,{onClick:function(){k(T),v(P),S(A),x(J),I(N),t()},color:"primary",children:"Save"})})]})},v=a(146),S=a(149),x=a(65),I=a(147),y=a(148),B=a(144),T=a(60),w=a.n(T),C=a(61),V=a.n(C),P=a(63),L=a.n(P),E=a(62),R=a.n(E),A=a(59),F=a.n(A),z=(a(90),a(49)),W=a.p+"static/media/click.38da6178.mp4",J=a.p+"static/media/complete.8b65bc34.mp4",D=a(50);a(91);var H=function(){var e=Object(z.a)(W),t=Object(i.a)(e,1)[0],a=Object(z.a)(J),s=Object(i.a)(a,1)[0],c=Object(o.useState)("pomodoro"),l=Object(i.a)(c,2),u=l[0],m=l[1],j=Object(o.useState)(localStorage.getItem("pomodoroTime")?parseInt(localStorage.getItem("pomodoroTime")):25),d=Object(i.a)(j,2),b=d[0],O=d[1],p=Object(o.useState)(localStorage.getItem("shortBreakTime")?parseInt(localStorage.getItem("shortBreakTime")):5),h=Object(i.a)(p,2),f=h[0],T=h[1],C=Object(o.useState)(localStorage.getItem("longBreakTime")?parseInt(localStorage.getItem("longBreakTime")):15),P=Object(i.a)(C,2),E=P[0],A=P[1],H=Object(o.useState)(new F.a),M=Object(i.a)(H,1)[0],N=Object(o.useState)(b),U=Object(i.a)(N,2),$=U[0],q=U[1],G=Object(o.useState)($),K=Object(i.a)(G,2),Q=K[0],X=K[1],Y=Object(o.useState)(0),Z=Object(i.a)(Y,2),_=Z[0],ee=Z[1],te=Object(o.useState)(!0),ae=Object(i.a)(te,2),ne=ae[0],oe=ae[1],re=Object(o.useState)(localStorage.getItem("longBreakInterval")?parseInt(localStorage.getItem("longBreakInterval")):4),se=Object(i.a)(re,2),ce=se[0],ie=se[1],le=Object(o.useState)(0),ue=Object(i.a)(le,2),me=ue[0],je=ue[1],de=Object(o.useState)(0),be=Object(i.a)(de,2),ge=be[0],Oe=be[1],pe=Object(o.useState)("true"===localStorage.getItem("autoStartRound")),he=Object(i.a)(pe,2),fe=he[0],ke=he[1],ve=function(e,t){return String(e).padStart(t,"0")};Object(o.useEffect)((function(){document.title=Q+":"+ve(_,2),ne||(console.log(60*$-(60*M.getTimeValues().minutes+_)),Oe(60*$-(60*Q+_))),M.getTimeValues().minutes<=0&&M.getTimeValues().seconds<=0&&Q<=0&&(s(),"pomodoro"===u?(je(me+1),m((me+1)%ce===0?"longBreak":"shortBreak")):m("pomodoro"))}),[_,Q]),Object(o.useEffect)((function(){}),[ge]),Object(o.useEffect)((function(){M.addEventListener("secondsUpdated",(function(e){X(M.getTimeValues().minutes),ee(M.getTimeValues().seconds)})),M.addEventListener("reset",(function(e){X(M.getTimeValues().minutes),ee(M.getTimeValues().seconds)}))}),[]),Object(o.useEffect)((function(){M.stop(),"pomodoro"===u?(q(b),M.start({countdown:!0,startValues:{minutes:b}}),Oe(0)):"shortBreak"===u?(q(f),M.start({countdown:!0,startValues:{minutes:f}}),Oe(0)):(q(E),M.start({countdown:!0,startValues:{minutes:E}}),Oe(0)),M.reset(),fe||(M.pause(),oe(!0))}),[u]),Object(o.useEffect)((function(){var e;localStorage.setItem("pomodoroTime",b),localStorage.setItem("shortBreakTime",f),localStorage.setItem("longBreakTime",E),"pomodoro"===u?(q(b),e=b-$):"shortBreak"===u?(q(f),e=f-$):(q(E),e=E-$);var t=M.getTimeValues().minutes,a=M.getTimeValues().seconds;M.stop(),t+e<=0&&a<=0||t+e<0?(M.start({countdown:!0,startValues:{minutes:0,seconds:1}}),Oe(0)):(M.start({countdown:!0,startValues:{minutes:t+e,seconds:a}}),X(t+e),ee(a)),ne&&M.pause()}),[b,f,E]),Object(o.useEffect)((function(){localStorage.setItem("longBreakInterval",ce)}),[ce]),Object(o.useEffect)((function(){localStorage.setItem("autoStartRound",fe)}),[fe]);var Se=function(){t(),ne?(M.start({countdown:!0,startValues:{minutes:$}}),oe(!1)):(M.pause(),oe(!0))};function xe(e){return ne?Object(n.jsx)(B.a,{"aria-label":"Play",onClick:Se,children:Object(n.jsx)(w.a,{style:{fontSize:60}})}):Object(n.jsx)(B.a,{"aria-label":"Pause",onClick:Se,children:Object(n.jsx)(V.a,{style:{fontSize:60}})})}var Ie=r.a.useState(!1),ye=Object(i.a)(Ie,2),Be=ye[0],Te=ye[1];return Object(n.jsxs)("div",{className:"App",style:{minHeight:"100%"},children:[Object(n.jsx)(v.a,{maxWidth:"sm",children:Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"auto",marginTop:"auto"},children:[Object(n.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Pomodoro"}),Object(n.jsx)(g.a,{startIcon:Object(n.jsx)(R.a,{}),style:{margin:"1rem"},onClick:function(){Te(!0)},variant:"contained",children:"Settings"})]}),Object(n.jsx)(I.a,{style:{backgroundColor:"whitesmoke"},children:Object(n.jsxs)(y.a,{children:[Object(n.jsxs)(S.a,{variant:"contained","aria-label":"contained primary button group",style:{marginBottom:"1rem",width:"100%"},children:[Object(n.jsx)(g.a,{onClick:function(){m("pomodoro")},style:{width:"100%"},color:"pomodoro"===u?"primary":"default",children:"Pomodoro"}),Object(n.jsx)(g.a,{onClick:function(){m("shortBreak")},style:{width:"100%"},color:"shortBreak"===u?"primary":"default",children:"Short Break"}),Object(n.jsx)(g.a,{onClick:function(){m("longBreak")},style:{width:"100%"},color:"longBreak"===u?"primary":"default",children:"Long Break"})]}),Object(n.jsx)(D.a,{value:ge/(60*$)*100,styles:Object(D.b)({pathColor:"#3f51b5"}),children:Object(n.jsxs)(x.a,{variant:"h1",children:[Q," : ",ve(_,2)]})}),Object(n.jsx)(xe,{onClick:Se}),Object(n.jsx)(B.a,{"aria-label":"Replay",onClick:function(){t(),Oe(0),M.start({countdown:!0,startValues:{minutes:$}}),M.reset(),M.pause(),oe(!0)},children:Object(n.jsx)(L.a,{style:{fontSize:60}})})]})})]})}),Object(n.jsx)(k,{pomodoroTime:b,shortBreakTime:f,longBreakTime:E,longBreakInterval:ce,autoStartRound:fe,setPomodoroTime:O,setShortBreakTime:T,setLongBreakTime:A,setLongBreakInterval:ie,setAutoStartRound:ke,open:Be,onClose:function(e){Te(!1)}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,156)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),M()}},[[93,1,2]]]);
//# sourceMappingURL=main.9fd4d472.chunk.js.map