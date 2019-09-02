import React, {useState, useEffect} from "react";
import {
    Button, Card,
    CardBody,
    CardFooter,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import {editProfileSupplier, getSupplierProfileDetails} from "../../../helpers/api";


export default () => {

    const [ProfileForm, setForm] = useState({
        'supplier_fname': '',
        'supplier_lname': '',
        'supplier_email': '',
        'supplier_company_name': '',
        'supplier_gst': '',
        'supplier_number': '',
        'supplier_pan': '',
    });


    useEffect(() => {
        const getNetwork = async () => {
            const data = await getSupplierProfileDetails();
            setForm(data);
            // console.log(data.supplier_address);
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
            await editProfileSupplier(ProfileForm);
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
                                            <Label htmlFor="company">First Name</Label>
                                            <Input type="text" id="first_name" placeholder="Enter your company name"
                                                   name={"supplier_fname"}
                                                   value={ProfileForm.supplier_fname} onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Last Name</Label>
                                        </FormGroup>
                                        <Input type="text" placeholder="Last Name" id="last_name" name={"supplier_lname"}
                                               value={ProfileForm.supplier_lname}
                                               onChange={handleInputChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company">Email</Label>
                                            <Input type="text" placeholder="Enter your company name"
                                                   name={"supplier_email"}
                                                   value={ProfileForm.supplier_email}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Company Name</Label>
                                            <Input type="text" placeholder="Company Name" id="company_name"
                                                   name={"supplier_company_name"}
                                                   value={ProfileForm.supplier_company_name}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>


                                <FormGroup row className="my-0">
                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="company">GST</Label>
                                            <Input type="text" placeholder="Enter your company name"
                                                   name={"supplier_gst"}
                                                   id="GST_number" value={ProfileForm.supplier_gst}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                    <Col xs="6">
                                        <FormGroup>
                                            <Label htmlFor="vat">Phone Number</Label>
                                            <Input type="text" placeholder="Phone Number" id="phone_number"
                                                   name={"supplier_number"}
                                                   value={ProfileForm.supplier_number}
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
                                            <Label htmlFor="company">Address</Label>
                                            <Input type="text" placeholder="Enter your company Address"
                                                   name={"supplier_pan"}
                                                   id="address" value={ProfileForm.supplier_pan}
                                                   onChange={handleInputChange}/>
                                        </FormGroup>
                                    </Col>

                                </FormGroup></Form>
                        </CardBody>

                        <CardFooter>
                            <Button color={"primary"} size={"lg"}
                                    onClick={handleSubmit}>Create</Button> &nbsp;&nbsp;&nbsp;
                            <Button color={"link"} size={"lg"}>Cancel</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </div>


    );
}

