export const LOGIN_USUARIO = 'LOGIN_USUARIO';
export const LOGOUT_USUARIO = 'LOGOUT_USUARIO';

export function loginUsuario(usuario){
    return {
        type: LOGIN_USUARIO,
        usuario
    }
}
export function logoutUsuario(usuario)
{
    return {
        type: LOGOUT_USUARIO,
        usuario
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

export function iniciarSesion(data){
    return dispatch =>{
        return fetch('https://localhost:44328/api/Usuarios/Ingresar', {
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(
            loginUsuario(data)
        ));
    }
}

export function cerrarSesion(){
    return dispatch =>{
        return fetch('https://localhost:44328/api/Usuarios/CerrarSesion', {
            method: 'post',
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponseNoJson)
        .then(data => dispatch(
            logoutUsuario(data)
        ));
    }   
}