import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';


class rfq extends Component {
    state = {
        todos: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://192.168.0.128:8000/api/allorders/'); // fetching the data from api, before the page loaded
            const todos = await res.json();
            this.setState({
                todos
            });
        } catch (e) {
            console.log(e);
        }
    }


    render() {

        // const userList = usersData.filter((user) => user.id < 10)

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> All Orders <small className="text-muted"></small>
                            </CardHeader>
                            <CardBody>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="base/all-orders#/base/hold-orders">Active</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-item" href="base/all-orders#/base/hold-orders">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-item" href="base/all-orders#/base/hold-orders">Link</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" href="base/all-orders#/base/hold-orders">Disabled</a>
                                    </li>
                                </ul>
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


                                    {this.state.todos.map(item => (
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
        )
    }
}

export default rfq;
