import React, { useState, useEffect } from 'react';
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { editLR, getLRDetails } from "../../../helpers/api";


export default props => {

    let { id } = props.match.params


    //TODO THIS IS NOT THE REACT METHOD TO FETCH ID FROM THE URLT

    const [form, setForm] = useState({
        'id': id,
        'lr_no': '',
        'lr_date': '',
        'lr_billingparty': '',
        'invoice_no': '',
        'lr_declared': '',
        'ewaybill_no': '',
        'lr_quantity': '',
        'lr_weight': '',
        'lr_invoice_date': '',
        'lr_item_name': '',
        'lr_consignor_name': '',
        'lr_consignor_address': '',
        'lr_consignor_contact_name': '',
        "lr_consignor_contact_phone": '',
        'lr_consignee_name': '',
        "lr_consignee_address": '',
        'lr_consignee_contact_name': '',
        'lr_consignee_contact_phone': '',
        'vehicle_no': '',
        'lr_vehicle_type': '',
        'driver_name': '',
        'driver_no': '',
    });


    useEffect(() => {
        const getNetwork = async () => {
            const lr_details = await getLRDetails(form.id);
            console.log(lr_details)
            setForm(lr_details);
        };
        getNetwork();
    }, [setForm]);


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //alert(JSON.stringify(form));
            await editLR(form, form.id);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Edit LR</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_no">LR Number</Label>
                                <Input type="number" name="lr_no" id="lr_no" value={form.lr_no}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_date">LR Date</Label>
                                <Input type="datetime-local" name="lr_date" id="lr_date" value={form.lr_date}
                                    onChange={handleInputChange} />
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_billingparty">LR Billing Party</Label>
                                <Input type="text" name="lr_billingparty" id="lr_billingparty"
                                    value={form.lr_billingparty}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="invoice_no">Invoice No</Label>
                                <Input type="number" name="invoice_no" id="invoice_no"
                                    onChange={handleInputChange} value={form.invoice_no}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_declared">LR Declared</Label>
                                <Input type="number" name="lr_declared" id="lr_declared"
                                    value={form.lr_declared}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="ewaybill_no">EwayBill No</Label>
                                <Input type="number" name="ewaybill_no" id="ewaybill_no"
                                    value={form.ewaybill_no}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_quantity">Quantity</Label>
                                <Input type="number" name="lr_quantity" id="lr_quantity"
                                    onChange={handleInputChange} value={form.lr_quantity}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_weight">Weight</Label>
                                <Input type="number" name="lr_weight" id="lr_weight"
                                    value={form.lr_weight}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_invoice_date">LR Invoice Date</Label>
                                <Input type="datetime-local" name="lr_invoice_date" id="lr_invoice_date" value={form.lr_invoice_date}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_item_name">Item Name</Label>
                                <Input type="text" name="lr_item_name" id="lr_item_name"
                                    onChange={handleInputChange} value={form.lr_item_name}>
                                </Input>
                            </FormGroup>
                        </Col>


                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_consignor_name">Consignor Name</Label>
                                <Input type="text" name="lr_consignor_name"
                                    id="lr_consignor_name" value={form.lr_consignor_name}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_consignor_address">Consignor Address</Label>
                                <Input type="text" name="lr_consignor_address" id="lr_consignor_address"
                                    onChange={handleInputChange} value={form.lr_consignor_address}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_consignor_contact_name">Consignor Contact Name</Label>
                                <Input type="text" name="lr_consignor_contact_name" id="lr_consignor_contact_name"
                                    value={form.lr_consignor_contact_name}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_consignor_contact_phone">Consignor Contact Phone</Label>
                                <Input type="text" name="lr_consignor_contact_phone" id="lr_consignor_contact_phone"
                                    value={form.lr_consignor_contact_phone}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_consignee_name">Consignee Name</Label>
                                <Input type="text" name="lr_consignee_name" id="lr_consignee_name" onChange={handleInputChange}
                                    value={form.lr_consignee_name}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_consignee_address">Consignee Address</Label>
                                <Input type="text" name="lr_consignee_address" id="lr_consignee_address" value={form.lr_consignee_address}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_consignee_contact_name">Consignee Contact Name</Label>
                                <Input type="text" name="lr_consignee_contact_name" id="lr_consignee_contact_name"
                                    value={form.lr_consignee_contact_name}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="lr_consignor_contact_phone">Consignee Contact Phone</Label>
                                <Input type="text" name="lr_consignor_contact_phone" id="lr_consignor_contact_phone" onChange={handleInputChange}
                                    value={form.lr_consignor_contact_phone}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="vehicle_no">Vehicle No</Label>
                                <Input type="text" name="vehicle_no" id="vehicle_no" value={form.vehicle_no}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="lr_vehicle_type">Vehicle Type</Label>
                                <Input type="number" name="lr_vehicle_type" id="lr_vehicle_type"
                                    value={form.lr_vehicle_type}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="driver_name">Driver Name</Label>
                                <Input type="text" name="driver_name" id="driver_name" onChange={handleInputChange}
                                    value={form.driver_name}>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="driver_no">Driver No</Label>
                                <Input type="text" name="driver_no" id="driver_no" value={form.driver_no}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>

                    </Row>


                    <br /><br /><br />
                    <Button color={"primary"} size={"lg"}>Create</Button> &nbsp;&nbsp;&nbsp;
                    <Button color={"link"} size={"lg"}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    )
}
