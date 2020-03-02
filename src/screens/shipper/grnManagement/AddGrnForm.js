import React,{ useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Row, Col, Label, Input, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import history from '../../../history';

import { fetchShipperMasterItems, fetchShipperMasterWarehouses, fetchShipperMasterVendors, createGrn } from '../../../helpers/api';


const AddGrnForm = props => {

    const optionsData = {
        vehicle_type: [
            'Part Load',
            'Tata ACE / Pick-Up',
            'TATA-407',
            '17ft Vehicle',
            '19ft Vehicle',
            '20ft Vehicle',
            '22ft Vehicle',
            '32ft SXL',
            '32ft MXL',
            'Any Other Type',
        ],
    }

    const [form, setForm] = useState({
        warehouse: '',
        vendor: '',
        reference_no: '',
        inward_date: '',
        driver_number: '',
        vehicle_number: '',
        vehicle_type: '',
        invoice_no: '',
        items: [],
        remarks: '',
        reciever: '',
    })

    const [items,setItems] = useState([]);

    const [warehouses,setWarehouses] = useState([]);

    const [vendors,setVendors] = useState([]);

    const [selectedItemForm, setSelectedItemForm] = useState({
        item: "",
        item_quantity: 0
    });

    useEffect(() => {
        // if (props.match.params.id) {
        //     const fetchItemData = async () => {
        //         const itemData = await fetchShipperMasterItem(props.match.params.id);
        //         setForm(itemData);
        //     }
        //     fetchItemData();
        // }
        const fetchItems = async () => {
            const itemData = await fetchShipperMasterItems();
            setItems(itemData);
        }
        const fetchWarehouses = async () => {
            const itemData = await fetchShipperMasterWarehouses();
            setWarehouses(itemData);
        }
        const fetchVendors = async () => {
            const itemData = await fetchShipperMasterVendors();
            setVendors(itemData);
        }
        fetchItems();
        fetchWarehouses();
        fetchVendors();
    }, [setItems, setWarehouses, setVendors])

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

    const selectedItemInputChange = useCallback(
        event => {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            setSelectedItemForm({
                ...selectedItemForm,
                [name]: value
            });
        },
        [selectedItemForm, setSelectedItemForm]
    )

    const renderOptions = useCallback(
        data => {
            return data.map(o => {
                return <option key={o} value={o}>{o}</option>;
            });
        },
        []
    )

    const renderItemOption = useCallback(
        () => {
            if (items.length > 0) {
                return items.map(i => {
                    return <option key={i.id} value={i.id}>{i.name}</option>;
                })
            }
        }
    )

    const renderWarehouseOptions = useCallback(
        () => {
            if (warehouses.length > 0) {
                return warehouses.map(i => {
                    return <option key={i.id} value={i.id}>{i.warehouse_name}</option>;
                })
            }
        },
        [warehouses,]
    )

    const renderVendorOptions = useCallback(
        () => {
            if (vendors.length > 0) {
                return vendors.map(i => {
                    return <option key={i.id} value={i.id}>{i.vendor_name}</option>;
                })
            }
        },
        [vendors,]
    )

    const addItem = useCallback(
        async () => {
            setForm({ ...form, items: [...form.items, selectedItemForm] });
            setSelectedItemForm({
                item: '',
                item_quantity: '',
            });
        },
        [form, setForm, selectedItemForm, setSelectedItemForm]
    )

    const deleteItem = useCallback(
        async i => {
            if ("id" in i) {
                setForm({ ...form, items: form.items.filter(e => e.id !== i.id) });
            } else {
                setForm({ ...form, items: form.items.filter(e => (e!==i)) });
            }
        },
        [form, setForm]
    )

    const renderAddItemButton = useCallback(
        () => {
            if (selectedItemForm.item && selectedItemForm.item_quantity) {
                return <Button onClick={addItem} type="button" title="Add" color="success" size="sm"><FontAwesomeIcon icon={faPlus} /></Button>;
            }
            return <Button type="button" title="Add" color="success" size="sm" disabled><FontAwesomeIcon icon={faPlus} /></Button>
        }
    )

    const renderItemsList = useCallback(
        () => {
            if (form.items) {
                return form.items.map((i, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{(_.find(items, { id: parseInt(i.item) })).name}</td>
                            <td>{i.item_quantity}</td>
                            <td>
                                <Button type="button" title="Delete Item" onClick={() => deleteItem(i)} color="danger" size="sm">
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
                    // await editShipperMasterItem(props.match.params.id, form);
                    // setPhase(0);
                    // toast.success('Item Updated Successfully');
                } else {
                    await createGrn(form);
                    setPhase(0);
                    toast.success('Grn Created Successfully');
                    history.push('/dashboard/grn');
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
                    {props.match.params.id ? <b>Edit GRN</b> : <b>Add GRN</b>}
                </CardHeader>
                <CardBody>
                    <Form method="post" onSubmit={handleSubmit}>

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="warehouse">Warehouse*</Label>
                                    <Input type="select" id="warehouse"
                                        name={"warehouse"}
                                        value={form.warehouse}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value={""} defaultValue>Select a Warehouse</option>
                                        {renderWarehouseOptions()}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vendor">Vendor*</Label>
                                    <Input type="select" id="vendor"
                                        name={"vendor"}
                                        value={form.vendor}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value={""} defaultValue>Select a Vendor</option>
                                        {renderVendorOptions()}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="reciever">Receiver</Label>
                                    <Input type="text" name="reciever" id="reciever" value={form.reciever}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="invoice_no">Invoice No.</Label>
                                    <Input type="text" name="invoice_no" id="invoice_no" value={form.invoice_no}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="reference_no">Reference No.</Label>
                                    <Input type="text" name="reference_no" id="reference_no" value={form.reference_no}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="inward_date">Inward Date</Label>
                                    <Input type="date" name="inward_date" id="inward_date" value={form.inward_date}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />

                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="driver_number">Driver No.</Label>
                                    <Input type="text" name="driver_number" id="driver_number" value={form.driver_number}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vehicle_number">Vehicle No.</Label>
                                    <Input type="text" name="vehicle_number" id="vehicle_number" value={form.vehicle_number}
                                        onChange={handleInputChange} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="vehicle_type">Vehicle Type</Label>
                                    <Input type="select" id="vehicle_type"
                                        name={"vehicle_type"}
                                        value={form.vehicle_type}
                                        onChange={handleInputChange}
                                    >
                                        <option value={""} defaultValue>Select Vehicle Type</option>
                                        {renderOptions(optionsData.vehicle_type)}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>

                        <hr />
                       
                        <Row>
                            <Col md={12}>
                                
                            <Table className="mt-3" striped responsive>
                                    <thead>
                                        <tr>
                                            <th>Item*</th>
                                            <th>QTY*</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderItemsList()}
                                        <tr>
                                            <td>
                                                <Input type="select" id="item"
                                                    name={"item"}
                                                    value={selectedItemForm.item}
                                                    onChange={selectedItemInputChange}
                                                >
                                                    <option value={""} defaultValue>Select Item</option>
                                                    {renderItemOption()}
                                                </Input>
                                            </td>
                                            <td><Input type="number" name="item_quantity" value={selectedItemForm.item_quantity} onChange={selectedItemInputChange} bsSize="sm" /></td>
                                            <td>{renderAddItemButton()}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Col>
                        </Row>

                        <hr />
                       
                        <Row>
                            <Col md={12}>
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
                        <Link to="/grn">
                            <Button type="button" color="link" size="lg">Cancel</Button>
                        </Link>

                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddGrnForm;