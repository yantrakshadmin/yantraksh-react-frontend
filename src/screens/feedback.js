import React, {useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row,} from 'reactstrap';
import {bidNow, feedback} from "../helpers/api"

export default (props) => {

    const [form, setForm] = useState({
        'name': '',
        'contact': '',
        'title': '',
        'description': '',
        'summary': '',


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
            await feedback(form);

            alert('done')
        } catch (e) {
            alert('error')
        }
    };

    return (
        <Card>
            <CardHeader>
                <strong>Feedback</strong>
            </CardHeader>
            <CardBody>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <Row form>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">name</Label>
                                <Input type="text" name="name" id="name" onChange={handleInputChange}
                                       value={form.name}/>


                            </FormGroup>
                        </Col>
<Col md={4}>
                            <FormGroup>
                                <Label for="destination">contact</Label>
                                <Input type="text" name="contact" id="contact" onChange={handleInputChange}
                                       value={form.contact}/>


                            </FormGroup>
                        </Col>
<Col md={4}>
                            <FormGroup>
                                <Label for="destination">title</Label>
                                <Input type="text" name="title" id="title" onChange={handleInputChange}
                                       value={form.title}/>


                            </FormGroup>
                        </Col>
<Col md={4}>
                            <FormGroup>
                                <Label for="destination">description</Label>
                                <Input type="text" name="description" id="description" onChange={handleInputChange}
                                       value={form.description}/>


                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="destination">summary</Label>
                                <Input type="text" name="summary" id="summary" onChange={handleInputChange}
                                       value={form.summary}/>


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
