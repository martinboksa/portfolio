(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),i=n(209),o=n(0),s=n.n(o),c=n(151),u=n(155),l=n(156),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this,e=this.props,n=(e.data,e.pageContext.language);return s.a.createElement(c.StaticQuery,{query:p,render:function(e){return s.a.createElement(u.a,{location:t.props.location,title:e.site.siteMetadata.title,language:n},s.a.createElement(l.a,{title:"404: Not Found",lang:n}),s.a.createElement("h1",null,"Not Found"),s.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},data:i})},e}(s.a.Component);e.default=d;var p="1097489062"},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(150),c=n.n(s);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var u=n(154),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},153:function(t,e,n){"use strict";var a=n(165),r=n.n(a),i=n(166),o=n.n(i);n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u}),o.a.googleFonts=[{name:"Montserrat",styles:["300","400","700","900"]},{name:"Merriweather",styles:["300","400","400i","700","700i","900","900i"]}],o.a.overrideThemeStyles=function(){return{a:{color:"#e62076"},"a:hover":{backgroundColor:"#e62076",color:"#ffffff"},"a.gatsby-resp-image-link:hover":{backgroundColor:"inherit"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},"h1 a, h2 a":{color:"black"},"h1 a:hover, h2 a:hover":{backgroundColor:"#ffffff",color:"#e62076"},"p code":{fontSize:"1.1rem"},"li code":{fontSize:"1rem"}}};var s=new r.a(o.a);var c=s.rhythm,u=s.scale},154:function(t,e,n){var a;t.exports=(a=n(157))&&a.default||a},155:function(t,e,n){"use strict";n(32),n(73),n(74);var a=n(7),r=n.n(a),i=n(158),o=n(0),s=n.n(o),c=n(151),u=n(153),l=n(152),d=n(172),p=n.n(d),m=n(173),f=n.n(m),g=n(159),h=n(160);Object(l.c)([].concat(p.a,f.a));var y={sk:g,en:h},b=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children,o=e.language,d="en"===o?"/":"/"+o;return t=["/","/sk"].includes(n.pathname)?s.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},s.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none"},to:d},a)):s.a.createElement("h2",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none"},to:d},a)),s.a.createElement(c.StaticQuery,{query:k,render:function(e){var n=e.site.siteMetadata.social;return s.a.createElement(l.b,{locale:o,messages:y[o]},s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},t,r,s.a.createElement("footer",null,"© ",(new Date).getFullYear()," |"," ",s.a.createElement("a",{href:"https://github.com/"+n.github+"/",target:"_blank"},"github")," ","|"," ",s.a.createElement("a",{href:"https://www.linkedin.com/in/"+n.linkedIn+"/",target:"_blank"},"linked in"),s.a.createElement("span",{id:"footer-right-info"}," ",s.a.createElement(c.Link,{to:"/sk"},"sk")," | ",s.a.createElement(c.Link,{to:"/"},"en")," |"," ",s.a.createElement("a",{href:"/rss.xml",target:"_blank"},"rss")))))},data:i})},e}(s.a.Component);e.a=b;var k="3720467871"},156:function(t,e,n){"use strict";var a=n(161),r=n(0),i=n.n(r),o=n(4),s=n.n(o),c=n(174),u=n.n(c),l=n(151);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,s=t.title,c=t.image;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description,l=c?siteMetadata.siteUrl+"/"+c:null;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s||siteMetadata.title},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s||siteMetadata.title},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(l?[{property:"og:image",content:l},{name:"twitter:image",content:l}]:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=d;var p="2229664651"},157:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),c=n(2),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},158:function(t){t.exports={data:{site:{siteMetadata:{social:{linkedIn:"martin-boksa",github:"martinboksa"}}}}}},159:function(t){t.exports={"about.me":"Osobný blog od {author}, som fanúšikom technológií, žijem v Brne a primárne pracujem v Reacte {emoji}.","discuss.twitter":"Diskutovať na Twitteri","edit.page":"Upraviť stránku","minutes.read":"minútové čítanie","not.found":"404: Stránka nenájdená","read.in":"Čítaj v"}},160:function(t){t.exports={}},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog",description:"Personal blog by Martin Bokša who is technology enthusiast, lives in Brno and work primary in React 🍻.",author:"Martin Bokša",siteUrl:"http://martinboksa.eu"}}}}},167:function(t,e){},170:function(t,e){},171:function(t,e){},209:function(t){t.exports={data:{site:{siteMetadata:{title:"Martin Bokša Blog"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-67b0bffe1fc7fcf9345f.js.map