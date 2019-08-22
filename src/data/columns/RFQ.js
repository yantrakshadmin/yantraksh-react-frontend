import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";


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
        sort: true
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
                <Link to={`/freight/request-for-quotation/bids/${row.id}`}>
                    <Button color="primary">
                        View Bids
                    </Button>
                </Link>
            </div>
        )
    }
];