import React,{useState, useEffect, useCallback} from 'react';
import { Card,CardBody,Row,Col,Button, Table, Container,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTrashAlt,faFilePdf } from '@fortawesome/free-solid-svg-icons';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';
import { toast } from 'react-toastify';


import { fetchGrns,deleteGrn , fetchShipperMasterItems, fetchShipperMasterWarehouses, fetchShipperMasterVendors, } from '../../../helpers/api';


const Action = ({ item, items, setItems }) => {

    const [modal, setModal] = useState(false);

    const toggle = useCallback(
        () => {
            setModal(!modal);
        },
        [modal, setModal]
    )

    const deleteItem = useCallback(
        async () => {
            try {
                await deleteGrn(item.id);
                await setItems(items.filter(e => e.id !== item.id));
                toggle();
                toast.success(`Deleted!`);
            } catch (err) {
                toggle();
                toast.error("Something went wrong");
            }
        },
        [item, items, setItems, toggle]
    )

    return (
        <div>
            <Link to={`/grn/edit/${item.id}`}>
                <Button color="primary"><FontAwesomeIcon icon={faPencilAlt} /></Button>{" "}
            </Link>
            <Button onClick={toggle} color="danger"><FontAwesomeIcon icon={faTrashAlt} /></Button>{" "}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete {item.name}?</ModalHeader>
                <ModalBody>
                    Are you sure you want to permanently delete {item.name}?
            </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteItem}>Delete</Button>{' '}
                    <Button color="link" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const GRN = props => {

    const [grns,setGrns] = useState([]);

    const [items,setItems] = useState([]);

    const [warehouses,setWarehouses] = useState([]);

    const [vendors,setVendors] = useState([]);

    useEffect(() => {
        const fetchG = async () => {
            const itemData = await fetchGrns();
            setGrns(itemData);
        }
        fetchG();
    }, [])

    useEffect(() => {
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
    }, [])

    const columns = [
        {
            text: 'Sr. No.',
            sort: true,
            formatter: (cell, row, rowIndex) => {
                return rowIndex+1
            }
        },
        {
            dataField: 'warehouse',
            text: 'Warehouse',
            sort: true,
            formatExtraData: { warehouses, },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                if (warehouses.length > 0)
                    return (_.find(formatExtraData.warehouses, { id: parseInt(row.warehouse) })).warehouse_name;
                else
                    return "...";
            }
        },
        {
            dataField: 'vendor',
            text: 'Vendor',
            sort: true,
            formatExtraData: { vendors, },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                if (vendors.length > 0)
                    return (_.find(formatExtraData.vendors, { id: parseInt(row.vendor) })).vendor_name;
                else
                    return "...";
            }
        },
        {
            dataField: 'reference_no',
            text: 'Reference No',
            sort: true
        },
        {
            dataField: 'inward_date',
            text: 'Inward Date',
            sort: true
        },
        {
            dataField: 'vehicle_type',
            text: 'Vehicle Type',
            sort: true
        },
        {
            dataField: 'vehicle_number',
            text: 'Vehicle No',
            sort: true
        },
        {
            dataField: 'reciever',
            text: 'Reciever',
            sort: true
        },
        {
            text: 'Action',
            formatExtraData: { grns, setGrns },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return <Action item={row} items={formatExtraData.grns} setItems={formatExtraData.setGrns} />
            },
        },
    ];

    const expandRowItemsList = useCallback(
        row => {
            if (row.items.length > 0) {
                return row.items.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{(_.find(items, { id: parseInt(i.item) })).name}</td>
                            <td>{i.item_quantity}</td>
                            <td>
                                <Link to={`/grn/${row.id}/${i.item}/${(_.find(items, { id: parseInt(i.item) })).name}/${i.item_quantity}`}>
                                    <Button color="danger" size="sm"><FontAwesomeIcon icon={faFilePdf} /></Button>
                                </Link>
                            </td>
                        </tr>
                    );
                })
            }
        },[items,]
    )

    const expandRow = {
        renderer: (row, rowIndex) => {
            return (
                <Container fluid>
                    <Row>
                        <Col sm={4}>
                            <Table bordered className="mt-3" size="sm">
                                <thead>
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Qty</th>
                                        <th>Barcodes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expandRowItemsList(row)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            );
        }
    };

    return (
        <div className="animated fadeIn">
            <Card>
                <CardBody>

                    <Row>
                        <Col sm={6}>
                            <h3>GRN</h3>
                        </Col>
                        <Col sm={6} className="text-right">
                            <Link to="/grn/add">
                                <Button color="primary"><FontAwesomeIcon icon={faPlus} /> Add GRN</Button>
                            </Link>
                        </Col>
                    </Row>

                    <hr />

                    <BootstrapTable keyField='id' classes={"table-hover"} bordered={ false } data={grns} columns={columns} expandRow={expandRow} />

                </CardBody>
            </Card>
        </div>
    )
}

export default GRN;