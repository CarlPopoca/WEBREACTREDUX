
export const SET_CONTACTOS = 'SET_CONTACTOS';

export function setContactos(contactos){
    return {
        type: SET_CONTACTOS,
        contactos
    }
}
export function fetchContactos()
{

    return dispatch =>{
        fetch('https://localhost:44386/api/Contactos')
        .then(res => res.json())
        .then(data => dispatch(
            setContactos(data)
            )).catch(function(err) {
               alert('hubo un error');
            });
    }
}