(this["webpackJsonp01-first-app"]=this["webpackJsonp01-first-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(10),s=a(1),i=a(2),m=a(4),u=a(3),b=a(5),d=function(){return r.a.createElement("thead",{className:"text-center"},r.a.createElement("tr",null,r.a.createElement("th",null,"Nombre"),r.a.createElement("th",null,"Cargo"),r.a.createElement("th",null,"Acci\xf3n")))};function h(e){var t=e.datos.map((function(t,a){return r.a.createElement("tr",{key:a,className:"text-center"},r.a.createElement("td",null,t.nombre),r.a.createElement("td",null,t.cargo),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removerPersona(a)},className:"btn btn-danger"},"Eliminar")))}));return r.a.createElement("tbody",null,t)}var p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.datos,a=e.removerPersona;return r.a.createElement("table",{className:"table table-striped"},r.a.createElement(d,null),r.a.createElement(h,{datos:t,removerPersona:a}))}}]),t}(n.Component),v=a(8),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).cambiar=function(e){var t=e.target,n=t.name,r=t.value;console.log(e.target.name),a.setState(Object(v.a)({},n,r))},a.enviarForm=function(){a.props.enviar(a.state),a.setState(a.initialState)},a.initialState={nombre:"",cargo:""},a.state=a.initialState,a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.nombre,a=e.cargo;return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"nombre"},"Tu nombre:"),r.a.createElement("input",{type:"text",name:"nombre",id:"nombre",value:t,onChange:this.cambiar,placeholder:"John Doe",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cargo"},"Tu cargo:"),r.a.createElement("input",{type:"text",name:"cargo",id:"cargo",value:a,onChange:this.cambiar,placeholder:"Desarrollador web",className:"form-control"})),r.a.createElement("input",{type:"button",value:"Pasalos a la tabla",onClick:this.enviarForm,className:"btn btn-primary btn-lg btn-block"}))}}]),t}(n.Component),f=a(9),j=a.n(f),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark sticky-top"},r.a.createElement("span",{className:"navbar-brand d-flex"},r.a.createElement("img",{src:j.a,width:"50",height:"50",className:"d-inline-block align-top rotate-icon",alt:""}),r.a.createElement("span",{className:"my-auto"},"React #1")))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("h5",{className:"card-header"},this.props.headerText),r.a.createElement("div",{className:"card-body"},this.props.bodyContent))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).removerPersona=function(e){var t=a.state.datos;a.setState({datos:t.filter((function(t,a){return a!==e}))})},a.enviar=function(e){a.setState({datos:[].concat(Object(o.a)(a.state.datos),[e])})},a.state={datos:[]},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t;return t=r.a.createElement(E,{enviar:this.enviar}),this.state.datos.length>0&&(e=r.a.createElement(p,{datos:this.state.datos,removerPersona:this.removerPersona})),r.a.createElement("div",null,r.a.createElement(O,null),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 col-xs-12 my-2"},r.a.createElement(g,{headerText:"Ingresa estos datos",bodyContent:t})),r.a.createElement("div",{className:"col-md-6 col-sm-12 col-xs-12 my-2"},r.a.createElement(g,{headerText:"Tabla de datos",bodyContent:e})))))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.c3768096.chunk.js.map