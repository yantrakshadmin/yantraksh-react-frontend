import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import { fetchSupplierInvoices, deleteSupplierInvoice } from '../../helpers/api';
import { toast } from 'react-toastify';


const Action = ({ invoice, invoices, setInvoices }) => {

    const [modal, setModal] = useState(false);

    const toggle = useCallback(
        () => {
            setModal(!modal);
        },
        [modal, setModal]
    )

    const deleteInvoice = useCallback(
        async () => {
            try {
                await deleteSupplierInvoice(invoice.id);
                await setInvoices(invoices.filter(e => e.id !== invoice.id));
                toggle();
                toast.success(`${invoice.name} deleted!`);
            } catch (err) {
                toggle();
                toast.error("Something went wrong");
            }
        },
        [invoice, invoices, setInvoices, toggle]
    )

    return (
        <div>
            <Link to={`/supplier/invoices/edit/${invoice.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>{" "}
            </Link>
            <Link to={`/supplier/invoices/print/${invoice.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPrint} /></Button>{" "}
            </Link>
            <Button onClick={toggle} color="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {invoice.name}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to permanently delete {invoice.name}?
            </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteInvoice}>Delete</Button>{' '}
                    <Button color="link" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const InvoicesTable = ({ invoices, setInvoices }) => {

    const renderItemsRows = useCallback(
        () => {
            if (invoices.length > 0) {
                return invoices.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{i.invoice_number}</td>
                            <td>{`${i.customer_name.primary_contact} | ${i.customer_name.company_name}`}</td>
                            {console.log(i)}
                            <td><Action invoice={i} invoices={invoices} setInvoices={setInvoices} /></td>
                        </tr>
                    )
                })
            }
            return <div>No Data</div>;
        },
        [invoices, setInvoices]
    )

    return (
        <Table hover className="mt-3">
            <thead>
                <tr>
                    <th>Invoice#</th>
                    <th>Customer</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {renderItemsRows()}
            </tbody>
        </Table>
    );
}

const Invoices = props => {

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const loadInvoicesData = async () => {
            const invoicesData = await fetchSupplierInvoices();
            setInvoices(invoicesData);
        }
        loadInvoicesData();
    }, [])

    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>
                    <Row>
                        <Col sm={6}>
                            <h3>Invoices</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/supplier/invoice/create">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Create Invoice</Button>
                            </Link>
                        </Col>
                    </Row>

                    <InvoicesTable invoices={invoices} setInvoices={setInvoices} />

                </CardBody>
            </Card>
        </div>
    )
}

export default Invoices;