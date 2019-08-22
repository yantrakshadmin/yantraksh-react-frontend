import React, {useState, useEffect} from 'react';
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {editInvoice, getInvoiceDetails} from "../../../helpers/api";


export default () => {


    var len = window.location.href.length;
    var id = window.location.href[len-1];


    //TODO THIS IS NOT THE REACT METHOD TO FETCH ID FROM THE URLTT

    const [form, setForm] = useState({
        'id': id,
        'invoice_number': '',
        'invoice_date': '',
        'invoice_due_date': '',
        'invoice_place_of_supply': '',
        'invoice_destination': '',
        'invoice_destination_address': '',
        'invoice_destination_pincode': '',
        'invoice_gst': '',


        'invoice_salesperson': '',
        'invoice_lr_number': '',
        'invoice_vehicle_placement_date': '',
        'invoice_vehicle_number': '',
        'invoice_service_month': '',
        'invoice_item_details': '',

        'invoice_rate': '',
        'invoice_tax': '',
        'invoice_amount': '',
        'invoice_quiz': '',
        'invoice_owner': '',
        'invoice_quantity': '',


        'lr_number': '',
        'billing_party_name': '',
        'origin_address': '',
        'origin_pincode': '',
        'vehicle_placement_date': '',
        'vehicle_number': '',
        'item_details': '',
        'item_quantity': '',
        'total_amount': '',
        'tax': '',

    });


    useEffect(() => {
        const getNetwork = async () => {
            const invoice_details = await getInvoiceDetails(form.id);
            setForm(invoice_details);
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
            alert(JSON.stringify(form));
            await editInvoice(form, form.id);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Edit Invoice</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">Invoice number</Label>
                                <Input type="text" name="invoice_number" id="invoice_number" valid={form.invoice_number}
                                       onChange={handleInputChange}/>

                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">Invoice ID</Label>
                                <Input type="text" name="id" id="id" value={form.id}
                                       onChange={handleInputChange}/>
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scheduled_date">Invoice Date</Label>
                                <Input type="datetime-local" name="invoice_date" id="invoice_date"
                                       value={form.invoice_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Invoice Due Date</Label>
                                <Input type="select" name="invoice_due_date" id="invoice_due_date"
                                       onChange={handleInputChange} valid={form.invoice_due_date}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Place of Supply</Label>
                                <Input type="number" name="invoice_place_of_supply" id="invoice_place_of_supply"
                                       value={form.invoice_place_of_supply}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Invoice Destination</Label>
                                <Input type="test" name="invoice_destination" id="invoice_destination"
                                       value={form.invoice_destination}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Destination Address</Label>
                                <Input type="select" name="invoice_destination_address" id="invoice_destination_address"
                                       onChange={handleInputChange} value={form.invoice_destination_address}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Destination PINCODE</Label>
                                <Input type="number" name="invoice_destination_pincode" id="invoice_destination_pincode"
                                       value={form.invoice_destination_pincode}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Invoice GST</Label>
                                <Input type="number" name="invoice_gst" id="invoice_gst" value={form.invoice_gst}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Billing party</Label>
                                <Input type="select" name="invoice_salesperson" id="invoice_salesperson"
                                       onChange={handleInputChange} value={form.invoice_salesperson}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">LR number</Label>
                                <Input type="number" name="invoice_lr_number" id="invoice_lr_number"
                                       value={form.invoice_lr_number}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Vehicle Placement Date</Label>
                                <Input type="number" name="invoice_vehicle_placement_date"
                                       id="invoice_vehicle_placement_date" value={form.invoice_vehicle_placement_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Vehicle Number</Label>
                                <Input type="select" name="invoice_vehicle_number" id="invoice_vehicle_number"
                                       onChange={handleInputChange} value={form.invoice_vehicle_number}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Invoice service Month</Label>
                                <Input type="number" name="invoice_service_month" id="invoice_service_month"
                                       value={form.invoice_service_month}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">invoice Item Details</Label>
                                <Input type="text" name="invoice_item_details" id="invoice_item_details"
                                       value={form.invoice_item_details}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Invoice Amount</Label>
                                <Input type="select" name="invoice_rate" id="invoice_rate" onChange={handleInputChange}
                                       value={form.invoice_rate}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">TAX</Label>
                                <Input type="number" name="invoice_tax" id="invoice_tax" value={form.invoice_tax}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Total Amount</Label>
                                <Input type="number" name="invoice_amount" id="invoice_amount"
                                       value={form.invoice_amount}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <br/><br/><br/>
                    <Button color={"primary"} size={"lg"}>Create</Button> &nbsp;&nbsp;&nbsp;
                    <Button color={"link"} size={"lg"}>Cancel</Button>
                </Form>
            </CardBody>
        </Card>
    )
}
