(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(147),o=a(150),c=a(149);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},147:function(t,e,a){"use strict";a.d(e,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),s=a.n(c);a.d(e,"a",function(){return s.a});a(148);var l=r.a.createContext({}),u=function(t){return r.a.createElement(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},149:function(t,e,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(156),l=a.n(s),u=a(154),d=a.n(u);function p(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title,s=n.data.site,u=e||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s",link:[{rel:"shortcut icon",type:"image/png",href:""+d.a}],meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"en",meta:[],keywords:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=p},150:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(147),l=function(t){t.siteTitle;return i.a.createElement("header",{style:{background:"#222a3f",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}}))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(155),function(t){var e=t.children;return i.a.createElement(s.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e)))},data:n})});d.propTypes={children:c.a.node.isRequired};e.a=d},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Blockchain on-boarding solutions"}}}}},152:function(t,e,a){"use strict";a.r(e);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),s=a(2),l=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=l},153:function(t){t.exports={data:{site:{siteMetadata:{title:"Blockchain on-boarding solutions",description:"Blockchain on-boarding solutions",author:"@babeldex"}}}}},154:function(t,e){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-page-2-js-79b6951e14a20ac3da5a.js.map