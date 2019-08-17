import React from 'react';
import SignInCard from "../../components/signInCard2";
import {Col, Container, Row} from "reactstrap";


export default () => (
    <div className="app flex-row align-items-center">
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <SignInCard/>
                </Col>
            </Row>
        </Container>
    </div>
)
