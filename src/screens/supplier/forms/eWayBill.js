import React, { useState, useCallback } from 'react';
import {
    Card, CardHeader, CardBody,
    Form, FormGroup,
    Row, Col,
    TabContent, TabPane, Nav, NavItem, NavLink,
    Label, Input, Button, Alert, Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const EWayBill = props => {

    const [form, setForm] = useState({
        supplyType: "",
        subSupplyType: "",

        docType: "",
        docNo: "",
        docDate: "",

        fromGstin: "",
        fromTrdName: "",
        fromAddr1: "",
        fromAddr2: "",
        fromPlace: "",
        fromPincode: "",
        actFromStateCode: "",
        fromStateCode: "",
        toGstin: "",
        toTrdName: "",
        toAddr1: "",
        toAddr2: "",
        toPlace: "",
        toPincode: "",
        actToStateCode: "",
        toStateCode: "",

        totalValue: "",
        cgstValue: "",
        sgstValue: "",
        igstValue: "",
        cessValue: "",
        totInvValue: "",

        transporterId: "",
        transporterName: "",
        transDocNo: "",
        transMode: "",
        transDistance: "",
        transDocDate: "",
        vehicleNo: "",
        vehicleType: "",
        TransactionType: "",

        itemList: [],
    })

    const [itemsForm, setItemsForm] = useState({
        productName: "",
        productDesc: "",
        hsnCode: "",
        quantity: "",
        qtyUnit: "",
        cgstRate: "",
        sgstRate: "",
        igstRate: "",
        cessRate: "",
        cessAdvol: "",
        taxableAmount: ""
    })

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

    const addItem = useCallback(
        async () => {
            setForm({ ...form, itemList: [...form.itemList, itemsForm] });
            setItemsForm({
                productName: "",
                productDesc: "",
                hsnCode: "",
                quantity: "",
                qtyUnit: "",
                cgstRate: "",
                sgstRate: "",
                igstRate: "",
                cessRate: "",
                cessAdvol: "",
                taxableAmount: ""
            });
        },
        [form, setForm, itemsForm, setItemsForm]
    )

    const deleteItem = useCallback(
        async i => {
            setForm({ ...form, itemList: form.itemList.filter(e => e !== i) });
        },
        [form, setForm]
    )

    const renderItemsList = useCallback(
        () => {
            if (form.itemList) {
                return form.itemList.map((i, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{i.productName}</td>
                            <td>{i.productDesc}</td>
                            <td>{i.hsnCode}</td>
                            <td>{i.quantity}</td>
                            <td>{i.qtyUnit}</td>
                            <td>{i.cgstRate}</td>
                            <td>{i.sgstRate}</td>
                            <td>{i.igstRate}</td>
                            <td>{i.cessRate}</td>
                            <td>{i.cessAdvol}</td>
                            <td>{i.taxableAmount}</td>
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
                    E-Way Bill Form
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="supplyType">Supply Type</Label>
                                    <Input type="text" name="supplyType" id="supplyType" value={form.supplyType}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="subSupplyType">Sub Supply Type</Label>
                                    <Input type="text" name="subSupplyType" id="subSupplyType" value={form.subSupplyType}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="docType">Doc Type</Label>
                                    <Input type="text" name="docType" id="docType" value={form.docType}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="docNo">Doc No.</Label>
                                    <Input type="text" name="docNo" id="docNo" value={form.docNo}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="docDate">Doc Date</Label>
                                    <Input type="date" name="docDate" id="docDate" value={form.docDate}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={6}>
                                <Alert color="light">FROM</Alert>
                                <FormGroup>
                                    <Label htmlFor="fromGstin">GSTIN</Label>
                                    <Input type="text" name="fromGstin" id="fromGstin" value={form.fromGstin}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromTrdName">TRD Name</Label>
                                    <Input type="text" name="fromTrdName" id="fromTrdName" value={form.fromTrdName}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromAddr1">Address 1</Label>
                                    <Input type="text" name="fromAddr1" id="fromAddr1" value={form.fromAddr1}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromAddr2">Address 2</Label>
                                    <Input type="text" name="fromAddr2" id="fromAddr2" value={form.fromAddr2}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromPlace">Place</Label>
                                    <Input type="text" name="fromPlace" id="fromPlace" value={form.fromPlace}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromPincode">PIN Code</Label>
                                    <Input type="number" name="fromPincode" id="fromPincode" value={form.fromPincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="actFromStateCode">Act State Code</Label>
                                    <Input type="number" name="actFromStateCode" id="actFromStateCode" value={form.actFromStateCode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="fromStateCode">State Code</Label>
                                    <Input type="number" name="fromStateCode" id="fromStateCode" value={form.fromStateCode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Alert color="light">TO</Alert>
                                <FormGroup>
                                    <Label htmlFor="toGstin">GSTIN</Label>
                                    <Input type="text" name="toGstin" id="toGstin" value={form.toGstin}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toTrdName">TRD Name</Label>
                                    <Input type="text" name="toTrdName" id="toTrdName" value={form.toTrdName}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toAddr1">Address 1</Label>
                                    <Input type="text" name="toAddr1" id="toAddr1" value={form.toAddr1}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toAddr2">Address 2</Label>
                                    <Input type="text" name="toAddr2" id="toAddr2" value={form.toAddr2}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toPlace">Place</Label>
                                    <Input type="text" name="toPlace" id="toPlace" value={form.toPlace}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toPincode">PIN Code</Label>
                                    <Input type="number" name="toPincode" id="toPincode" value={form.toPincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="actToStateCode">Act State Code</Label>
                                    <Input type="number" name="actToStateCode" id="actToStateCode" value={form.actToStateCode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="toStateCode">State Code</Label>
                                    <Input type="number" name="toStateCode" id="toStateCode" value={form.toStateCode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="totalValue">Total Value</Label>
                                    <Input type="number" name="totalValue" id="totalValue" value={form.totalValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="cgstValue">CGST Value</Label>
                                    <Input type="number" name="cgstValue" id="cgstValue" value={form.cgstValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="sgstValue">SGST Value</Label>
                                    <Input type="number" name="sgstValue" id="sgstValue" value={form.sgstValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="igstValue">IGST Value</Label>
                                    <Input type="number" name="igstValue" id="igstValue" value={form.igstValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="cessValue">CESS Value</Label>
                                    <Input type="number" name="cessValue" id="cessValue" value={form.cessValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="totInvValue">TOT INV Value</Label>
                                    <Input type="number" name="totInvValue" id="totInvValue" value={form.totInvValue}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transporterId">Transporter ID</Label>
                                    <Input type="text" name="transporterId" id="transporterId" value={form.transporterId}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transporterName">Transporter Name</Label>
                                    <Input type="text" name="transporterName" id="transporterName" value={form.transporterName}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transDocNo">Trans Doc No.</Label>
                                    <Input type="text" name="transDocNo" id="transDocNo" value={form.transDocNo}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transMode">Trans Mode</Label>
                                    <Input type="text" name="transMode" id="transMode" value={form.transMode}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transDistance">Trans Distance</Label>
                                    <Input type="text" name="transDistance" id="transDistance" value={form.transDistance}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="transDocDate">Trans Doc Date</Label>
                                    <Input type="date" name="transDocDate" id="transDocDate" value={form.transDocDate}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vehicleNo">Vehicle No</Label>
                                    <Input type="date" name="vehicleNo" id="vehicleNo" value={form.vehicleNo}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                                    <Input type="date" name="vehicleType" id="vehicleType" value={form.vehicleType}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="TransactionType">Transaction Type</Label>
                                    <Input type="date" name="TransactionType" id="TransactionType" value={form.TransactionType}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Table className="mt-3" striped responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>HSN</th>
                                    <th>QTY</th>
                                    <th>QTY Unit</th>
                                    <th>CGST Rate</th>
                                    <th>SGST Rate</th>
                                    <th>IGST Rate</th>
                                    <th>CESS Rate</th>
                                    <th>CESS AdVol</th>
                                    <th>Taxable Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderItemsList()}
                                <tr>
                                    <td><Input type="text" name="productName" value={itemsForm.productName} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="text" name="productDesc" value={itemsForm.productDesc} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="hsnCode" value={itemsForm.hsnCode} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="quantity" value={itemsForm.quantity} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="text" name="qtyUnit" value={itemsForm.qtyUnit} bsSize="sm" onChange={handleItemsInputChange} /></td>
                                    <td><Input type="number" name="cgstRate" value={itemsForm.cgstRate} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="sgstRate" value={itemsForm.sgstRate} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="igstRate" value={itemsForm.igstRate} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="cessRate" value={itemsForm.cessRate} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="cessAdvol" value={itemsForm.cessAdvol} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td><Input type="number" name="taxableAmount" value={itemsForm.taxableAmount} onChange={handleItemsInputChange} bsSize="sm" /></td>
                                    <td>
                                        <Button type="button" title="Add" onClick={addItem} color="success" size="sm">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

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

export default EWayBill;