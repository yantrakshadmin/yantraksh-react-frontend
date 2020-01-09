import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchMasterItems, deleteMasterItem } from '../../../helpers/api';
import { toast } from 'react-toastify';


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
                await deleteMasterItem(item.id);
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
                <Button color="primary"><FontAwesomeIcon icon={faEdit} /></Button>{" "}
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
                            <td>{i.name}</td>
                            <td>{i.type}</td>
                            <td><Action item={i} items={items} setItems={setItems} /></td>
                        </tr>
                    )
                })
            }
        },
        [items, setItems]
    )

    return (
        <Table hover className="mt-3">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderItemsRows()}
            </tbody>
        </Table>
    )
}

const Items = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchMasterItems();
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

                    <ItemsTable items={items} setItems={setItems} />

                </CardBody>
            </Card>
        </div>
    )
}

export default Items;
