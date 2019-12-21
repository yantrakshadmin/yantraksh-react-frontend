import React from "react";
import {Badge} from "reactstrap";

function formatDate(d) {
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d. getSeconds();

    return (
        <span>{ d.getDate() }-{ d.getMonth() + 1 }-{ d.getFullYear() } { ("0" + hrs).slice(-2) }:{ ("0" + mins).slice(-2) }:{ ("0" + secs).slice(-2) }</span>
    )
}

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
        {row.Length} x {row.Breadth} x {row.Height}
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
    formatter: (cell,row) => {
        let d = new Date(row.date);
        return formatDate(d);
    }
}, {
    dataField: 'truck_type',
    text: 'Truck Type',
    isDummyField: true,
    formatExtraData: (row) => {
        if (row.truck_type === "Open")
            return (<Badge color="warning" style={{width: '100%'}}>{row.truck_type}</Badge>);
        else if (row.truck_type === "Container")
            return (<Badge color="primary" style={{width: '100%'}}>{row.truck_type}</Badge>);
        else if (row.truck_type === "Trailer")
            return (<Badge color="success" style={{width: '100%'}}>{row.truck_type}</Badge>)
    },
    formatter: (cell, row, rowIndex, formatExtraData) => {
        return formatExtraData(row);
    },
    align: 'center',
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
