export const ADD_USUARIOS = 'ADD_USUARIOS';
export const LOGIN_USUARIOS = 'LOGIN_USUARIOS' ;

export function addUsuarios(usuarios){
    return {
        type: ADD_USUARIOS,
        usuarios
    }
}
export function loginUsuario(usuarios){
    return {
        type: LOGIN_USUARIOS,
        usuarios
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

export function saveUsuarios(data){
    return dispatch =>{
        return fetch('https://localhost:44328/api/Usuarios/Registrar', {
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "content-Type":"application/json"
            }
        })
        .then(handleResponse)
        .then(data => dispatch(
            addUsuarios(data)
        ));
    }
}

export function iniciarSesionUsuario(data){
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
