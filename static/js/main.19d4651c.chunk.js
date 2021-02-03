(this["webpackJsonppoc-easytimer-react"]=this["webpackJsonppoc-easytimer-react"]||[]).push([[0],{84:function(e,t,a){},85:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(6),o=a(0),r=a.n(o),s=a(11),c=a.n(s),i=(a(84),a(12)),l=(a(85),a(138)),u=a(142),m=a(155),j=a(47),d=a(143),b=a(148),g=a(97),O=a(145),p=a(153),h=a(146),f=a(156),k=a(144);Object(l.a)({avatar:{backgroundColor:j.a[100],color:j.a[600]}});var x=function(e){var t=e.onClose,a=e.open,r=e.pomodoroTime,s=e.shortBreakTime,c=e.longBreakTime,l=e.longBreakInterval,j=e.autoStartRound,x=e.setPomodoroTime,v=e.setShortBreakTime,S=e.setLongBreakTime,I=e.setLongBreakInterval,y=e.setAutoStartRound,B=Object(o.useState)(r),T=Object(i.a)(B,2),w=T[0],C=T[1],V=Object(o.useState)(s),P=Object(i.a)(V,2),L=P[0],E=P[1],A=Object(o.useState)(c),R=Object(i.a)(A,2),F=R[0],z=R[1],W=Object(o.useState)(l),J=Object(i.a)(W,2),D=J[0],H=J[1],M=Object(o.useState)(j),N=Object(i.a)(M,2),U=N[0],$=N[1];return Object(n.jsxs)(m.a,{onClose:function(){t()},scroll:"paper","aria-labelledby":"settings-dialog-title",open:a,children:[Object(n.jsx)(u.a,{id:"settings-dialog-title",children:"Settings"}),Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)(k.a,{container:!0,spacing:1,justify:"center",children:[Object(n.jsx)(k.a,{item:!0,sm:4,xs:12,style:{textAlign:"center"},children:Object(n.jsx)(p.a,{style:{width:"100%"},label:"Pomodoro Time",type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",defaultValue:r,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?C(parseInt(e.target.value)):C(parseInt(r))}})}),Object(n.jsx)(k.a,{item:!0,sm:4,xs:12,style:{textAlign:"center"},children:Object(n.jsx)(p.a,{style:{width:"100%"},label:"Short Break Time",type:"number",InputLabelProps:{shrink:!0},margin:"normal",min:"1",variant:"outlined",defaultValue:s,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?E(parseInt(e.target.value)):E(parseInt(s))}})}),Object(n.jsx)(k.a,{item:!0,sm:4,xs:12,style:{textAlign:"center"},children:Object(n.jsx)(p.a,{style:{width:"100%"},label:"Long Break Time",type:"number",InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",defaultValue:c,onChange:function(e){parseInt(e.target.value)>=1&&parseInt(e.target.value)<=60?z(parseInt(e.target.value)):z(parseInt(c))}})})]}),Object(n.jsx)(O.a,{variant:"middle",style:{margin:"1rem"}}),Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{control:Object(n.jsx)(p.a,{width:"sm",type:"number",InputLabelProps:{shrink:!0},InputProps:{inputProps:{max:60,min:1}},margin:"normal",style:{margin:".5rem"},defaultValue:l,onChange:function(e){parseInt(e.target.value)>=1?H(parseInt(e.target.value)):H(parseInt(l))}}),label:"Long Break Interval:",labelPlacement:"start"})}),Object(n.jsx)(O.a,{variant:"middle",style:{margin:"1rem"}}),Object(n.jsx)("div",{children:Object(n.jsx)(h.a,{control:Object(n.jsx)(f.a,{checked:U,onChange:function(e){$(!U)},name:"checkedB",color:"primary"}),label:"Auto start next round?",labelPlacement:"start"})})]})}),Object(n.jsx)(b.a,{children:Object(n.jsx)(g.a,{onClick:function(){x(w),v(L),S(F),I(D),y(U),t()},color:"primary",children:"Save"})})]})},v=a(149),S=a(152),I=a(66),y=a(150),B=a(151),T=a(147),w=a(61),C=a.n(w),V=a(62),P=a.n(V),L=a(64),E=a.n(L),A=a(63),R=a.n(A),F=a(60),z=a.n(F),W=(a(91),a(50)),J=a.p+"static/media/click.38da6178.mp4",D=a.p+"static/media/complete.8b65bc34.mp4",H=a(51);a(92);var M=function(){var e=Object(W.a)(J),t=Object(i.a)(e,1)[0],a=Object(W.a)(D),s=Object(i.a)(a,1)[0],c=Object(o.useState)("pomodoro"),l=Object(i.a)(c,2),u=l[0],m=l[1],j=Object(o.useState)(localStorage.getItem("pomodoroTime")?parseInt(localStorage.getItem("pomodoroTime")):25),d=Object(i.a)(j,2),b=d[0],O=d[1],p=Object(o.useState)(localStorage.getItem("shortBreakTime")?parseInt(localStorage.getItem("shortBreakTime")):5),h=Object(i.a)(p,2),f=h[0],k=h[1],w=Object(o.useState)(localStorage.getItem("longBreakTime")?parseInt(localStorage.getItem("longBreakTime")):15),V=Object(i.a)(w,2),L=V[0],A=V[1],F=Object(o.useState)(new z.a),M=Object(i.a)(F,1)[0],N=Object(o.useState)(b),U=Object(i.a)(N,2),$=U[0],q=U[1],G=Object(o.useState)($),K=Object(i.a)(G,2),Q=K[0],X=K[1],Y=Object(o.useState)(0),Z=Object(i.a)(Y,2),_=Z[0],ee=Z[1],te=Object(o.useState)(!0),ae=Object(i.a)(te,2),ne=ae[0],oe=ae[1],re=Object(o.useState)(localStorage.getItem("longBreakInterval")?parseInt(localStorage.getItem("longBreakInterval")):4),se=Object(i.a)(re,2),ce=se[0],ie=se[1],le=Object(o.useState)(0),ue=Object(i.a)(le,2),me=ue[0],je=ue[1],de=Object(o.useState)(0),be=Object(i.a)(de,2),ge=be[0],Oe=be[1],pe=Object(o.useState)("true"===localStorage.getItem("autoStartRound")),he=Object(i.a)(pe,2),fe=he[0],ke=he[1],xe=function(e,t){return String(e).padStart(t,"0")};Object(o.useEffect)((function(){ne||Oe(60*$-(60*Q+_)),M.getTimeValues().minutes<=0&&M.getTimeValues().seconds<=0&&Q<=0&&(s(),"pomodoro"===u?(je(me+1),m((me+1)%ce===0?"longBreak":"shortBreak")):m("pomodoro"))}),[_,Q]),Object(o.useEffect)((function(){}),[ge]),Object(o.useEffect)((function(){M.addEventListener("secondsUpdated",(function(e){X(M.getTimeValues().minutes),ee(M.getTimeValues().seconds),document.title=M.getTimeValues().minutes+":"+xe(M.getTimeValues().seconds,2)})),M.addEventListener("reset",(function(e){X(M.getTimeValues().minutes),ee(M.getTimeValues().seconds),document.title=M.getTimeValues().minutes+":"+xe(M.getTimeValues().seconds,2)}))}),[]),Object(o.useEffect)((function(){M.stop(),"pomodoro"===u?(q(b),M.start({countdown:!0,startValues:{minutes:b}}),Oe(0)):"shortBreak"===u?(q(f),M.start({countdown:!0,startValues:{minutes:f}}),Oe(0)):(q(L),M.start({countdown:!0,startValues:{minutes:L}}),Oe(0)),M.reset(),fe||(M.pause(),oe(!0))}),[u]),Object(o.useEffect)((function(){var e;localStorage.setItem("pomodoroTime",b),localStorage.setItem("shortBreakTime",f),localStorage.setItem("longBreakTime",L),"pomodoro"===u?(q(b),e=b-$):"shortBreak"===u?(q(f),e=f-$):(q(L),e=L-$);var t=M.getTimeValues().minutes,a=M.getTimeValues().seconds;M.stop(),t+e<=0&&a<=0||t+e<0?(M.start({countdown:!0,startValues:{minutes:0,seconds:1}}),Oe(0)):(M.start({countdown:!0,startValues:{minutes:t+e,seconds:a}}),X(t+e),ee(a)),ne&&M.pause()}),[b,f,L]),Object(o.useEffect)((function(){localStorage.setItem("longBreakInterval",ce)}),[ce]),Object(o.useEffect)((function(){localStorage.setItem("autoStartRound",fe)}),[fe]);var ve=function(){t(),ne?(M.start({countdown:!0,startValues:{minutes:$}}),oe(!1)):(M.pause(),oe(!0))};function Se(e){return ne?Object(n.jsx)(T.a,{"aria-label":"Play",onClick:ve,children:Object(n.jsx)(C.a,{style:{fontSize:60}})}):Object(n.jsx)(T.a,{"aria-label":"Pause",onClick:ve,children:Object(n.jsx)(P.a,{style:{fontSize:60}})})}var Ie=r.a.useState(!1),ye=Object(i.a)(Ie,2),Be=ye[0],Te=ye[1];return Object(n.jsxs)("div",{className:"App",style:{minHeight:"100%"},children:[Object(n.jsx)(v.a,{maxWidth:"md",children:Object(n.jsxs)("div",{style:{textAlign:"center"},children:[Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"auto",marginTop:"auto"},children:[Object(n.jsx)("h1",{style:{fontFamily:"Roboto"},children:"Pomodoro"}),Object(n.jsx)(g.a,{startIcon:Object(n.jsx)(R.a,{}),style:{margin:"1rem"},onClick:function(){Te(!0)},variant:"contained",children:"Settings"})]}),Object(n.jsx)(y.a,{style:{backgroundColor:"whitesmoke"},children:Object(n.jsxs)(B.a,{children:[Object(n.jsxs)(S.a,{variant:"contained","aria-label":"contained primary button group",style:{marginBottom:"1rem",width:"100%"},children:[Object(n.jsx)(g.a,{onClick:function(){m("pomodoro")},style:{width:"100%"},color:"pomodoro"===u?"primary":"default",children:"Pomodoro"}),Object(n.jsx)(g.a,{onClick:function(){m("shortBreak")},style:{width:"100%"},color:"shortBreak"===u?"primary":"default",children:"Short Break"}),Object(n.jsx)(g.a,{onClick:function(){m("longBreak")},style:{width:"100%"},color:"longBreak"===u?"primary":"default",children:"Long Break"})]}),Object(n.jsx)(H.a,{value:ge/(60*$)*100,styles:Object(H.b)({pathColor:"#3f51b5"}),children:Object(n.jsxs)(I.a,{variant:"h1",children:[Q," : ",xe(_,2)]})}),Object(n.jsx)(Se,{onClick:ve}),Object(n.jsx)(T.a,{"aria-label":"Replay",onClick:function(){M.stop(),t(),Oe(0),M.start({countdown:!0,startValues:{minutes:$}}),M.reset(),M.pause(),oe(!0)},children:Object(n.jsx)(E.a,{style:{fontSize:60}})})]})})]})}),Object(n.jsx)(x,{pomodoroTime:b,shortBreakTime:f,longBreakTime:L,longBreakInterval:ce,autoStartRound:fe,setPomodoroTime:O,setShortBreakTime:k,setLongBreakTime:A,setLongBreakInterval:ie,setAutoStartRound:ke,open:Be,onClose:function(e){Te(!1)}})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,159)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),r(e),s(e)}))};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),N()}},[[94,1,2]]]);
//# sourceMappingURL=main.19d4651c.chunk.js.map