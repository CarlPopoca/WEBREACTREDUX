(this.webpackJsonpwebreactreduxcontactos=this.webpackJsonpwebreactreduxcontactos||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(21),r=a.n(s),l=(a(74),a(9)),i=a(8),c=a(12),u=a(10),m=a(11),d=a(17),h=a(24),g=a(13),p=function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{class:"alert alert-danger",role:"alert"},this.props.mensaje)}}]),t}(o.Component),E=a(6),v="LOGIN_USUARIOS";function f(e){if(e.ok)return e.json();var t=new Error(e.statusText);throw t.response=e,t}function N(e){return function(t){return fetch("https://localhost:44328/api/Usuarios/Ingresar",{method:"post",body:JSON.stringify(e),headers:{"content-Type":"application/json"}}).then(f).then((function(e){return t({type:v,login:e})}))}}var C=a(23),b=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var o=!0;return null==localStorage.getItem("token")&&(o=!1),a.state={loading:!1,alert_message:"",datosUsuario:{Email:"",Password:"",RemenberMe:!1},loggedIn:o,isNullEmail:"",isNullPassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"validacionControles",value:function(){return""==this.state.datosUsuario.Email&&""==this.state.datosUsuario.Password?(this.setState({alert_message:"Introduzca el usuario y el password",isNullEmail:"true",isNullPassword:"true"}),!1):!(this.state.datosUsuario.Password.length<10)||(this.setState({alert_message:"El password debe tener diez caracteres",isNullPassword:"true"}),!1)}},{key:"submitForm",value:function(){var e=this;this.validacionControles()&&(this.setState({loading:!0}),this.props.iniciarSesion(this.state.datosUsuario).then((function(t){localStorage.setItem("token","jasdajalkcecklwcljekwej"),e.setState({loading:!1,loggedIn:!0,alert_message:"",datosUsuario:{Email:"",Password:"",RemenberMe:!1}})}),(function(t){return t.response.json().then((function(){e.setState({loading:!1,isError:"true",alert_message:"El usuario no puede iniciar sesi\xf3n"})}))})).catch((function(t){e.setState({loading:!1,isError:"true",alert_message:"El usuario no puede iniciar sesi\xf3n"})})))}},{key:"validacionBoton",value:function(e){return"true"==e?"red-icon":"false"==e?"green-icon":""}},{key:"render",value:function(){var e,t=this,a=this.state.loading;return!0===this.state.loggedIn?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{id:"cover-caption"},""!=this.state.alert_message?n.a.createElement(p,{mensaje:this.state.alert_message}):null,n.a.createElement("div",{id:"container",className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 offset-sm-4 text-center"},n.a.createElement("h1",{className:"col-sm-7 display-5  my-4"},"Iniciar sesi\xf3n"),n.a.createElement("div",{className:"info-form col-sm-7"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-white"},n.a.createElement("i",{className:this.validacionBoton(this.state.isNullEmail)},"  ",n.a.createElement(E.a,{className:"mr-1",icon:"user-circle"})))),n.a.createElement("input",(e={type:"email",className:"form-control"},Object(g.a)(e,"type","text"),Object(g.a)(e,"placeholder","Usuario"),Object(g.a)(e,"name","Email"),Object(g.a)(e,"value",this.state.datosUsuario.Email),Object(g.a)(e,"onChange",(function(e){var a=t.state.datosUsuario;a.Email=e.target.value,t.setState({datosUsuario:a})})),Object(g.a)(e,"required","true"),Object(g.a)(e,"onBlur",(function(e){""==e.target.value?t.setState({isNullEmail:"true"}):t.setState({isNullEmail:"false",alert_message:""})})),e)))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-white"},n.a.createElement("i",{className:this.validacionBoton(this.state.isNullPassword)},"  ",n.a.createElement(E.a,{className:"mr-1",icon:"key"})))),n.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"Password",value:this.state.datosUsuario.Password,onChange:function(e){var a=t.state.datosUsuario;a.Password=e.target.value,t.setState({datosUsuario:a})},required:"true",maxlength:"10",minlength:"10",onBlur:function(e){""==e.target.value?t.setState({isNullPassword:"true"}):t.setState({isNullPassword:"false",alert_message:""})}}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{type:"checkbox",name:"RemenberMe",className:"form-check-input",value:this.state.datosUsuario.RemenberMe,onChange:function(e){var a=t.state.datosUsuario;a.RemenberMe=e.target.value,t.setState({datosUsuario:a})}}),n.a.createElement("label",{htmlFor:"RemenberMe",className:"form-check-label"},"Recordar sesi\xf3n")))),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-success",onClick:this.submitForm.bind(this)},a?n.a.createElement(E.a,{className:"mr-2",icon:"sync-alt",spin:!0}):n.a.createElement(E.a,{className:"mr-2",icon:"sign-in-alt"}),"Ingresar")))))))}}]),t}(o.Component);var S=Object(C.b)((function(e){return{usuarios:e.login}}),{iniciarSesion:N})(b),y=a(59),j=a.n(y),w=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var o=!0;return null==localStorage.getItem("token")&&(o=!1),a.state={alert_message:"",loggedIn:o},a.Salir(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"Salir",value:function(){var e=this;j.a.post("https://localhost:44328/api/Usuarios/CerrarSesion").then((function(t){localStorage.removeItem("token"),e.setState({loggedIn:!1})})).catch((function(t){e.setState({alert_message:"Hubo un error al cerrar la sesi\xf3n"})}))}},{key:"render",value:function(){return this.state.loggedIn?n.a.createElement("div",{id:"cover-caption"},n.a.createElement("hr",null),""!=this.state.alert_message?n.a.createElement(p,{mensaje:this.state.alert_message}):null):n.a.createElement(h.a,{to:"/"})}}]),t}(o.Component),O="ADD_USUARIOS";function k(e){if(e.ok)return e.json();var t=new Error(e.statusText);throw t.response=e,t}var x=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var o=!0;return null==localStorage.getItem("token")&&(o=!1),a.state={loading:!1,alert_message:"",datosUsuario:{Email:"",Password:"",ConfirmPassword:""},loggedIn:o,isNullEmail:"",isNullPassword:"",isNullComfirmPassword:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"iniciarSesion",value:function(){var e=this;this.props.iniciarSesion(this.state.datosUsuario).then((function(t){localStorage.setItem("token","jasdajalkcecklwcljekwej"),e.setState({loggedIn:!0,alert_message:"",datosUsuario:{Email:"",Password:"",ConfirmPassword:""}})}),(function(t){return t.response.json().then((function(){e.setState({isError:"true",alert_message:"El usuario no pudo iniciar sesi\xf3n"})}))})).catch((function(t){e.setState({isError:"true",alert_message:"El usuario no pudo iniciar sesi\xf3n"})}))}},{key:"validacionControles",value:function(){return""==this.state.datosUsuario.Email&&""==this.state.datosUsuario.Password&&""==this.state.datosUsuario.ConfirmPassword?(this.setState({alert_message:"Introduzca los datos que se le solicitan",isNullEmail:"true",isNullPassword:"true",isNullComfirmPassword:"true"}),!1):this.state.datosUsuario.Password.length<10?(this.setState({alert_message:"El password debe tener diez caracteres",isNullPassword:"true"}),!1):this.state.datosUsuario.ConfirmPassword.length<10?(this.setState({alert_message:"La confirmaci\xf3n del password debe tener diez caracteres",isNullComfirmPassword:"true"}),!1):this.state.datosUsuario.Password==this.state.datosUsuario.ConfirmPassword||(this.setState({alert_message:"El password y la confirmaci\xf3n del password deben ser indenticos",isNullPassword:"true",isNullComfirmPassword:"true"}),!1)}},{key:"submitForm",value:function(){var e=this;this.validacionControles()&&(this.setState({loading:!0}),this.props.saveUsuarios(this.state.datosUsuario).then((function(t){e.iniciarSesion()}),(function(t){return t.response.json().then((function(){e.setState({loading:!1,isError:"true",alert_message:"No se pudo agregar el usuario"})}))})).catch((function(t){e.setState({loading:!1,isError:"true",alert_message:"No se pudo agregar el usuario"})})))}},{key:"validacionBoton",value:function(e){return"true"==e?"red-icon":"false"==e?"green-icon":""}},{key:"render",value:function(){var e,t=this,a=this.state.loading;return!0===this.state.loggedIn?n.a.createElement(h.a,{to:"/"}):n.a.createElement("div",{id:"cover-caption"},""!=this.state.alert_message?n.a.createElement(p,{mensaje:this.state.alert_message}):null,n.a.createElement("div",{id:"container",className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 offset-sm-4 text-center"},n.a.createElement("h1",{className:"col-sm-7 display-5  my-4"},"Registrar"),n.a.createElement("div",{className:"info-form col-sm-7"},n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-white"},n.a.createElement("i",{className:this.validacionBoton(this.state.isNullEmail)},"  ",n.a.createElement(E.a,{className:"mr-1",icon:"user-circle"})))),n.a.createElement("input",(e={type:"email",className:"form-control"},Object(g.a)(e,"type","text"),Object(g.a)(e,"placeholder","Usuario"),Object(g.a)(e,"name","nombreUsuario"),Object(g.a)(e,"value",this.state.datosUsuario.Email),Object(g.a)(e,"onChange",(function(e){var a=t.state.datosUsuario;a.Email=e.target.value,t.setState({datosUsuario:a})})),Object(g.a)(e,"required","true"),Object(g.a)(e,"onBlur",(function(e){""==e.target.value?t.setState({isNullEmail:"true"}):t.setState({isNullEmail:"false",alert_message:""})})),e)))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-white"},n.a.createElement("i",{className:this.validacionBoton(this.state.isNullPassword)},"  ",n.a.createElement(E.a,{className:"mr-1",icon:"key"})))),n.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:this.state.datosUsuario.Password,onChange:function(e){var a=t.state.datosUsuario;a.Password=e.target.value,t.setState({datosUsuario:a})},required:"true",maxlength:"10",minlength:"10",onBlur:function(e){""==e.target.value?t.setState({isNullPassword:"true"}):t.setState({isNullPassword:"false",alert_message:""})}}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("div",{className:"input-group"},n.a.createElement("div",{className:"input-group-prepend"},n.a.createElement("div",{className:"input-group-text bg-white"},n.a.createElement("i",{className:this.validacionBoton(this.state.isNullComfirmPassword)},"  ",n.a.createElement(E.a,{className:"mr-1",icon:"key"})))),n.a.createElement("input",{className:"form-control",type:"password",placeholder:"Confirmar password",name:"confirmarPassword",value:this.state.datosUsuario.ConfirmPassword,onChange:function(e){var a=t.state.datosUsuario;a.ConfirmPassword=e.target.value,t.setState({datosUsuario:a})},required:"true",maxlength:"10",minlength:"10",onBlur:function(e){""==e.target.value?t.setState({isNullComfirmPassword:"true"}):t.setState({isNullComfirmPassword:"false",alert_message:""})}}))),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",{className:"btn btn-success",onClick:this.submitForm.bind(this)},a?n.a.createElement(E.a,{className:"mr-2",icon:"sync-alt",spin:!0}):n.a.createElement(E.a,{className:"mr-2",icon:"database"}),"Guardar")))))))}}]),t}(o.Component);var I=Object(C.b)((function(e){return{usuarios:e.usuarios,login:e.login}}),{saveUsuarios:function(e){return function(t){return fetch("https://localhost:44328/api/Usuarios/Registrar",{method:"post",body:JSON.stringify(e),headers:{"content-Type":"application/json"}}).then(k).then((function(e){return t(function(e){return{type:O,usuarios:e}}(e))}))}},iniciarSesion:N})(x),U=a(116),_=a(125),P=a(117),M=a(118),T=a(119),A=a(120),B=a(121),R=a(122),z=a(115),q=a(60);a(98);var D="SET_CONTACTOS",F="ADD_CONTACTOS",J="UPDATE_CONTACTOS",L="DELETE_CONTACTOS";function W(e){if(e.ok)return e.json();var t=new Error(e.statusText);throw t.response=e,t}function G(e){if(e.ok)return e;var t=new Error(e.statusText);throw t.response=e,t}var H=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e));var o=!0;return null==localStorage.getItem("token")&&(o=!1),a.state={isErrorContactos:!1,loading:!1,isError:"",isNullNombre:"",isNullCelular:"",isNullSexo:"",alert_message:"",datosNuevoContacto:{Nombre:"",Celular:"",Sexo:""},datosEditarContacto:{Id:"",Nombre:"",Celular:"",Sexo:""},nuevoContactoModal:!1,editarContactoModal:!1,loggedIn:o},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refrescarContactos()}}]),Object(i.a)(t,[{key:"refrescarContactos",value:function(){var e=this;this.props.fetchContactos().then((function(t){e.setState({isErrorContactos:!1,alert_message:""})})).catch((function(t){e.setState({isErrorContactos:!0,alert_message:"Error al obtener los contactos"})}))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"toggleNuevoContactoModal",value:function(){this.setState({isErrorContactos:!1,isError:"",isNullNombre:"",isNullCelular:"",isNullSexo:"",alert_message:"",nuevoContactoModal:!this.state.nuevoContactoModal,datosNuevoContacto:{Nombre:"",Celular:"",Sexo:""}})}},{key:"toggleEditarContactoModal",value:function(){this.setState({editarContactoModal:!this.state.editarContactoModal})}},{key:"validacionInput",value:function(e){return"true"===e?{borderColor:"#dc3545"}:"false"===e?{borderColor:"#28a745"}:{borderColor:"none"}}},{key:"validarContacto",value:function(e){var t="false",a="false",o="false",n="",s=!1,r=!0;return""===e.Nombre&&(t="true",s=!0),""===e.Celular&&(a="true",s=!0),""===e.Sexo&&(o="true",s=!0),s&&(n="Introduzca la informaci\xf3n que se le solicita",r=!1),this.setState({isError:"",isNullNombre:t,isNullCelular:a,isNullSexo:o,alert_message:n}),r}},{key:"agregarContacto",value:function(){var e=this,t=this.state.datosNuevoContacto,a=t.Nombre,o=t.Celular,n=t.Sexo;this.validarContacto(this.state.datosNuevoContacto)&&(this.setState({loading:!0}),this.props.saveContactos({Nombre:a,Celular:o,Sexo:n}).then((function(t){var a=e.state.contactos;e.setState({loading:!1,contactos:a,nuevoContactoModal:!1,datosNuevoContacto:{Nombre:"",Celular:"",Sexo:""},alert_message:"",isNullNombre:"",isNullCelular:"",isNullSexo:""})}),(function(t){return t.response.json().then((function(){e.setState({loading:!1,isError:"true",alert_message:"No se pudo agregar el contacto"})}))})).catch((function(t){e.setState({loading:!1,isError:"true",alert_message:"No se pudo agregar el contacto"})})))}},{key:"actualizarContacto",value:function(){var e=this,t=this.state.datosEditarContacto,a=t.Id,o=t.Nombre,n=t.Celular,s=t.Sexo;this.validarContacto(this.state.datosEditarContacto)&&(this.setState({loading:!0}),this.props.updateContactos({Id:a,Nombre:o,Celular:n,Sexo:s}).then((function(){e.refrescarContactos(),e.setState({loading:!1,editarContactoModal:!1,datosEditarContacto:{Id:"",Nombre:"",Celular:"",Sexo:""},alert_message:"",isNullNombre:"",isNullCelular:"",isNullSexo:""})}),(function(t){return t.response.json().then((function(){e.setState({loading:!1,isError:"true",alert_message:"No se pudo actualizar el contacto"})}))})).catch((function(t){e.setState({loading:!1,isError:"true",alert_message:"No se pudo actualizar el contacto"})})))}},{key:"eliminarContacto",value:function(e){var t=this;Object(q.confirmAlert)({customUI:function(a){var o=a.onClose;return n.a.createElement("div",{className:"custom-ui"},n.a.createElement("h1",{className:"glyphicon glyphicon-warning-sign"},n.a.createElement(E.a,{className:"mr-3",icon:"exclamation-triangle"}),"Esta seguro de eliminar el registro?"),n.a.createElement("div",{className:"btn-toolbar row",role:"toolbar"},n.a.createElement("div",{className:"col-sm-4"}),n.a.createElement("div",{className:"btn-group col-sm-4"},n.a.createElement(U.a,{color:"secondary",size:"sm",className:"mr-3",onClick:o},n.a.createElement(E.a,{className:"mr-2",icon:"times"}),"No"),n.a.createElement(U.a,{color:"primary",size:"sm",className:"btn btn-default ",onClick:function(){t.props.deleteContactos(e).then((function(){t.refrescarContactos(),o()}),(function(e){return e.response.json().then((function(){t.setState({isError:"true",alert_message:"No se pudo eliminar el contacto"})}))})).catch((function(e){t.setState({isError:"true",alert_message:"No se pudo eliminar el contacto"})}))}},n.a.createElement(E.a,{className:"mr-2",icon:"check"}),"Si")),n.a.createElement("div",{className:"col-sm-4"})))}})}},{key:"editarContacto",value:function(e,t,a,o){this.validarContacto({Id:e,Nombre:t,Celular:a,Sexo:o}),this.setState({datosEditarContacto:{Id:e,Nombre:t,Celular:a,Sexo:o},editarContactoModal:!this.state.editarContactoModal})}},{key:"validacionControles",value:function(){return("true"===this.state.isNullNombre||"true"===this.state.isNullCelular||"true"===this.state.isNullSexo)&&""!=this.state.alert_message||"true"===this.state.isError}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.state.isErrorContactos;if(0==this.state.loggedIn)return n.a.createElement(h.a,{to:"/"});var o=this.props.contactos.map((function(t){return n.a.createElement("tr",{key:t.Id},n.a.createElement("td",null,t.Id),n.a.createElement("td",null,t.Nombre),n.a.createElement("td",null," ",t.Celular),n.a.createElement("td",null," ",t.Sexo),n.a.createElement("td",null,n.a.createElement(U.a,{color:"success",size:"sm",className:"mr-2",onClick:e.editarContacto.bind(e,t.Id,t.Nombre,t.Celular,t.Sexo)},"Editar"),n.a.createElement(U.a,{color:"danger",size:"sm",onClick:e.eliminarContacto.bind(e,t.Id)},"Eliminar")))}));return n.a.createElement("div",{id:"divContactos"},n.a.createElement("div",{className:"App container"},n.a.createElement("h2",null,"Aplicaci\xf3n de Contactos"),a?n.a.createElement(p,{mensaje:this.state.alert_message}):null,n.a.createElement(U.a,{className:"my-3",color:"primary",onClick:this.toggleNuevoContactoModal.bind(this)},"Agregar"),n.a.createElement(_.a,{isOpen:this.state.nuevoContactoModal,toggle:this.toggleNuevoContactoModal.bind(this)},n.a.createElement(P.a,{toggle:this.toggleNuevoContactoModal.bind(this)},"Agregar un Contacto"),n.a.createElement(M.a,null,this.validacionControles()?n.a.createElement(p,{mensaje:this.state.alert_message}):null,n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Nombre"},"Nombre"),n.a.createElement(B.a,{id:"Nombre",style:this.validacionInput(this.state.isNullNombre),onChange:function(t){var a=e.state.datosNuevoContacto;a.Nombre=t.target.value,e.setState({datosNuevoContacto:a})},required:"true",maxlength:"100",onKeyUp:!0,onBlur:function(t){""==t.target.value?e.setState({isNullNombre:"true"}):e.setState({isNullNombre:"false"})}})),n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Celular"},"Celular"),n.a.createElement(B.a,{id:"Celular",style:this.validacionInput(this.state.isNullCelular),value:this.state.datosNuevoContacto.Celular,onChange:function(t){var a=e.state.datosNuevoContacto;a.Celular=t.target.value.replace(/[^+\d]/g,""),e.setState({datosNuevoContacto:a})},required:"true",onBlur:function(t){""==t.target.value?e.setState({isNullCelular:"true"}):e.setState({isNullCelular:"false"})}})),n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Sexo"},"Sexo"),n.a.createElement(B.a,{id:"Sexo",style:this.validacionInput(this.state.isNullSexo),value:this.state.datosNuevoContacto.Sexo,onChange:function(t){var a=e.state.datosNuevoContacto;a.Sexo=t.target.value,e.setState({datosNuevoContacto:a})},required:"true",maxlength:"3",minlength:"3",onBlur:function(t){""==t.target.value?e.setState({isNullSexo:"true"}):e.setState({isNullSexo:"false"})}}))),n.a.createElement(R.a,null,n.a.createElement(U.a,{color:"primary",onClick:this.agregarContacto.bind(this)},t?n.a.createElement(E.a,{className:"mr-2",icon:"sync-alt",spin:!0}):n.a.createElement(E.a,{className:"mr-2",icon:"database"}),"Guardar"),n.a.createElement(U.a,{color:"secondary",onClick:this.toggleNuevoContactoModal.bind(this)},n.a.createElement(E.a,{className:"mr-2",icon:"times"}),"Cancelar"))),n.a.createElement(_.a,{isOpen:this.state.editarContactoModal,toggle:this.toggleEditarContactoModal.bind(this)},n.a.createElement(P.a,{toggle:this.toggleEditarContactoModal.bind(this)},"Editar un Contacto"),n.a.createElement(M.a,null,this.validacionControles()?n.a.createElement(p,{mensaje:this.state.alert_message}):null,n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Nombre"},"Nombre"),n.a.createElement(B.a,{id:"Nombre",style:this.validacionInput(this.state.isNullNombre),value:this.state.datosEditarContacto.Nombre,onChange:function(t){var a=e.state.datosEditarContacto;a.Nombre=t.target.value,e.setState({datosEditarContacto:a})},required:"true",maxlength:"100",onBlur:function(t){""==t.target.value?e.setState({isNullNombre:"true"}):e.setState({isNullNombre:"false"})}})),n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Celular"},"Celular"),n.a.createElement(B.a,{id:"Celular",style:this.validacionInput(this.state.isNullCelular),value:this.state.datosEditarContacto.Celular,onChange:function(t){var a=e.state.datosEditarContacto;a.Celular=t.target.value.replace(/[^+\d]/g,""),e.setState({datosEditarContacto:a})},required:"true",onBlur:function(t){""==t.target.value?e.setState({isNullCelular:"true"}):e.setState({isNullCelular:"false"})}})),n.a.createElement(T.a,null,n.a.createElement(A.a,{for:"Sexo"},"Sexo"),n.a.createElement(B.a,{id:"Sexo",style:this.validacionInput(this.state.isNullSexo),value:this.state.datosEditarContacto.Sexo,onChange:function(t){var a=e.state.datosEditarContacto;a.Sexo=t.target.value,e.setState({datosEditarContacto:a})},required:"true",maxlength:"3",minlength:"3",onBlur:function(t){""==t.target.value?e.setState({isNullSexo:"true"}):e.setState({isNullSexo:"false"})}}))),n.a.createElement(R.a,null,n.a.createElement(U.a,{color:"primary",onClick:this.actualizarContacto.bind(this)},t?n.a.createElement(E.a,{className:"mr-2",icon:"sync-alt",spin:!0}):n.a.createElement(E.a,{className:"mr-2",icon:"database"}),"Guardar"),n.a.createElement(U.a,{color:"secondary",onClick:this.toggleEditarContactoModal.bind(this)},n.a.createElement(E.a,{className:"mr-2",icon:"times"}),"Cancelar"))),n.a.createElement(z.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"Nombre"),n.a.createElement("th",null,"Celular"),n.a.createElement("th",null,"Sexo"),n.a.createElement("th",null,"Acciones"))),n.a.createElement("tbody",null,o))))}}]),t}(o.Component);var K=Object(C.b)((function(e){return{contactos:e.contactos}}),{fetchContactos:function(){return function(e){return fetch("https://localhost:44386/api/Contactos",{method:"get",headers:{"content-Type":"application/json"}}).then(W).then((function(t){return e({type:D,contactos:t})}))}},saveContactos:function(e){return function(t){return fetch("https://localhost:44386/api/Contactos",{method:"post",body:JSON.stringify(e),headers:{"content-Type":"application/json"}}).then(W).then((function(e){return t({type:F,contactos:e})}))}},updateContactos:function(e){return function(t){return fetch("https://localhost:44386/api/Contactos/".concat(e.Id),{method:"put",body:JSON.stringify(e),headers:{"content-Type":"application/json"}}).then(G).then((function(e){return t({type:J,contactos:e})}))}},deleteContactos:function(e){return function(t){return fetch("https://localhost:44386/api/Contactos/".concat(e),{method:"delete",headers:{"content-Type":"application/json"}}).then(W).then((function(a){return t(function(e){return{type:L,Id:e}}(e))}))}}})(H),$=a(31),Q=a(123),V=a(124),X=a(35),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1},a.changeNavItem=a.changeNavItem.bind(Object($.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){null!=this.props.location.pathname&&this.changeNavItem(this.props.location.pathname)}},{key:"componentWillReceiveProps",value:function(e){this.props.location.pathname!==e.location.pathname&&this.changeNavItem(e.location.pathname)}},{key:"changeNavItem",value:function(e){var t=!0;null==localStorage.getItem("token")&&(t=!1),this.setState({loggedIn:t})}},{key:"render",value:function(){if(!0===this.state.loggedIn)var e=n.a.createElement(o.Fragment,null,n.a.createElement(Q.a,null,n.a.createElement(d.b,{className:"nav-link",to:"/cerrarSesion"},"Cerrar sesion")));else var t=n.a.createElement(o.Fragment,null,n.a.createElement(Q.a,null,n.a.createElement(d.b,{className:"nav-link",to:"/iniciarSesion"},"Iniciar sesi\xf3n")),n.a.createElement(Q.a,null,n.a.createElement(d.b,{className:"nav-link",to:"/registrarUsuario"},"Registrar Usuario")));return n.a.createElement("div",null,n.a.createElement(X.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(X.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(X.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(V.a,{pills:!0,location:this.props.location},n.a.createElement(Q.a,null,n.a.createElement(d.b,{className:"nav-link",to:"/"},"Aplicaci\xf3n de Contactos")),n.a.createElement(Q.a,null,n.a.createElement(d.b,{className:"nav-link",to:"/contactos"},"Contactos")),e,t))))}}]),t}(o.Component),Z=Object(h.g)(Y),ee=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{id:"divHome"},n.a.createElement("div",{className:"App container"},n.a.createElement("h3",null,"Aplicaci\xf3n de React con Redux y Apis de seguridad y contactos en ASP NET Core 2.2 ")))}}]),t}(o.Component),te=(a(111),a(63)),ae=a.n(te),oe=(a(112),a(27)),ne=a(64),se=a(65),re=a(20),le=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isLoading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isLoading:!1})}},{key:"render",value:function(){return oe.b.add(ne.a,re.b,re.c,re.j,re.e,re.i,re.a,re.k,re.f,re.g,re.d,re.h),this.state.isLoading?n.a.createElement(se.a,{className:"spinner",size:50}):n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:ae.a,className:"App-logo",alt:"logo"})),n.a.createElement("body",null,n.a.createElement(d.a,null,n.a.createElement(h.d,null,n.a.createElement(o.Fragment,null,n.a.createElement(Z,{location:this.props.location}),n.a.createElement(h.b,{exact:!0,path:"/",component:ee}),n.a.createElement(h.b,{path:"/iniciarSesion",component:S}),n.a.createElement(h.b,{path:"/registrarUsuario",component:I}),n.a.createElement(h.b,{path:"/contactos",component:K}),n.a.createElement(h.b,{path:"/cerrarSesion",component:w}))))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(22),ce=a(67),ue=a(33);var me=Object(ie.combineReducers)({contactos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case D:return t.contactos;case F:return[].concat(Object(ue.a)(e),[t.contactos]);case J:return e.map((function(e){return e.Id===t.contactos.Id?t.contactos:e}));case L:return e.filter((function(e){return e.Id!=t.Id}));default:return e}},usuarios:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return[].concat(Object(ue.a)(e),[t.usuarios]);default:return e}}}),de=a(68),he=Object(ie.createStore)(me,Object(de.composeWithDevTools)(Object(ie.applyMiddleware)(ce.a)));r.a.render(n.a.createElement(C.a,{store:he},n.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},69:function(e,t,a){e.exports=a(113)},74:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.d757baba.chunk.js.map