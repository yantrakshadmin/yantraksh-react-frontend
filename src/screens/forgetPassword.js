import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Container,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
} from 'reactstrap';


import {forgetPassword} from "../helpers/api";
import {Link} from "react-router-dom";


export default () => {

    const [form, setForm] = useState({
        'username': '',
        'password': '',
        'email': '',

    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await forgetPassword();
            alert('done')
        } catch (e) {
            alert(e)
        }
    };

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <CardGroup>
                            <Card className="p-4">
                                <CardBody>
                                    <Form>
                                        <h1>Login</h1>
                                        <p className="text-muted">Enter your details: </p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-user"/>
                                                </InputGroupText>
                                            </InputGroupAddon>

                                            <Input type="text" name="username" id="username" value={form['username']}
                                                   onChange={handleInputChange}/>
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" name="password" id="scheduled_date" value={form.password}
                                                   onChange={handleInputChange}/>
                                        </InputGroup>

                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-email"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" name="email" id="scheduled_date" value={form.email}
                                                   onChange={handleInputChange}/>


                                        </InputGroup>
                                        <Row>
                                            <Col xs="6">
                                                <Button color="primary" onClick={handleSubmit}>

                                                    Send OTP

                                                </Button>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Card className="text-white bg-primary py-5 d-md-down-none" style={{width: '44%'}}>
                                <CardBody className="text-center">
                                    <div>
                                        <h2>Sign up</h2>

                                        <Link to="/register">
                                            <Button color="primary" className="mt-3" active tabIndex={-1}>Register
                                                Now!</Button>
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}
