import React, { useState, useEffect } from "react";
import {
    Button, Card,
    CardBody,
    CardFooter,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import { editProfileShipper, getShipperProfileDetails } from "../../../helpers/api";


export default () => {

    const [ProfileForm, setForm] = useState({
        'shipper_fname': '',
        'shipper_lname': '',
        'shipper_email': '',
        'shipper_company_name': '',
        'shipper_gst': '',
        'shipper_number': '',
        'shipper_address': '',
    });


    useEffect(() => {
        const getNetwork = async () => {
            const data = await getShipperProfileDetails();
            setForm(data);
            console.log(data.shipper_address);
        };

        getNetwork();
    }, [setForm]);


    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...ProfileForm,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await editProfileShipper(ProfileForm);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e));
        }
    };


    return (

        <div className="animated fadeIn user-profile-form">
            <Row>
                <Col xs="9" sm="12">
                    <Card>
                        <CardHeader className="profile-card-header">
                            <strong>Personal Details</strong>
                        </CardHeader>


                        <CardBody>
                            <Form method={'patch'} onSubmit={handleSubmit}>
                                <FormGroup row className="my-0">
                                    <Col xs="6" form>
                                        <FormGroup>
                                            <Label htmlFor="first_name">First Name</Label>
                                            <Input type="text" id="first_name" placeholder="Enter your company name"
                                                name={"shipper_fname"}
                                                value={ProfileForm.shipper_fname} onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="last_name">Last Name</Label>
                                            <Input type="text" placeholder="Last Name" id="last_name" name={"shipper_lname"}
                                                value={ProfileForm.shipper_lname}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="text" placeholder="Enter your company name" id="email"
                                                name={"shipper_email"}
                                                value={ProfileForm.shipper_email}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company_name">Company Name</Label>
                                            <Input type="text" placeholder="Company Name" id="company_name"
                                                name={"shipper_company_name"}
                                                value={ProfileForm.shipper_company_name}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="GST_number">GST</Label>
                                            <Input type="text" placeholder="Enter your company name"
                                                name={"shipper_gst"}
                                                id="GST_number" value={ProfileForm.shipper_gst}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="phone_number">Phone Number</Label>
                                            <Input type="text" placeholder="Phone Number" id="phone_number"
                                                name={"shipper_number"}
                                                value={ProfileForm.shipper_number}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <CardHeader className="profile-card-header">
                                    <strong>Address</strong>
                                </CardHeader>


                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="address">Address</Label>
                                            <Input type="text" placeholder="Enter your company Address"
                                                name={"shipper_address"}
                                                id="address" value={ProfileForm.shipper_address}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>

                                </FormGroup></Form>
                        </CardBody>

                        <CardFooter>
                            <Button color={"primary"} size={"lg"}
                                onClick={handleSubmit}>Update</Button> &nbsp;&nbsp;&nbsp;
                            <Button color={"link"} size={"lg"}>Cancel</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>


    );
}

