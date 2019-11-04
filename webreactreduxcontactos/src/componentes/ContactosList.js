import React, {Fragment} from 'react';
import {Table, Button} from 'reactstrap';

 export default function ContactosList ({contactos}) {
    const emptyMessage = (
            <p>No hay contactos</p>
    );
    const contactosList = (
           <div>
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
                    {contactos.map(contacto => <tr key={contacto.Id}>
                        <td>{contacto.Id}</td>
                        <td>{contacto.Nombre}</td>
                        <td> {contacto.Celular}</td>
                        <td> {contacto.Sexo}</td>
                        <td>
                            botones
                        </td>
                        </tr>)}
                </tbody>
                </Table>
            </div>
    );

    return (
        
        <div>
            
            {contactos.length===0 ? emptyMessage : contactosList}
          
        </div>
    );
}



