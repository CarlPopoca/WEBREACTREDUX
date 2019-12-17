import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import AlertaError from '../AlertaError';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {iniciarSesion} from '../../actions/actionsSesion';
import {connect} from 'react-redux';

class IniciarSesion extends Component{
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
        RemenberMe: false
      },
      loggedIn,
      isNullEmail: '',
      isNullPassword: ''
    }
  }
  validacionControles() {
    if (this.state.datosUsuario.Email=='' && this.state.datosUsuario.Password=='')
    {
      this.setState({
        alert_message: 'Introduzca el usuario y el password',
        isNullEmail: 'true',
        isNullPassword: 'true'
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
    return  true;
  }

  submitForm()
  {
    let valControles = this.validacionControles();
    if (valControles){
      this.setState({
        loading:true
      });
      this.props.iniciarSesion(this.state.datosUsuario).then(
        (response)=>{
          //Se genera el token
          localStorage.setItem("token", "jasdajalkcecklwcljekwej");
            //Se setea que ingreso
            this.setState({
              loading:false,
              loggedIn: true,
              alert_message: '',
              datosUsuario: {
                Email: '',
                Password: '',
                RemenberMe: false
                  }
            });
        }, 
        (err) => err.response.json().then(()=>{
          //Entra cuando los errores son superficiales, por ejemplo cuando los datos que se capturan no 
          //coinciden con el tipo de dato 
          this.setState({
            loading: false,
            isError: 'true',
            alert_message: 'El usuario no puede iniciar sesión'
          })
        })
      ).catch(error=>{
        //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
        //  es superior al campo de la base de datos
        this.setState({
          loading: false,
          isError: 'true',
          alert_message: 'El usuario no puede iniciar sesión'
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
      //  window.location.href='/';
    }
    return (

      <div id="cover-caption">
      
          {this.state.alert_message!=""?<AlertaError mensaje={this.state.alert_message} />:null}
          <div id="container" className="container">
              <div className="row">
                  <div className="col-sm-6 offset-sm-4 text-center">
                    <h1 className="col-sm-7 display-5  my-4">Iniciar sesión</h1>
                    <div className="info-form col-sm-7">
                            <div className="form-group">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text bg-white">
                                    <i className= {this.validacionBoton(this.state.isNullEmail)}>  <FontAwesomeIcon className="mr-1" icon="user-circle" /></i>
                                  </div>
                                </div>
                                <input type="email" className="form-control" placeholder="Usuario" name="Email" value={this.state.datosUsuario.Email} onChange={(e)=>{
                                    let {datosUsuario} = this.state;
                                    datosUsuario.Email = e.target.value;
                                    this.setState({datosUsuario});
                                  }} required="true" onBlur={(e)=>{
                                    if (e.target.value == '')
                                      {
                                        this.setState({isNullEmail: 'true'});
                                      }else {
                                        this.setState({isNullEmail: 'false', alert_message: ''});
                                      }
                                    }}/>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                               <div className="input-group-prepend">
                                 <div className="input-group-text bg-white">
                                   <i className= {this.validacionBoton(this.state.isNullPassword)}>  <FontAwesomeIcon className="mr-1" icon="key" /></i>
                                 </div>
                               </div>
                                <input  className="form-control" type= "password" placeholder="Password" name="Password" value={this.state.datosUsuario.Password} onChange={(e)=>{
                                    let {datosUsuario} = this.state;
                                    datosUsuario.Password = e.target.value;
                                    this.setState({datosUsuario});
                                  }}  required="true" maxlength="10" minlength="10" onBlur={(e)=>{
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
                              <div className="form-check">
                                <input type="checkbox" name="RemenberMe"
                                   className="form-check-input" value={this.state.datosUsuario.RemenberMe} onChange={(e)=>{
                                       let {datosUsuario} = this.state;
                                       datosUsuario.RemenberMe = e.target.value;
                                       this.setState({datosUsuario});
                                   }}/>
                                   <label htmlFor="RemenberMe" className="form-check-label">Recordar sesión</label>
                              </div>
                          </div>
                        </div>
                         <div className="form-group">
                             <button className="btn btn-success" onClick={this.submitForm.bind(this)}>
                             {loading?<FontAwesomeIcon className="mr-2" icon="sync-alt" spin />: <FontAwesomeIcon className="mr-2" icon="sign-in-alt" />}
                               Ingresar</button>
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
    usuarios: state.usuario
  }
}
export default connect(mapStateToProps, {iniciarSesion})(IniciarSesion);

