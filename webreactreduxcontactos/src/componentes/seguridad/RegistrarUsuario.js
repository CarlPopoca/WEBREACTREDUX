import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import AlertaError from '../../componentes/AlertaError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {saveUsuarios, iniciarSesionUsuario} from '../../actions/actionsUsuarios';
import {iniciarSesion} from '../../actions/actionsIniciarSesion';
import {connect} from 'react-redux';

class RegistrarUsuario extends Component{
  constructor(props){
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token==null){
      loggedIn = false;
    }
    this.state = {
      loading: false,
      alert_message:'',
      datosUsuario: {
        Email: '',
        Password: '',
        ConfirmPassword: ''
      },
      loggedIn,
      isNullEmail: '',
      isNullPassword: '',
      isNullComfirmPassword: ''
    }
  }
  iniciarSesion()
  {
      this.props.iniciarSesion(this.state.datosUsuario).then(
        (response)=>{
          //Se genera el token
          localStorage.setItem("token", "jasdajalkcecklwcljekwej");
            //Se setea que ingreso
            this.setState({
              loggedIn: true,
              alert_message: '',
              datosUsuario: {
                Email: '',
                Password: '',
                ConfirmPassword: ''
                  }
                });
        }, 
        (err) => err.response.json().then(()=>{
          //Entra cuando los errores son superficiales, por ejemplo cuando los datos que se capturan no 
          //coinciden con el tipo de dato 
          this.setState({
            isError:'true',
            alert_message: 'El usuario no pudo iniciar sesión'
          })
        })
      ).catch(error=>{
        //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
        //  es superior al campo de la base de datos
        this.setState({
          isError:'true',
          alert_message: 'El usuario no pudo iniciar sesión'
        });
      });
  }

   validacionControles() {

     if (this.state.datosUsuario.Email=='' && this.state.datosUsuario.Password=='' && this.state.datosUsuario.ConfirmPassword=='')
     {
       this.setState({
         alert_message: 'Introduzca los datos que se le solicitan',
         isNullEmail: 'true',
         isNullPassword: 'true',
         isNullComfirmPassword: 'true'
       });
       return false;
     }

     if (this.state.datosUsuario.Password.length < 10)
     {
       this.setState({
         alert_message: 'El password debe tener diez caracteres',
         isNullPassword: 'true',
       });
        return false;
     }
    if (this.state.datosUsuario.ConfirmPassword.length < 10)
    {
      this.setState({
        alert_message: 'La confirmación del password debe tener diez caracteres',
        isNullComfirmPassword: 'true',
      });
       return false;
    }
    if (this.state.datosUsuario.Password != this.state.datosUsuario.ConfirmPassword)
    {
      this.setState({
        alert_message: 'El password y la confirmación del password deben ser indenticos',
        isNullPassword: 'true',
        isNullComfirmPassword: 'true'
      });
      return false;
    }
     return true;
  }

  submitForm()
  {
    let valControles = this.validacionControles();
    if (valControles){
      this.setState({
        loading: true
      });
      this.props.saveUsuarios(this.state.datosUsuario).then(
        (response)=>{
          this.iniciarSesion();
        }, 
        (err) => err.response.json().then(()=>{
          //Entra cuando los errores son superficiales, por ejemplo cuando los datos que se capturan no 
          //coinciden con el tipo de dato 
          this.setState({
            loading: false,
            isError: 'true',
            alert_message: 'No se pudo agregar el usuario'
          })
        }
        )
      ).catch(error=>{
        //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
        //  es superior al campo de la base de datos
        this.setState({
          loading: false,
          isError:'true',
          alert_message: 'No se pudo agregar el usuario'
        });
      });
    }
  }

validacionBoton(e){
  if (e == 'true'){
    return 'red-icon'
  }
  if (e == 'false'){
    return 'green-icon'
  }
  return '';
}

render(){
  const {loading} = this.state;
  if (this.state.loggedIn===true){
    //Otra forma de hacer redirect
    // this.props.history.push("/")
    return <Redirect  to="/" />
  }
  return (

    <div id="cover-caption">

        {this.state.alert_message!=""?<AlertaError mensaje={this.state.alert_message} />:null}
        <div id="container" className="container">

            <div className="row">
                <div className="col-sm-6 offset-sm-4 text-center">
                    <h1 className="col-sm-7 display-5  my-4">Registrar</h1>
                    <div className="info-form col-sm-7">
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text bg-white">
                                  <i className= {this.validacionBoton(this.state.isNullEmail)}>  <FontAwesomeIcon className="mr-1" icon="user-circle" /></i>
                                </div>
                              </div>
                              <input type="email" className="form-control" type= "text" placeholder="Usuario" name="nombreUsuario" value={this.state.datosUsuario.Email} onChange={(e)=>{
                                let {datosUsuario} = this.state;
                                datosUsuario.Email = e.target.value;
                                this.setState({datosUsuario});
                              }} required="true"
                              onBlur={(e)=>{
                                if (e.target.value == '')
                                  {
                                    this.setState({isNullEmail: 'true'});
                                  }else {
                                    this.setState({isNullEmail: 'false', alert_message: ''});
                                  }
                                }} />
                            </div>
                          </div>

                          <div className="form-group">
                            <div className="input-group">
                               <div className="input-group-prepend">
                                 <div className="input-group-text bg-white">
                                   <i className= {this.validacionBoton(this.state.isNullPassword)}>  <FontAwesomeIcon className="mr-1" icon="key" /></i>
                                 </div>
                               </div>
                                <input className="form-control" type= "password" placeholder="Password" name="password" value={this.state.datosUsuario.Password} onChange={(e)=>{
                                  let {datosUsuario} = this.state;
                                  datosUsuario.Password = e.target.value;
                                  this.setState({datosUsuario});
                                }}  required="true" maxlength="10" minlength="10"
                                onBlur={(e)=>{
                                  if (e.target.value == '')
                                    {
                                      this.setState({isNullPassword: 'true'});
                                    }else {
                                      this.setState({isNullPassword: 'false', alert_message: ''});
                                    }
                                  }}/>
                              </div>
                          </div>

                          <div className="form-group">
                            <div className="input-group">
                               <div className="input-group-prepend">
                                 <div className="input-group-text bg-white">
                                   <i className= {this.validacionBoton(this.state.isNullComfirmPassword)}>  <FontAwesomeIcon className="mr-1" icon="key" /></i>
                                 </div>
                               </div>
                                <input className="form-control" type= "password" placeholder="Confirmar password" name="confirmarPassword" value={this.state.datosUsuario.ConfirmPassword} onChange={(e)=>{
                                  let {datosUsuario} = this.state;
                                  datosUsuario.ConfirmPassword = e.target.value;
                                  this.setState({datosUsuario});
                                }}  required="true" maxlength="10" minlength="10"
                                onBlur={(e)=>{
                                  if (e.target.value == '')
                                    {
                                      this.setState({isNullComfirmPassword: 'true'});
                                    }else {
                                      this.setState({isNullComfirmPassword: 'false', alert_message: ''});
                                    }
                                  }}/>
                              </div>
                            </div>
                            <div className="form-group">
                              <button className="btn btn-success" onClick={this.submitForm.bind(this)}>
                                {loading?<FontAwesomeIcon className="mr-2" icon="sync-alt" spin />: <FontAwesomeIcon className="mr-2" icon="database" />}
                                Guardar
                              </button>
                            </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
}
function mapStateToProps (state)
{
  return {
    usuarios: state.usuarios,
    login: state.login
  }
}
export default connect(mapStateToProps, {saveUsuarios, iniciarSesion})(RegistrarUsuario);
