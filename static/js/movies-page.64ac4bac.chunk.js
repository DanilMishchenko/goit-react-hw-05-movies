"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493],{3174:function(n,t,e){e.d(t,{O:function(){return u}});var r,i=e(501),o=e(6871),a=e(168),c=e(6031).ZP.ul(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  li {\n    width: calc((100% - 120px) / 4);\n    overflow: hidden;\n    margin-right: 40px;\n    margin-bottom: 40px;\n    border-radius: 10px;\n    background-color: #1d80fb;\n    box-shadow: 0 5px 10px 1px rgb(0 0 0 / 40%);\n    transition: 250ms linear;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n    :nth-child(4n) {\n      margin-right: 0;\n    }\n\n    div {\n      padding-bottom: 16px;\n      color: white;\n      text-align: center;\n    }\n\n    p {\n      margin: 8px 0;\n      font-weight: 600;\n      font-size: 16px;\n      letter-spacing: 0.03em;\n    }\n  }\n"]))),s=e(8565),p=e(184),u=function(n){var t=n.movies,e=(0,o.TH)();return(0,p.jsx)(c,{children:t.map((function(n){var t=n.poster_path?"".concat(s.L2).concat(n.poster_path):"https://thumbs.dreamstime.com/b/%D0%BE%D1%82%D1%81%D1%83%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B5-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B5%D0%B1-%D1%83%D0%B7%D0%BB%D0%BE%D0%B2-177641087.jpg";return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,p.jsxs)("div",{children:[(0,p.jsx)("img",{src:t,alt:n.title}),(0,p.jsx)("p",{children:n.title}),(0,p.jsxs)("span",{children:["Rating: ",n.release_date]})]})})},n.id)}))})}},254:function(n,t,e){e.d(t,{X:function(){return o}});var r,i=e(168),o=e(6031).ZP.h1(r||(r=(0,i.Z)(["\n  text-align: center;\n  margin-bottom: 24px;\n  color: #0804f3;\n"])))},3927:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,i,o,a,c=e(5861),s=e(885),p=e(7757),u=e.n(p),l=e(2791),d=e(501),D=e(3918),x=e(8565),h=e(168),f=e(6031),g=f.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 12px 24px;\n  margin-bottom: 16px;\n"]))),B=f.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 24px;\n  overflow: hidden;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,\n    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;\n"]))),m=f.ZP.button(o||(o=(0,h.Z)(["\n  width: 96px;\n  height: 32px;\n  border: none;\n  border-radius: 24px;\n  color: white;\n  background-image: linear-gradient(to right, #1d80fb, #cc50ff);\n  background-size: 200% 100%;\n  transition: all 750ms ease-in-out;\n  cursor: pointer;\n\n  :hover {\n    background-position: 100% 0;\n    transition: all 750ms ease-in-out;\n  }\n"]))),b=f.ZP.input(a||(a=(0,h.Z)(["\n  width: 100%;\n  outline: none;\n  border: none;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),v=e(184),w=function(n){var t=n.onSubmit,e=(0,l.useState)(""),r=(0,s.Z)(e,2),i=r[0],o=r[1],a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(4),c=function(){o("")};return(0,v.jsx)(g,{children:(0,v.jsxs)(B,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),t(i),c()},children:[(0,v.jsx)(b,{type:"search",name:"search",value:i,id:a,onChange:function(n){o(n.target.value)},placeholder:"Search movies"}),(0,v.jsx)(m,{type:"submit",children:"Search"})]})})},j=e(3174),Z=e(254),k=function(n){var t=n.children;return(0,v.jsx)(Z.X,{children:t})};function y(){var n=(0,d.lr)(),t=(0,s.Z)(n,2),e=t[0],r=t[1],i=(0,l.useState)([]),o=(0,s.Z)(i,2),a=o[0],p=o[1],h=(0,l.useState)(!1),f=(0,s.Z)(h,2),g=f[0],B=f[1],m=e.get("query");(0,l.useEffect)((function(){if(m){var n=function(){var n=(0,c.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return B(!0),n.prev=1,n.next=4,(0,x.Dw)(m);case 4:t=n.sent,p(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,B(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[m]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{onSubmit:function(n){r({query:"".concat(n)})}}),g&&(0,v.jsx)(D.a,{}),0!==a.length&&(0,v.jsxs)(k,{children:["Search: ",m]}),0!==a.length&&(0,v.jsx)(j.O,{movies:a})]})}}}]);
//# sourceMappingURL=movies-page.64ac4bac.chunk.js.map