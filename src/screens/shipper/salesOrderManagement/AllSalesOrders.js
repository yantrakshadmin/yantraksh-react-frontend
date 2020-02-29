import React, { useState, useEffect, useCallback } from 'react';
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
            formatter: (cell, row) => {
                if (props.clients.length > 0)
                    return (_.find(props.clients, { id: parseInt(row.client) })).client_name;
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

    return (
        <BootstrapTable keyField='id' data={props.salesOrders} columns={columns} />
    );
}


export default AllSalesOrders;