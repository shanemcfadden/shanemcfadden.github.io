(self.webpackChunkgithub_homepage=self.webpackChunkgithub_homepage||[]).push([[678],{2153:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7294),a=function(e){var t=e.githubRepo,n=e.postmanDocs,a=e.siteLink,o=e.content,c=(e.fadeIn,r.createElement("div",{className:"content-card"},r.createElement("div",{dangerouslySetInnerHTML:{__html:o}}),r.createElement("div",{className:"button-row"},a&&r.createElement("a",{className:"button",href:a},"Project Site"),n&&r.createElement("a",{className:"button",href:n},"Project Documentation"),t&&r.createElement("a",{className:"button button--github",href:t},"View on GitHub"))));return r.createElement("div",null,c)},o=function(e){var t=e.projectNodes;return r.createElement(r.Fragment,null,t.map((function(e,t){var n=e.frontmatter,o=e.html,c=n.githubRepo,u=n.postmanDocs,l=n.siteLink;return r.createElement(a,{githubRepo:c,siteLink:l,postmanDocs:u,content:o,key:t,fadeIn:t})})))},c=n(3554),u=function(e){var t=e.data.allMarkdownRemark.nodes.filter((function(e){return!!e.fileAbsolutePath.match(/.*\/projects\/.*\.md$/)})).sort((function(e,t){return e.frontmatter.orderIndex-t.frontmatter.orderIndex}));return r.createElement(c.Z,null,r.createElement(o,{projectNodes:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-60ed0853a0a584d474f4.js.map