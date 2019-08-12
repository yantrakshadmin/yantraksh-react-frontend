import React, {Component, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';


export default ({data}) => (
        <div className="animated fadeIn">
            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
                        </CardHeader>
                        <CardBody>
                            <Table responsive hover>
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">SKU ID</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Dimensions</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Volume</th>
                                    <th scope="col">Origin</th>
                                    <th scope="col">Destination</th>
                                    <th scope="col">Date</th>
                                </tr>
                                </thead>
                                <tbody>


                                {data.map(item => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.pid}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.length} X {item.width} X {item.height}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.volume}</td>
                                        <td>{item.origin}</td>
                                        <td>{item.destination}</td>
                                        <td>{item.time}</td>
                                    </tr>
                                ))}

                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
);

