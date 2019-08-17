import {Badge, Button} from "reactstrap";
import React from "react";

export default [
    {
        dataField: 'name',
        text: 'ID',
        sort: true

    }, {
        dataField: 'truck_type',
        text: ' Vehicles',
        sort: true,
        formatter: (cell, row) => {
            if (row.truck_type === 1)
                return (<Badge color="success" style={{width: '100%'}}>Container</Badge>);
            if (row.truck_type === 2)
                return (<Badge color="primary" style={{width: '100%'}}>Trailer</Badge>);
            if (row.truck_type === 3)
                return (<Badge color="warning" style={{width: '100%'}}>Open</Badge>)
        }

    }, {
        dataField: 'origin',
        text: 'Gross Weight',
        sort: true

    }, {
        dataField: 'destination',
        text: 'Volume',
        sort: true
    }, {
        dataField: 'total_trucks',
        text: 'Utilization',

    }, {
        dataField: 'scheduled_date',
        text: 'Route',
        sort: true,
    }, {
        dataField: 'offered_price',
        text: 'Route Distance',
        sort: true
    }, {
        dataField: 'offered_price',
        text: 'Route TAT',
        sort: true
    }, {
        dataField: 'offered_price',
        text: 'Dispatch Time',
        sort: true
    }, {
        dataField: 'offered_price',
        text: 'Loading Plan',
        sort: true
    }, {
        dataField: 'offered_price',
        text: 'Action',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Raise RFQ</Button>
        )
    },
];
