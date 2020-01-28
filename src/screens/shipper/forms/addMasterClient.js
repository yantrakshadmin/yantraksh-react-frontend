import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createShipperMasterClient, fetchShipperMasterClient, editShipperMasterClient } from '../../../helpers/api';
import history from '../../../history';


const AddMastersItem = props => {

    const optionsData = {
        client_region: [
            'North',
            'East',
            'West',
            'South'
        ],
        client_category: [
            'Automotive',
            'F.M.C.G.',
            'Pharmaceuticals',
            'Ecommerce',
            'Others',
        ],
        client_product_user_type: [
            'Static',
            'Transfer',
        ],
        client_is_gst_registered: [
            'Yes',
            'No',
        ],
    }

    const [form, setForm] = useState({
        client_name: '',
        client_email: '',
        client_contact_no: '',

        client_shipping_address: '',
        client_shipping_city: '',
        client_shipping_pincode: 0,
        client_shipping_state: '',

        client_billing_address: '',
        client_city: '',
        client_pincode: 0,
        client_state: '',

        client_contact_person: '',

        client_region: 'North',
        client_payment_terms: '',
        client_category: 'Automotive',
        client_product_user_type: 'Static',

        client_pan: '',
        client_code: '',
        client_is_gst_registered: 'No',
        client_gst: '',
    })

    useEffect(() => {
        if (props.match.params.id) {
            const fetchItemData = async () => {
                const itemData = await fetchShipperMasterClient(props.match.params.id);
                setForm(itemData);
            }
            fetchItemData();
        }
    }, [setForm])

    const [phase, setPhase] = useState(0);

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
                );
            }
            return <Button type="submit" color="primary" size="lg">Save</Button>;
        },
        [phase,]
    )

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            setPhase(1);
            try {
                if (props.match.params.id) {
                    await editShipperMasterClient(props.match.params.id, form);
                    setPhase(0);
                    toast.success('Client Updated Successfully');
                } else {
                    await createShipperMasterClient(form);
                    setPhase(0);
                    toast.success('Client Created Successfully');
                    history.push('/dashboard/masters/clients');
                }

            } catch (err) {
                toast.error('Something went wrong!');
                setPhase(0);
            }
        },
        [form, setPhase,]
    )

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    {props.match.params.id ? <b>Edit Client</b> : <b>Add Client</b>}
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_name">Name*</Label>
                                    <Input type="text" name="client_name" id="client_name" value={form.client_name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_email">Email</Label>
                                    <Input type="email" name="client_email" id="client_email" value={form.client_email}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_contact_no">Contact No</Label>
                                    <Input type="text" name="client_contact_no" id="client_contact_no" value={form.client_contact_no}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={6}>
                                <Alert color="light">BILLING ADDRESS</Alert>
                                <FormGroup>
                                    <Label htmlFor="client_shipping_address">Address</Label>
                                    <Input type="text" name="client_shipping_address" id="client_shipping_address" value={form.client_shipping_address}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_shipping_city">City</Label>
                                    <Input type="text" name="client_shipping_city" id="client_shipping_city" value={form.client_shipping_city}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_shipping_pincode">PIN Code</Label>
                                    <Input type="number" name="client_shipping_pincode" id="client_shipping_pincode" value={form.client_shipping_pincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_shipping_state">State</Label>
                                    <Input type="text" name="client_shipping_state" id="client_shipping_state" value={form.client_shipping_state}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <Alert color="light">SHIPPING ADDRESS</Alert>
                                <FormGroup>
                                    <Label htmlFor="client_billing_address">Address</Label>
                                    <Input type="text" name="client_billing_address" id="client_billing_address" value={form.client_billing_address}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_city">City</Label>
                                    <Input type="text" name="client_city" id="client_city" value={form.client_city}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_pincode">PIN Code</Label>
                                    <Input type="number" name="client_pincode" id="client_pincode" value={form.client_pincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="client_state">State</Label>
                                    <Input type="text" name="client_state" id="client_state" value={form.client_state}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_contact_person">Contact Person</Label>
                                    <Input type="text" name="client_contact_person" id="client_contact_person" value={form.client_contact_person}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_region">Client Region</Label>
                                    <Input type="select" id="client_region"
                                        name={"client_region"}
                                        value={form.client_region}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.client_region)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_payment_terms">Payment Terms</Label>
                                    <Input type="text" name="client_payment_terms" id="client_payment_terms" value={form.client_payment_terms}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_category">Client Category</Label>
                                    <Input type="select" id="client_category"
                                        name={"client_category"}
                                        value={form.client_category}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.client_category)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_product_user_type">Product User Type</Label>
                                    <Input type="select" id="client_product_user_type"
                                        name={"client_product_user_type"}
                                        value={form.client_product_user_type}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.client_product_user_type)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_pan">Client PAN</Label>
                                    <Input type="text" name="client_pan" id="client_pan" value={form.client_pan}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_code">Client Code</Label>
                                    <Input type="text" name="client_code" id="client_code" value={form.client_code}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_is_gst_registered">GST is Registered?</Label>
                                    <Input type="select" id="client_is_gst_registered"
                                        name={"client_is_gst_registered"}
                                        value={form.client_is_gst_registered}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.client_is_gst_registered)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client_gst">Client GST</Label>
                                    <Input type="text" name="client_gst" id="client_gst" value={form.client_gst}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/masters/clients">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersItem;
