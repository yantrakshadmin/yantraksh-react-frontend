import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, Button, Table, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperInvoices } from '../../helpers/api';
import { toast } from 'react-toastify';


const Action = ({ invoice }) => {
    return (
        <div>
            <Link to={`/shipper/invoices/print/${invoice.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPrint} /></Button>{" "}
            </Link>
        </div>
    );
}

const InvoicesTable = ({ invoices }) => {


    const renderInvoiceCustomerName = useCallback(
        i => {
            if (i.customer_name) {
                return <td>{`${i.customer_name.primary_contact} | ${i.customer_name.company_name}`}</td>
            } else if (i.invoice_quiz) {
                return <td>{`${i.invoice_quiz.owner}`}</td>
            }
        }
    )

    const renderItemsRows = useCallback(
        () => {
            if (invoices.length > 0) {
                return invoices.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{i.invoice_number}</td>
                            {renderInvoiceCustomerName(i)}
                            {console.log(i)}
                            <td><Action invoice={i} /></td>
                        </tr>
                    )
                })
            }
            return <div>No Data</div>;
        },
        [invoices]
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
            const invoicesData = await fetchShipperInvoices();
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
                    </Row>

                    <InvoicesTable invoices={invoices} />

                </CardBody>
            </Card>
        </div>
    )
}

export default Invoices;