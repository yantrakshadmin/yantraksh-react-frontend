import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, TabContent, TabPane, Nav, NavItem, NavLink, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperMasterItems, deleteShipperMasterItem, fetchSalesOrders } from '../../../helpers/api';
import { toast } from 'react-toastify';

import AddSalesOrderForm from './AddSalesOrderForm';


const Action = ({ item, items, setItems }) => {

    const [modal, setModal] = useState(false);

    const toggle = useCallback(
        () => {
            setModal(!modal);
        },
        [modal, setModal]
    )

    const deleteItem = useCallback(
        async () => {
            try {
                await deleteShipperMasterItem(item.id);
                await setItems(items.filter(e => e.id !== item.id));
                toggle();
                toast.success(`${item.name} deleted!`);
            } catch (err) {
                toggle();
                toast.error("Something went wrong");
            }
        },
        [item, items, setItems, toggle]
    )

    return (
        <div>
            <Link to={`/masters/items/edit/${item.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>{" "}
            </Link>
            <Button onClick={toggle} color="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {item.name}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to permanently delete {item.name}?
            </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteItem}>Delete</Button>{' '}
                    <Button color="link" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const ItemsTable = ({ items, setItems }) => {

    const renderItemsRows = useCallback(
        () => {
            if (items.length > 0) {
                return items.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{i.reference_no}</td>
                            <td>{i.origin}</td>
                            <td>{i.destination}</td>
                            <td>{i.status}</td>
                        </tr>
                    )
                })
            }
            return <div>No Data</div>;
        },
        [items, setItems]
    )

    return (
        <Table hover className="mt-3">
            <thead>
                <tr>
                    <th>Reference No</th>
                    <th>Origin</th>
                    <th>Destination</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {renderItemsRows()}
            </tbody>
        </Table>
    );
}

const Items = () => {

    const [items, setItems] = useState([]);

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
            setItems(itemsData);
        }
        loadItemsData();
    }, [setItems,])

    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <Row>
                        <Col sm={6}>
                            <h3>Sales Orders</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <AddSalesOrderForm />
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
                                Moar Tabs
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">

                            <ItemsTable items={items} setItems={setItems} />

                        </TabPane>
                        <TabPane tabId="2">

                        </TabPane>
                    </TabContent>

                </CardBody>
            </Card>
        </div>
    )
}

export default Items;
