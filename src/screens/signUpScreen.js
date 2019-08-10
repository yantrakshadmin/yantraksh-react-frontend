import React, {Component} from 'react';

import ToHome from "../helpers/redirectWhenAuthenticated";
import {isUsernameAvailable, signUpUser} from "../helpers/api";
import {signIn} from "../actions/auth";
import {connect} from "react-redux";


const NAME_REGEX = '^[A-Z a-z]+$';
const USERNAME_REGEX = '^[\\w.@+-]+$';
const PASSWORD_REGEX = '^.{6}.+$';


class SignUpScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            username: '',
            email: '',
            password: '',
            confirmpass: ''
        };
    }

    handleChange = (event) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        let errors = [];

        if (!this.state.first_name.match(NAME_REGEX))
            errors.push('Name is not valid.');

        if (!this.state.password.match(PASSWORD_REGEX))
            errors.push('Password not valid');

        if (!this.state.username.match(USERNAME_REGEX))
            errors.push('Username not valid');

        else {
            const data = await isUsernameAvailable(this.state.username);
            if (!data.available)
                errors.push(`Username '${data.username}' not available`);
        }

        if (this.state.confirmpass !== this.state.password)
            errors.push('Password and confirm password is not same');

        if (errors.length !== 0)
            alert(errors.join('\n'));
        else {
            try {
                await signUpUser(this.state);
                alert('User created successful');
                this.props.signInAction(this.state.username, this.state.password)

            } catch (e) {
                alert('Problem creating user');
                console.log(e)
            }
        }
    };

    render() {
        return (
            <div>
                <h2>
                    Create A new account
                </h2>
                <form onSubmit={this.onSubmit}>
                    Name: <br/>
                    <input type="text" name={"first_name"} onChange={this.handleChange} value={this.state.first_name}/> <br/>
                    Only alphabets and space is allowed. <br/>
                    <br/><br/>

                    Username: <br/>
                    <input type="text" name={"username"} onChange={this.handleChange} value={this.state.username}/>
                    <br/>
                    Should contain only 0-9, a-z, @, _, -
                    <br/><br/>

                    Email: <br/>
                    <input type="email" name={"email"} onChange={this.handleChange} value={this.state.email}/>
                    <br/><br/>

                    Password: <br/>
                    <input type="password" name={"password"} onChange={this.handleChange} value={this.state.password}/>
                    Minimum 6 character
                    <br/><br/>

                    Confirm password: <br/>
                    <input type="password" name={"confirmpass"} onChange={this.handleChange}
                           value={this.state.confirmpass}/> <br/>
                    {this.state.password !== this.state.confPass ? "Password and confirm password should be same" : ""}

                    <br/>
                    <br/>
                    <button>
                        Sign Up
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

const ScreenWrapper = connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
export default () => <ToHome component={ScreenWrapper}/>;
