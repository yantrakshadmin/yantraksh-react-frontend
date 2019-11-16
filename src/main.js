import React, {lazy, Suspense, useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import LoadingScreen from "./screens/loadingScreen";

import {checkUser} from "./actions/auth";
import {connectionStatusChanged} from "./actions/navigation";

const HomeScreen = lazy(() => import('./screens/home'));
const SignInScreen = lazy(() => import('./screens/signInScreen'));
const ShipperSignUpScreen = lazy(() => import('./screens/shipper/signUpScreen'));
const CompanySignUpScreen = lazy(() => import('./screens/company/signUpScreen'));
const SupplierSignUpScreen = lazy(() => import('./screens/supplier/signUpScreen'));
const ForgetPassword = lazy(() => import('./screens/forgetPassword'));
const ConfirmPassword = lazy(() => import('./screens/confirmPassword'));
const DashboardScreen = lazy(() => import('./screens/dashboard'));
const NotFound404Screen = lazy(() => import('./screens/notFound404'));


const Main = (props) => {
    const {connectionChangeHandler, checkUser} = props;

    useEffect(() => {
        checkUser();
        window.addEventListener("offline", connectionChangeHandler);
        window.addEventListener("online", connectionChangeHandler)
    }, [connectionChangeHandler, checkUser]);

    return (
        <Router>
            <div className={props.online ? 'online' : 'offline'}>
                <div className="App">
                    <LoadingScreen/>
                    <Suspense fallback={<LoadingScreen/>}>
                        <Switch>
                            <Route exact path={"/"} component={HomeScreen}/>
                            <Route exact path="/sign-in/" component={SignInScreen}/>
                            <Route exact path="/sign-up/shipper/" component={ShipperSignUpScreen}/>
                            <Route exact path="/sign-up/supplier/" component={SupplierSignUpScreen}/>
                            <Route exact path="/sign-up/company/" component={CompanySignUpScreen}/>
                            <Route exact path="/forget-password/" component={ForgetPassword}/>
                            <Route exact path="/confirm-password/" component={ConfirmPassword}/>
                            <Route path={'/dashboard/'} component={DashboardScreen}/>
                            <Route component={NotFound404Screen}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    online: state.navigation.online
});

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUser()),
    connectionChangeHandler: () => dispatch(connectionStatusChanged())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
