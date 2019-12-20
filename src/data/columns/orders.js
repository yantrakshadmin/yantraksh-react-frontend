import React from "react";
import {Badge} from "reactstrap";

export default [{
    dataField: 'Name',
    text: 'Name',
    sort: true
}, {
    dataField: 'pid',
    text: 'SKU ID',
    sort: true
}, {
    dataField: 'Quantity',
    text: 'Quantity',
    sort: true
}, {
    dataField: 'Height',
    text: 'Dimension',
    isDummyField: true,
    formatter: (cell, row) => (<div>
        {row.length} x {row.width} x {row.height}
    </div>)
}, {
    dataField: 'Weight',
    text: 'Weight',
    sort: true
}, {
    dataField: 'Volume',
    text: 'Volume',
    sort: true,
}, {
    dataField: 'origin',
    text: 'Origin',
    sort: true
}, {
    dataField: 'destination',
    text: 'Destination',
    sort: true
}, {
    dataField: 'date',
    text: 'Date',
    sort: true,
}, {
    dataField: 'rtd',
    text: 'Status',
    isDummyField: true,
    formatExtraData: (row) => {
        if (row.is_dispatched)
            return (<Badge color="success" style={{width: '100%'}}>Dispatched</Badge>);
        if (row.rtd)
            return (<Badge color="primary" style={{width: '100%'}}>RTD</Badge>);

        return (<Badge color="warning" style={{width: '100%'}}>On Hold</Badge>)
    },
    formatter: (cell, row, rowIndex, formatExtraData) => {
        return formatExtraData(row);
    },
    align: 'center',
}];
