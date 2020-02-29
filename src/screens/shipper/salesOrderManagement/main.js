import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { fetchShipperMasterClients, fetchSalesOrders, editSalesOrder } from '../../../helpers/api';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import AddSalesOrderForm from './AddSalesOrderForm';
import AllSalesOrders from './AllSalesOrders';
import OnHold from './OnHold';
import ReadyToDispatch from './ReadyToDispatch';



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

    const changeStatustoRTD = useCallback(
        async () => {
            for (const i of selectedForRTD) {
                try {
                    await editSalesOrder(i, { "status": "Ready to Dispatch" });
                } catch (e) { }
            }

            const newSO = await fetchSalesOrders();
            setSalesOrders(newSO);
            setSelectedForRTD([]);

            toggle("3");
        }, [selectedForRTD, setSelectedForRTD, salesOrders, setSalesOrders, toggle]
    )

    const renderButtons = useCallback(
        () => {
            if (activeTab === '2') {

                if (selectedForRTD.length > 0) {
                    return <Button color="primary" onClick={changeStatustoRTD}><FontAwesomeIcon icon={faShare} /> Ready to Dispatch</Button>;
                } else {
                    return <Button color="primary" disabled><FontAwesomeIcon icon={faShare} /> Ready to Dispatch</Button>;
                }

            } else {

            }
        }, [activeTab, selectedForRTD,]
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
                            <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}>
                                All Sales Orders
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}>
                                On Hold
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}>
                                Ready to Dispatch
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

                        <TabPane tabId="3">
                            <ReadyToDispatch clients={clients} salesOrders={_.filter(salesOrders, o => o.status === "Ready to Dispatch")} selectedForRTD={selectedForRTD} setSelectedForRTD={setSelectedForRTD} />
                        </TabPane>

                    </TabContent>

                </CardBody>
            </Card>
        </div>
    )
}

export default Main;
