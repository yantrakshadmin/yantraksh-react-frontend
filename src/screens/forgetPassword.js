import React, {useState} from 'react';
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
    Row,
} from 'reactstrap';
import {forgetPassword} from "../helpers/api";
import {Link} from "react-router-dom";


export default () => {

    const [form, setForm] = useState({
        'username': '',
        'phone': '',
        'email': '',
        // 'truck_type': '',
        // 'truck_name': '',
        // 'total_trucks': 0,
        // 'offered_price': 0,
        // 'weight': 0,
        // 'id_comments': ''
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
            await forgetPassword(form);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };

    return (
        <div className={"container col-md-5"} style={{"marginTop": "18vh"}}>
            <CardGroup>
                <Card className="p-4">
                    <CardBody>
                        <Form method={'post'} onSubmit={handleSubmit}>
                            <h1>Reset Password</h1>
                            <p className="text-muted">Enter Your Following Details :</p>
                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-user"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="username" id="username" placeholder="Enter Username"
                                       value={form.username}
                                       onChange={handleInputChange}/>
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-phone"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="phone" id="number" placeholder="Enter Phone Number"
                                       value={form.phone}
                                       onChange={handleInputChange}/>
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-envelope-open"/>
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" id="email" placeholder="Enter Email Address"
                                       value={form.email}
                                       onChange={handleInputChange}/>
                            </InputGroup>
                            <Row>
                                <Col md="12" className="forget-password">

                                    <Button color={"primary"} size={"lg"}>Send OTP</Button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;


                                    <Link to="/confirm-password/">
                                        <Button color={"primary"} size={"lg"}>Enter OTP</Button>
                                    </Link>


                                    <Link to="/sign-in/">
                                        <Button color={"link"} size={"lg"}>Cancel</Button>
                                    </Link>

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
                                    Register
                                    as supplier!</Button>
                            </Link>
                            <Link to="/sign-up/shipper/">
                                <Button color="primary" className="mt-3" active tabIndex={-1}>
                                    &nbsp;
                                    <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;
                                    Register
                                    as shipper!</Button>
                            </Link>
                        </div>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>


    )
}
