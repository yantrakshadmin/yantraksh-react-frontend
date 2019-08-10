import React, {Component} from 'react';

import {connect} from "react-redux";


class AuthSwitch extends Component {
    render() {
        const {public: PublicComp, private: PrivateComp, isAuthenticated} = this.props;

        if(isAuthenticated)
            return <PrivateComp />;
        return <PublicComp />;
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(AuthSwitch);
