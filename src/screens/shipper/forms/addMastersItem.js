import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { createShipperMasterItem, fetchShipperMasterItem, editShipperMasterItem } from '../../../helpers/api';
import history from '../../../history';


const AddMastersItem = props => {

    const optionsData = {
        tax_preference: [
            'Taxable',
            'Non-Taxable',
        ],
        unit: [
            'box',
            'cm',
            'ft',
            'g',
            'in',
            'kg',
            'km',
            'm',
            'pcs',
            'unit',
        ],
        intra_state_tax_rate: [
            'GST0 [0%]',
            'GST5 [5%]',
            'GST12 [12%]',
            'GST18 [18%]',
            'GST28 [28%]',
        ],
        inter_state_tax_rate: [
            'IGST0 [0%]',
            'IGST5 [5%]',
            'IGST12 [12%]',
            'IGST18 [18%]',
            'IGST28 [28%]',
        ],
        material_type: [
            'Fragile',
            'Non Fragile',
        ],
        inventory_account: [
            'Raw Material',
            'Inventory Stock',
        ]
    }

    const [form, setForm] = useState({
      
        name: '',
        sku_id: '',
        unit: '',
        hsn_sac_code: '',
        tax_preference: 'Taxable',
        exemption_reason: '',

        selling_price: 0,
        si_description: '',

        cost_price: 0,
        vendor: '',
        pi_description: '',

        intra_state_tax_rate: '',
        inter_state_tax_rate: '',

        length: 0,
        breadth: 0,
        height: 0,
        volume: 0,
        weight: 0,

        material_type: 'Fragile',
        vehicle_type: '',
        inventory_account: 'Raw Material',
        opening_stack: 0,

        remarks: '',
    })

    useEffect(() => {
        if (props.match.params.id) {
            const fetchItemData = async () => {
                const itemData = await fetchShipperMasterItem(props.match.params.id);
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

    const renderTaxInput = useCallback(
        () => {
            if (form.intra_state_tax_rate && !form.inter_state_tax_rate) {
                return (
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="intra_state_tax_rate">Intra State Tax Rate</Label>
                                <Input type="select" id="intra_state_tax_rate"
                                    name={"intra_state_tax_rate"}
                                    value={form.intra_state_tax_rate}
                                    onChange={handleInputChange}>
                                    <option value={""} defaultValue>Select a Tax</option>
                                    {renderOptions(optionsData.intra_state_tax_rate)}
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="inter_state_tax_rate">Inter State Tax Rate</Label>
                                <Input type="select" id="inter_state_tax_rate"
                                    name={"inter_state_tax_rate"}
                                    value={form.inter_state_tax_rate}
                                    onChange={handleInputChange} disabled>
                                    <option value={""} defaultValue>Select a Tax</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                );
            } else if (!form.intra_state_tax_rate && form.inter_state_tax_rate) {
                return (
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="intra_state_tax_rate">Intra State Tax Rate</Label>
                                <Input type="select" id="intra_state_tax_rate"
                                    name={"intra_state_tax_rate"}
                                    value={form.intra_state_tax_rate}
                                    onChange={handleInputChange} disabled>
                                    <option value={""} defaultValue>Select a Tax</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label htmlFor="inter_state_tax_rate">Inter State Tax Rate</Label>
                                <Input type="select" id="inter_state_tax_rate"
                                    name={"inter_state_tax_rate"}
                                    value={form.inter_state_tax_rate}
                                    onChange={handleInputChange}>
                                    <option value={""} defaultValue>Select a Tax</option>
                                    {renderOptions(optionsData.inter_state_tax_rate)}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                );
            }
            return (
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="intra_state_tax_rate">Intra State Tax Rate</Label>
                            <Input type="select" id="intra_state_tax_rate"
                                name={"intra_state_tax_rate"}
                                value={form.intra_state_tax_rate}
                                onChange={handleInputChange}>
                                <option value={""} defaultValue>Select a Tax</option>
                                {renderOptions(optionsData.intra_state_tax_rate)}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label htmlFor="inter_state_tax_rate">Inter State Tax Rate</Label>
                            <Input type="select" id="inter_state_tax_rate"
                                name={"inter_state_tax_rate"}
                                value={form.inter_state_tax_rate}
                                onChange={handleInputChange}>
                                <option value={""} defaultValue>Select a Tax</option>
                                {renderOptions(optionsData.inter_state_tax_rate)}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            );
        },
        [form,]
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
                    await editShipperMasterItem(props.match.params.id, form);
                    setPhase(0);
                    toast.success('Item Updated Successfully');
                } else {
                    await createShipperMasterItem(form);
                    setPhase(0);
                    toast.success('Item Created Successfully');
                    history.push('/dashboard/masters/items');
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
                    {props.match.params.id ? <b>Edit Item</b> : <b>Add Item</b>}
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
                                    <Label htmlFor="sku_id">SKU</Label>
                                    <Input type="text" name="sku_id" id="sku_id" value={form.sku_id}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="unit">Unit</Label>
                                    <Input type="select" id="unit"
                                        name={"unit"}
                                        value={form.unit}
                                        onChange={handleInputChange}
                                    >
                                        <option value={""} defaultValue>Select Unit</option>
                                        {renderOptions(optionsData.unit)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="hsn_sac_code">HSN / SAC Code</Label>
                                    <Input type="text" name="hsn_sac_code" id="hsn_sac_code" value={form.hsn_sac_code}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="tax_preference">Tax Preference</Label>
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

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="selling_price">Selling Price</Label>
                                    <Input type="number" name="selling_price" id="selling_price" value={form.selling_price}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="si_description">Description</Label>
                                    <Input type="text" name="si_description" id="si_description" value={form.si_description}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="cost_price">Cost Price</Label>
                                    <Input type="number" name="cost_price" id="cost_price" value={form.cost_price}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="vendor">Vendor</Label>
                                    <Input type="text" name="vendor" id="vendor" value={form.vendor}
                                        onChange={handleInputChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="pi_description">Description</Label>
                                    <Input type="text" name="pi_description" id="pi_description" value={form.pi_description}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {renderTaxInput()}

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="length">Length</Label>
                                    <Input type="number" name="length" id="length" value={form.length}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="breadth">Breadth</Label>
                                    <Input type="number" name="breadth" id="breadth" value={form.breadth}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="height">Height</Label>
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
                                    <Label htmlFor="weight">Weight</Label>
                                    <Input type="number" name="weight" id="weight" value={form.weight}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                        <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="material_type">Material Type</Label>
                                    <Input type="select" id="material_type"
                                        name={"material_type"}
                                        value={form.material_type}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.material_type)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vehicle_type">Vehicle Type</Label>
                                    <Input type="text" name="vehicle_type" id="vehicle_type" value={form.vehicle_type}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="inventory_account">Inventory Account</Label>
                                    <Input type="select" id="inventory_account"
                                        name={"inventory_account"}
                                        value={form.inventory_account}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.inventory_account)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="opening_stack">Opening Stock</Label>
                                    <Input type="number" name="opening_stack" id="opening_stack" value={form.opening_stack}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label htmlFor="remarks">Remarks</Label>
                                    <Input type="text" name="remarks" id="remarks" value={form.remarks}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {btnLoader()}
                        {' '}
                        <Link to="/masters/items">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddMastersItem;
