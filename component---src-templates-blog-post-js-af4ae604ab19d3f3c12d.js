(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{261:function(e,t,n){"use strict";n.r(t);n(86),n(166),n(29),n(3),n(42),n(30),n(7);var r=n(0),a=n.n(r),o=n(1),i=n(151),l=n(18),c=n(251),s=n(250),m=n(69),u=n(252),p=n(262),d=n.n(p),f=n(253),h=(n(6),n(13),function(e){var t=e.repo,n=e.theme,o=e.issueTerm,i=e.label,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,"issue-term":o,theme:"github-"+n,label:i,crossorigin:"anonymous",async:!0};Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),l.current.appendChild(e)}),[]),a.a.createElement("div",{id:"utterances",ref:l})});h.defaultProps={theme:"light"};var g=h,y=n(254);function b(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      display: block;\n    "]);return b=function(){return e},e}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"pageQuery",(function(){return v}));var w=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.location,n=e.data,r=n.markdownRemark,o=n.site.siteMetadata,l=o.siteRepo,p=o.postBasePath,h=o.utterances,b=this.props.pageContext,w=b.previous,v=b.next,I=b.slug,O=r.frontmatter,T=O.title,A=O.description,N=O.date,P=O.tags;return a.a.createElement(c.a,{location:t,headProps:{title:T,description:A||r.excerpt}},a.a.createElement(s.a,{thin:!0},a.a.createElement("div",null,a.a.createElement(u.a,{noBackground:!0,textMuted:!0,mRight:"1rem",style:{paddingLeft:0}},N)),a.a.createElement(_,null,T),a.a.createElement(x,null,a.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),a.a.createElement(k,null,P&&P.length&&P.map((function(e){return a.a.createElement(m.a,{key:e,to:"/tags/"+Object(y.a)(e)},a.a.createElement(u.a,{themed:!0,mRight:"0.5rem"},e))}))),a.a.createElement(C,null,a.a.createElement("div",null,a.a.createElement(z,null,">"),a.a.createElement(m.a,{href:l+"/edit/source/content/blog"+I+"index.md"},"Edit on GitHub"),a.a.createElement(j,null,"·"),a.a.createElement(m.a,{href:"https://twitter.com/home?status="+t.href,title:"Tweet post"},a.a.createElement(d.a,{height:"12"}))),a.a.createElement(f.a,{buttons:[].concat(E(w?{dir:"backward",rel:"prev",to:(p||"")+w.fields.slug,name:w.frontmatter.title,css:"font-size: 13px;"}:[]),E(v?{dir:"forward",rel:"next",to:(p||"")+v.fields.slug,name:v.frontmatter.title,css:"font-size: 13px;"}:[]))}))),a.a.createElement("hr",null),a.a.createElement(s.a,null,h&&a.a.createElement(i.b.Consumer,null,(function(e){return a.a.createElement(g,{repo:h.repo,issueTerm:"pathname",label:h.label,theme:e})}))))},r}(a.a.Component),v=(t.default=w,"3710582719"),_=o.d.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-12c95kz-0"})(["margin:0.25em 0 0.5em 0;"]),x=o.d.div.withConfig({displayName:"blog-post__Body",componentId:"sc-12c95kz-1"})(["",";a{color:",";&:hover{text-decoration:underline;}}img{max-width:125%;}line-height:1.6;h1,h2,h3,h4,h5,h6{margin-top:1.5em;margin-bottom:0.5em;}figcaption{font-size:0.7em;text-align:center;margin:auto;font-style:italic;}"],l.h,(function(e){return e.theme.themePrimary})),k=o.d.div.withConfig({displayName:"blog-post__Tags",componentId:"sc-12c95kz-2"})(["a:hover{text-decoration:none;}"]),C=o.d.div.withConfig({displayName:"blog-post__PostActions",componentId:"sc-12c95kz-3"})(["display:flex;justify-content:space-between;flex-wrap:nowrap;align-items:center;margin-top:3em;font-size:13px;a svg{fill:currentColor;}& > ul{display:none;","}"],l.e.xs(b())),j=o.d.span.withConfig({displayName:"blog-post__Dot",componentId:"sc-12c95kz-4"})(["font-family:monospace;margin:0 0.5em;"]),z=Object(o.d)(j).withConfig({displayName:"blog-post___StyledDot",componentId:"sc-12c95kz-5"})(["margin-left:0;"])},262:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Twitter icon"),r.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}a.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-af4ae604ab19d3f3c12d.js.map