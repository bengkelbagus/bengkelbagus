(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[183],{9318:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category",function(){return r(4434)}])},3187:function(e,n,r){"use strict";var t=r(5893),i=r(5079),o=r(336),a=r(4003),s=r(4115),c=r(4632),l=r(2642),u=r(5063);function f(){var e,n,r=(e=["\n  color: #ccc;\n  cursor: pointer;\n\n  &:hover {\n    color: #222;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return f=function(){return r},r}var d=c.default.p(f());n.Z=function(){var e=(0,l.v)().categories;return 0===e.length?null:(0,t.jsxs)(i.gC,{width:"100%",alignItems:"flex-start",gridGap:"1rem",children:[(0,t.jsx)(o.X,{as:"h4",size:"md",children:"Categories"}),(0,t.jsx)(a.i,{}),(0,t.jsx)(i.gC,{children:e.map((function(e,n){return(0,t.jsx)(u.default,{href:"/category/"+e.name.replace(" ","-"),passHref:!0,children:(0,t.jsxs)(d,{children:[(0,t.jsx)(s.x,{as:"span",textTransform:"capitalize",children:e.name})," ","(",e.blogs.length,")"]})},n)}))})]})}},3719:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(7294);function i(e,n,r){var i=(0,t.useRef)(n);(0,t.useEffect)((function(){i.current=n}),[n]),(0,t.useEffect)((function(){var n=r||window;if(null!=n){var t=function(e){return i.current(e)};return n.addEventListener(e,t),function(){return n.removeEventListener(e,t)}}}),[e,r])}},1465:function(e,n,r){"use strict";var t=r(7294),i=r(3719);n.Z=function(){var e=(0,t.useState)({width:0,height:0,isLaptopDisplay:!1,isTabletDisplay:!1,isMobileDisplay:!1}),n=e[0],r=e[1],o=function(){r({width:window.outerWidth,height:window.outerHeight,isLaptopDisplay:window.outerWidth<1420||window.innerWidth<1420,isTabletDisplay:window.outerWidth<920||window.innerWidth<920,isMobileDisplay:window.outerWidth<612||window.innerWidth<612})};return(0,t.useEffect)(o,[]),(0,i.Z)("resize",o),n}},7853:function(e,n,r){"use strict";r.d(n,{Z:function(){return _}});var t=r(5893),i=r(9008),o=r(8017),a=r(4441),s=r(3272),c=r(5079),l=r(336),u=r(4115),f=r(8520),d=r.n(f),h=r(4953),p=r(8322),x=r(5063),m=r(7294);function g(e,n,r,t,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?n(c):Promise.resolve(c).then(t,i)}var j=function(){var e=(0,m.useState)([]),n=e[0],r=e[1];(0,m.useEffect)((function(){a()}),[]);var i,a=(i=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h.z0+"/social-medias").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,t){var o=i.apply(e,n);function a(e){g(o,r,t,a,s,"next",e)}function s(e){g(o,r,t,a,s,"throw",e)}a(void 0)}))});return(0,t.jsx)(c.Ug,{width:"100%",gridGap:"1rem",children:0!==n.length&&n.map((function(e,n){return(0,t.jsx)(x.default,{scroll:!1,href:e.url,passHref:!0,children:(0,t.jsx)(o.xu,{cursor:"pointer",children:(0,t.jsx)(p.E,{boxSize:"42px",src:"/images/".concat(e.name,"-icon.svg"),alt:e.name})})},n)}))})},v=function(){return(0,t.jsxs)(o.xu,{backgroundColor:"blackAlpha.900",p:"2%",display:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",color:"white",gridGap:"1rem",children:[(0,t.jsxs)(c.Ug,{width:"100%",justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(l.X,{as:"h4",fontSize:"14px",children:"BengkelBagus"}),(0,t.jsx)(u.x,{fontSize:"14px",children:"Copyright 2021"})]}),(0,t.jsx)(o.xu,{children:(0,t.jsx)(j,{})})]})},w=function(e){var n=(0,m.useState)(e),r=n[0],t=n[1];return[r,function(e){t((function(n){return"boolean"===typeof e?e:!n}))}]},b=r(1465),y=r(6640),k=r(4313),z=r(4003),C=r(9262),E=r(521);function D(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){i=!0,o=c}finally{try{t||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(){var e,n,r=(e=['\n  text-transform: capitalize;\n  cursor: pointer;\n  opacity: 1;\n  position: relative;\n\n  &:after {\n    content: "";\n    position: absolute;\n    background-color: #fff;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 2px;\n    transition: width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n\n  &:hover:after {\n    width: 100%;\n  }\n'],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return I=function(){return r},r}var Z=r(4632).default.p(I()),H=function(){var e=D(w(!1),2),n=e[0],r=e[1],i=(0,b.Z)().isTabletDisplay,a=[{name:"home",link:"/"},{name:"about",link:"/#about"},{name:"portofolio",link:"/#portofolio"},{name:"testimonial",link:"/#testimonial"},{name:"blog",link:"/blog"}];return(0,t.jsxs)(o.xu,{color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(x.default,{href:"/",passHref:!0,children:(0,t.jsx)(l.X,{as:"h4",size:"sm",cursor:"pointer",children:"Bengkel Bagus"})}),i?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.z,{variant:"ghost",color:"white",colorScheme:"blackAlpha",onClick:function(){return r(!0)},children:(0,t.jsx)(k.U,{})}),(0,t.jsxs)(C.dy,{isOpen:n,placement:"right",onClose:function(){return r(!1)},children:[(0,t.jsx)(E.ZA,{}),(0,t.jsxs)(C.sc,{children:[(0,t.jsx)(E.ol,{mt:"5px",mr:"5px",color:"white"}),(0,t.jsxs)(E.fe,{backgroundColor:"black",children:[(0,t.jsx)(l.X,{color:"yellow.400",as:"h4",size:"md",mt:"3rem",px:"1rem",children:"Bengkel Bagus"}),(0,t.jsx)(z.i,{my:"2rem"}),(0,t.jsx)(c.gC,{gridGap:"2rem",justifyContent:"flex-start",children:a.map((function(e,n){return(0,t.jsx)(x.default,{href:e.link,passHref:!0,children:(0,t.jsx)(y.z,{variant:"ghost",width:"100%",display:"flex",justifyContent:"flex-start",colorScheme:"blackAlpha",color:"white",fontSize:"32px",children:e.name})},n)}))})]})]})]})]}):(0,t.jsx)(c.Ug,{gridGap:"1rem",children:a.map((function(e,n){return(0,t.jsx)(x.default,{href:e.link,passHref:!0,children:(0,t.jsx)(Z,{children:e.name})},n)}))})]})},O=r(3719),S=r(1163),_=function(e){var n=e.children,r=e.title,c=e.heads,l=(0,m.useRef)(null),u=(0,b.Z)(),f=u.isLaptopDisplay,d=u.isTabletDisplay,h=(0,m.useState)(0),p=h[0],x=h[1],g=(0,S.useRouter)().pathname;return(0,O.Z)("scroll",(function(){x(window.scrollY)})),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.default,{children:[(0,t.jsx)("title",{children:r}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"}),c]}),(0,t.jsx)(o.xu,{position:"fixed",top:"0",left:"0",zIndex:"99",width:"100%",backgroundColor:p>50||"/"!==g?"blackAlpha.900":"transparent",pl:f?"2rem":"10%",pr:f?"1rem":"10%",py:d?"10px":"1.5rem",children:(0,t.jsx)(H,{})}),(0,t.jsx)(a.M,{exitBeforeEnter:!0,onExitComplete:function(){return window.scrollTo(0,0)},children:(0,t.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"easeIn",type:"tween"},children:(0,t.jsx)(o.xu,{ref:l,children:n})})}),(0,t.jsx)(v,{})]})}},2706:function(e,n,r){"use strict";var t=r(5893),i=r(1465),o=r(4953),a=r(2483),s=r(8017),c=r(5079),l=r(4115),u=r(4632),f=r(5063);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function h(){var e=d(["\n  background-color: #222;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 200px;\n  cursor: pointer;\n  aspect-ratio: 1;\n"]);return h=function(){return e},e}function p(){var e=d(["\n  font-weight: 700;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 1;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return p=function(){return e},e}function x(){var e=d(["\n  font-size: 14px;\n  cursor: pointer;\n  color: #ccc;\n\n  &:hover {\n    color: #aaa;\n  }\n"]);return x=function(){return e},e}function m(){var e=d(["\n  align-self: flex-end;\n  font-size: 14px;\n  cursor: pointer;\n  color: #ccc;\n\n  &:hover {\n    color: #aaa;\n  }\n"]);return m=function(){return e},e}var g=u.default.div(h(),(function(e){return e.backgroundImage})),j=u.default.h4(p()),v=u.default.p(x()),w=u.default.span(m());n.Z=function(e){var n=(0,i.Z)().isLaptopDisplay,r=e.featuredImage,u=e.title,d=e.published_at,h=e.description,p=e.comments;if(!r||!u||!d||!h)return null;var x="/blog/".concat(new Date(d).toISOString().split("T")[0]),m=x+"/".concat(u.replace(" ","-"));return(0,t.jsxs)(s.xu,{display:"flex",flexDir:"row",alignItems:"flex-start",gridGap:"2rem",w:"100%",children:[(0,t.jsx)(f.default,{href:o.Hf+m,passHref:!0,children:(0,t.jsx)(g,{backgroundImage:r.url})}),(0,t.jsxs)(c.gC,{alignItems:"flex-start",children:[(0,t.jsxs)(s.xu,{gridGap:"5px",children:[(0,t.jsx)(f.default,{href:o.Hf+m,passHref:!0,children:(0,t.jsx)(j,{children:u})}),(0,t.jsx)(f.default,{href:o.Hf+x,passHref:!0,children:(0,t.jsx)(v,{children:(0,a.vc)(d)})})]}),(0,t.jsx)(l.x,{children:(0,a.gK)(h,n?100:200)}),(0,t.jsxs)(w,{children:[p?p.length:0," Komentar"]})]})]})}},4434:function(e,n,r){"use strict";r.r(n);var t=r(5893),i=r(3187),o=r(1465),a=r(7853),s=(r(2706),r(8017)),c=r(336),l=r(4003),u=r(5079);n.default=function(){var e=(0,o.Z)().isTabletDisplay;return(0,t.jsx)(a.Z,{title:"Categories | Bengkel Bagus",children:(0,t.jsxs)(s.xu,{minH:"60vh",p:"5%",my:"4rem",children:[(0,t.jsxs)(s.xu,{px:"10%",pt:"2rem",pb:"5rem",display:"flex",alignItems:"center",flexDir:"column",gridGap:"1rem",textAlign:"center",children:[(0,t.jsx)(c.X,{as:"h1",size:"lg",color:"yellow.400",children:"Blog"}),(0,t.jsx)(c.X,{as:"h1",size:"xl",color:"black",children:"Upgrade your knowledge"}),(0,t.jsx)(l.i,{borderColor:"yellow.400",borderWidth:"2px",width:"100px"})]}),(0,t.jsx)(u.gC,{mt:e?"4rem":"0",flex:"1",minWidth:"300px",position:"sticky",top:"10vh",height:"fit-content",gridGap:"2rem",children:(0,t.jsx)(i.Z,{})})]})})}}},function(e){e.O(0,[774,846,638,888,179],(function(){return n=9318,e(e.s=n);var n}));var n=e.O();_N_E=n}]);