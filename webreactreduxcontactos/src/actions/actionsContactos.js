
export const SET_CONTACTOS = 'SET_CONTACTOS';
export const ADD_CONTACTOS = 'ADD_CONTACTOS';
export const UPDATE_CONTACTOS = 'UPDATE_CONTACTOS';
export const DELETE_CONTACTOS = 'DELETE_CONTACTOS';

export function setContactos(contactos){

    return {
        type: SET_CONTACTOS,
        contactos
    }
}

export function addContactos(contactos){
    return {
        type: ADD_CONTACTOS,
        contactos
    }

}

export function updContactos(contactos){
    return {
        type: UPDATE_CONTACTOS,
        contactos
    }
}

export function delContactos(Id){
    return {
        type: DELETE_CONTACTOS,
        Id
    }
}
function handleResponse(response){
    if (response.ok){
        //Cuando la respuesta es satisfactoría
        return response.json();
    }else{
        //Cuando ocurre un error
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
function handleResponseNoJson(response){
  
    if (response.ok){
        //Cuando la respuesta es satisfactoría
        return response
    }else{
        //Cuando ocurre un error
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
export function fetchContactos()
{
    return dispatch =>{
       return fetch('https://localhost:44386/api/Contactos', {
            method: 'get',
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(
            setContactos(data)
        ));
    }  
}
export function saveContactos(data){
    return dispatch =>{
        return fetch('https://localhost:44386/api/Contactos', {
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(
            addContactos(data)
        ));
    }
}
export function updateContactos(data){

    return dispatch =>{
        return fetch(`https://localhost:44386/api/Contactos/${data.Id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponseNoJson)
        .then(data => dispatch(
            updContactos(data)
        ));
    }
}

export function deleteContactos(Id){
    return dispatch =>{
        return fetch(`https://localhost:44386/api/Contactos/${Id}`, {
            method: 'delete',
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(
            delContactos(Id)
        ));
    }
}
