import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createShipperMasterVehicle, fetchShipperMasterVehicle, editShipperMasterVehicle } from '../../../helpers/api';
import history from '../../../history';


const AddMastersItem = props => {

    const optionsData = {
        category: [
            'Open',
            'Container',
            'Trailer',
        ],
    }

    const [form, setForm] = useState({
        name: '',
        category: '',
        length: 0,
        breadth: 0,
        height: 0,
        volume: 0,
        weight: 0,
    })

    useEffect(() => {
        if (props.match.params.id) {
            const fetchItemData = async () => {
                const itemData = await fetchShipperMasterVehicle(props.match.params.id);
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
                    await editShipperMasterVehicle(props.match.params.id, form);
                    setPhase(0);
                    toast.success('Vehicle Updated Successfully');
                } else {
                    await createShipperMasterVehicle(form);
                    setPhase(0);
                    toast.success('Vehicle Created Successfully');
                    history.push('/dashboard/masters/vehicles');
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
                    {props.match.params.id ? <b>Edit Vehicle</b> : <b>Add Vehicle</b>}
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="name">Name*</Label>
                                    <Input type="text" name="name" id="name" value={form.name}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="category">Category</Label>
                                    <Input type="select" id="category"
                                        name={"category"}
                                        value={form.category}
                                        onChange={handleInputChange}
                                    >
                                        <option value={""} defaultValue>Select Category</option>
                                        {renderOptions(optionsData.category)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="length">Length (Ft)</Label>
                                    <Input type="number" name="length" id="length" value={form.length}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="breadth">Breadth (Ft)</Label>
                                    <Input type="number" name="breadth" id="breadth" value={form.breadth}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="height">Height (Ft)</Label>
                                    <Input type="number" name="height" id="height" value={form.height}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="volume">Volume</Label>
                                    <Input type="number" name="volume" id="volume" value={form.volume}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="weight">Weight (Tn)</Label>
                                    <Input type="number" name="weight" id="weight" value={form.weight}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/masters/vehicles">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersItem;
