import React, { useState, useEffect, useCallback } from 'react';
import {
    Card, CardHeader, CardBody,
    Form, FormGroup,
    Row, Col,
    TabContent, TabPane, Nav, NavItem, NavLink,
    Label, Input, Button, Alert, Table,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const InvoiceForm = props => {

    const [form, setForm] = useState({
        customer_name: '',
        invoice_number: '',
        invoice_date: '',
        invoice_due_date: '',

        place_of_supply: '',
        service_month: '',

        invoice_transactions: [],

        company_notes: '',
        terms_and_conditions: '',
    })

    const [itemsForm, setItemsForm] = useState({
        invoice_transaction_desc: '',
        invoice_transaction_lr: '',
        invoice_transaction_vehicle: '',
        invoice_transaction_date: '',
        invoice_transaction_qty: 0,
        invoice_transaction_rate: 0,
        invoice_transaction_gst: 0,
        invoice_transaction_amount: 0,
    });

    const [phase, setPhase] = useState(0);

    const handleInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setForm({
                ...form,
                [name]: value
            });
        },
        [form, setForm]
    )

    const handleItemsInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setItemsForm({
                ...itemsForm,
                [name]: value,
            });
        },
        [itemsForm, setItemsForm]
    )

    const calculateItemAmount = useCallback(
        (q, r, g) => {
            return parseFloat(q) * parseFloat(r) + parseFloat(g);
        },
        [parseFloat]
    )

    const addItem = useCallback(
        async () => {
            const amount = calculateItemAmount(itemsForm.invoice_transaction_qty, itemsForm.invoice_transaction_rate, itemsForm.invoice_transaction_gst);
            setForm({ ...form, invoice_transactions: [...form.invoice_transactions, { ...itemsForm, invoice_transaction_amount: amount }] });
            setItemsForm({
                invoice_transaction_desc: '',
                invoice_transaction_lr: '',
                invoice_transaction_vehicle: '',
                invoice_transaction_date: '',
                invoice_transaction_qty: 0,
                invoice_transaction_rate: 0,
                invoice_transaction_gst: 0,
                invoice_transaction_amount: 0,
            });
        },
        [form, setForm, itemsForm, setItemsForm]
    )

    const deleteItem = useCallback(
        async i => {
            if ("id" in i) {
                setForm({ ...form, invoice_transactions: form.invoice_transactions.filter(e => e.id !== i.id) });
            } else {
                setForm({ ...form, invoice_transactions: form.invoice_transactions.filter(e => e.cp_name !== i.cp_name) });
            }
        },
        [form, setForm]
    )

    const renderItemsList = useCallback(
        () => {
            if (form.invoice_transactions) {
                return form.invoice_transactions.map((i, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{i.invoice_transaction_desc}</td>
                            <td>{i.invoice_transaction_lr}</td>
                            <td>{i.invoice_transaction_vehicle}</td>
                            <td>{i.invoice_transaction_date}</td>
                            <td>{i.invoice_transaction_qty}</td>
                            <td>{i.invoice_transaction_rate}</td>
                            <td>{i.invoice_transaction_gst}</td>
                            <td>{i.invoice_transaction_amount}</td>
                            <td>
                                <Button type="button" title="Delete Item" onClick={() => deleteItem(i)} color="danger" size="sm">
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                            </td>
                        </tr>
                    )
                })
            }
        },
        [form]
    )

    const btnLoader = useCallback(
        () => {
            if (phase === 1) {
                return (
                    <Button color="primary" size="lg" disabled>
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving
                    </Button>
                )
            }
            return <Button type="submit" color="primary" size="lg">Save</Button>
        },
        [phase]
    )

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();
            setPhase(1);
            console.log(form)
            setPhase(0);
        },
        [form, phase, setPhase]
    )

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <b>Create New Invoice</b>
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="customer_name">Customer Name*</Label>
                                    <Input type="text" name="customer_name" id="customer_name" value={form.customer_name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="invoice_number">Invoice#*</Label>
                                    <Input type="text" name="invoice_number" id="invoice_number" value={form.invoice_number}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="invoice_date">Invoice Date*</Label>
                                    <Input type="date" name="invoice_date" id="invoice_date" value={form.invoice_date}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="invoice_due_date">Invoice Due Date*</Label>
                                    <Input type="date" name="invoice_due_date" id="invoice_due_date" value={form.invoice_due_date}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="place_of_supply">Place of Supply</Label>
                                    <Input type="text" name="place_of_supply" id="place_of_supply" value={form.place_of_supply}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="service_month">Service Month</Label>
                                    <Input type="text" name="service_month" id="service_month" value={form.service_month}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Table className="mt-3" striped responsive>
                            <thead>
                                <tr>
                                    <th>Item Details</th>
                                    <th>LR No.</th>
                                    <th>Vehicle No</th>
                                    <th>Date</th>
                                    <th>QTY</th>
                                    <th>Rate</th>
                                    <th>GST</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderItemsList()}
                                <tr>
                                    <td><Input type="text" name="invoice_transaction_desc" value={itemsForm.invoice_transaction_desc} onChange={handleItemsInputChange} placeholder="Item Details" bsSize="sm" /></td>
                                    <td><Input type="text" name="invoice_transaction_lr" value={itemsForm.invoice_transaction_lr} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="text" name="invoice_transaction_vehicle" value={itemsForm.invoice_transaction_vehicle} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="date" name="invoice_transaction_date" value={itemsForm.invoice_transaction_date} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="invoice_transaction_qty" value={itemsForm.invoice_transaction_qty} bsSize="sm" onChange={handleItemsInputChange} /></td>
                                    <td><Input type="number" name="invoice_transaction_rate" value={itemsForm.invoice_transaction_rate} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="invoice_transaction_gst" value={itemsForm.invoice_transaction_gst} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="invoice_transaction_amount" value={calculateItemAmount(itemsForm.invoice_transaction_qty, itemsForm.invoice_transaction_rate, itemsForm.invoice_transaction_gst)} bsSize="sm" disabled /></td>
                                    <td>
                                        <Button type="button" title="Add" onClick={addItem} color="success" size="sm">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="company_notes">Company Notes</Label>
                                    <Input type="textarea" name="company_notes" id="company_notes" value={form.company_notes}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="terms_and_conditions">Terms_and Conditions</Label>
                                    <Input type="textarea" name="terms_and_conditions" id="terms_and_conditions" value={form.terms_and_conditions}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/freight/financial">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default InvoiceForm;