(this["webpackJsonplanding-page-for-github"]=this["webpackJsonplanding-page-for-github"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),i=t(7),s=t.n(i),o=(t(13),t(2)),u=t(3),h=t(5),p=t(4),l=(t(14),t.p+"static/media/github.6cbbd58f.jpg");t(15);var j=function(e){var n=e.repo,t="https://"+n.owner.login+".github.io/"+n.name,c="https://raw.githubusercontent.com/"+n.owner.login+"/"+n.name+"/master/preview.png";return Object(r.jsxs)("div",{className:"wrapper",children:[Object(r.jsx)("h2",{children:n.name}),Object(r.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"preview",style:{backgroundImage:"url("+c+")"}})]})};t(16);var b=function(e){var n=[];return e.repos.map((function(e,t){return n.push(Object(r.jsx)(j,{repo:e},t))})),Object(r.jsx)("div",{className:"cardsWrapper",children:n})},d=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{style:{overflow:"scroll",height:"80vh",border:"10px solid rgba(0, 0, 0, 0.2)"},children:this.props.children})}}]),t}(c.Component),f=["Bounce","ehsanulhaq001","start-here-guidelines"],g=function(e){Object(h.a)(t,e);var n=Object(p.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).state={repos:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/ehsanulhaq001/repos").then((function(e){return e.json()})).then((function(e){return f.forEach((function(n){for(;e.find((function(e){return e.name===n}));){var t=e.findIndex((function(e){return e.name===n}));e.splice(t,1)}})),e})).then((function(n){e.setState({repos:n})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"bigWrapper",children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("img",{src:l,alt:""}),Object(r.jsx)("h1",{children:"Ehsan Ul Haq Khawja".toUpperCase()})]}),Object(r.jsx)("div",{className:"main",children:Object(r.jsx)(d,{children:Object(r.jsx)(b,{repos:this.state.repos})})})]})}}]),t}(c.Component);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ae6212fd.chunk.js.map