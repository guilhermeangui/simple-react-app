(this["webpackJsonpsimple-react-app"]=this["webpackJsonpsimple-react-app"]||[]).push([[0],{51:function(e,t,a){e.exports=a(89)},69:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(50),o=a(0),l=a.n(o),r=a(25),c=a.n(r),i=a(21),d=a(2),s=a(11),u=a(12),m=a(17),p=a(13),_=a(14),h=a(47),E=a(26),b=a.n(E);a(69);b.a.setAppElement("body"),console.log("API KEY ".concat("production"," =>"),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL_development:"http://127.0.0.1:4000/",REACT_APP_API_URL_test:"http://127.0.0.1:4000/",REACT_APP_API_URL_production:"http://127.0.0.1:4000/"})["REACT_APP_API_URL_".concat("production")]);var v=function(e){Object(_.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(m.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(m.a)(e)),e}return Object(u.a)(a,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"home"},l.a.createElement("h1",{className:"home__title primary-color"}," Title H1 ",l.a.createElement(h.a,{icon:"check-square"})," "),l.a.createElement("h2",{className:"home__title secondary-color"}," Title H2 "),l.a.createElement("h3",{className:"home__title accent-color"}," Title H3 "),l.a.createElement("h4",{className:"home__title highlight-color"}," Title H4 "),l.a.createElement("h5",{className:"home__title black background-light"}," Title H5 "),l.a.createElement("h6",{className:"home__title white background-black"}," Title H6 "),l.a.createElement(i.b,{to:"/SubPage"},"dale link"),l.a.createElement("button",{onClick:this.handleOpenModal},"Trigger Modal"),l.a.createElement(b.a,{isOpen:this.state.showModal,onRequestClose:this.handleCloseModal,className:"Modal",overlayClassName:"Overlay"},l.a.createElement("p",null,"Texto da modal"),l.a.createElement("button",{onClick:this.handleCloseModal},"Fechar Modal")))}}]),a}(o.Component),P=a(10),O=function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="E-mail inv\xe1lido"):t="Campo obrigat\xf3rio",t},A=function(e){var t;return e?11!==e.replace(/\D/g,"").length&&(t="Telefone inv\xe1lido"):t="Campo obrigat\xf3rio",t},C=function(e){var t;return e?8!==e.replace(/\D/g,"").length&&(t="CEP inv\xe1lido"):t="Campo obrigat\xf3rio",t},T=function(e){var t,a=new Date(e.substr(3,2)+"-"+e.substr(0,2)+"-"+e.substr(6,4));return e?10!==e.length?t="Data inv\xe1lida":a instanceof Date&&!isNaN(a)||(t="Data inv\xe1lida"):t="Campo obrigat\xf3rio",t},f=a(22),g=a.n(f),R=["(",/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],S=[/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/],y=[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],j=function(e){return l.a.createElement(g.a,Object.assign({},e,{type:"text",mask:R}))},k=function(e){return l.a.createElement(g.a,Object.assign({},e,{type:"text",mask:S}))},N=function(e){return l.a.createElement(g.a,Object.assign({},e,{type:"text",mask:y}))},I=a(31),D=a.n(I),L=function(e){Object(_.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){D.a.get(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL_development:"http://127.0.0.1:4000/",REACT_APP_API_URL_test:"http://127.0.0.1:4000/",REACT_APP_API_URL_production:"http://127.0.0.1:4000/"})["REACT_APP_API_URL_".concat("production")]).then((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P.c,{initialValues:{email:"",phone:"",cep:"",date:""},onSubmit:function(e){console.log(e),D.a.post(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL_development:"http://127.0.0.1:4000/",REACT_APP_API_URL_test:"http://127.0.0.1:4000/",REACT_APP_API_URL_production:"http://127.0.0.1:4000/"})["REACT_APP_API_URL_".concat("production")],{endpoint:"/teste",params:{yaba:"dabadoo"}}).then((function(e){console.log(e)}))}},(function(e){var t=e.errors,a=e.touched,n=e.dirty,o=(e.isValidating,e.isSubmitting,e.isValid);return l.a.createElement(P.b,null,l.a.createElement(P.a,{name:"email",validate:O,className:t.email&&a.email?"text-input error":"text-input"}),t.email&&a.email&&l.a.createElement("div",null,t.email),l.a.createElement(P.a,{name:"phone",as:j,validate:A,className:t.phone&&a.phone?"text-input error":"text-input",placeholder:"Insira seu telefone"}),t.phone&&a.phone&&l.a.createElement("div",null,t.phone),l.a.createElement(P.a,{name:"cep",as:k,validate:C,className:t.cep&&a.cep?"text-input error":"text-input",placeholder:"Insira seu CEP"}),t.cep&&a.cep&&l.a.createElement("div",null,t.cep),l.a.createElement(P.a,{name:"date",as:N,validate:T,className:t.date&&a.date?"text-input error":"text-input",placeholder:"Insira a data"}),t.date&&a.date&&l.a.createElement("div",null,t.date),l.a.createElement("button",{type:"submit",disabled:!o||!n},"Submit"))})))}}]),a}(o.Component),M=function(e){Object(_.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,"NotFound")}}]),a}(o.Component);var U=function(){return l.a.createElement(i.a,null,l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:v}),l.a.createElement(d.a,{path:"/SubPage",component:L}),l.a.createElement(d.a,{path:"*",component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(15),w=a(32),H=Object.keys(w).filter((function(e){return"fas"!==e&&"prefix"!==e})).map((function(e){return w[e]}));x.b.add.apply(x.b,Object(n.a)(H)),c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.ac722f09.chunk.js.map