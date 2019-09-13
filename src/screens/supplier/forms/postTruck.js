import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {createNewRFQ} from "../../../helpers/api";


export default () => {

    const [form, setForm] = useState({
        'name*': '',
        'truck_type': '',
        'origin': '',
        'destination': '',
        'total_trucks': '',
        'scheduled_date': '',
        'offered_price': '',

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
            await createNewRFQ(form);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Post Truck</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="origin">Origin</Label>
                                {/*<Input type="text" name="origin" id="origin" placeholder="ex: Delhi"/>*/}
                                <GooglePlacesAutocomplete
                                    onSelect={(value) => setForm({...form, 'origin': value.description})}
                                    initialValue={form.origin}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">Destination</Label>
                                <GooglePlacesAutocomplete
                                    onSelect={(value) => setForm({...form, 'destination': value.description})}
                                    initialValue={form.destination}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scheduled_date">Departure Date and Time</Label>
                                <Input type="datetime-local" name="scheduled_date" id="scheduled_date"
                                       value={form.scheduled_date}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="truck_type">Truck Type</Label>
                                <Input type="select" name="truck_type" id="truck_type" onChange={handleInputChange}>
                                    <option selected disabled>---- Select ----</option>
                                    <option value="1">Open</option>
                                    <option value="2">Container</option>
                                    <option value="3">Trailer</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="total_trucks">Number of Trucks</Label>
                                <Input type="number" name="total_trucks" id="total_trucks" value={form.total_trucks}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="offered_price">Offered Price</Label>
                                <Input type="number" name="offered_price" id="offered_price" value={form.offered_price}
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
