import React, { useState, useEffect } from "react";
import {
    Button, Card,
    CardBody, CardTitle,
    CardFooter,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row, Container,
} from 'reactstrap';
import _ from 'lodash';
import { editProfileSupplier, getSupplierProfileDetails, fetchSupplierType } from "../../../helpers/api";
import { profileUpdatedSuccess } from "../../../helpers/notifications";

export default () => {

    const optionsData = {
        age_company: [
            'Less than one year',
            '1-3 Years',
            '3-10 Years',
            '11-25 Years',
            '25+ Years',
        ],
        operational_presence: [
            'City',
            'State',
            'Lane',
            'Regional',
            'National',
        ],
        monthly_trips: [
            '1 - 10 Vehicles',
            '11-50 Vehicles',
            '51 - 100 Vehicles',
            '101- 200 Vehicles',
            '200 + Vehicles',
        ],
        payment_terms: [
            'Advance Payment',
            'Payment on Delivery',
            'Monthly account based Billing',
            'Custom Credit terms',
        ],
        entity_types: [
            'Transporter',
            'Broker',
            'Fleet Owner',
            'Packers and Movers',
            'ODC Heavy Transport',
            'Part Load/ Daily Service Provider',
        ]
    }

    const [ProfileForm, setForm] = useState({
        supplier_fname: "",
        supplier_lname: "",
        supplier_company_name: "",
        supplier_email: "",
        supplier_gst: "",
        supplier_pan: "",
        supplier_street: "",
        supplier_city: "",
        supplier_pin: "",
        supplier_state: "",
        supplier_service: "",
        age_company: "",
        operational_presence: "",
        monthly_trips: "",
        payment_terms: "",
        entity_types: "",
        servicable_cities: "",
        supplier_number: "",
        truck_type: [],
        supplier_type: [],
    });

    const [SupType, setSupType] = useState([]);

    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getSupplierProfileDetails();
            setForm(data);
        };

        getNetwork();
    }, [setForm]);

    useEffect(() => {
        const getNetwork2 = async () => {
            // const s = await fetchSupplierType();
            // setSupType(s)
            await setSupType([{ id: 1, name: "Transporter" }, { id: 2, name: "Broker" }, { id: 3, name: "Fleet Owner" }])
        }

        getNetwork2();
    }, [setSupType])

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
        setPhase(1);
        try {
            await editProfileSupplier(ProfileForm);
            profileUpdatedSuccess();
        } catch (e) {
            alert("Something is wrong");
        }
        setPhase(0);
    };

    const btnLoader = () => {
        if (phase === 1) {
            return (
                <Button color="primary" size="lg" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving
                </Button>
            )
        }
        return <Button color="primary" size="lg" onClick={handleSubmit}>Save</Button>
    }

    const handleCheckBox = (e, pk) => {
        const checked = e.target.checked;
        if (checked === true) {
            setForm({
                ...ProfileForm,
                "supplier_type": _.uniq([...ProfileForm.supplier_type, pk])
            });
        } else if (checked === false) {
            setForm({
                ...ProfileForm,
                "supplier_type": _.remove(ProfileForm.supplier_type, n => {
                    return n === pk;
                })
            })
        }
    }

    const findChecked = pk => {
        ProfileForm.supplier_type.find(e => {
            return e === pk;
        })
    }

    const renderSupTypeChecks = () => {
        if (SupType.length !== 0) {
            return SupType.map(st => {
                return (
                    <FormGroup key={st.id} check>
                        <Label check>
                            <Input type="checkbox" id={st.name} onChange={e => handleCheckBox(e, st.id)} checked={findChecked(st.id)} />{' '}
                            {st.name}
                        </Label>
                    </FormGroup>
                )
            })
        }
    }

    const renderOptions = data => {
        return data.map(o => {
            return <option key={o} value={o}>{o}</option>;
        });
    }

    return (

        <Card>
            <CardBody>
                <Form method={'patch'} onSubmit={handleSubmit}>
                    <CardTitle><h5 className="mb-4">Personal Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md="6" form>
                            <FormGroup>
                                <Label htmlFor="supplier_fname">First Name</Label>
                                <Input type="text" id="supplier_fname" placeholder="First Name"
                                    name={"supplier_fname"}
                                    value={ProfileForm.supplier_fname} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="supplier_lname">Last Name</Label>
                                <Input type="text" placeholder="Last Name" id="supplier_lname" name={"supplier_lname"}
                                    value={ProfileForm.supplier_lname}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="supplier_email">Email Address</Label>
                                <Input type="text" id="supplier_email" placeholder="Enter your Email"
                                    name={"supplier_email"}
                                    value={ProfileForm.supplier_email}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="supplier_gst">GST</Label>
                                <Input type="text" placeholder="Enter your GST"
                                    name={"supplier_gst"}
                                    id="supplier_gst" value={ProfileForm.supplier_gst}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="supplier_pan">PAN</Label>
                                <Input type="text" placeholder="Enter your PAN"
                                    name={"supplier_pan"}
                                    id="supplier_pan" value={ProfileForm.supplier_pan}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col xs="6">
                            <FormGroup>
                                <Label htmlFor="supplier_number">Phone Number</Label>
                                <Input type="text" placeholder="Phone Number" id="supplier_number"
                                    name={"supplier_number"}
                                    value={ProfileForm.supplier_number}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <hr />

                    <CardTitle><h5 className="my-4">Company Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="supplier_company_name">Company Name</Label>
                                <Input type="text" placeholder="Company Name" id="supplier_company_name"
                                    name={"supplier_company_name"}
                                    value={ProfileForm.supplier_company_name}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="age_company">Company Age</Label>
                                <Input type="select" id="age_company"
                                    name={"age_company"}
                                    value={ProfileForm.age_company}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.age_company)}
                                </Input>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <hr />

                    <CardTitle><h5 className="my-4">Address Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col>
                            <FormGroup>
                                <Label htmlFor="supplier_street">Street</Label>
                                <Input type="text" placeholder="Street"
                                    name={"supplier_street"}
                                    id="supplier_street" value={ProfileForm.supplier_street}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="supplier_city">City</Label>
                                <Input type="text" placeholder="City"
                                    name={"supplier_city"}
                                    id="supplier_city" value={ProfileForm.supplier_city}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="supplier_state">State</Label>
                                <Input type="text" placeholder="State"
                                    name={"supplier_state"}
                                    id="supplier_state" value={ProfileForm.supplier_state}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="supplier_pin">Pin Code</Label>
                                <Input type="text" placeholder="Pin Code"
                                    name={"supplier_pin"}
                                    id="supplier_pin" value={ProfileForm.supplier_pin}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <CardTitle><h5 className="my-4">Other Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="supplier_service">Sevice</Label>
                                <Input type="text" placeholder="Service"
                                    name={"supplier_service"}
                                    id="supplier_service" value={ProfileForm.supplier_service}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="operational_presence">Operational Presence</Label>
                                <Input type="select" id="operational_presence"
                                    name={"operational_presence"}
                                    value={ProfileForm.operational_presence}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.operational_presence)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="monthly_trips">Monthly Trips</Label>
                                <Input type="select" id="monthly_trips"
                                    name={"monthly_trips"}
                                    value={ProfileForm.monthly_trips}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.monthly_trips)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="payment_terms">Payment Terms</Label>
                                <Input type="select" id="payment_terms"
                                    name={"payment_terms"}
                                    value={ProfileForm.payment_terms}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.payment_terms)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="entity_types">Entity Types</Label>
                                <Input type="select" id="entity_types"
                                    name={"entity_types"}
                                    value={ProfileForm.entity_types}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.entity_types)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="servicable_cities">Servicable Cities</Label>
                                <Input type="text" placeholder="Servicable Cities"
                                    name={"servicable_cities"}
                                    id="servicable_cities" value={ProfileForm.servicable_cities}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <Label>Supplier Type</Label>
                            {renderSupTypeChecks()}
                        </Col>
                    </FormGroup>

                </Form>
            </CardBody>
            <CardFooter>
                {btnLoader()}
            </CardFooter>
        </Card>

    );
}

