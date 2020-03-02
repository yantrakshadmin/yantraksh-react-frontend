import React from 'react';
import { Card,CardBody,Row,Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const GRN = props => {
    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>

                    <Row>
                        <Col sm={6}>
                            <h3>GRN</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/grn/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add GRN</Button>
                            </Link>
                        </Col>
                    </Row>

                </CardBody>
            </Card>
        </div>
    )
}

export default GRN;