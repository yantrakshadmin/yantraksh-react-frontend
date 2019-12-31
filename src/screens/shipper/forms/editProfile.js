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
import { editProfileShipper, getShipperProfileDetails } from "../../../helpers/api";
import { profileUpdatedSuccess } from "../../../helpers/notifications";


export default () => {

    const optionsData = {
        industry: [
            'AGRICULTURE AND ALLIED INDUSTRIES',
            'AUTOMOBILES',
            'AUTO COMPONENTS',
            'AVIATION',
            'BANKING',
            'CEMENT',
            'CONSUMER DURABLES',
            'ECOMMERCE',
            'EDUCATION AND TRAINING',
            'ENGINEERING AND CAPITAL GOODS',
            'FINANCIAL SERVICES',
            'FMCG',
            'GEMS AND JEWELLERY',
            'INFRASTRUCTURE',
            'INSURANCE',
            'IT & ITES',
            'MANUFACTURING',
            'MEDIA AND ENTERTAINMENT',
            'METALS AND MINING',
            'OIL AND GAS',
            'PHARMACEUTICALS',
            'PORTS',
            'POWER',
            'RAILWAYS',
            'REAL ESTATE',
            'RENEWABLE ENERGY',
            'RETAIL',
            'ROADS',
            'SCIENCE AND TECHNOLOGY',
            'SERVICES',
            'STEEL',
            'TELECOMMUNICATIONS',
            'TEXTILES',
            'TOURISM AND HOSPITALITY',
        ],
        age_company: [
            'Less than one year',
            '1-3 Years',
            '3-10 Years',
            '11-25 Years',
            '25+ Years',
        ],
        dispatch: [
            '7 Ton to 50 Ton',
            '51 Ton to 100 Ton',
            '101 Ton to 500 Ton',
            '501 Ton to 3000 Ton',
            '3000 Ton +',
        ],
        frequency: [
            'Daily',
            'Weekly',
            'Monthly',
            'Project based (Variable)',
        ],
        size: [
            '1-9',
            '10 - 50',
            '51- 200',
            '201- 500',
            '500 +',
        ],
        geograph: [
            'Tier 1 cities',
            'Tier 2 cities',
        ],
        mode_transport: [
            'Courier',
            'Part Truck Load',
            'Full Truck Load',
        ],
        type: [
            'Intra city',
            'Inter city',
            'Intra state',
            'Interstate',
        ],
        need: [
            'Market vendors/ 3PL',
            'Logistics Management Software',
            'Logistics Optimization and Automation',
            'Invoice factoring',
            'LTL',
        ],
        use: [
            'Spreadsheets',
            'Transportation Management system',
            '3rd Party Logistics',
            'Emails, Sms and calls',
        ],
        buy_methods: [
            'Monthly Rate contracts',
            'Tenders',
            'Spot Market',
            'To pay',
            'Online Marketplace',
        ],
        designations: [
            'Sr Mgmt. (Diredtor, MD, CEO, Dpt Head, etc)',
            'Mid Mgmt, (Logistics, Dispatch, etc)',
            'Executive',
        ],
        edu: [
            'Graduate',
            'Masters',
            'Professional Certification',
        ],
        ages: [
            '24 to 30 Years',
            '31 to 45 Years',
            '45 Years +',
        ],
        attitudes: [
            'Price sensitive',
            'Delivery Sensitive',
            'Quality Sensitive',
            'Tech Driven',
        ],
        objective: [
            'Reduce and control Logistics costs',
            'End to end visibility',
            'Maximise Fleet Efficiency',
            'Minimise Damages and Shortages'
        ],
    }

    const [ProfileForm, setForm] = useState({
        shipper_fname: '',
        shipper_lname: '',
        shipper_email: '',
        shipper_company_name: '',
        shipper_gst: '',
        shipper_number: '',
        shipper_address: '',
        shipper_street: '',
        shipper_city: '',
        shipper_pin: '',
        shipper_state: '',

        industry: '',
        age_company: '',
        dispatch: '',
        frequency: '',
        size: '',
        geograph: '',
        mode_transport: '',
        type: '',
        need: '',
        use: '',
        buy_methods: '',
        designations: '',
        edu: '',
        ages: '',
        attitudes: '',
        objective: '',
    });

    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getShipperProfileDetails();
            setForm(data);
            //console.log(ProfileForm);
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
        setPhase(1);
        try {
            await editProfileShipper(ProfileForm);
            profileUpdatedSuccess();
        } catch (e) {
            alert(JSON.stringify(e));
        }
        setPhase(1);
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

    const renderOptions = data => {
        return data.map(o => {
            return <option key={o} value={o}>{o}</option>;
        });
    }

    return (

        <Card>
            <CardBody>
                <Form method={'patch'} onSubmit={handleSubmit}>
                    {console.log(ProfileForm)}
                    <CardTitle><h5 className="mb-4">Personal Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md="6" form>
                            <FormGroup>
                                <Label htmlFor="shipper_fname">First Name</Label>
                                <Input type="text" id="shipper_fname" placeholder="First Name"
                                    name={"shipper_fname"}
                                    value={ProfileForm.shipper_fname} onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="shipper_lname">Last Name</Label>
                                <Input type="text" placeholder="Last Name" id="shipper_lname" name={"shipper_lname"}
                                    value={ProfileForm.shipper_lname}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="shipper_email">Email Address</Label>
                                <Input type="text" id="shipper_email" placeholder="Enter your Email"
                                    name={"shipper_email"}
                                    value={ProfileForm.shipper_email}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="ages">Age</Label>
                                <Input type="select" id="ages"
                                    name={"ages"}
                                    value={ProfileForm.ages}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.ages)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="edu">Education</Label>
                                <Input type="select" id="edu"
                                    name={"edu"}
                                    value={ProfileForm.edu}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.edu)}
                                </Input>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="shipper_gst">GST</Label>
                                <Input type="text" placeholder="Enter your GST"
                                    name={"shipper_gst"}
                                    id="shipper_gst" value={ProfileForm.shipper_gst}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <hr />

                    <CardTitle><h5 className="my-4">Company Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md="6">
                            <FormGroup>
                                <Label htmlFor="shipper_company_name">Company Name</Label>
                                <Input type="text" placeholder="Company Name" id="shipper_company_name"
                                    name={"shipper_company_name"}
                                    value={ProfileForm.shipper_company_name}
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
                                <Label htmlFor="shipper_street">Street</Label>
                                <Input type="text" placeholder="Street"
                                    name={"shipper_street"}
                                    id="shipper_street" value={ProfileForm.shipper_street}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row className="my-0">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="shipper_city">City</Label>
                                <Input type="text" placeholder="City"
                                    name={"shipper_city"}
                                    id="shipper_city" value={ProfileForm.shipper_city}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="shipper_state">State</Label>
                                <Input type="text" placeholder="State"
                                    name={"shipper_state"}
                                    id="shipper_state" value={ProfileForm.shipper_state}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="shipper_pin">Pin Code</Label>
                                <Input type="text" placeholder="Pin Code"
                                    name={"shipper_pin"}
                                    id="shipper_pin" value={ProfileForm.shipper_pin}
                                    onChange={handleInputChange} />
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <CardTitle><h5 className="my-4">Other Details</h5></CardTitle>
                    <FormGroup row className="my-0">
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="industry">Industry</Label>
                                <Input type="select" id="industry"
                                    name={"industry"}
                                    value={ProfileForm.industry}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.industry)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="dispatch">Monthly Dispatch</Label>
                                <Input type="select" id="dispatch"
                                    name={"dispatch"}
                                    value={ProfileForm.dispatch}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.dispatch)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="frequency">Frequency</Label>
                                <Input type="select" id="frequency"
                                    name={"frequency"}
                                    value={ProfileForm.frequency}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.frequency)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="size">Employee Size</Label>
                                <Input type="select" id="size"
                                    name={"size"}
                                    value={ProfileForm.size}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.size)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="geograph">Geographic</Label>
                                <Input type="select" id="geograph"
                                    name={"geograph"}
                                    value={ProfileForm.geograph}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.geograph)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="mode_transport">Transport Mode</Label>
                                <Input type="select" id="mode_transport"
                                    name={"mode_transport"}
                                    value={ProfileForm.mode_transport}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.mode_transport)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="type">Type</Label>
                                <Input type="select" id="type"
                                    name={"type"}
                                    value={ProfileForm.type}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.type)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="need">Need</Label>
                                <Input type="select" id="need"
                                    name={"need"}
                                    value={ProfileForm.need}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.need)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="use">Use</Label>
                                <Input type="select" id="use"
                                    name={"use"}
                                    value={ProfileForm.use}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.use)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="buy_methods">Buy Methods</Label>
                                <Input type="select" id="buy_methods"
                                    name={"buy_methods"}
                                    value={ProfileForm.buy_methods}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.buy_methods)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="designations">Designations</Label>
                                <Input type="select" id="designations"
                                    name={"designations"}
                                    value={ProfileForm.designations}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.designations)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="attitudes">Attitudes</Label>
                                <Input type="select" id="attitudes"
                                    name={"attitudes"}
                                    value={ProfileForm.attitudes}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.attitudes)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="objective">Objective</Label>
                                <Input type="select" id="objective"
                                    name={"objective"}
                                    value={ProfileForm.objective}
                                    onChange={handleInputChange}>
                                    {renderOptions(optionsData.objective)}
                                </Input>
                            </FormGroup>
                        </Col>
                        {/* <Col>
                            <Label>Supplier Type</Label>
                            {renderSupTypeChecks()}
                        </Col> */}
                    </FormGroup>

                </Form>
            </CardBody>
            <CardFooter>
                {btnLoader()}
            </CardFooter>
        </Card>


    );
}

