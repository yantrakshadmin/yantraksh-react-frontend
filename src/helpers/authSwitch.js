import React from 'react';
import {connect} from "react-redux";


const AuthSwitch = (props) => {
        const {public: PublicComp, private: PrivateComp, isAuthenticated} = props;

        if(isAuthenticated)
            return <PrivateComp />;

        return <PublicComp />;
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated
});

export default connect(mapStateToProps)(AuthSwitch);
