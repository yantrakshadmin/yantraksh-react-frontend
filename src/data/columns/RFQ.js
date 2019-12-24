import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";


function formatDate(d) {
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    return (
        <span>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()} {("0" + hrs).slice(-2)}:{("0" + mins).slice(-2)}:{("0" + secs).slice(-2)}</span>
    )
}


export default [
    {
        dataField: 'id',
        text: 'RFQ ID',
        sort: true
    }, {
        dataField: 'truck_name',
        text: 'Truck Name',
        sort: true
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
        text: 'Trucks',

    }, {
        dataField: 'weight',
        text: 'Weight',
        sort: true
    }, {
        dataField: 'bid_count',
        text: 'Total Bids',
        sort: true
    }, {
        dataField: 'posted_on',
        text: 'Date',
        sort: true,
        formatter: (cell, row) => {
            let d = new Date(row.posted_on);
            return formatDate(d);
        }
    }, {
        dataField: 'status',
        text: 'Status',
        sort: true
    }, {
        dataField: 'action',
        text: 'Action',
        sort: true,
        formatter: (cell, row) => (
            <div>
                <Link to={{
                    pathname: `/freight/request-for-quotation/bids/${row.id}`
                }}>
                    <Button color="primary">
                        View Bids
                    </Button>
                </Link>
            </div>
        )
    }
];
