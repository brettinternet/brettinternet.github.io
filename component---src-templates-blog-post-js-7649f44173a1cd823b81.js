(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{262:function(e,t,n){"use strict";n.r(t);n(87),n(166),n(29),n(3),n(42),n(30),n(7);var r=n(1),a=n(0),o=n.n(a),i=n(151),l=n(18),c=n(252),s=n(251),m=n(69),u=n(253),p=n(263),d=n.n(p),f=n(254),h=(n(6),n(13),function(e){var t=e.repo,n=e.theme,r=e.issueTerm,i=e.label,l=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:t,"issue-term":r,theme:"github-"+n,label:i,crossorigin:"anonymous",async:!0};Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),l.current.appendChild(e)}),[]),o.a.createElement("div",{id:"utterances",ref:l})});h.defaultProps={theme:"light"};var g=h,y=n(255);function b(){var e=v(["\n                  margin-left: 0;\n                "]);return b=function(){return e},e}function E(){var e=v(["\n      display: block;\n    "]);return E=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"pageQuery",(function(){return k}));var x=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.location,n=e.data,r=n.markdownRemark,a=n.site.siteMetadata,l=a.siteRepo,p=a.postBasePath,h=a.utterances,b=this.props.pageContext,E=b.previous,v=b.next,x=b.slug,k=r.frontmatter,A=k.title,I=k.description,P=k.date,N=k.tags;return o.a.createElement(c.a,{location:t,headProps:{title:A,description:I||r.excerpt}},o.a.createElement(s.a,{thin:!0},o.a.createElement("div",null,o.a.createElement(u.a,{noBackground:!0,textMuted:!0,mRight:"1rem",style:{paddingLeft:0}},P)),o.a.createElement(_,null,A),o.a.createElement(j,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:r.html}})),o.a.createElement(C,null,N&&N.length&&N.map((function(e){return o.a.createElement(m.a,{key:e,to:"/tags/"+Object(y.a)(e)},o.a.createElement(u.a,{themed:!0,mRight:"0.5rem"},e))}))),o.a.createElement(z,null,o.a.createElement("div",null,o.a.createElement(T,null,">"),o.a.createElement(m.a,{href:l+"/edit/source/content/blog"+x+"index.md"},"Edit on GitHub"),o.a.createElement(O,null,"·"),o.a.createElement(m.a,{href:"https://twitter.com/home?status="+t.href,title:"Tweet post"},o.a.createElement(d.a,{height:"12"}))),o.a.createElement(f.a,{buttons:[].concat(w(E?[{dir:"backward",rel:"prev",to:(p||"")+E.fields.slug,name:E.frontmatter.title,css:"font-size: 13px;"}]:[]),w(v?[{dir:"forward",rel:"next",to:(p||"")+v.fields.slug,name:v.frontmatter.title,css:"font-size: 13px;"}]:[]))}))),o.a.createElement("hr",null),o.a.createElement(s.a,null,h&&o.a.createElement(i.b.Consumer,null,(function(e){return o.a.createElement(g,{repo:h.repo,issueTerm:"pathname",label:h.label,theme:e})}))))},r}(o.a.Component),k=(t.default=x,"3710582719"),_=r.d.h1.withConfig({displayName:"blog-post__Title",componentId:"sc-12c95kz-0"})(["margin:0.25em 0 0.5em 0;"]),j=r.d.div.withConfig({displayName:"blog-post__Body",componentId:"sc-12c95kz-1"})(["",";a{color:",";&:hover{text-decoration:underline;}}img{max-width:125%;}line-height:1.6;h1,h2,h3,h4,h5,h6{margin-top:1.5em;margin-bottom:0.5em;}figcaption{font-size:0.7em;text-align:center;margin:auto;font-style:italic;}"],l.h,(function(e){return e.theme.themePrimary})),C=r.d.div.withConfig({displayName:"blog-post__Tags",componentId:"sc-12c95kz-2"})(["a:hover{text-decoration:none;}"]),z=r.d.div.withConfig({displayName:"blog-post__PostActions",componentId:"sc-12c95kz-3"})(["display:flex;justify-content:space-between;flex-wrap:nowrap;align-items:center;margin-top:3em;font-size:13px;a svg{fill:currentColor;}& > ul{display:none;","}"],l.e.xs(E())),O=r.d.span.withConfig({displayName:"blog-post__Dot",componentId:"sc-12c95kz-4"})(["font-family:monospace;margin:0 0.5em;"]),T=Object(r.d)(O)(b())},263:function(e,t,n){var r=n(0);function a(e){return r.createElement("svg",e,[r.createElement("title",{key:0},"Twitter icon"),r.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}a.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=a,a.default=a}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7649f44173a1cd823b81.js.map