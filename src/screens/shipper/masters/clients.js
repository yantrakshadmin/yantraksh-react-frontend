import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperMasterClients, deleteShipperMasterClient } from '../../../helpers/api';
import { toast } from 'react-toastify';
import BootstrapTable from 'react-bootstrap-table-next';


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
                await deleteShipperMasterClient(item.id);
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
            <Link to={`/masters/clients/edit/${item.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>{" "}
            </Link>
            <Button onClick={toggle} color="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {item.client_name}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to permanently delete {item.client_name}?
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

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
        },
        {
            dataField: 'client_name',
            text: 'Name',
            sort: true,
        },
        {
            dataField: 'client_city',
            text: 'City',
            sort: true
        },
        {
            dataField: 'client_state',
            text: 'State',
            sort: true
        },
        {
            dataField: 'client_email',
            text: 'Email',
            sort: true
        },
        {
            dataField: 'client_contact_no',
            text: 'Contact No.',
            sort: true
        },
        {
            dataField: 'client_category',
            text: 'Category',
            sort: true
        },
        {
            dataField: 'client_code',
            text: 'Code',
            sort: true
        },
        {
            text: 'Action',
            formatExtraData: { items, setItems },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return <Action item={row} items={formatExtraData.items} setItems={formatExtraData.setItems} />
            },
        },
    ];

    return (
        <BootstrapTable keyField='id' data={items} columns={columns} />
    );
}

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchShipperMasterClients();
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
                            <h3>Clients</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/masters/clients/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add Client</Button>
                            </Link>
                        </Col>
                    </Row>

                    <hr />

                    <ItemsTable items={items} setItems={setItems} />

                </CardBody>
            </Card>
        </div>
    )
}

export default Items;
