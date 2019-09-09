import React, {Component} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Container,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

import {isUsernameAvailable, signUpUserShipper, signUpUserSupplier} from "../helpers/api";
import {signIn} from "../actions/auth";
import {connect} from "react-redux";
import Redirect from "react-router/es/Redirect";

// const NAME_REGEX = '^[A-Z a-z]';
const USERNAME_REGEX = '^[\\w.@+-]+$';

// const PASSWORD_REGEX = '^.{6}.+$';

class SignUpScreenSupplier extends Component {

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

        // if (!this.state.first_name)
        //     errors.push('Name is not valid.');
        //
        // if (!this.state.password.match(PASSWORD_REGEX))
        //     errors.push('Password not valid');

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

            if (this.props.type === "Supplier") {
                try {
                    await signUpUserSupplier(this.state);
                    alert('User created successful');
                    this.props.signInAction(this.state.username, this.state.password)

                } catch (e) {
                    alert('Problem creating user');
                    console.log(e)
                }

            }

            if (this.props.type === "Shipper") {
                try {
                    await signUpUserShipper(this.state);
                    alert('User created successful');
                    this.props.signInAction(this.state.username, this.state.password)

                } catch (e) {
                    alert('Problem creating user');
                    console.log(e)
                }

            }


        }
    };


    render() {
        if (this.props.isAuthenticated)
            return <Redirect to={`${this.props.redirectTo.split('#')[1]}`}/>;


        return (

            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form onSubmit={this.onSubmit}>
                                        <input type="hidden" name="user-type" value={this.props.type}/>
                                        <h1>Register for {this.props.type}</h1>
                                        <p className="text-muted">Create your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="text" name={"username"} onChange={this.handleChange}
                                                   value={this.state.username}/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>@</InputGroupText>
                                            </InputGroupAddon>
                                            <input type="email" name={"email"} onChange={this.handleChange}
                                                   value={this.state.email}/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="password" name={"password"} onChange={this.handleChange}
                                                   value={this.state.password}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="password" name={"confirmpass"} onChange={this.handleChange}
                                                   value={this.state.confirmpass}/>
                                            {this.state.password !== this.state.confPass ? "Password and confirm password should be same" : ""}
                                        </InputGroup>
                                        <Button color="success" block>Create Account</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-facebook mb-1" block><span>LinkedIn</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-twitter mb-1" block><span>Gmail</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated,
    redirectTo: state.navigation.redirectTo
});

const mapDispatchToProps = (dispatch) => ({
    signInAction: (username, password) => dispatch(signIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreenSupplier);
