import React, { Component, useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


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
        ]
    }

    const [form, setForm] = useState({
        type: 'Goods',
        name: '',
        sku: '',
        unit: '',
        hsn_sac_code: '',
        tax_preference: 'Taxable',
        exemption_reason: '',

        sales_selling_price: '',
        purchase_cost_price: '',

        intra_state_tax_rate: '',
        inter_state_tax_rate: '',
        remarks: '',
    })

    const [phase, setPhase] = useState(0);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]: value
        });
    };

    const renderOptions = data => {
        return data.map(o => {
            return <option key={o} value={o}>{o}</option>;
        });
    }

    const renderTaxInput = () => {
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
                                <option value={""} selected>Select a Tax</option>
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
                                <option value={""} selected>Select a Tax</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            )
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
                                <option value={""} selected>Select a Tax</option>
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
                                <option value={""} selected>Select a Tax</option>
                                {renderOptions(optionsData.inter_state_tax_rate)}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            )
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
                            <option value={""} selected>Select a Tax</option>
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
                            <option value={""} selected>Select a Tax</option>
                            {renderOptions(optionsData.inter_state_tax_rate)}
                        </Input>
                    </FormGroup>
                </Col>
            </Row>
        )
    }

    const btnLoader = () => {
        if (phase === 1) {
            return (
                <Button color="primary" size="lg" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving
                </Button>
            )
        }
        return <Button type="submit" color="primary" size="lg">Save</Button>
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        setPhase(1);
        console.log(form)
        setPhase(0);
    }

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <b>Add Item</b>
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup tag="fieldset">
                                    <Label>Type</Label>
                                    <FormGroup check>
                                        <Label check>
                                            <Input value="Goods" checked={form.type === "Goods"} type="radio" name="type" onChange={handleInputChange} />{' '}
                                            Goods
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input value="Service" checked={form.type === "Service"} type="radio" name="type" onChange={handleInputChange} />{' '}
                                            Service
                                        </Label>
                                    </FormGroup>
                                </FormGroup>
                            </Col>
                        </Row>

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
                                    <Label htmlFor="sku">SKU</Label>
                                    <Input type="text" name="sku" id="sku" value={form.sku}
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
                                    <Label htmlFor="sales_selling_price">Selling Price</Label>
                                    <Input type="text" name="sales_selling_price" id="sales_selling_price" value={form.sales_selling_price}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="purchase_cost_price">Cost Price</Label>
                                    <Input type="text" name="purchase_cost_price" id="purchase_cost_price" value={form.purchase_cost_price}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        {renderTaxInput()}

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
