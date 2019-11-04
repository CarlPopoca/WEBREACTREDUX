import  {combineReducers} from 'redux';
import   contactos from './reducers/contactos';
import   usuarios from './reducers/usuarios';

export default combineReducers({
    contactos,
    usuarios
});
