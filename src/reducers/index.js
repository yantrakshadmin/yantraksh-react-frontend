import {combineReducers} from 'redux';
import {auth} from './auth';
import {navigation} from "./navigation";
import {data} from "./data";


export default combineReducers({
    auth,
    navigation,
    data
});
