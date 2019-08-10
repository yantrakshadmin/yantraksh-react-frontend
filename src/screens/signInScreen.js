import React, {Component} from 'react';

import ToHome from "../helpers/redirectWhenAuthenticated";
import {signIn} from "../actions/auth";
import {connect} from "react-redux";


class SignInScreen extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.signInAction(this.state.username, this.state.password);
    };


    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div>
                <h2>
                    Sign IN
                </h2>

                <form onSubmit={this.onSubmit}>
                    username:
                    <input type="text" name={"username"} onChange={this.handleChange} />
                    <br/><br/>

                    Password:
                    <input type="password" name={"password"} onChange={this.handleChange} />
                    <br/><br/>

                    <button type={"submit"}>
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    signInAction: (username, password) => dispatch(signIn(username, password)),
});

const ScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
export default () => <ToHome component={ScreenWrapper}/>;
