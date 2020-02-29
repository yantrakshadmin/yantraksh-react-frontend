import React, { useState, useEffect, useCallback } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import _ from 'lodash';


const ReadyToDispatch = props => {

    const handleCheck = useCallback(
        (ev, row) => {
            if (ev.target.checked === true) {
                props.setSelectedForRTD([...props.selectedForRTD, row.id]);
            } else if (ev.target.checked === false) {
                props.setSelectedForRTD((props.selectedForRTD).filter(el => el !== row.id));
            }
        }, [props,]
    )

    const columns = [
        {
            text: 'Select',
            formatExtraData: { handleCheck, props },
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return (
                    <FormGroup check>
                        <Input checked={formatExtraData.props.selectedForRTD.includes(row.id)} type="checkbox" onChange={ev => formatExtraData.handleCheck(ev, row)} id={`checkbox${row.id}`} />
                    </FormGroup>
                )
            }
        },
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


export default ReadyToDispatch;