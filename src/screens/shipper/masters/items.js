import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperMasterItems, deleteShipperMasterItem } from '../../../helpers/api';
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

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
        },
        {
            dataField: 'sku_id',
            text: 'SKU',
            sort: true,
        },
        {
            dataField: 'name',
            text: 'Name',
            sort: true
        },
        {
            text: 'L x B x H (m)',
            formatter: (cell, row) => {
                return `${row.length} x ${row.breadth} x ${row.height}`
            },
        },
        {
            dataField: 'volume',
            text: 'Volume',
            sort: true
        },
        {
            dataField: 'weight',
            text: 'Weight (Kg)',
            sort: true
        },
        {
            dataField: 'cost_price',
            text: 'Cost Price',
            sort: true
        },
        {
            dataField: 'hsn_sac_code',
            text: 'HSN/SAC',
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
        <BootstrapTable classes={"table-hover"} bordered={ false } keyField='id' data={items} columns={columns} />
    );
}

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchShipperMasterItems();
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
                            <h3>Items</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/masters/items/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add Item</Button>
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
