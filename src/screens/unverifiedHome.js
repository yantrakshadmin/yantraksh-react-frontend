import React, { useState, useCallback } from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardText,
    CardBody,
    CardFooter,
    Col,
    Container,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Row
} from 'reactstrap';
import { toast } from 'react-toastify';
import { connect } from "react-redux";
import { USER_SIGN_OUT } from "../actions";
import { verifyOTP, resendOTP } from '../helpers/api';


const UnverifiedHome = props => {

    const [otp, setOtp] = useState({ otp: null });

    const [phase, setPhase] = useState(0);

    const handleChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
            setOtp({
                ...otp,
                [name]: value
            });
        },
        [otp, setOtp]
    )

    const resendOTPHandler = useCallback(
        async () => {
            setPhase(1);
            await resendOTP();
            toast.success("OTP Sent!");
            setPhase(0);
        },
        [setPhase]
    )

    const renderLoadingButton = useCallback(
        () => {
            if (phase === 1) {
                return (
                    <Button type="button" color="link" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading
                    </Button>
                );
            }
            return <Button type="button" onClick={resendOTPHandler} color="link">Resend OTP</Button>;
        },
        [phase]
    )

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            try {
                await verifyOTP(otp);
                await toast.success("Verification Successful");
                window.location.reload();
            } catch (err) {
                toast.error("Sorry, Wrong OTP!");
            }
        },
        [otp]
    )

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">

                        <Form onSubmit={handleSubmit}>
                            <Card className="mx-4">
                                <CardHeader>
                                    {`Hello, ${props.auth.user.username}`}
                                </CardHeader>
                                <CardBody>
                                    <CardTitle>
                                        We've sent an OTP to your Company.
                                </CardTitle>
                                    <CardText>
                                        Please enter the OTP below for verification.
                                </CardText>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="number"
                                            placeholder={'6 Digit OTP'}
                                            name={"otp"}
                                            className={"form-control"}
                                            onChange={handleChange}
                                            value={otp.otp}
                                            minLength={6}
                                            maxLength={6}
                                            required
                                        />
                                    </InputGroup>
                                    <Button type="submit" color="primary">Verify</Button>{" "}
                                    {renderLoadingButton()}{" "}
                                    <Button type="button" color="link" onClick={props.signOut}>Sign Out</Button>{" "}
                                </CardBody>
                            </Card>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}


const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch({ type: USER_SIGN_OUT })
});

export default connect(mapStateToProps, mapDispatchToProps)(UnverifiedHome);