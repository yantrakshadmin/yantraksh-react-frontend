import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createShipperMasterVendor, fetchShipperMasterVendor, editShipperMasterVendor } from '../../../helpers/api';
import history from '../../../history';


const AddMastersItem = props => {

    const optionsData = {
        vendor_type: [
            'Material',
            'Transporter',
            'Warehouse',
            'Service',
            'Repair',
            'Others',
        ],
        vendor_region: [
            'North',
            'West',
            'East',
            'South',
        ],
    }

    const [form, setForm] = useState({

        vendor_type: '',
        vendor_name: '',
        vendor_email: '',

        vendor_street: '',
        vendor_city: '',
        vendor_pincode: 0,
        vendor_state: '',
        vendor_region: '',

        vendor_code: '',
        vendor_beneficiary_name: '',
        vendor_account_no: '',
        vendor_bank_name: '',
        vendor_ifsc: '',
        vendor_branch_code: '',

        vendor_pan: '',
        vendor_gst: '',
        vendor_payment_terms: '',

        vendor_contact_person_name: '',
        vendor_contact_person_no: '',

        vendor_remarks: '',
    })

    useEffect(() => {
        if (props.match.params.id) {
            const fetchItemData = async () => {
                const itemData = await fetchShipperMasterVendor(props.match.params.id);
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
                    await editShipperMasterVendor(props.match.params.id, form);
                    setPhase(0);
                    toast.success('Item Updated Successfully');
                } else {
                    await createShipperMasterVendor(form);
                    setPhase(0);
                    toast.success('Item Created Successfully');
                    history.push('/dashboard/masters/vendors');
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
                    {props.match.params.id ? <b>Edit Vendor</b> : <b>Add Vendor</b>}
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_type">Type</Label>
                                    <Input type="select" id="vendor_type"
                                        name={"vendor_type"}
                                        value={form.vendor_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value={""} defaultValue>Select Vendor Type</option>
                                        {renderOptions(optionsData.vendor_type)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_name">Name*</Label>
                                    <Input type="text" name="vendor_name" id="vendor_name" value={form.vendor_name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_email">Email</Label>
                                    <Input type="email" name="vendor_email" id="vendor_email" value={form.vendor_email}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_street">Street</Label>
                                    <Input type="text" name="vendor_street" id="vendor_street" value={form.vendor_street}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_city">City</Label>
                                    <Input type="text" name="vendor_city" id="vendor_city" value={form.vendor_city}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_state">State</Label>
                                    <Input type="text" name="vendor_state" id="vendor_state" value={form.vendor_state}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_pincode">PIN Code</Label>
                                    <Input type="number" name="vendor_pincode" id="vendor_pincode" value={form.vendor_pincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_region">Region</Label>
                                    <Input type="select" id="vendor_region"
                                        name={"vendor_region"}
                                        value={form.vendor_region}
                                        onChange={handleInputChange}
                                    >
                                        <option value={""} defaultValue>Select Vendor Region</option>
                                        {renderOptions(optionsData.vendor_region)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_code">Vendor Code</Label>
                                    <Input type="text" name="vendor_code" id="vendor_code" value={form.vendor_code}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_beneficiary_name">Vendor Beneficiary Name</Label>
                                    <Input type="text" name="vendor_beneficiary_name" id="vendor_beneficiary_name" value={form.vendor_beneficiary_name}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_account_no">Account Number</Label>
                                    <Input type="text" name="vendor_account_no" id="vendor_account_no" value={form.vendor_account_no}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_bank_name">Bank Name</Label>
                                    <Input type="text" name="vendor_bank_name" id="vendor_bank_name" value={form.vendor_bank_name}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_ifsc">IFSC</Label>
                                    <Input type="text" name="vendor_ifsc" id="vendor_ifsc" value={form.vendor_ifsc}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_branch_code">Branch Code</Label>
                                    <Input type="text" name="vendor_branch_code" id="vendor_branch_code" value={form.vendor_branch_code}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_pan">PAN</Label>
                                    <Input type="text" name="vendor_pan" id="vendor_pan" value={form.vendor_pan}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_gst">GST</Label>
                                    <Input type="text" name="vendor_gst" id="vendor_gst" value={form.vendor_gst}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_payment_terms">Payment Terms</Label>
                                    <Input type="text" name="vendor_payment_terms" id="vendor_payment_terms" value={form.vendor_payment_terms}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_contact_person_name">Contact Person Name</Label>
                                    <Input type="text" name="vendor_contact_person_name" id="vendor_contact_person_name" value={form.vendor_contact_person_name}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor_contact_person_no">Contact Person No</Label>
                                    <Input type="text" name="vendor_contact_person_no" id="vendor_contact_person_no" value={form.vendor_contact_person_no}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label htmlFor="vendor_remarks">Remarks</Label>
                                    <Input type="text" name="vendor_remarks" id="vendor_remarks" value={form.vendor_remarks}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/masters/vendors">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersItem;
