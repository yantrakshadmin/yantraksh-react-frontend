import React, { useState, useEffect, useCallback } from 'react';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { fetchShipperMasterItems, createSalesOrder } from '../../../helpers/api';
import { toast } from 'react-toastify';
import _ from 'lodash';


const AddOrderModal = props => {

    const optionsData = {
        delivery_method: [
            'Full-Truck Load',
            'Part-Truck Load',
        ],
    }

    const [items, setItems] = useState([]);

    const [selectedItem, setSelectedItem] = useState({ item: "", item_quantity: 0 });

    useEffect(() => {
        const loadItemsData = async () => {
            const itemsData = await fetchShipperMasterItems();
            setItems(itemsData);
        }
        loadItemsData();
    }, [])

    const [phase, setPhase] = useState(0);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [form, setForm] = useState({
        client: "",
        reference_no: "",
        date: "",
        shipment_date: "",
        delivery_method: 'Full-Truck Load',
        items: [],
        origin: "",
        destination: "",
    });

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

    const renderClientOptions = useCallback(
        () => {
            if (props.clients.length > 0) {
                return props.clients.map(i => {
                    return <option key={i.id} value={i.id}>{i.client_name}</option>;
                })
            }
        },
        [props,]
    )

    const renderItemOptions = useCallback(
        () => {
            if (items.length > 0) {
                return items.map(i => {
                    return <option key={i.id} value={i.id}>{i.name}</option>;
                })
            }
        },
        [props,]
    )

    const addFormItems = useCallback(
        () => {
            setForm({ ...form, items: [...form.items, selectedItem] })
            setSelectedItem({ item: "", item_quantity: 0 })
        },
        [form, setForm, selectedItem, setSelectedItem]
    )

    const removeFormItems = useCallback(
        (item, item_quantity) => {
            setForm({ ...form, items: form.items.filter(i => i.item !== item && i.item_quantity !== item_quantity) })
        }
    )

    const renderFormItemsList = useCallback(
        () => {
            if (form.items.length > 0) {
                return form.items.map((i, idx) => {
                    return (
                        <FormGroup key={idx}>
                            <InputGroup>
                                <Input size="sm" value={(_.find(items, { id: parseInt(i.item) })).name} disabled />
                                <Input size="sm" value={i.item_quantity} disabled />
                                <InputGroupAddon addonType="append">
                                    <Button type="button" title="Add" color="danger" onClick={() => removeFormItems(i.item, i.item_quantity)} size="sm"><FontAwesomeIcon icon={faMinus} /></Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </FormGroup>
                    )
                })
            }
        },
        [form,]
    )

    const btnLoader = useCallback(
        () => {
            if (phase === 1) {
                return (
                    <Button color="primary" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving
                    </Button>
                );
            }
            return <Button type="submit" color="primary">Save</Button>;
        },
        [phase,]
    )

    const handleSubmit = useCallback(
        async event => {
            event.preventDefault();
            setPhase(1);
            try {
                await createSalesOrder(form);
                const data = await props.fetchSalesOrders();
                props.setSalesOrders(data);
                setPhase(0);
                toast.success('Sales Order Created');
                toggle();
            } catch (err) {
                toast.error('Something went wrong!');
                setPhase(0);
            }
        },
        [form, setPhase, toggle, props,]
    )

    return (
        <div>
            <Button color="primary" onClick={toggle}><FontAwesomeIcon icon={faPlus} /> Add Sales Order</Button>
            <Modal size="lg" isOpen={modal} toggle={toggle}>
                <Form method="post" onSubmit={handleSubmit}>
                    <ModalHeader toggle={toggle}>Add Sales Order</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="client">Client Name*</Label>
                                    <Input type="select" id="client"
                                        name={"client"}
                                        value={form.client}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value={""} defaultValue>Select a Client</option>
                                        {renderClientOptions()}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="reference_no">Reference No*</Label>
                                    <Input type="text" name="reference_no" id="reference_no" value={form.reference_no}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label htmlFor="delivery_method">Delivery Method*</Label>
                                    <Input type="select" id="delivery_method"
                                        name={"delivery_method"}
                                        value={form.delivery_method}
                                        onChange={handleInputChange}
                                    >
                                        {renderOptions(optionsData.delivery_method)}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="date">Date*</Label>
                                    <Input type="date" name="date" id="date" value={form.date}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="shipment_date">Shipment Date*</Label>
                                    <Input type="date" name="shipment_date" id="shipment_date" value={form.shipment_date}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label htmlFor="select_item">Items*</Label>
                                    {renderFormItemsList()}
                                    <InputGroup>
                                        <Input type="select" id="select_item"
                                            name={"select_item"}
                                            value={selectedItem.item}
                                            onChange={ev => setSelectedItem({ ...selectedItem, item: ev.target.value })}
                                        >
                                            <option value={""} defaultValue>Select an Item</option>
                                            {renderItemOptions()}
                                        </Input>
                                        <Input type="number" id="select_item_quantity"
                                            name="select_item_quantity"
                                            value={selectedItem.item_quantity}
                                            onChange={ev => setSelectedItem({ ...selectedItem, item_quantity: ev.target.value })}
                                            placeholder="Quantity"
                                        />
                                        <InputGroupAddon addonType="append">
                                            {selectedItem.item && selectedItem.item_quantity ? <Button type="button" title="Add" color="success" onClick={addFormItems} size="sm"><FontAwesomeIcon icon={faPlus} /></Button> : <Button type="button" title="Add" color="success" size="sm" disabled><FontAwesomeIcon icon={faPlus} /></Button>}
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="origin">Origin*</Label>
                                    <Input type="text" name="origin" id="origin" value={form.origin}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label htmlFor="destination">Destination*</Label>
                                    <Input type="text" name="destination" id="destination" value={form.destination}
                                        onChange={handleInputChange} required />
                                </FormGroup>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        {btnLoader()}{' '}
                        <Button type="button" color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
}

export default AddOrderModal;