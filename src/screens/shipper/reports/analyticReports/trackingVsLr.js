import React, {Component} from 'react';
import ShowReports from "../showReports";
import {REPORT_TRACKING_VS_LR} from "../../../../helpers/api";

class TrackingVsLr extends Component {
    render() { const columns = [{
        dataField: 'lr_no',
        text: 'LR NUMBER',
        sort: true
    },
        {
            dataField: 'lr_date',
            text: 'Date',
            sort: true
        },
        {
            dataField: 'lr_billingparty',
            text: 'Billing Party',
            sort: true
        },{
            dataField: 'invoice_no',
            text: 'Invoice Number',
            sort: true
        },
        {
            dataField: 'lr_declared',
            text: 'Declared',
            sort: true
        },
        {
            dataField: 'ewaybill_no',
            text: 'EWayBill Number',
            sort: true
        },{
            dataField: 'lr_quantity',
            text: 'Quantity',
            sort: true
        },
        {
            dataField: 'lr_weight',
            text: 'Weight',
            sort: true
        },
        {
            dataField: 'lr_invoice_date',
            text: 'LR Invoice Date',
            sort: true
        },{
            dataField: 'lr_item_name',
            text: 'Item Name',
            sort: true
        },
        {
            dataField: 'lr_consignor_name',
            text: 'Consignor Name',
            sort: true
        },
        {
            dataField: 'lr_consignor_address',
            text: 'Consignor Address',
            sort: true
        },
        {
            dataField: 'lr_consignor_contact_name',
            text: 'Consignor Contact Name',
            sort: true
        },
        {
            dataField: 'lr_consignor_contact_phone',
            text: 'Consignor Contact Phone',
            sort: true
        },
        {
            dataField: 'lr_consignee_name',
            text: 'Consignee Name',
            sort: true
        },{
            dataField: 'lr_consignee_address',
            text: 'Consignee Address',
            sort: true
        },
        {
            dataField: 'lr_consignee_contact_name',
            text: 'Consignee Contact Name',
            sort: true
        },
        {
            dataField: 'lr_consignee_contact_phone',
            text: 'Consignee Contact Phone',
            sort: true
        },{
            dataField: 'vehicle_no',
            text: 'Vehicle Number',
            sort: true
        },
        {
            dataField: 'lr_vehicle_type',
            text: 'Vehicle Type',
            sort: true
        },
        {
            dataField: 'driver_name',
            text: 'Driver Name',
            sort: true
        },{
            dataField: 'driver_no',
            text: 'Driver Number',
            sort: true
        },
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
    ];
    return (
            <div>
                <ShowReports columns_props={columns}  url={REPORT_TRACKING_VS_LR} />
            </div>
        );
    }
}

export default TrackingVsLr;
