import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter as Router} from "react-router-dom";
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Main from "./main";

import './scss/App.scss';
import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer} from "react-toastify";


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Main/>
                </Router>
                <ToastContainer />
            </Provider>
        );
    }
}

export default App;
