import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {connect} from "react-redux";

import Home from "./screens/home";
import SignInScreen from "./screens/signInScreen";
import SignUpScreen from "./screens/signUpScreen";
import {checkUser} from "./actions/auth";


class Main extends Component {

    componentDidMount() {
        this.props.checkUser();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Link to={"/"}>
                        <h1>
                            Welcome to Yantraksh React APP
                        </h1>
                    </Link>

                    <Route exact path={"/"} component={Home}/>
                    <Route exact path="/sign-in/" component={SignInScreen}/>
                    <Route exact path="/sign-up/" component={SignUpScreen}/>
                </div>
            </Router>
        );
    }
}
const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    checkUser: () => dispatch(checkUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
