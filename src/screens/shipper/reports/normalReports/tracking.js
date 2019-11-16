import React, {Component} from 'react';
import ShowReports from "../showReports";
import {REPORT_TRACKING} from "../../../../helpers/api";

class Tracking extends Component {
    render() {
        const columns = [{
            dataField: 'tracking_id',
            text: 'Tracking ID',
            sort: true
        },
            {
                dataField: 'trip_id',
                text: 'Trip ID',
                sort: true
            },
            {
                dataField: 'telephone',
                text: 'Phone Number',
                sort: true
            }, {
                dataField: 'address',
                text: 'Address',
                sort: true
            },
            {
                dataField: 'city',
                text: 'City',
                sort: true
            },
            {
                dataField: 'created_at',
                text: 'Created At',
                sort: true
            }, {
                dataField: 'offered_price',
                text: 'Offered Price',
                sort: true
            },
            {
                dataField: 'weight',
                text: 'Weight',
                sort: true
            },
            {
                dataField: 'status',
                text: 'Status',
                sort: true
            }, {
                dataField: 'created_on',
                text: 'Created On',
                sort: true
            },
            {
                dataField: 'route_tat',
                text: 'Route Tat',
                sort: true
            },
            {
                dataField: 'percent_filled',
                text: 'Percent Filled',
                sort: true
            },
        ];
        const column_collapsed = [
            {
                dataField: 'name',
                text: 'Name',
                sort: true
            },
            {
                dataField: 'length',
                text: 'Length',
                sort: true
            },
            {
                dataField: 'width',
                text: 'Width',
                sort: true
            }, {
                dataField: 'height',
                text: 'Height',
                sort: true
            },
            {
                dataField: 'weight',
                text: 'Weight',
                sort: true
            },
            {
                dataField: 'volume',
                text: 'volume',
                sort: true
            },
        ];

        return (
            <div>
                <ShowReports columns_props={columns} column_collapsed={column_collapsed} url={REPORT_TRACKING}/>
            </div>
        );
    }
}

export default Tracking;
