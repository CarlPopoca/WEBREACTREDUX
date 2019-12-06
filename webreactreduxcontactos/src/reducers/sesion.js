import {LOGIN_USUARIO, LOGOUT_USUARIO} from "../actions/actionsSesion";


export default function usuarios (state = [], action = {}){
    switch(action.type){      
        case LOGIN_USUARIO, LOGOUT_USUARIO:
            return [
                ...state,
                    action.usuario
            ];

        
        default: return state;
    }
}