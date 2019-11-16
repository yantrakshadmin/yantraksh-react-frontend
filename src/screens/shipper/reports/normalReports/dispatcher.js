import React, {Component} from 'react';
import ShowReports from "../showReports";
import DataTable from "../../../../components/dataTable"
import {getReportsShipper, REPORT_DISPATCHER} from "../../../../helpers/api";

class Dispatcher extends Component {
   state={
       columns:[],
       data:[],
   };

    render() {
        const columns = [ {
            dataField: 'truck_name',
            text: 'Truck Name',
            sort: true
        },
            {
                dataField: 'truck_type',
                text: 'Truck Type',
                sort: true
            },
            {
                dataField: 'origin',
                text: 'Origin',
                sort: true
            },{
                dataField: 'destination',
                text: 'Destination',
                sort: true
            },
            {
                dataField: 'material_type',
                text: 'Material Type',
                sort: true
            },
            {
                dataField: 'scheduled_date',
                text: 'Scheduled Date',
                sort: true
            },{
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
            },{
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
            },{
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
                <ShowReports columns_props={columns} column_collapsed={column_collapsed}  url={REPORT_DISPATCHER} />
            </div>
        );
    }
}

export default Dispatcher;
