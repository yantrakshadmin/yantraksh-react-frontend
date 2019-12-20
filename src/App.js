import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Main from "./main";

import './scss/App.scss';
import 'react-toastify/dist/ReactToastify.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import {ToastContainer} from "react-toastify";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
                <ToastContainer />
            </Provider>
        );
    }
}

export default App;
