import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {BrowserRouter as Router} from "react-router-dom";
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import Main from "./main";


export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
);


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Main/>
                </Router>
            </Provider>
        );
    }
}

export default App;
