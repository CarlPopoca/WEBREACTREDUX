import React, {Component} from 'react';
import {Label, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button} from 'reactstrap';
import { Redirect} from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import ContactosList from './ContactosList';
import {fetchContactos, saveContactos, updateContactos, deleteContactos} from '../actions/actionsContactos';
import AlertaError from './AlertaError';
/*import Navegacion from './Navegacion';*/
//Una Clase que extiende del component de React se comvierte en una etiqueta html
class Contactos extends Component  {
  componentDidMount()
  {
    this.refrescarContactos();
  }
  constructor(props){
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token==null){
      loggedIn = false;
    }
    this.state = {
      alert_message:'',
      contactos: [],
      datosNuevoContacto: {
        Nombre: '',
        Celular: '',
        Sexo: ''
      },
      datosEditarContacto: {
        Id: '',
        Nombre: '',
        Celular: '',
        Sexo: ''
      },
      nuevoContactoModal: false,
      editarContactoModal: false,
      loggedIn
    }
  }
  //Se declara en el objeto state las variables que mantendran el valor
  //Contactos - Los datos que llenaran el Table
  //datosNuevoContacto - Los datos para la Alta
  //datosEditarContacto - Los datos para la modificación
  //nuevoContactoModal - Para la visualización y cierre de la ventana modal de Alta
 //editarContactoModal - Para la visualización  y cierre de la ventana modal de modificación

 //Método que refrescara el Table

  refrescarContactos(){
    this.props.fetchContactos();
    
  }
  componentWillReceiveProps(nextProps){
     //entra cada vez que se ejecuta un evento transaccional
  }
//Método que niega el valor de la variable nuevoContactoModal inicializada en false, esto
//permite mostrar el Modal para la Alta y inicializa los datos del objeto datosNuevoContacto, y
//Se regresa el valor de la variable nuevoContactoModal a false cuando se pulsa el botón de cerrar y
//cuando se pulsa el botón de cancelar
  toggleNuevoContactoModal() {
    this.setState({
      nuevoContactoModal: !this.state.nuevoContactoModal,
      datosNuevoContacto: {
        Nombre: '',
        Celular: '',
        Sexo: ''
      }
    });
  }
  //Método que niega el valor de la variable editarContactoModal inicializada en false, esto
  //permite mostrar el Modal para la Modificación y
  //se regresa el valor de la variable editarContactoModal a false cuando se pulsa el botón de cerrar y
  //cuando se pulsa el botón de cancelar
  toggleEditarContactoModal() {
    //Este metodo se dispara cuando se cierra la ventana modal de editar, y cuando se pulsa el botón de Cancelar
    // convierte el valor de la variable editarContactoModal a false
  this.setState({
    editarContactoModal: !this.state.editarContactoModal
  });
}
//Método que permite guardar los datos capturados en el modal de Alta
  agregarContacto (){

    let {Nombre, Celular, Sexo} = this.state.datosNuevoContacto;
    let errors = {};
    errors.title = "hubo error";
    this.setState({errors});
    const isValid = Object.keys(errors).length === 0;
  
    
      this.props.saveContactos({Nombre, Celular, Sexo}).then(
        (response)=>{
          //Se setea la variable de state contactos, los simbolo {} permiten usarla para setearla por medio de let
          //this.state contiene los contactos que se renderizaron en el Table
            let {contactos} = this.state;
            //Se agrega al final el contacto que devolvio el metodo post de la api contactos
            contactos.push(response.data);
            //Inicializa el estado de las variables nuevoContactoModal y el objeto datosNuevoContacto
            this.setState({contactos, nuevoContactoModal:false, datosNuevoContacto: {
              Nombre: '',
              Celular: '',
              Sexo: ''
            }, alert_message: ''});
        }, 
        (err) => err.response.json().then(()=>{
          //Entra cuando los errores son superficiales, por ejemplo cuando los datos que se capturan no 
          //coinciden con el tipo de dato 
          this.setState({
            alert_message: 'No se pudo agregar el contacto'
          })
        }
        )
      ).catch(error=>{
        //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
        //  es superior al campo de la base de datos
        this.setState({
          alert_message: 'No se pudo agregar el contacto'
        });
      });
  
  
  }

