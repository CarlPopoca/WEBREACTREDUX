import  {combineReducers} from 'redux';
import   contactos from './reducers/contactos';
import   usuarios from './reducers/usuarios';
import   sesion from './reducers/sesion';

export default combineReducers({
    contactos,
    usuarios,
    sesion
});
