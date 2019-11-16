import React, {Component} from 'react';
import ShowReports from "../showReports";
import {REPORT_INVOICE} from "../../../../helpers/api";

class Invoice extends Component {
    render() {
        const columns = [ {
            dataField: 'invoice_number',
            text: 'INVOICE NUMBER',
            sort: true
        },
            {
                dataField: 'invoice_date',
                text: 'Date',
                sort: true
            },
            {
                dataField: 'invoice_order_number',
                text: 'Order Number',
                sort: true
            },{
                dataField: 'invoice_due_date',
                text: 'Due Date',
                sort: true
            },
            {
                dataField: 'invoice_place_of_supply',
                text: 'Place of Supply',
                sort: true
            },
            {
                dataField: 'invoice_destination',
                text: 'Destination',
                sort: true
            },{
                dataField: 'invoice_destination_address',
                text: 'Destination Address',
                sort: true
            },
            {
                dataField: 'invoice_destination_pincode',
                text: 'Destination Pincode',
                sort: true
            },
            {
                dataField: 'invoice_gst',
                text: 'GST',
                sort: true
            },{
                dataField: 'invoice_salesperson',
                text: 'Salesperson',
                sort: true
            },
            {
                dataField: 'invoice_lr_number',
                text: 'LR Number',
                sort: true
            },
            {
                dataField: 'invoice_vehicle_placement_date',
                text: 'Vehicle Placement Date',
                sort: true
            },
            {
                dataField: 'invoice_vehicle_number',
                text: 'Vehicle Number',
                sort: true
            },
            {
                dataField: 'invoice_service_month',
                text: 'Service Month',
                sort: true
            },{
                dataField: 'invoice_item_details',
                text: 'Item Details',
                sort: true
            },
            {
                dataField: 'invoice_quantity',
                text: 'Quantity',
                sort: true
            },
            {
                dataField: 'invoice_rate',
                text: 'Invoice Rate',
                sort: true
            },
{
                dataField: 'invoice_discount',
                text: 'Discount',
                sort: true
            },
            {
                dataField: 'invoice_tax',
                text: 'Tax',
                sort: true
            },{
                dataField: 'invoice_amount',
                text: 'Amount',
                sort: true
            },
        ];
        // const column_collapsed = [
        //     {
        //         dataField: 'name',
        //         text: 'Name',
        //         sort: true
        //     },
        //     {
        //         dataField: 'length',
        //         text: 'Length',
        //         sort: true
        //     },
        //     {
        //         dataField: 'width',
        //         text: 'Width',
        //         sort: true
        //     },{
        //         dataField: 'height',
        //         text: 'Height',
        //         sort: true
        //     },
        //     {
        //         dataField: 'weight',
        //         text: 'Weight',
        //         sort: true
        //     },
        //     {
        //         dataField: 'volume',
        //         text: 'volume',
        //         sort: true
        //     },
        // ];

        return (
            <div>
                <ShowReports columns_props={columns}  url={REPORT_INVOICE} />
            </div>
        );
    }
}

export default Invoice;
