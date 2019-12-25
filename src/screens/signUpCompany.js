import React, { Component } from 'react';
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

import { isUsernameAvailable, signUpUserCompany, signUpUserShipper, signUpUserSupplier } from "../helpers/api";
import history from '../history';
import { userCreateSuccess, userCreateFailed } from '../helpers/notifications';
import { signIn } from "../actions/auth";
import { connect } from "react-redux";
import Redirect from "react-router/es/Redirect";

// const NAME_REGEX = '^[A-Z a-z]';
const USERNAME_REGEX = '^[\\w.@+-]+$';

// const PASSWORD_REGEX = '^.{6}.+$';

class SignUpScreenCompany extends Component {

    constructor(props) {
        super(props);

        this.state = {
            company_name: '',
            company_email: '',
            company_phone: '',
            company_type: '',
            phase: 0,
        };
    }


    signUpLoadingButton = () => {
        if (this.state.phase === 1) {
            return (
                <Button color="success" block disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading
                </Button>
            );
        }

        return <Button color="success" block>Create Account</Button>;
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(event, target, name, value);

        this.setState({
            [name]: value
        })
    };

    onSubmit = async (e) => {
        e.preventDefault();
        this.setState({ phase: 1 })
        console.log(this.state);

        let errors = [];
        // if (!this.state.username.match(USERNAME_REGEX))
        //     errors.push('Username not valid');

        // else {
        //     const data = await isUsernameAvailable(this.state.username);
        //     if (!data.available)
        //         errors.push(`Username '${data.username}' not available`);
        // }
        if (errors.length !== 0)
            alert(errors.join('\n'));
        else {
            if (this.props.type === "Company") {
                try {
                    console.log(this.state, 'gatate')
                    await signUpUserCompany(this.state);
                    this.setState({ phase: 0 })
                    history.push("/");
                    userCreateSuccess("Company");
                    //alert('User created successful');
                    // this.props.signInAction(this.state.username, this.state.password)
                } catch (e) {
                    userCreateFailed();
                    console.log(e)
                }
            }
        }
        this.setState({ phase: 0 })
    };


    render() {
        if (this.props.isAuthenticated)
            return <Redirect to={`${this.props.redirectTo.split('#')[1]}`} />;


        return (

            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form onSubmit={this.onSubmit}>
                                        <input type="hidden" className={"form-control"} name="user-type"
                                            value={this.props.type} />
                                        <h1>Register {this.props.type}</h1>
                                        <p className="text-muted">Create your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input placeholder={'Name'} type="text" className={"form-control"}
                                                name={"company_name"}
                                                onChange={this.handleChange}
                                                value={this.state.company_name} required />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>@</InputGroupText>
                                            </InputGroupAddon>
                                            <input type="email" placeholder={'Email'} name={"company_email"}
                                                className={"form-control"}
                                                onChange={this.handleChange}
                                                value={this.state.company_email} required />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="phone" placeholder={'Phone'}
                                                name={"company_phone"}
                                                className={"form-control"}
                                                onChange={this.handleChange}
                                                value={this.state.company_phone} required />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text"
                                                    htmlFor="inputGroupSelect01">Company</label>
                                            </div>
                                            <select onChange={(e) => {
                                                this.setState({ company_type: e.target.value })
                                            }} className="custom-select" id="inputGroupSelect01">
                                                <option value={''} selected>Choose...</option>
                                                <option value={'supplier'} selected>Supplier</option>
                                                <option value={'shipper'}>Shipper</option>
                                            </select>
                                        </InputGroup>

                                        {this.state.password !== this.state.confPass ? "Password and confirm password should be same" : ""}
                                        <br />
                                        <br />
                                        {this.signUpLoadingButton()}
                                    </Form>
                                </CardBody>
                                <CardFooter className="p-4">
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreenCompany);
