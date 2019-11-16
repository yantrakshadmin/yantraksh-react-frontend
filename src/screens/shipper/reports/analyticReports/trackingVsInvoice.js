import React, {Component} from 'react';
import ShowReports from "../showReports";
import {REPORT_TRACKING_VS_LR} from "../../../../helpers/api";

class TrackingVsInvoice extends Component {
    render() {
        const columns = [
            {
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
            {
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
        return (
            <div>
                <ShowReports columns_props={columns}  url={REPORT_TRACKING_VS_LR} />
            </div>
        );
    }
}

export default TrackingVsInvoice;
