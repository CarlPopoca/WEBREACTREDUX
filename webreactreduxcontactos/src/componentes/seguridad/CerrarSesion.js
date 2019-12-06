import React, {Component} from 'react';
import { Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import AlertaError from '../../componentes/AlertaError';
import {cerrarSesion} from '../../actions/actionsSesion';
import {connect} from 'react-redux';

class CerrarSesion extends Component{
  constructor(props){
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token==null){
      loggedIn = false;
    }
    this.state = {
      alert_message:'',
      loggedIn
    }
    this.Salir();
  }
  Salir()
  {

    this.props.cerrarSesion().then(
      ()=>{
        localStorage.removeItem("token");
        this.setState({
          loggedIn: false
        });
      },
      (err) => err.response.json().then(()=>{
        this.setState({
          alert_message: 'Hubo un error al cerrar la sesión'
        });
      })
    ).catch(error=>{
      //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
      //  es superior al campo de la base de datos
      this.setState({
        alert_message: 'Hubo un error al cerrar la sesión'
      });
    });
 }
  render(){
      // this.props.history.push("/")
      if (!this.state.loggedIn)
      return <Redirect  to="/" />
      //  window.location.href='/';
      return (
        <div id="cover-caption">
          <hr/>
            {this.state.alert_message!=""?<AlertaError mensaje={this.state.alert_message} />:null}
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
export default connect(mapStateToProps, {cerrarSesion})(CerrarSesion);
