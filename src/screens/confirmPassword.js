import React, { useState } from 'react';
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
import { confirmPassword } from "../helpers/api";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import history from '../history';


export default () => {

    const [form, setForm] = useState({
        'otp': '',
        'password': '',
        'username': '',
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
            await confirmPassword(form);
            toast.success("Password changed successfully!");
            history.push('/sign-in/');
        } catch (e) {
            toast.error("Something went wrong!")
        }
    };

    return (
        <div className={"container col-md-5"} style={{ "marginTop": "18vh" }}>
            <CardGroup>
                <Card className="p-4">
                    <CardBody>
                        <Form method={'post'} onSubmit={handleSubmit}>
                            <h1>Confirm Password</h1>
                            <p className="text-muted">Don't share your OTP with anyone.</p>

                            <InputGroup className="mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-lock" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="username" id="username" value={form.username}
                                    placeholder="Enter Username"
                                    onChange={handleInputChange}
                                    required
                                />
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-user" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="password" id="password" value={form.password}
                                    placeholder="Enter New Password"
                                    onChange={handleInputChange}
                                    required
                                />
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-lock-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="number" name="otp" id="otp" placeholder="Enter OTP"
                                    value={form.otp}
                                    onChange={handleInputChange}
                                    required
                                />
                            </InputGroup>

                            <Button type="submit" color={"primary"}>Change</Button>{" "}
                            <Link to="/sign-in/">
                                <Button type="link" color={"link"}>Cancel</Button>
                            </Link>{" "}


                        </Form>
                    </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
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
