export const LOGIN_USUARIOS = 'LOGIN_USUARIOS';

export function loginUsuario(login){
    return {
        type: LOGIN_USUARIOS,
        login
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
