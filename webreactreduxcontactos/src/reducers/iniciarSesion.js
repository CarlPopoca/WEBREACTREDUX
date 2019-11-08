import {LOGIN_USUARIOS} from "../actions/actionsIniciarSesion";


export default function usuarios (state = [], action = {}){
    switch(action.type){      
        case LOGIN_USUARIOS:
            return [
                ...state,
                    action.login
            ];
        
        default: return state;
    }
}