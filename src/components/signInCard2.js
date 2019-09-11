import React, {useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import {Link} from "react-router-dom";
import {signIn} from "../actions/auth";
import {connect} from "react-redux";

const SignInCard = (props) => {
    const [values, setValue] = useState({
        username: '',
        password: ''
    });

    const handleChange = ({target}) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;
        setValue({
            ...values,
            [name]: value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.signIn(values.username, values.password);
    };

    return (
        <CardGroup>
            <Card className="p-4">
                <CardBody>
                    <Form onSubmit={(e) => submitForm(e)}>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="icon-user"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Username" autoComplete="username" name={"username"} value={values.email}
                                   onChange={handleChange}/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="icon-lock"/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" placeholder="Password"
                                   autoComplete="current-password"
                                   name={"password"}
                                   value={values.password}
                                   onChange={handleChange}/>
                        </InputGroup>
                        <Row>
                            <Col xs="6">
                                <Button color="primary" className="px-4">Login</Button>
                            </Col>
                            <Col xs="6" className="text-right">
                                <Col xs="6" className="text-right">
                                    <Link to={"/forget-password"}>
                                        <Button color="link" className="px-0">Forgot password?</Button>
                                    </Link>
                                </Col>

                            </Col>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
            <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                <CardBody className="text-center">
                    <div>
                        <h2>Sign up</h2>

                        <Link to="/sign-up/supplier/">
                            <Button color="primary" className="mt-3" active tabIndex={-1}>
                                &nbsp;
                                <i className="fa fa-truck"></i>
                               &nbsp;&nbsp;
                                Register as supplier!</Button>
                        </Link>
                        <Link to="/sign-up/shipper/">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>
                            &nbsp;
                            <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;
                            Register as shipper!</Button>
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </CardGroup>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    signIn: (username, password) => dispatch(signIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);
