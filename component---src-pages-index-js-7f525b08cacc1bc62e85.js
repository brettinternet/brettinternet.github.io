(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{257:function(e,t,a){"use strict";a.r(t),a.d(t,"getProjectImageProps",(function(){return S})),a.d(t,"pageQuery",(function(){return I}));a(7),a(6),a(3),a(13),a(15),a(29);var n=a(0),r=a.n(n),i=a(1),o=a(252),l=a(251),s=a(264),c=a(18),d=a(270),u=a.n(d),f=a(271),m=a.n(f),p=a(272),g=a.n(p);function h(){var e=b(["\n    flex-direction: row;\n\n    & > div {\n      width: 50%;\n    }\n    \n    a {\n      margin: 1em;\n    }\n  "]);return h=function(){return e},e}function y(){var e=b(["\n                    height: 210px;\n                  "]);return y=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}var v={src:u.a,alt:"homelab"},w={src:m.a,alt:"hugo-slides"},E={src:g.a,alt:"mpg"},S=function(e,t){switch(e){case v.alt:return v;case w.alt:return w;case E.alt:return E;default:return t?t(e):void 0}},C=Object(i.d)(l.a).withConfig({displayName:"projects___StyledSection",componentId:"i2bhtp-0"})(["padding-bottom:0;"]),_=Object(i.d)(l.a).withConfig({displayName:"projects___StyledSection2",componentId:"i2bhtp-1"})(["padding-top:0;padding-bottom:0;"]),x=Object(i.d)(s.a).withConfig({displayName:"projects___StyledCard",componentId:"i2bhtp-2"})(["",""],(function(e){return e._css}));t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata.projects,i=t.projectImages.edges.map((function(e){var t=e.node;return t.childImageSharp&&{alt:t.name,fluid:t.childImageSharp.fluid}})).filter(Boolean);return r.a.createElement(o.a,{headProps:{title:"projects",keywords:["projects","brettinternet","work"]},location:a},r.a.createElement(C,{thin:!0},r.a.createElement("h2",null,"Projects:")),r.a.createElement(_,null,r.a.createElement(k,null,n.map((function(e,t){var a=e.imageName,n=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["imageName"]);return r.a.createElement("div",{key:t},r.a.createElement(x,Object.assign({imageProps:S(a,(function(e){return e?i.filter((function(t){return t.alt===e}))[0]:void 0}))},n,{_css:c.e.md(y())})))})))))};var I="3386182173",k=i.d.div.withConfig({displayName:"projects__Cards",componentId:"i2bhtp-3"})(["display:flex;flex-wrap:wrap;flex-direction:column;a{margin-top:1em;margin-bottom:1em;}",""],c.e.md(h()))},261:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return T}));a(7),a(6),a(3),a(13),a(15),a(29);var n=a(0),r=a.n(n),i=a(1),o=a(252),l=a(251),s=a(52),c=a(264),d=a(254),u=a(18),f=a(273),m=a.n(f),p=a(274),g=a.n(p),h=a(265),y=a.n(h),b=a(275),v=a.n(b),w=a(276),E=a.n(w),S=a(257);function C(){var e=I(["\n    flex-direction: row;\n\n    & > div {\n      width: 50%;\n\n      &:first-child a {\n        margin-left: 0;\n      }\n\n      &:last-child a {\n        margin-right: 0;\n      }\n    }\n    \n    a {\n      margin: 1em;\n    }\n  "]);return C=function(){return e},e}function _(){var e=I(["\n                    height: 265px;\n                  "]);return _=function(){return e},e}function x(){var e=I(["\n                  height: 210px;\n                "]);return x=function(){return e},e}function I(e,t){return t||(t=e.slice(0)),e.raw=t,e}var k={linkedin:E.a,github:m.a,twitter:y.a,instagram:g.a,keybase:v.a},j=i.d.h1.withConfig({displayName:"pages___StyledH",componentId:"ia64nm-0"})(["margin-top:0;"]),z=Object(i.d)(l.a).withConfig({displayName:"pages___StyledSection",componentId:"ia64nm-1"})(["padding-bottom:0;"]),O=Object(i.d)(l.a).withConfig({displayName:"pages___StyledSection2",componentId:"ia64nm-2"})(["padding-top:0;padding-bottom:0;"]),L=Object(i.d)(c.a).withConfig({displayName:"pages___StyledCard",componentId:"ia64nm-3"})(["",""],(function(e){return e._css})),N=Object(i.d)(d.a).withConfig({displayName:"pages___StyledNavButton",componentId:"ia64nm-4"})(["justify-content:center;"]),P=Object(i.d)(l.a).withConfig({displayName:"pages___StyledSection3",componentId:"ia64nm-5"})(["padding-bottom:0;"]),M=Object(i.d)(l.a).withConfig({displayName:"pages___StyledSection4",componentId:"ia64nm-6"})(["padding-top:0;"]),R=Object(i.d)(c.a).withConfig({displayName:"pages___StyledCard2",componentId:"ia64nm-7"})(["",""],(function(e){return e._css2})),V=Object(i.d)(d.a).withConfig({displayName:"pages___StyledNavButton2",componentId:"ia64nm-8"})(["justify-content:center;"]);t.default=function(e){var t=e.data,a=e.location,n=t.site.siteMetadata,i=n.postBasePath,c=n.projects,d=n.socialLinks,f=n.homePageTitle,m=n.homePageDescription,p=t.allMarkdownRemark.edges.slice(0,2);return r.a.createElement(o.a,{headProps:{title:"about",keywords:["about","brettinternet","brettgardiner"]},location:a},r.a.createElement(l.a,{thin:!0},r.a.createElement(j,{dangerouslySetInnerHTML:{__html:f}}),m&&(Array.isArray(m)?m.map((function(e,t){return r.a.createElement(B,{key:t,dangerouslySetInnerHTML:{__html:e}})})):r.a.createElement(B,{dangerouslySetInnerHTML:{__html:m}}))),r.a.createElement(l.a,{skinny:!0,noPadding:!0},r.a.createElement(q,null,d.map((function(e,t){var a=e.href,n=e.name,i=k[n];return r.a.createElement("li",{key:t},r.a.createElement(s.b,{href:a,"aria-label":n},r.a.createElement(i,{height:"20"})))})))),r.a.createElement(z,{thin:!0},r.a.createElement("h3",null,"Featured projects:")),r.a.createElement(O,null,r.a.createElement(H,null,c.slice(0,2).map((function(e,t){var a=e.imageName,n=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["imageName"]);return r.a.createElement("div",{key:t},r.a.createElement(L,Object.assign({imageProps:Object(S.getProjectImageProps)(a)},n,{_css:u.e.md(x())})))}))),r.a.createElement(W,null,r.a.createElement(N,{dir:"forward",to:"/projects"},"Browse"))),r.a.createElement(P,{thin:!0},r.a.createElement("h3",null,"Recent blog posts:")),r.a.createElement(M,null,r.a.createElement(H,null,p.map((function(e){var t=e.node,a=(i||"")+t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement(R,{to:a,title:t.frontmatter.title||t.fields.slug,description:t.frontmatter.description||t.excerpt,details:t.frontmatter.date,tags:t.frontmatter.tags,_css2:u.e.md(_())}))}))),r.a.createElement(W,null,r.a.createElement(V,{dir:"forward",to:"/blog"},"View more"))))};var T="23772217",q=i.d.ul.withConfig({displayName:"pages__Ul",componentId:"ia64nm-9"})(["list-style:none;padding:0;width:100%;text-align:center;li{display:inline-block;a{padding:0.5rem;&:hover{color:",";svg{transform:translateY(-1px);}}svg{fill:currentColor;transition:transform 200ms;transform:translateY(0);}}}"],(function(e){return e.theme.neutralPrimary})),B=i.d.p.withConfig({displayName:"pages__P",componentId:"ia64nm-10"})(["line-height:1.6;font-weight:400;"]),H=i.d.div.withConfig({displayName:"pages__Cards",componentId:"ia64nm-11"})(["display:flex;flex-wrap:wrap;flex-direction:column;a{margin-top:1em;margin-bottom:1em;}",""],u.e.md(C())),W=i.d.div.withConfig({displayName:"pages__CTAWrapper",componentId:"ia64nm-12"})(["text-align:center;margin:1em;"])},264:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),o=a(112),l=a(268),s=a.n(l),c=a(52),d=a(253),u=a(18);t.a=function(e){var t=e.to,a=e.href,n=e.className,i=e.title,o=e.description,l=e.details,s=e.tags,c=e.imageProps;return r.a.createElement(h,{to:t,href:a,className:n,withImage:!!c},c&&r.a.createElement(b,null,c.src?r.a.createElement(g,c):r.a.createElement(p,c)),r.a.createElement(y,null,i&&r.a.createElement("h3",null,i),r.a.createElement(w,null,o&&r.a.createElement("p",null,o)),r.a.createElement(v,null,l&&r.a.createElement(f,null,l),s&&r.a.createElement(E,null,s.map((function(e){return r.a.createElement(d.a,{key:e,themed:!0,interactive:!1},e)}))))))};var f=i.d.div.withConfig({displayName:"Card__Details",componentId:"aoqtzt-0"})(["font-size:11px;",";font-weight:400;"],u.h),m=Object(i.c)(["width:100%;height:100%;object-fit:cover;object-position:center center;transition:all 200ms;filter:brightness(40%);"]),p=Object(i.d)(s.a).withConfig({displayName:"Card__StyledGatsbyImage",componentId:"aoqtzt-1"})(["",";"],m),g=i.d.img.withConfig({displayName:"Card__StyledImage",componentId:"aoqtzt-2"})(["",";"],m),h=Object(i.d)(c.b).withConfig({displayName:"Card__RootA",componentId:"aoqtzt-3"})(["display:block;position:relative;color:inherit;overflow:hidden;box-shadow:0 13px 27px -5px ",",0 8px 16px -8px rgba(0,0,0,0.3),0 -6px 16px -6px rgba(0,0,0,0.025);transform:translateY(0);border-radius:8px;transition:all 200ms;border:1px solid ",";h3{margin:0 0 0.5em 0;}p{font-size:15px;line-height:1.3;margin:0;}&:hover{text-decoration:none;transform:translateY(-2px);box-shadow:0 30px 60px -12px ",",0 18px 36px -18px rgba(0,0,0,0.3),0 -12px 36px -8px rgba(0,0,0,0.025);h3{text-decoration:underline;}p{text-decoration:none;}",",","{width:102%;height:102%;filter:brightness(50%) blur(2px);}}",""],(function(e){return e.theme.neutralLighterAlt}),(function(e){return e.theme.neutralLighter}),(function(e){return e.theme.neutralLight}),p,g,(function(e){return e.withImage?Object(i.c)(["h3{color:",";}p{color:",";}","{color:",";}"],o.a.neutralLighter,o.a.neutralLighterAlt,f,o.a.neutralQuaternaryAlt):Object(i.c)(["h3{color:",";}p{color:",";}","{color:",";}"],o.a.black,o.a.neutralSecondary,f,o.a.neutralTertiary)})),y=i.d.div.withConfig({displayName:"Card__Wrapper",componentId:"aoqtzt-4"})(["padding:2em;display:flex;flex-direction:column;min-height:100%;"]),b=i.d.div.withConfig({displayName:"Card__ImageContainer",componentId:"aoqtzt-5"})(["z-index:-1;position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:hidden;display:flex;justify-content:center;align-items:center;border-radius:6px;"]),v=i.d.div.withConfig({displayName:"Card__Flex",componentId:"aoqtzt-6"})(["margin-top:1.5em;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),w=i.d.div.withConfig({displayName:"Card__Body",componentId:"aoqtzt-7"})(["flex:1;"]),E=i.d.div.withConfig({displayName:"Card__Tags",componentId:"aoqtzt-8"})(["& > span{margin:0.25em;}"])},265:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Twitter"),n.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},268:function(e,t,a){"use strict";a(7),a(6),a(3),a(86),a(169),a(269);var n=a(25);t.__esModule=!0,t.default=void 0;var r,i=n(a(87)),o=n(a(88)),l=n(a(167)),s=n(a(168)),c=n(a(0)),d=n(a(10)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var _=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+c+o+l+a+n+t+i+r+s+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(k,(0,s.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},k=c.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.onClick,f=e.loading,m=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return c.default.createElement("img",(0,s.default)({sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:d,onClick:u,ref:t,loading:f,draggable:m,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));k.propTypes={style:d.default.object,onError:d.default.func,onClick:d.default.func,onLoad:d.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=_(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,l=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,w=e.itemProp,C=e.loading,_=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,s.default)({opacity:j?1:0,transition:z?"opacity "+y+"ms":"none"},l),L="boolean"==typeof h?"lightgray":h,N={transitionDelay:y+"ms"},P=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&N,{},l,{},f),M={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:w};if(p){var R=p,V=R[0];return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),L&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&N)}),V.base64&&c.default.createElement(I,{src:V.base64,spreadProps:M,imageVariants:R,generateSources:S}),V.tracedSVG&&c.default.createElement(I,{src:V.tracedSVG,spreadProps:M,imageVariants:R,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(R),c.default.createElement(k,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:C,draggable:_})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:C},V,{imageVariants:R}))}}))}if(g){var T=g,q=T[0],B=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},L&&c.default.createElement(b,{title:t,style:(0,s.default)({backgroundColor:L,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&N)}),q.base64&&c.default.createElement(I,{src:q.base64,spreadProps:M,imageVariants:T,generateSources:S}),q.tracedSVG&&c.default.createElement(I,{src:q.tracedSVG,spreadProps:M,imageVariants:T,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,v(T),c.default.createElement(k,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:w,loading:C,draggable:_})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,s.default)({alt:a,title:t,loading:C},q,{imageVariants:T}))}}))}return null},t}(c.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});j.propTypes={resolutions:z,sizes:O,fixed:d.default.oneOfType([z,d.default.arrayOf(z)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onClick:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=j;t.default=L},269:function(e,t,a){"use strict";a(256)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},270:function(e,t,a){e.exports=a.p+"static/homelab-c6bf3b1779a4e87d45ec1c763df829eb.gif"},271:function(e,t,a){e.exports=a.p+"static/hugo-slides-e2fca3850d355feca6ad07a73cedafe2.gif"},272:function(e,t,a){e.exports=a.p+"static/mpg-52c44be72b057ce2df7840a48ae03a9b.gif"},273:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"GitHub"),n.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},274:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Instagram"),n.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},275:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Keybase"),n.createElement("path",{d:"M10.446 21.371c0 .528-.428.953-.954.953-.525 0-.954-.425-.954-.953 0-.526.428-.954.953-.954.524 0 .951.431.951.955m5.922-.001c0 .528-.428.953-.955.953-.526 0-.952-.425-.952-.953 0-.526.423-.954.949-.954s.954.431.954.955",key:1}),n.createElement("path",{d:"M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053-1.16-1.139-2.505-1.986-3.955-2.504l-.23-.078c.012-.027.024-.055.035-.083.41-1.064.367-2.223-.12-3.255-.491-1.035-1.356-1.8-2.438-2.16-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328-.328-.345-.766-.552-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003c-.061 1.029.727 1.915 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306-1.346.562-2.586 1.401-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06c-.833-1.114-1.419-2.426-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97.025.05.054.097.084.144.264.398.713.625 1.199.605.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003c-.279-.341-.694-.535-1.134-.535-.335 0-.664.117-.925.33-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425c-.046.036-.095.053-.146.053-.066 0-.133-.03-.177-.085l-.111-.135c-.083-.1-.067-.25.034-.334l.51-.42-1.055-1.299c-.109-.133-.091-.33.044-.436.058-.048.126-.072.194-.072.091 0 .181.038.24.113l2.963 3.645c.109.135.09.33-.042.436-.039.029-.082.053-.126.063-.023.006-.045.009-.07.009-.09 0-.178-.04-.24-.113l-.295-.365-1.045.854c-.046.037-.1.055-.154.055-.068 0-.139-.03-.186-.09l-.477-.579c-.082-.102-.068-.252.035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075c-.255-.015-.45-.235-.435-.488l.09-1.401c.014-.245.216-.436.461-.436h.024l1.401.091c.123.006.236.06.317.152.083.094.123.21.116.336l-.007.101c-.32.567-.585 1.134-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102-.183.458-.119.997.21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582c.266.325.659.513 1.079.513.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113.113 0 .222-.01.33-.035.218-.05.424-.15.598-.291.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315 1.005.445 1.954 1.1 2.771 1.897.029.03.059.055.085.083l.17.175c.038.039.076.079.111.12.079.085.16.175.239.267l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005z",key:2}),n.createElement("path",{d:"M7.719 4.115l-.835-.051.053-.835.834.051-.052.835z",key:3})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},276:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"LinkedIn"),n.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-7f525b08cacc1bc62e85.js.map