import React from 'react';
import SignInCard from "../components/signInCard2";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

const SignInScreen = (props) => {
    if(props.isAuthenticated)
        return <Redirect to={`${props.redirectTo.split('#')[1]}`}/>;

    return (
        <div className="app flex-row align-items-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <SignInCard/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.authenticated,
    redirectTo: state.navigation.redirectTo
});
export default connect(mapStateToProps)(SignInScreen)
