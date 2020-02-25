import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperMasterVehicles, deleteShipperMasterVehicle } from '../../../helpers/api';
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
                await deleteShipperMasterVehicle(item.id);
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
            <Link to={`/masters/vehicles/edit/${item.id}`}>
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
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.category}</td>
                            <td>{i.length * i.breadth * i.height}</td>
                            <td>{i.volume}</td>
                            <td>{i.weight}</td>
                            <td><Action item={i} items={items} setItems={setItems} /></td>
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>L x B x H</th>
                    <th>Volume</th>
                    <th>Weight</th>
                    <th>Action</th>
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

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchShipperMasterVehicles();
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
                            <h3>Vehicles</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/masters/vehicles/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add Vehicle</Button>
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
