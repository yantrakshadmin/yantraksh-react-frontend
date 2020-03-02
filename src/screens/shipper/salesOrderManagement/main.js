import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, ButtonGroup, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { fetchShipperMasterItems, fetchShipperMasterClients, fetchSalesOrders, editSalesOrder } from '../../../helpers/api';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import AddSalesOrderForm from './AddSalesOrderForm';
import AllSalesOrders from './AllSalesOrders';
import OnHold from './OnHold';
import ReadyToDispatch from './ReadyToDispatch';
import ManualDispatchModal from './ManualDispatchModal';
import Dispatched from './Dispatched';


const Main = () => {

    const [salesOrders, setSalesOrders] = useState([]);

    const [items, setItems] = useState([]);

    const [clients, setCleints] = useState([]);

    const [selectedForRTD, setSelectedForRTD] = useState([]);

    const [selectedForDispatch, setSelectedForDispatch] = useState([]);

    const [activeTab, setActiveTab] = useState('1');

    const toggle = useCallback(
        tab => {
            if (activeTab !== tab) setActiveTab(tab);
        },
        [activeTab, setActiveTab]
    )

    const [modalMD, setModalMD] = useState(false);

    const toggleMD = useCallback(
        () => {
            setModalMD(!modalMD);
        }, [modalMD, setModalMD]
    )

    useEffect(() => {
        const loadSalesOrders = async () => {
            const salesOrdersData = await fetchSalesOrders();
            setSalesOrders(salesOrdersData);
        }
        const loadClients = async () => {
            const clientsData = await fetchShipperMasterClients();
            setCleints(clientsData);
        }
        const loadItemsData = async () => {
            const itemsData = await fetchShipperMasterItems();
            setItems(itemsData);
        }
        loadSalesOrders();
        loadClients();
        loadItemsData();
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

    const changeStatustoDispatched = useCallback(
        async () => {
            for (const i of selectedForDispatch) {
                try {
                    await editSalesOrder(i, { "status": "Dispatched" });
                } catch (e) { }
            }

            const newSO = await fetchSalesOrders();
            setSalesOrders(newSO);
            setSelectedForDispatch([]);

            toggle("4");
        }, [selectedForDispatch, setSelectedForDispatch, salesOrders, setSalesOrders, toggle]
    )

    const renderButtons = useCallback(
        () => {
            if (activeTab === '2') {

                if (selectedForRTD.length > 0) {
                    return <Button color="primary" onClick={changeStatustoRTD}><FontAwesomeIcon icon={faShare} /> Ready to Dispatch</Button>;
                } else {
                    return <Button color="primary" disabled><FontAwesomeIcon icon={faShare} /> Ready to Dispatch</Button>;
                }

            } else if (activeTab === '3') {

                if (selectedForDispatch.length > 0) {

                    return (
                        <ButtonGroup>
                            <Button color="success">Auto Dispatch</Button>
                            <Button color="primary" onClick={toggleMD}>Manual Dispatch</Button>
                            <ManualDispatchModal changeStatustoDispatched={changeStatustoDispatched} modal={modalMD} toggle={toggleMD} />
                        </ButtonGroup>
                    );

                } else {

                    return (
                        <ButtonGroup>
                            <Button color="success" disabled>Auto Dispatch</Button>
                            <Button color="primary" disabled>Manual Dispatch</Button>
                        </ButtonGroup>
                    );

                }

            }
        }, [activeTab, selectedForRTD, selectedForDispatch, modalMD,toggleMD]
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
                            {console.log(selectedForDispatch)}
                        </Col>
                        <Col sm={4} className="text-right">
                            <AddSalesOrderForm items={items} clients={clients} fetchSalesOrders={fetchSalesOrders} setSalesOrders={setSalesOrders} />
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
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}>
                                Dispatched
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>

                        <TabPane tabId="1">
                            <AllSalesOrders items={items} clients={clients} salesOrders={salesOrders} />
                        </TabPane>

                        <TabPane tabId="2">
                            <OnHold items={items} clients={clients} salesOrders={_.filter(salesOrders, o => o.status === "On Hold")} selectedForRTD={selectedForRTD} setSelectedForRTD={setSelectedForRTD} />
                        </TabPane>

                        <TabPane tabId="3">
                            <ReadyToDispatch items={items} clients={clients} salesOrders={_.filter(salesOrders, o => o.status === "Ready to Dispatch")} selectedForDispatch={selectedForDispatch} setSelectedForDispatch={setSelectedForDispatch} />
                        </TabPane>

                        <TabPane tabId="4">
                            <Dispatched items={items} clients={clients} salesOrders={_.filter(salesOrders, o => o.status === "Dispatched")} selectedForDispatch={selectedForDispatch} setSelectedForDispatch={setSelectedForDispatch} />
                        </TabPane>

                    </TabContent>

                </CardBody>
            </Card>
        </div>
    )
}

export default Main;
