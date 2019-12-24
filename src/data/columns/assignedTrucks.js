import React from "react";

function formatDate(d) {
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    return (
        <span>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()} {("0" + hrs).slice(-2)}:{("0" + mins).slice(-2)}:{("0" + secs).slice(-2)}</span>
    )
}


export default [{
    dataField: 'truck_type',
    text: 'Truck Type',
    sort: true,
    formatter: (cell, row) => {
        if (row.truck_type === 1)
            return 'CONTAINER';

        if (row.truck_type === 2)
            return 'TRAILER';

        if (row.truck_type === 3)
            return 'OPEN';
    },
}, {
    dataField: 'origin',
    text: 'Origin',
    sort: true

}, {
    dataField: 'destination',
    text: 'Destination',
    sort: true
}, {
    dataField: 'total_trucks',
    text: 'No. of trucks',

}, {
    dataField: 'material_type',
    text: 'Material Type',
    sort: true
}, {
    dataField: 'scheduled_date',
    text: 'Date',
    sort: true,
    formatter: (cell, row) => {
        let d = new Date(row.scheduled_date);
        return formatDate(d);
    }
}, {
    dataField: 'offered_price',
    text: 'Offered Price',
    sort: true
}];
