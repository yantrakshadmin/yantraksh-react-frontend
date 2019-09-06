import React, {useState, useEffect} from 'react';
import '../../../scss/printInvoice.scss'
import {
    Button, Card,
    CardBody,
    CardHeader, Col, Form,
    FormGroup, Input,
    Label, Row,
} from 'reactstrap';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {getInvoiceDetails} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";


export default (props) => {

    const [form, setForm] = useState({
    //  'id': id,
    // 'invoice_number': '',
    //  'invoice_date': '',
    //  'invoice_due_date': '',
    //  'invoice_place_of_supply': '',
    //  'invoice_destination': '',
    //  'invoice_destination_address': '',
    //  'invoice_destination_pincode': '',
    //  'invoice_gst': '',
    //
    //  'invoice_quiz_id': '',
    //
    //
    //  'invoice_salesperson': '',
    //  'invoice_lr_number': '',
    //  'invoice_vehicle_placement_date': '',
    //  'invoice_vehicle_number': '',
    //  'invoice_service_month': '',
    //  'invoice_item_details': '',
    //
    //  'invoice_rate': '',
    //  'invoice_tax': '',

    // {invoice_amount:""}
    //  'invoice_quiz': '',
    //  'invoice_owner': '',
    //  'invoice_quantity': '',
    //
    //
    //  'lr_number': '',
    //  'billing_party_name': '',
    //  'origin_address': '',
    //  'origin_pincode': '',
    //  'vehicle_placement_date': '',
    //  'vehicle_number': '',
    //  'item_details': '',
    //  'item_quantity': '',
    //  'total_amount': '',
    //  'tax': '',

    });
    //

    const [data, setData] = useState([

        // {id: id},
        // {invoice_amount: ""},
        // {invoice_date: ""},
        // {invoice_destination_pincode: ""},
        // {total_orders_planned: ""},
        // {total_rfq: ""},
        // {total_bids: ""},
        // {total_orders_hold: ""},
        // {total_orders_delayed: ""},
        // {total_orders_pending: ""},
        // {total_trucks_assigned: ""},
        // {total_trucks_in_transit: ""},
        // {total_weight: ""},
        // {total_distance: ""},

    ]);


    useEffect(() => {

        const loadKpiData = async () => {
            refreshing();
            const kpi = await getInvoiceDetails(props.match.params.id);
            setData(kpi);
            console.log(kpi, "kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            console.log(setData, "wfnwdiacoaoashoasdosjdoasjdo", setData);
        };

        loadKpiData();
    }, []);

    return (

        <div>
            <div id="container" style={{"border": "1px solid #9e9e9e", "marginTop": "5vh"}}>
                <div id="header" style={{"borderBottom": "#9e9e9e"}}>
                    <p style={{
                        "textAlign": "left",
                        "marginBottom": "unset",
                        "paddingLeft": "6vw",
                        "paddingTop": "2vh"
                    }}>
                        <strong>{data.invoice_salesperson}</strong><br></br>
                        <small>{data.invoice_destination_address}</small>
                        <br></br>
                        <small>{data.invoice_destination_pincode}</small>
                        <br></br>
                        <strong>LR No: {data.invoice_lr_number}</strong><br></br>
                        <small>Date: {data.invoice_due_date}</small>
                        <br></br>
                        <small>GSTIN: {data.invoice_gst}</small>
                    </p>

                </div>

                <div id="fromto">
                    <div id="from">
                        <table>
                            <tr>
                                <td style={{"paddingRight": "10vw"}}>#</td>
                                <td><strong>:YNT{data.invoice_number}</strong></td>
                            </tr>
                            <tr>
                                <td>Invoice Date</td>
                                <td><strong>:{data.invoice_date}</strong></td>
                            </tr>
                            <tr>
                                <td>Terms</td>
                                <td><strong>:Due on Receipt</strong></td>
                            </tr>
                            <tr>
                                <td>Due Date</td>
                                <td><strong>:{data.invoice_due_date}</strong></td>
                            </tr>

                        </table>

                    </div>
                    <div id="to">
                        <p>
                            Place of Supply : {data.invoice_place_of_supply}<br></br>
                            LR Number : {data.invoice_lr_number}<br></br>
                            Vehicle Placement Date : {data.invoice_vehicle_placement_date}<br></br>
                            Vehicle Number : {data.invoice_vehicle_number}<br></br>
                            Service Month : {data.invoice_service_month}
                        </p>
                    </div>
                </div>

                <div id="items">
                    <p style={{"float": "left"}}></p>
                    <table>
                        <tbody>
                        <tr>
                            <th style={{"backgroundColor": "#F2F3F4"}}>Bill To</th>
                        </tr>
                        <tr>
                            <td>{data.invoice_destination_address}<br></br>
                            </td>
                        </tr>
                        <tr>
                            <td>{data.invoice_destination}</td>


                        </tr>
                        <tr>
                            <td>{data.invoice_destination_pincode}</td>


                        </tr>
                        <tr>
                            <td>India <br></br></td>


                        </tr>
                        <tr>
                            <td>{data.invoice_gst}</td>

                        </tr>

                        </tbody>
                    </table>


                    <table>
                        <tbody>
                        <tr style={{"backgroundColor": "#F2F3F4", "fontWeight": "bold"}}>
                            <th style={{"width": "10px"}}>#</th>
                            <th>Item & Description</th>
                            <th>LR No</th>
                            <th>Vehicle No</th>
                            <th>Date</th>
                            <th>Qty</th>
                            <th>IGST</th>
                            <th>Amount</th>
                        </tr>
                        <tr style={{"borderBottom": "1px solid #9e9e9e"}}>
                            <td>1</td>
                            <td>Transportation</td>
                            <td>{data.invoice_lr_number}</td>
                            <td>{data.invoice_vehicle_number}</td>
                            <td>{data.invoice_date}</td>
                            <td>{data.invoice_quantity}</td>
                            <td>0%</td>
                            <td>{data.invoice_amount}</td>
                        </tr>

                        </tbody>
                    </table>
                    <div id="container" style={{"float": "right", "width": "50%", "display": "inline-block"}}>
                        <div id="to">
                            <p style={{
                                "alignment": "right",
                                "border": "solid 0.09px",
                                "width": "60%",
                                "float": "right"
                            }}>
                                <container>

                                    <br></br><strong>Sub Total : <span style={{
                                    "float": "right",
                                    "margin-right": "2vw"
                                }}> &#8377;{data.invoice_amount}</span></strong><br></br>
                                    <strong>Total : <span style={{
                                        "float": "right",
                                        "margin-right": "2vw"
                                    }}>&#8377;{data.invoice_amount}<br></br></span></strong>
                                    <strong>Balance Due : <span style={{
                                        "float": "right",
                                        "margin-right": "2vw"
                                    }}>&#8377;{data.invoice_amount}<br></br></span></strong><br></br>
                                </container>
                            </p>
                        </div>
                        <div id="to">
                            <p style={{
                                "alignment": "right",
                                "border": "solid 0.09px",
                                "width": "60%",
                                "float": "right"
                            }}>
                                <container>
                                    <br></br>
                                    <br></br><br></br><br></br><br></br>
                                    <strong>Authorized Signature</strong></container>
                            </p>
                        </div>
                    </div>

                </div>

                <div id="summary">
                    <div id="total">


                    </div>
                    <div id="note" style={{"display": "inline-block", "width": "calc(50% - 2vw)"}}>
                        <h4>Note :</h4>
                        <p>Terms & Conditions
                            Bank Name: ICICI Bank
                            Account Name: Yantraksh Logistics Pvt Ltd
                            Account No: 8505004142
                            IFSC: ICIC0000085
                            <br></br><br></br>
                            1) The payment should be made by way of Account Payee Cheque / Demand Draft / NEFT /
                            RTGS in the name of
                            "Yantraksh Logistics".
                            2) We are exempted under section 194 C, TDS shall not be deducted on any payment.
                            3) Any Discrepancy in the invoice shall be informed within 7 days of the invoice
                            submission at
                            finance@yantraksh.com
                            4) Interest at 2% p.m. or part thereof will be charged if the bill is not paid on the
                            due date.
                            5) Any dispute is subject to Anand Jurisdiction.
                        </p>
                    </div>

                    <div id="footer">
                        <p></p>
                    </div>
                </div>


            </div>
        </div>


    )
}
