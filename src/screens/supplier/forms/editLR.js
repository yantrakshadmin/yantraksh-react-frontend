import React, {useState, useEffect} from 'react';
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {editLR, getLRDetails} from "../../../helpers/api";


export default () => {


    var len = window.location.href.length;
    var id = window.location.href[len-1];


    //TODO THIS IS NOT THE REACT METHOD TO FETCH ID FROM THE URLT

    const [form, setForm] = useState({
        'id': id,
        'lr_number': '',
        'lr_date': '',
        'lr_due_date': '',
        'lr_place_of_supply': '',
        'lr_destination': '',
        'lr_destination_address': '',
        'lr_destination_pincode': '',
        'lr_gst': '',


        'lr_salesperson': '',
        'lr_lr_number': '',
        'lr_vehicle_placement_date': '',
        'lr_vehicle_number': '',
        'lr_service_month': '',
        'lr_item_details': '',

        'lr_rate': '',
        'lr_tax': '',
        'lr_amount': '',
        'lr_quiz': '',
        'lr_owner': '',
        'lr_quantity': '',


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
            const lr_details = await getLRDetails(form.id);
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
            alert(JSON.stringify(form));
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
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">LR number</Label>
                                <Input type="text" name="lr_number" id="lr_number" valid={form.lr_number}
                                       onChange={handleInputChange}/>

                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">LR ID</Label>
                                <Input type="text" name="id" id="id" value={form.id}
                                       onChange={handleInputChange}/>
                            </FormGroup>

                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scheduled_date">LR Date</Label>
                                <Input type="datetime-local" name="lr_date" id="lr_date"
                                       value={form.lr_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">LR Due Date</Label>
                                <Input type="select" name="lr_due_date" id="lr_due_date"
                                       onChange={handleInputChange} valid={form.lr_due_date}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Place of Supply</Label>
                                <Input type="number" name="lr_place_of_supply" id="lr_place_of_supply"
                                       value={form.lr_place_of_supply}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">LR Destination</Label>
                                <Input type="test" name="lr_destination" id="lr_destination"
                                       value={form.lr_destination}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Destination Address</Label>
                                <Input type="select" name="lr_destination_address" id="lr_destination_address"
                                       onChange={handleInputChange} value={form.lr_destination_address}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Destination PINCODE</Label>
                                <Input type="number" name="lr_destination_pincode" id="lr_destination_pincode"
                                       value={form.lr_destination_pincode}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">LR GST</Label>
                                <Input type="number" name="lr_gst" id="lr_gst" value={form.lr_gst}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Billing party</Label>
                                <Input type="select" name="lr_salesperson" id="lr_salesperson"
                                       onChange={handleInputChange} value={form.lr_salesperson}>

                                </Input>
                            </FormGroup>
                        </Col>


                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Vehicle Placement Date</Label>
                                <Input type="number" name="lr_vehicle_placement_date"
                                       id="lr_vehicle_placement_date" value={form.lr_vehicle_placement_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Vehicle Number</Label>
                                <Input type="select" name="lr_vehicle_number" id="lr_vehicle_number"
                                       onChange={handleInputChange} value={form.lr_vehicle_number}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">LR service Month</Label>
                                <Input type="number" name="lr_service_month" id="lr_service_month"
                                       value={form.lr_service_month}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">LR Item Details</Label>
                                <Input type="text" name="lr_item_details" id="lr_item_details"
                                       value={form.lr_item_details}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>


                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">LR Amount</Label>
                                <Input type="select" name="lr_rate" id="lr_rate" onChange={handleInputChange}
                                       value={form.lr_rate}>

                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">TAX</Label>
                                <Input type="number" name="lr_tax" id="lr_tax" value={form.lr_tax}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Total Amount</Label>
                                <Input type="number" name="lr_amount" id="lr_amount"
                                       value={form.lr_amount}
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
