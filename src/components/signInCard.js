import React, {useState} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button
} from 'reactstrap';
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
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Card style={{
                width: '100%'
            }}>
                <CardHeader tag="h3">Sign In</CardHeader>
                <CardBody>
                    <Container className="App">
                        <Form className="form" onSubmit={(e) => submitForm(e)}>
                            <Col>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input
                                        type="text"
                                        name="username"
                                        id="username"
                                        placeholder="Enter your username..."
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password..."
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button type={"submit"}>Submit</Button>
                            </Col>
                        </Form>
                    </Container>
                </CardBody>
            </Card>
        </div>
    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    signIn: (username, password) => dispatch(signIn(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);
