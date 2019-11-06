import { SET_CONTACTOS, ADD_CONTACTOS, UPDATE_CONTACTOS, DELETE_CONTACTOS } from "../actions/actionsContactos";

export default function contactos(state = [], action = {}){
         
    switch(action.type){
        case SET_CONTACTOS:
            return action.contactos;
        case ADD_CONTACTOS:
            return [
                ...state,
                    action.contactos
            ];
        case UPDATE_CONTACTOS:
            return state.map(item => {
                if (item.Id === action.contactos.Id) return action.contactos;
                return item;
            })
        case DELETE_CONTACTOS:
            return state.filter(item => item.Id != action.Id);

        default: return state;
    }
}