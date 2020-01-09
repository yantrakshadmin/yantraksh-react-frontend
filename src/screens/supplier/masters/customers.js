import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { fetchMasterCustomers, deleteMasterCustomer } from '../../../helpers/api';
import { toast } from 'react-toastify';


const Action = ({ customer, customers, setCustomers }) => {

    const [modal, setModal] = useState(false);

    const toggle = useCallback(
        () => {
            setModal(!modal);
        },
        [modal, setModal]
    )

    const deleteCustomer = useCallback(
        async () => {
            try {
                await deleteMasterCustomer(customer.id);
                await setCustomers(customers.filter(e => e.id !== customer.id));
                toggle();
                toast.success(`${customer.name} deleted!`);
            } catch (err) {
                toggle();
                toast.error("Something went wrong");
            }
        },
        [customer, customers, setCustomers, toggle]
    )

    return (
        <div>
            <Link to={`/masters/customers/edit/${customer.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>{" "}
            </Link>
            <Button onClick={toggle} color="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {customer.name}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to permanently delete {customer.name}?
            </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteCustomer}>Delete</Button>{' '}
                    <Button color="link" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const CustomersTable = ({ customers, setCustomers }) => {

    const renderCustomersRows = useCallback(
        () => {
            if (customers.length > 0) {
                return customers.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{i.company_name}</td>
                            <td>{i.customer_type}</td>
                            <td><Action customer={i} customers={customers} setCustomers={setCustomers} /></td>
                        </tr>
                    );
                });
            }
            return <div>No Data</div>;
        }
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
                {renderCustomersRows()}
            </tbody>
        </Table>
    );
}

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const loadCustomersData = async () => {
            const customersData = await fetchMasterCustomers();
            console.log(customersData)
            setCustomers(customersData);
        }
        loadCustomersData();
    }, [setCustomers,])

    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <Row>
                        <Col sm={6}>
                            <h3>Customers</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/masters/customers/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add Customer</Button>
                            </Link>
                        </Col>
                    </Row>

                    <CustomersTable customers={customers} setCustomers={setCustomers} />

                </CardBody>
            </Card>
        </div>
    )
}

export default Customers;