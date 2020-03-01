import React, { useState, useEffect, useCallback } from 'react';
import { Table, Row, Col } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';


const AllSalesOrders = props => {

    const columns = [
        {
            dataField: 'reference_no',
            text: 'Reference No',
            sort: true,
        },
        {
            dataField: 'client',
            text: 'Client',
            sort: true,
            formatExtraData: { props, },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                if (props.clients.length > 0)
                    return (_.find(formatExtraData.props.clients, { id: parseInt(row.client) })).client_name;
                else
                    return "...";
            }
        },
        {
            dataField: 'shipment_date',
            text: 'Shipment Date',
            sort: true
        },
        {
            dataField: 'origin',
            text: 'Origin',
            sort: true
        },
        {
            dataField: 'destination',
            text: 'Destination',
            sort: true
        },
        {
            dataField: 'delivery_method',
            text: 'Delivery Method',
            sort: true
        },
        {
            dataField: 'status',
            text: 'Status',
            sort: true
        },
    ];

    const expandRowItemsList = useCallback(
        row => {
            if (row.items.length > 0) {
                return row.items.map(i => {
                    return (
                        <tr key={i.id}>
                            <td>{(_.find(props.items, { id: parseInt(i.item) })).name}</td>
                            <td>{i.item_quantity}</td>
                        </tr>
                    );
                })
            }
        },[props,]
    )

    const expandRow = {
        renderer: (row, rowIndex) => {
            return (
                <Row className="justify-content-center">
                    <Col xs={8}>
                        <Table className="mt-3">
                            <thead>
                                <tr>
                                    <th>Item Name</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expandRowItemsList(row)}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            );
        }
    };

    return (
        <BootstrapTable keyField='id' data={props.salesOrders} columns={columns} expandRow={expandRow} />
    );
}


export default AllSalesOrders;