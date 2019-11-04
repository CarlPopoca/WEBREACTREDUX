import { SET_CONTACTOS } from "../actions/actionsContactos";

export default function contactos(state = [], action = {}){

    switch(action.type){
        case SET_CONTACTOS:
            return action.contactos;

        default: return state;
    }
}