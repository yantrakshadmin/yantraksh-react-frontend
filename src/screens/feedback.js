import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import {bidNow} from "../helpers/api"

export default (props) => {

    const [form, setForm] = useState({
        'vehicle': '',
        'least_bid': '',


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
            await bidNow(form, props.match.params.id);

            alert('done')
        } catch (e) {
            alert('error')
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
                                <Label for="origin">Type of vehicle</Label>
                                {/*<Input type="text" id="vehicle" placeholder="ex: Delhi" name={"vehicle"}/>*/}
                                <Input type="select" name="vehicle" id="vehicle" onChange={handleInputChange}
                                       value={form.vehicle}>
                                    <option selected disabled>---- Select ----</option>
                                    <option value="1">Market Vehicle</option>
                                    <option value="2">Own Vehicle</option>
                                </Input>

                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">Least Bid</Label>
                                <Input type="text" name="least_bid" id="least_bid" onChange={handleInputChange}
                                       value={form.least_bid}/>


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
