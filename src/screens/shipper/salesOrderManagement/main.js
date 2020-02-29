import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { fetchShipperMasterClients, fetchSalesOrders } from '../../../helpers/api';
import _ from 'lodash';

import AddSalesOrderForm from './AddSalesOrderForm';
import AllSalesOrders from './AllSalesOrders';
import OnHold from './OnHold';



const Main = () => {

    const [salesOrders, setSalesOrders] = useState([]);

    const [clients, setCleints] = useState([]);

    const [selectedForRTD, setSelectedForRTD] = useState([]);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = useCallback(
        tab => {
            if (activeTab !== tab) setActiveTab(tab);
        },
        [activeTab, setActiveTab]
    )

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchSalesOrders();
            setSalesOrders(itemsData);
        }
        const loadClients = async () => {
            const clientsData = await fetchShipperMasterClients();
            setCleints(clientsData);
        }
        loadItemsData();
        loadClients();
    }, [])

    const renderButtons = useCallback(
        () => {
            if (activeTab === '2') {
                return "Hello";
            } else {
                return "World";
            }
        }, [activeTab,]
    )

    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>

                    <Row>
                        <Col sm={4}>
                            <h3>Sales Orders</h3>
                        </Col>
                        <Col sm={4}>
                            {renderButtons()}
                            {console.log(selectedForRTD)}
                        </Col>
                        <Col sm={4} className="text-right">
                            <AddSalesOrderForm clients={clients} fetchSalesOrders={fetchSalesOrders} setSalesOrders={setSalesOrders} />
                        </Col>
                    </Row>

                    <hr />

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                All Sales Orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                On Hold
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>

                        <TabPane tabId="1">
                            <AllSalesOrders clients={clients} salesOrders={salesOrders} />
                        </TabPane>

                        <TabPane tabId="2">
                            <OnHold clients={clients} salesOrders={_.filter(salesOrders, o => o.status === "On Hold")} selectedForRTD={selectedForRTD} setSelectedForRTD={setSelectedForRTD} />
                        </TabPane>

                    </TabContent>

                </CardBody>
            </Card>
        </div>
    )
}

export default Main;
