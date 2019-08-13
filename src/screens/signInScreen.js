import React from 'react';
import GuestScreen from "./guestScreen";
import SignInCard from "../components/signInCard";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const SignInScreen = (props) => {
    if(props.isAuthenticated)
        return <Redirect to={`${props.redirectTo.split('#')[1]}`}/>;

    return (
        <GuestScreen>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh'
            }}>
                <SignInCard/>
            </div>
        </GuestScreen>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated,
    redirectTo: state.navigation.redirectTo
});
export default connect(mapStateToProps)(SignInScreen)
