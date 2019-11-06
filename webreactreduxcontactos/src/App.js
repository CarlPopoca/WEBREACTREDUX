import React, {Component, Fragment} from 'react';
import {BrowserRouter as Routers, Switch, Route, withRouter, Link } from 'react-router-dom';
import Ingresar from './componentes/seguridad/Ingresar';
import CerrarSesion from './componentes/seguridad/CerrarSesion';
import RegistrarUsuario from './componentes/seguridad/RegistrarUsuario';
import Contactos from './componentes/Contactos';
import Navegacion from './componentes/Navegacion';
import NavMenu from './componentes/NavMenu';
import Home from './componentes/Home';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faTrashAlt, faExclamationTriangle, faTimes, faCheck, faUserCircle, faKey, faSignInAlt, faDatabase} from '@fortawesome/free-solid-svg-icons';

//Una Clase que extiende del component de React se comvierte en una etiqueta html
class App extends Component  {

  render(){
    library.add(fab, faCheckSquare, faCoffee, faTrashAlt, faExclamationTriangle, faTimes, faCheck, faUserCircle, faKey, faSignInAlt, faDatabase);

      return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <body>
            
              <Switch>
                <Fragment>
                  <NavMenu location={this.props.location}></NavMenu>
                  <Route exact path="/" component={Home}></Route>
                  <Route path="/ingresar" component={Ingresar}></Route>
                  <Route path="/registrarUsuario" component={RegistrarUsuario}></Route>
                  <Route path="/contactos" component={Contactos}></Route>
                  <Route path="/cerrarSesion" component={CerrarSesion}></Route>
                </Fragment>
              </Switch>
            
          </body>
        </div>
      )
  }
}

export default App;