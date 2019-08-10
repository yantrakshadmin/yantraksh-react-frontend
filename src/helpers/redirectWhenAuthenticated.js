import React, {Component} from 'react';

import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


class RedirectWhenAuthenticated extends Component {
    render() {
        const {isAuthenticated, component: Component} = this.props;

        if(isAuthenticated)
            return <Redirect to={"/"} />;

        return <Component/>;
    }
}

const mapStateWithProps = (state) => ({
    isAuthenticated: state.auth.authenticated
});

export default connect(mapStateWithProps)(RedirectWhenAuthenticated);
