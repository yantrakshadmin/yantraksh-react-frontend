import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createShipperMasterWarehouse, fetchShipperMasterWarehouse, editShipperMasterWarehouse } from '../../../helpers/api';
import history from '../../../history';


const AddMastersItem = props => {

    const optionsData = {}

    const [form, setForm] = useState({
        warehouse_name: '',
        warehouse_email: '',

        warehouse_contact: '',
        warehouse_address: '',
        warehouse_city: '',
        warehouse_pincode: 0,
        warehouse_state: '',

        warehouse_pan: '',
        warehouse_gst: '',
    })

    useEffect(() => {
        if (props.match.params.id) {
            const fetchItemData = async () => {
                const itemData = await fetchShipperMasterWarehouse(props.match.params.id);
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
                    await editShipperMasterWarehouse(props.match.params.id, form);
                    setPhase(0);
                    toast.success('Warehouse Updated Successfully');
                } else {
                    await createShipperMasterWarehouse(form);
                    setPhase(0);
                    toast.success('Warehouse Created Successfully');
                    history.push('/dashboard/masters/warehouses');
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
                    {props.match.params.id ? <b>Edit Warehouse</b> : <b>Add Warehouse</b>}
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_name">Name*</Label>
                                    <Input type="text" name="warehouse_name" id="warehouse_name" value={form.warehouse_name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_email">Email</Label>
                                    <Input type="email" name="warehouse_email" id="warehouse_email" value={form.warehouse_email}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_contact">Contact</Label>
                                    <Input type="text" name="warehouse_contact" id="warehouse_contact" value={form.warehouse_contact}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_address">Address</Label>
                                    <Input type="text" name="warehouse_address" id="warehouse_address" value={form.warehouse_address}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_city">City</Label>
                                    <Input type="text" name="warehouse_city" id="warehouse_city" value={form.warehouse_city}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_state">State</Label>
                                    <Input type="text" name="warehouse_state" id="warehouse_state" value={form.warehouse_state}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_pincode">PIN Code</Label>
                                    <Input type="number" name="warehouse_pincode" id="warehouse_pincode" value={form.warehouse_pincode}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_pan">PAN</Label>
                                    <Input type="text" name="warehouse_pan" id="warehouse_pan" value={form.warehouse_pan}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse_gst">GST</Label>
                                    <Input type="text" name="warehouse_gst" id="warehouse_gst" value={form.warehouse_gst}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/masters/warehouses">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersItem;
