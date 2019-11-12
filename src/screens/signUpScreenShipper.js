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

import {
    isUsernameAvailable,
    signUpUserShipper,
    signUpUserSupplier,
    getCompanyShipper,
    CREATE_ACCOUNT_SUPPLIER, CREATE_ACCOUNT_SHIPPER
} from "../helpers/api";
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
            username: '',
            email: '',
            password: '',
            confirmpass: '',
            company_code: '',
            company_name: '',
            companiesList: [],
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
                    const {username, email, password, company_code, company_name} = this.state;
                    await signUpUserShipper({
                        username: username,
                        email: email,
                        password: password,
                        company_name: company_name,
                        company_code: company_code
                    });
                    alert('User created successful');
                    this.props.signInAction(this.state.username, this.state.password)
                } catch (e) {
                    alert('Problem creating user');
                    console.log(e)
                }
            }
        }
    };

    componentDidMount() {
        if (this.props.type === "Shipper") {
            getCompanyShipper(CREATE_ACCOUNT_SHIPPER)
                .then((result) => {
                    this.setState({companiesList: result})
                })
                .catch(e => console.log(e))
        } else if (this.props.type === "Supplier") {
            getCompanyShipper(CREATE_ACCOUNT_SUPPLIER)
                .then((result) => {
                    this.setState({companiesList: result})
                })
                .catch(e => console.log(e))
        }
    }

    render() {
        const {companiesList} = this.state;
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
                                        <input type="hidden" className={"form-control"} name="user-type"
                                               value={this.props.type}/>
                                        <h1>Register for {this.props.type}</h1>
                                        <p className="text-muted">Create your account</p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="text"
                                                   placeholder={'Username'}
                                                   className={"form-control"}
                                                   name={"username"}
                                                   onChange={this.handleChange}
                                                   value={this.state.username}/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>@</InputGroupText>
                                            </InputGroupAddon>
                                            <input type="email" name={"email"}
                                                   className={"form-control"}
                                                   placeholder={'Email'}
                                                   onChange={this.handleChange}
                                                   value={this.state.email}/>
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="password"
                                                   placeholder={'Password'}
                                                   name={"password"}
                                                   className={"form-control"}
                                                   onChange={this.handleChange}
                                                   value={this.state.password}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <input type="password"
                                                   placeholder={'Confirm Password'}
                                                   name={"confirmpass"}
                                                   className={"form-control"}
                                                   onChange={this.handleChange}
                                                   value={this.state.confirmpass}/>

                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text"
                                                       htmlFor="inputGroupSelect01">Company</label>
                                            </div>
                                            <select onChange={(e) => {
                                                this.setState({company_name: e.target.value})
                                            }} className="custom-select" id="inputGroupSelect01">
                                                <option selected>Choose...</option>
                                                {companiesList.map((element) => (
                                                        <option key={element.company_name}>{element.company_name}</option>
                                                    )
                                                )}
                                            </select>
                                        </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-lock"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <input type="number"
                                                       placeholder={'Company Code'}
                                                       name={"company_code"}
                                                       className={"form-control"}
                                                       onChange={this.handleChange}
                                                       value={this.state.company_code}/>
                                            </InputGroup>
                                        {this.state.password !== this.state.confPass ? "Password and confirm password should be same" : ""}
                                        <br/>
                                        <br/>
                                        <Button color="success" block>Create Account</Button>
                                    </Form>
                                </CardBody>
                                <CardFooter className="p-4"/>
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
