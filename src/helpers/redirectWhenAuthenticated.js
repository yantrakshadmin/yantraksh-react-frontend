import React from 'react';

import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getQueryStringValue} from "./url";


const RedirectWhenAuthenticated = (props) => {
    const {isAuthenticated, component: Component, to} = props;
    console.log('REDIRECT', window.location, getQueryStringValue('redirect'),isAuthenticated);

    if (isAuthenticated)
        return <Redirect to={to ? to : "/"}/>;

    return <Component/>;
};

const mapStateWithProps = (state) => ({
    isAuthenticated: state.auth.authenticated
});

export default connect(mapStateWithProps)(RedirectWhenAuthenticated);
