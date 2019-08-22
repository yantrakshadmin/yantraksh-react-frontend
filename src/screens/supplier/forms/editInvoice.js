import React, {useState} from 'react';
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {createNewRFQ, editInvoice} from "../../../helpers/api";


export default () => {

    const [form, setForm] = useState({






        'id': '',
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
            await editInvoice(form);
            alert('done')
        } catch (e) {
            alert('error')
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
                                <Input type="datetime-local" name="invoice_date" id="invoice_date" value={form.invoice_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="invoice_due_date" id="invoice_due_date" onChange={handleInputChange} valid={form.invoice_due_date}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_place_of_supply}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_destination}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_destination_address}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_destination_pincode}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_gst}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>




















                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_salesperson}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_lr_number}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_vehicle_placement_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_vehicle_number}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_service_month}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_item_details}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_vehicle_number}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_service_month}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_item_details}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_rate}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_tax}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_amount}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange} value={form.invoice_quiz}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.invoice_owner}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.invoice_quantity}
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
