import React, { useState, useCallback } from 'react';
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
import { forgetPassword } from "../helpers/api";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import history from '../history';

export default () => {

    const [form, setForm] = useState({
        'username': '',
    });

    const [phase, setPhase] = useState(0);

    const renderLoadingButton = useCallback(
        () => {
            if (phase === 1) {
                return (
                    <Button color="primary" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending
                </Button>
                );
            }
            return <Button type="submit" color={"primary"}>Send OTP</Button>;
        }
    )

    const handleInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setForm({
                ...form,
                [name]: value
            });
        },
        [form, setForm]
    )

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            setPhase(1);
            try {
                await forgetPassword(form);
                setPhase(0);
                toast.success("We've sent an otp to your registered Email.");
                history.push('/confirm-password/');
            } catch (e) {
                setPhase(0);
                toast.error("Please check the username you entered!")
            }
        },
        [form, phase, setPhase]
    )

    return (
        <div className={"container col-md-6"} style={{ "marginTop": "18vh" }}>
            <CardGroup>
                <Card className="p-4">
                    <CardBody>
                        <Form method={'post'} onSubmit={handleSubmit}>

                            <h1>Reset Password</h1>
                            <p className="text-muted">Enter Your Following Details :</p>
                            <InputGroup className="my-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="icon-user" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="username" id="username" placeholder="Enter Username"
                                    value={form.username}
                                    onChange={handleInputChange}
                                    required
                                />
                            </InputGroup>

                            <Row>
                                <Col md="12" className="forget-password">
                                    {renderLoadingButton()}{" "}
                                    <Link to="/confirm-password/">
                                        <Button type="link" color={"primary"}>Enter OTP</Button>
                                    </Link>{" "}
                                    <Link to="/sign-in/">
                                        <Button type="link" color={"link"}>Cancel</Button>
                                    </Link>{" "}
                                </Col>
                            </Row>

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
