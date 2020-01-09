import React, { useState, useEffect, useCallback } from 'react';
import {
    Card, CardHeader, CardBody,
    Form, FormGroup,
    Row, Col,
    TabContent, TabPane, Nav, NavItem, NavLink,
    Label, Input, Button, Alert, Table,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { Link } from 'react-router-dom';


const optionsData = {
    tax_preference: [
        'Taxable',
        'Non-Taxable',
    ],
    gst_treatment: [
        'Registered Business - Regular',
        'Registered Business - Composition',
        'Unregistered Business',
        'Consumer',
    ],
}

const AddMastersCustomer = props => {

    const [form, setForm] = useState({
        customer_type: 'Business',
        company_name: '',
        primary_contact: '',
        customer_email: '',
        customer_phone: '',

        gst_treatment: 'Registered Business - Regular',
        gstin_pan: '',
        place_of_supply: '',
        tax_preference: 'Taxable',
        exemption_reason: '',

        billing_attention: '',
        billing_country: '',
        billing_address: '',
        billing_city: '',
        billing_state: '',
        billing_pin_code: '',
        billing_phone: '',

        shipping_attention: '',
        shipping_country: '',
        shipping_address: '',
        shipping_city: '',
        shipping_state: '',
        shipping_pin_code: '',
        shipping_phone: '',

        contact_persons: [],
    })

    const [contactPersonForm, setContactPersonForm] = useState({
        cp_name: '',
        cp_email: '',
        cp_phone: '',
        cp_designation: '',
        cp_department: '',
    });

    const [activeTab, setActiveTab] = useState('1');

    const [phase, setPhase] = useState(0);

    const toggle = useCallback(
        tab => {
            if (activeTab !== tab) setActiveTab(tab);
        },
        [activeTab, setActiveTab]
    )

    const handleInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setForm({
                ...form,
                [name]: value
            });
        },
        [form, setForm]
    )

    const contactPersonInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setContactPersonForm({
                ...contactPersonForm,
                [name]: value
            });
        },
        [contactPersonForm, setContactPersonForm]
    )

    const addCP = useCallback(
        async () => {
            setForm({ ...form, contact_persons: [...form.contact_persons, contactPersonForm] });
            setContactPersonForm({
                cp_name: '',
                cp_email: '',
                cp_phone: '',
                cp_designation: '',
                cp_department: '',
            });
        },
        [form, setForm, contactPersonForm, setContactPersonForm]
    )

    const deleteCP = useCallback(
        async i => {
            if ("id" in i) {
                setForm({ ...form, contact_persons: form.contact_persons.filter(e => e.id !== i.id) });
            } else {
                setForm({ ...form, contact_persons: form.contact_persons.filter(e => e.cp_name !== i.cp_name) });
            }
        },
        [form, setForm]
    )

    const renderContactPersonList = useCallback(
        () => {
            if (form.contact_persons) {
                return form.contact_persons.map((i, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{i.cp_name}</td>
                            <td>{i.cp_email}</td>
                            <td>{i.cp_phone}</td>
                            <td>{i.cp_designation}</td>
                            <td>{i.cp_department}</td>
                            <td>
                                <Button type="button" title="Delete Item" onClick={() => deleteCP(i)} color="danger" size="sm">
                                    <FontAwesomeIcon icon={faMinus} />
                                </Button>
                            </td>
                        </tr>
                    )
                })
            }
        },
        [form]
    )

    const renderOptions = useCallback(
        data => {
            return data.map(o => {
                return <option key={o} value={o}>{o}</option>;
            });
        },
        []
    )

    const btnLoader = useCallback(
        () => {
            if (phase === 1) {
                return (
                    <Button color="primary" size="lg" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving
                </Button>
                )
            }
            return <Button type="submit" color="primary" size="lg">Save</Button>
        },
        [phase]
    )

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();
            setPhase(1);
            console.log(form)
            setPhase(0);
        },
        [form, phase, setPhase]
    )

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <b>Add Customer</b>
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup tag="fieldset">
                                    <Label>Cutomer Type</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input value="Business" checked={form.customer_type === "Business"} type="radio" name="customer_type" onChange={handleInputChange} />{' '}
                                            Business
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input value="Individual" checked={form.customer_type === "Individual"} type="radio" name="customer_type" onChange={handleInputChange} />{' '}
                                            Individual
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="company_name">Company Name*</Label>
                                    <Input type="text" name="company_name" id="company_name" value={form.company_name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="primary_contact">Primary Contact</Label>
                                    <Input type="text" name="primary_contact" id="primary_contact" value={form.primary_contact}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="customer_email">Customer Email</Label>
                                    <Input type="email" name="customer_email" id="customer_email" value={form.customer_email}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="customer_phone">Customer Phone</Label>
                                    <Input type="text" name="customer_phone" id="customer_phone" value={form.customer_phone}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '1' })}
                                    onClick={() => { toggle('1'); }}
                                >
                                    <b>Other Details</b>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '2' })}
                                    onClick={() => { toggle('2'); }}
                                >
                                    <b>Address</b>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: activeTab === '3' })}
                                    onClick={() => { toggle('3'); }}
                                >
                                    <b>Contact Persons</b>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="gst_treatment">GST Treatment*</Label>
                                            <Input type="select" id="gst_treatment"
                                                name={"gst_treatment"}
                                                value={form.gst_treatment}
                                                onChange={handleInputChange}
                                            >
                                                {renderOptions(optionsData.gst_treatment)}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="gstin_pan">GSTIN / PAN*</Label>
                                            <Input type="text" name="gstin_pan" id="gstin_pan" value={form.gstin_pan}
                                                onChange={handleInputChange} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="place_of_supply">Place of Supply*</Label>
                                            <Input type="text" name="place_of_supply" id="place_of_supply" value={form.place_of_supply}
                                                onChange={handleInputChange} required />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label htmlFor="tax_preference">Tax Preference*</Label>
                                            <Input type="select" id="tax_preference"
                                                name={"tax_preference"}
                                                value={form.tax_preference}
                                                onChange={handleInputChange}
                                            >
                                                {renderOptions(optionsData.tax_preference)}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    {
                                        form.tax_preference === "Non-Taxable" ? (
                                            <Col md={8}>
                                                <FormGroup>
                                                    <Label htmlFor="exemption_reason">Exemption Reason*</Label>
                                                    <Input type="text" name="exemption_reason" id="exemption_reason" value={form.exemption_reason}
                                                        onChange={handleInputChange} required />
                                                </FormGroup>
                                            </Col>
                                        ) : (null)
                                    }
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="6">
                                        <Alert color="light">BILLING ADDRESS</Alert>
                                        <FormGroup>
                                            <Label htmlFor="billing_attention">Attention</Label>
                                            <Input type="text" name="billing_attention" id="billing_attention" value={form.billing_attention}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_country">Country</Label>
                                            <Input type="text" name="billing_country" id="billing_country" value={form.billing_country}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_address">Address</Label>
                                            <Input type="text" name="billing_address" id="billing_address" value={form.billing_address}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_city">City</Label>
                                            <Input type="text" name="billing_city" id="billing_city" value={form.billing_city}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_state">State</Label>
                                            <Input type="text" name="billing_state" id="billing_state" value={form.billing_state}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_pin_code">PIN Code</Label>
                                            <Input type="text" name="billing_pin_code" id="billing_pin_code" value={form.billing_pin_code}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="billing_phone">Phone</Label>
                                            <Input type="text" name="billing_phone" id="billing_phone" value={form.billing_phone}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col md="6">
                                        <Alert color="light">SHIPPING ADDRESS</Alert>
                                        <FormGroup>
                                            <Label htmlFor="shipping_attention">Attention</Label>
                                            <Input type="text" name="shipping_attention" id="shipping_attention" value={form.shipping_attention}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_country">Country</Label>
                                            <Input type="text" name="shipping_country" id="shipping_country" value={form.shipping_country}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_address">Address</Label>
                                            <Input type="text" name="shipping_address" id="shipping_address" value={form.shipping_address}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_city">City</Label>
                                            <Input type="text" name="shipping_city" id="shipping_city" value={form.shipping_city}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_state">State</Label>
                                            <Input type="text" name="shipping_state" id="shipping_state" value={form.shipping_state}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_pin_code">PIN Code</Label>
                                            <Input type="text" name="shipping_pin_code" id="shipping_pin_code" value={form.shipping_pin_code}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="shipping_phone">Phone</Label>
                                            <Input type="text" name="shipping_phone" id="shipping_phone" value={form.shipping_phone}
                                                onChange={handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Table className="mt-3" striped responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Designation</th>
                                            <th>Department</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderContactPersonList()}
                                        <tr>
                                            <td><Input type="text" name="cp_name" value={contactPersonForm.cp_name} onChange={contactPersonInputChange} placeholder="Contact Person Name" bsSize="sm" /></td>
                                            <td><Input type="text" name="cp_email" value={contactPersonForm.cp_email} onChange={contactPersonInputChange} bsSize="sm" /></td>
                                            <td><Input type="text" name="cp_phone" value={contactPersonForm.cp_phone} onChange={contactPersonInputChange} bsSize="sm" /></td>
                                            <td><Input type="text" name="cp_designation" value={contactPersonForm.cp_designation} onChange={contactPersonInputChange} bsSize="sm" /></td>
                                            <td><Input type="text" name="cp_department" value={contactPersonForm.cp_department} bsSize="sm" onChange={contactPersonInputChange} /></td>
                                            <td>
                                                <Button type="button" title="Add" onClick={addCP} color="success" size="sm">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </TabPane>
                        </TabContent>

                        <hr />


                        {btnLoader()}
                        {' '}
                        <Link to="/masters/customers">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersCustomer;
