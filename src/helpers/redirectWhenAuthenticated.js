import React from 'react';

import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const RedirectWhenAuthenticated = (props) => {
    const {isAuthenticated, component: Component, to} = props;

    if (isAuthenticated)
        return <Redirect to={to ? to : "/"}/>;

    return <Component/>;
};

const mapStateWithProps = (state) => ({
    isAuthenticated: state.auth.authenticated
});

export default connect(mapStateWithProps)(RedirectWhenAuthenticated);
