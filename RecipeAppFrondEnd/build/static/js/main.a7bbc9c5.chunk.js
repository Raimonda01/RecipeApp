(this.webpackJsonpblogapp=this.webpackJsonpblogapp||[]).push([[0],{105:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),r=c(25),a=c.n(r),s=(c(77),c(78),c(17)),j=c(18),o=c(24),l=c(23),d=c.p+"static/media/food1.ed2d022c.jpg",b=c(1),h=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{class:"landing-image",children:Object(b.jsx)("img",{src:d,alt:""})})}}]),c}(n.Component),O=c(41),p=c(109),u=c(2),x=c(110),m=c(107),v=c(67),f=c(112),g=c(108),y=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){return Object(s.a)(this,c),t.call(this,e)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Container",children:Object(b.jsxs)(x.a,Object(u.a)(Object(u.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(b.jsx)(x.a.Header,{closeButton:!0,children:Object(b.jsx)(x.a.Title,{id:"contained-modal-title-vcenter",children:"Add Recipe"})}),Object(b.jsx)(x.a.Body,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(v.a,{sm:6,children:Object(b.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(b.jsx)(f.a.Group,{controlId:"RecipeName",children:Object(b.jsx)(f.a.Control,{type:"text",name:"RecipeName",required:!0,placeholder:"RecipeName"})}),Object(b.jsx)(f.a.Group,{children:Object(b.jsx)(g.a,{variant:"primary",type:"submit",children:"Add Recipe"})})]})})})}),Object(b.jsx)(x.a.Footer,{children:Object(b.jsx)(g.a,{variant:"danger",onClick:this.props.onHide,children:"Close"})})]}))})}}]),c}(n.Component),C=c(68),k=c.n(C);var R=function(e){var t=e.recipe,c=e.onDelete;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.recipeName}),Object(b.jsx)("td",{children:t.recipeCategory}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{children:"View Recipe"}),Object(b.jsx)("button",{onClick:function(){c(t.id)},children:"Delete"})]})]})},N=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).config={headers:{Authorization:"Bearer ".concat(localStorage.getItem("token")),"Access-Control-Allow-Origin":"",Allow:"GET","Content-type":"Application/json"}},n.state={recipes:[]},n.deleteRecipe=n.deleteRecipe.bind(Object(O.a)(n)),n}return Object(j.a)(c,[{key:"componentDidMount",value:function(){var e=this;k.a.get("/Recipe").then((function(t){e.setState({recipes:t.data})}))}},{key:"deleteRecipe",value:function(e){var t=this.state.recipes.filter((function(t){return t.id!==e}));this.setState({recipes:t})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsxs)(p.a,{className:"mt-0",striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Recipe Name"}),Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Options"})]})}),Object(b.jsx)("tbody",{children:this.state.recipes.map((function(t){return Object(b.jsx)(R,{recipe:t,onDelete:e.deleteRecipe})}))})]}),Object(b.jsx)(y,{})]})}}]),c}(n.Component),w=c(38),A=c(113),S=c(111),F=function(e){Object(o.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(A.a,{bg:"dark",expand:"lg",children:[Object(b.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(A.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(S.a,{children:[Object(b.jsx)(w.b,{className:"d-inline p-2 bg-dark text-white",to:"/",children:"Home"}),Object(b.jsx)(w.b,{className:"d-inline p-2 bg-dark text-white",to:"/Myrecipes",children:"My Recipes"})]})})]})}}]),c}(n.Component),M=c(8);var B=function(){return Object(b.jsx)(w.a,{children:Object(b.jsxs)("div",{className:"Container",children:[Object(b.jsx)("h1",{className:"m-3 d-flex justify-content-center",children:"Flavorful Minds"}),Object(b.jsx)(F,{}),Object(b.jsxs)(M.d,{children:[Object(b.jsx)(M.b,{exact:!0,path:"/Home",component:h}),Object(b.jsx)(M.b,{exact:!0,path:"/",children:Object(b.jsx)(M.a,{to:"/Home"})}),Object(b.jsx)(M.b,{path:"/Myrecipes",component:N})]})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),D()},77:function(e,t,c){},78:function(e,t,c){}},[[105,1,2]]]);
//# sourceMappingURL=main.a7bbc9c5.chunk.js.map