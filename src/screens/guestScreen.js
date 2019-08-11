import React from "react";
import {Container, Row, Col} from 'reactstrap';

import BgImg from "../assets/bg/explainer.jpg";


export default (props) => (
    <Row>
        <Col lg={6} md={6} sm={0} style={{
            backgroundImage: `url(${BgImg})`,
            minHeight: '100vh',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#F7F7F7'
        }}>
        </Col>
        <Col>
            <Container>
                {props.children}
            </Container>
        </Col>
    </Row>
)
