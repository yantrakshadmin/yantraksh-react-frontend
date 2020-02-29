import React, { useState, useEffect, useCallback } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';


const expandRow = {
    renderer: (row, rowIndex) => (
        <div>
            {console.log(row)}
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>You can render anything here, also you can add additional data on every row object</p>
            <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
    )
};

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

    return (
        <BootstrapTable keyField='id' data={props.salesOrders} columns={columns} expandRow={expandRow} />
    );
}


export default AllSalesOrders;