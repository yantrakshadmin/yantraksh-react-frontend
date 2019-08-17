import React, {useState} from 'react';
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {createNewRFQ} from "../../../helpers/api";


export default () => {

    const [form, setForm] = useState({
        'origin': '',
        'destination': '',
        'scheduled_date': '',
        'truck_type': '',
        'truck_name': '',
        'total_trucks': 0,
        'offered_price': 0,
        'weight': 0,
        'id_comments': ''
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
            alert('error')
        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Post New RFQ</strong>
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
                                <Input type="datetime-local" name="scheduled_date" id="scheduled_date" valid={form.scheduled_date}
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
                                <Label for="truck_name">Truck Name</Label>
                                <Input type="select" name="truck_name" id="truck_name" onChange={handleInputChange}>
                                    <option selected disabled>---- Select ----</option>
                                    <option value="84">20 ft sxl 6 Ton</option>
                                    <option value="container">Container</option>
                                    <option value="trailer">Trailer</option>
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
                    </Row>
                    <Row form>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="weight">Weight</Label>
                                <Input type="number" name="weight" id="weight" value={form['weight']}
                                       onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col lg={4}>
                            <FormGroup>
                                <Label for="material_type">Material Type</Label>
                                <Input type="select" name="material_type" id="material_type" onChange={handleInputChange}>
                                    <option selected disabled>---- Select ----</option>
                                    <option value="Fragile">Fragile</option>
                                    <option value="Non-Fragile">Non Fragile</option>
                                </Input>
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
                    <Row form>
                        <Col lg={12}>
                            <Label for="id_comments">Comments</Label>
                            <Input type="textarea" name="id_comments" id="id_comments" value={form.comments}
                                   onChange={handleInputChange}/>
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
