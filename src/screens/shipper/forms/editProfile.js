import React, {useState} from 'react';
import {
    Button, Card,
    CardBody,
    CardFooter,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import {editProfileShipper} from "../../../helpers/api";


export default () => {

    const [ProfileForm, setForm] = useState({
        // industry_types : '',
        // company_age : '',
        // monthly_dispatch : '',
        // dispatch_frquesncy : '',
        // employee_size : '',
        // geographic : '',
        // transport_mode : '',
        // requirement_type : '',
        // needs : '',
        // uses : '',
        // buying_methods : '',
        // industry : '',
        // age_company : '',
        // dispatch : '',
        // frequency : '',
        // size : '',
        // type : '',
        // need : '',
        // use : '',
        // activetruck : '',

        'shipper_fname' : '',
        'shipper_lname' : '',



        'shipper_email' : '',
        'shipper_company_name' : '',
        'shipper_gst' : '',
        'shipper_number' : '',
        // shipper_address : '',
        // shipper_street : '',
        // shipper_city : '',
        // shipper_pin : '',
        // shipper_state : '',
        // total_weight : '',

    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(target, value, name,"erfefefefe");


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
            alert('error nwjfoijfepfjpf')
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
                                            <Label htmlFor="company">First Name</Label>
                                            <Input type="text" id="first_name" placeholder="Enter your company name" name={"shipper_fname"}
                                                   value={ProfileForm.shipper_fname} onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Last Name</Label>
                                            <Input type="text" id="vat" placeholder="Last Name" id="last_name" name ={"shipper_lname"}
                                                   value={ProfileForm.shipper_lname}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company">Email</Label>
                                            <Input type="text" id="company" placeholder="Enter your company name" name ={"shipper_email"}
                                                   id="email" value={ProfileForm.shipper_email}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Company Name</Label>
                                            <Input type="text" id="vat" placeholder="Company Name" id="company_name" name ={"shipper_company_name"}
                                                   value={ProfileForm.shipper_company_name}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company">GST</Label>
                                            <Input type="text" id="company" placeholder="Enter your company name"  name ={"shipper_shipper_gst"}
                                                   id="GST_number" value={ProfileForm.shipper_gst}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Phone Number</Label>
                                            <Input type="text" id="vat" placeholder="Phone Number" id="phone_number" name ={"shipper_number"}
                                                   value={ProfileForm.shipper_number}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <CardHeader className="profile-card-header">
                                    <strong>Address</strong>
                                </CardHeader>


                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company">Street</Label>
                                            <Input type="text" id="company" placeholder="Enter your company name" name={"shipper_address"}
                                                   id="address" value={ProfileForm.shipper_address}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                </FormGroup></Form>
                        </CardBody>

                        <CardFooter>
                            <Button color={"primary"} size={"lg"} onClick={handleSubmit} >Create</Button> &nbsp;&nbsp;&nbsp;
                            <Button color={"link"} size={"lg"}>Cancel</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>


    );
}