//Método que permite guardar los datos capturados en el modal de Modificación
  actualizarContacto()
  {
    let {Id, Nombre, Celular, Sexo} = this.state.datosEditarContacto;
  
    this.props.updateContactos({Id, Nombre, Celular, Sexo}).then(
      ()=>{
          //Se refresca el Table
          this.refrescarContactos();
          //Inicializa el estado de las variables nuevoContactoModal y el objeto datosNuevoContacto
          this.setState({editarContactoModal: false, datosEditarContacto: {
            Id: '',
            Nombre: '',
            Celular: '',
            Sexo: ''
          }, alert_message: ''});
      },
      (err) => err.response.json().then(()=>{
        this.setState({
          alert_message: 'No se pudo actualizar el contacto'
        })
        }
      )
    ).catch(error=>{
      //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
      //  es superior al campo de la base de datos
      this.setState({
        alert_message: 'No se pudo actualizar el contacto'
      });
    });
  }
//Método para eliminar un Contacto
 eliminarContacto(id){

   confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='custom-ui'>

          <h1 className="glyphicon glyphicon-warning-sign">
            <FontAwesomeIcon className="mr-3" icon="exclamation-triangle" />
            Esta seguro de eliminar el registro?</h1>
          <div className="btn-toolbar row" role="toolbar">
            <div className="col-sm-4"></div>
          <div className="btn-group col-sm-4">
              <Button color="secondary" size="sm" className="mr-3" onClick={onClose}>
                  <FontAwesomeIcon className="mr-1" icon="times" />
                  No
               </Button>
              <Button color="primary" size="sm" className="btn btn-default "
                    onClick={() => {
                      this.props.deleteContactos(id).then(
                        ()=>{
                            //Se refresca el Table
                            this.refrescarContactos();
                            onClose();
                        }, 
                        (error) => error.response.json().then(()=>
                          {
                            this.setState({
                              alert_message: 'No se pudo eliminar el contacto'
                            })
                          }
                        )
                      ).catch(error=>{
                        //entra cuando los errores se propagan desde la base de datos, por ejemplo cuando la logitud de un 
                        //  es superior al campo de la base de datos
                        this.setState({
                          alert_message: 'No se pudo eliminar el contacto'
                        });
                      });
                    }}
                >
                  <FontAwesomeIcon className="mr-1" icon="check" />
                   Si
              </Button>
              </div>
                <div className="col-sm-4"></div>
            </div>
          </div>
        );
      }
    });
 }

  //Nota: this.state mantiene el estado de las variables, es como un get pero para setear una  variables
  // se debe ocupar
  //Método para actualizar los datos
  editarContacto (Id, Nombre, Celular, Sexo)
  {
    //Por default la variable editarContactoModal es false pero se niega este valor seteando a verdadero,
    // y de esta manera se consigue visualizar el modal de mdificación y setearle los datos a los controles
    this.setState({
     datosEditarContacto: {Id, Nombre, Celular, Sexo}, editarContactoModal:! this.state.editarContactoModal
   });
  }

  render(){
    if(this.state.loggedIn==false)
    {
      return <Redirect  to="/" />
    }
    //Se setea a la variable local contactosReg el objeto contactos que se lleno al ejecutarse el método
    //componentWillMount en automatico y se retorna las filas del Table más una columna con los botones de
    //Editar y eliminar
    let contactosReg = this.props.contactos.map((contacto)=>{
      return(
        <tr key={contacto.Id}>
          <td>{contacto.Id}</td>
          <td>{contacto.Nombre}</td>
          <td> {contacto.Celular}</td>
          <td> {contacto.Sexo}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editarContacto.bind(this, contacto.Id, contacto.Nombre, contacto.Celular, contacto.Sexo)}>Editar</Button>
            <Button color="danger" size="sm" onClick={this.eliminarContacto.bind(this,contacto.Id)}>Eliminar</Button>
          </td>
        </tr>
      )
    });

    // El botón Agregar cambia a true la variable nuevoContactoModal por medio del metodo toggleNuevoContactoModal

    //Modal para modificar datos se abre en automatico cuando su atributo isOpen cambia a verdadero por medio de la variable nuevoContactoModal
    //y se cierra cuando la misma variable cambia a false al presionarse los botones cerrar (x) y cancelar

    //Modal para modificar datos  se abre en automatico cuando su atributo isOpen cambia a verdadero por medio de la variable editarContactoModal
    //y se cierra cuando la misma variable cambia a false al presionarse los botones de cerrar (x) y cancelar

    //ModalHeader: Encabezado del Modal
    //ModalBody: Contenedor de controles
    //ModalFooter:  Pie del Modal, se utiliza comunmente para añadir botones

    //FormGroup: Agrupador de Controles
    //Input propiedad value : se le puede ligar una propiedad de un objeto state, y con el método onChange asignarle
    //al value lo que se captura.
    // let {datosNuevoContacto} = this.state;,  se setea el estado y se almacena lo que se captura
    // datosNuevoContacto.Nombre = e.target.value;, se setea lo que se captura en el input en la propiedad que se indica
    // this.setState({datosNuevoContacto});, se confirma el seteo de la propiedad del objeto

    //<tbody>{contactosReg}</tbody>, la variable local contactosReg proporciona los filas del Table
    return (
      <div id="divContactos">

      <div className="App container">
        <h2>Aplicación de Contactos</h2>

        <Button  className="my-3" color="primary" onClick={this.toggleNuevoContactoModal.bind(this)}>Agregar</Button>
        <Modal isOpen={this.state.nuevoContactoModal}  toggle={this.toggleNuevoContactoModal.bind(this)}>
          <ModalHeader toggle={this.toggleNuevoContactoModal.bind(this)}>Agregar un Contacto</ModalHeader>
          <ModalBody>
          {this.state.alert_message!=""?<AlertaError mensaje={this.state.alert_message} />:null}
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input  id="Nombre" value={this.state.datosNuevoContacto.Nombre} onChange={(e)=>{
                let {datosNuevoContacto} = this.state;
                datosNuevoContacto.Nombre = e.target.value;
                this.setState({datosNuevoContacto});
              }} required="true" maxlength="100"/>
            </FormGroup>
            <FormGroup>
              <Label for="Celular">Celular</Label>
              <Input  id="Celular" value={this.state.datosNuevoContacto.Celular} onChange={(e)=>{
                let {datosNuevoContacto} = this.state;
                datosNuevoContacto.Celular = e.target.value;
                this.setState({datosNuevoContacto});
              }} required = "true"/>
            </FormGroup>
            <FormGroup>
              <Label for="Sexo">Sexo</Label>
              <Input  id="Sexo" value={this.state.datosNuevoContacto.Sexo} onChange={(e)=>{
                let {datosNuevoContacto} = this.state;
                datosNuevoContacto.Sexo = e.target.value;
                this.setState({datosNuevoContacto});
              }} required="true" maxlength="3" minlength="3"/>
            </FormGroup>
          </ModalBody>
         <ModalFooter>
           <Button color="primary" onClick={this.agregarContacto.bind(this)}>Guardar</Button>{' '}
           <Button color="secondary" onClick={this.toggleNuevoContactoModal.bind(this)}>Cancelar</Button>
         </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.editarContactoModal}  toggle={this.toggleEditarContactoModal.bind(this)}>
         <ModalHeader toggle={this.toggleEditarContactoModal.bind(this)}>Editar un Contacto</ModalHeader>
         <ModalBody>
         {this.state.alert_message!=""?<AlertaError mensaje={this.state.alert_message} />:null}
          <FormGroup>
            <Label for="Nombre">Nombre</Label>
            <Input  id="Nombre" value={this.state.datosEditarContacto.Nombre} onChange={(e)=>{
              let {datosEditarContacto} = this.state;
              datosEditarContacto.Nombre = e.target.value;
              this.setState({datosEditarContacto});
            }} required="true" maxlength="100"/>
          </FormGroup>
          <FormGroup>
            <Label for="Celular">Celular</Label>
            <Input  id="Celular" value={this.state.datosEditarContacto.Celular} onChange={(e)=>{
              let {datosEditarContacto} = this.state;
              datosEditarContacto.Celular = e.target.value;
              this.setState({datosEditarContacto});
            }} required="true"/>
          </FormGroup>
          <FormGroup>
            <Label for="Sexo">Sexo</Label>
            <Input  id="Sexo" value={this.state.datosEditarContacto.Sexo} onChange={(e)=>{
              let {datosEditarContacto} = this.state;
              datosEditarContacto.Sexo = e.target.value;
              this.setState({datosEditarContacto});
            }} required="true" maxlength="3" minlength="3"/>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.actualizarContacto.bind(this)}>Guardar</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditarContactoModal.bind(this)}>Cancelar</Button>
        </ModalFooter>
       </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Celular</th>
              <th>Sexo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactosReg}
            
          </tbody>
        </Table>
        
      </div>
    </div>
    );
  }
}

function mapStateToProps (state)
{

  return {
    contactos: state.contactos
  }
}

export default connect(mapStateToProps, {fetchContactos, saveContactos, updateContactos, deleteContactos})(Contactos);
