(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(149),s=a(162),c=a(153),u=a(154),p=a(150),m=a(174),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.pageContext.language,n=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return o.a.createElement(c.a,{location:this.props.location,title:n,language:a},o.a.createElement(u.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),o.a.createElement(s.a,null),r.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.id},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date," • ",o.a.createElement(m.a,{minutes:t.timeToRead})),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=d;var g="3857037196"}}]);
//# sourceMappingURL=component---src-pages-index-js-f198c03ee17646a8d47d.js.map