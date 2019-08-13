import React, {lazy, Suspense, useEffect} from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import LoadingScreen from "./screens/loadingScreen";

import {checkUser} from "./actions/auth";
import {ToastContainer} from "react-toastify";


const HomeScreen = lazy(() => import('./screens/home'));
const SignInScreen = lazy(() => import('./screens/signInScreen'));
const SignUpScreen = lazy(() => import('./screens/signUpScreen'));
const DashboardScreen = lazy(() => import('./screens/dashboard'));
const NotFound404Screen = lazy(() => import('./screens/notFound404'));
// const LoadingScreen = lazy(() => import('./screens/loadingScreen'));


const Main = (props) => {

    useEffect(() => {
        props.checkUser()
    });

    return (
        <Router>
            <div className="App">
                <LoadingScreen/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path={"/"} component={HomeScreen}/>
                        <Route exact path="/sign-in/" component={SignInScreen}/>
                        <Route exact path="/sign-up/" component={SignUpScreen}/>
                        <Route path={'/dashboard/'} component={DashboardScreen} />
                        {/*<Route path={'/loading/'} component={LoadingScreen} />*/}
                        <Route component={NotFound404Screen} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
