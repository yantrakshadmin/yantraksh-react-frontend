import React, {useEffect, useState} from 'react';
import '../../../scss/printInvoice.scss'
import {Button, Form, Input,} from 'reactstrap';
import {editInvoice, getInvoiceDetails} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";


export default (props) => {

    const [form, setForm] = useState({});
    const [data, setData] = useState({
        'invoice_transanctions': []
    });

    useEffect(() => {

        const loadKpiData = async () => {
            refreshing();
            const invoice_details = await getInvoiceDetails(props.match.params.id);
            setData(invoice_details);
        };

        loadKpiData();
    }, [setData]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            alert(JSON.stringify(data));
            await editInvoice(data, props.match.params.id);
            alert('done')
        } catch (e) {
            alert(JSON.stringify(e))
        }
    };

    console.log(data, '------- ooo ---------', data['invoice_transanctions']);
    return (
        <div>
            <Button onClick={() => global.print()}>
                Print Invoice
            </Button>
            <div id="container" style={{"border": "1px solid #9e9e9e", "marginTop": "5vh", "margin": "0 15vw"}}>
                <Form method={'post'} onSubmit={handleSubmit}>
                    <div id="header" style={{"borderBottom": "#9e9e9e"}}>
                        <p style={{
                            "textAlign": "left",
                            "marginBottom": "unset",
                            "paddingLeft": "6vw",
                            "paddingTop": "2vh",
                            "lineHeight": "1.2"
                        }}>
                            <strong>{data.invoice_salesperson}</strong><br/>
                            <small>{data.invoice_destination_address}</small>
                            <br/>
                            <small>{data.invoice_destination_pincode}</small>
                            <br/>
                            <strong>LR No: {data.invoice_lr_number}</strong><br/>
                            <small>Date: {data.invoice_due_date}</small>
                            <br/>
                            <small>GSTIN: {data.invoice_gst}</small>
                        </p>

                    </div>

                    <div id="fromto">
                        <div id="from">
                            <table style={{"lineHeight": "1.5"}}>
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
                            <p style={{"font-size": "1.1em", "lineHeight": "1.4"}}>
                                Place of Supply : <strong>{data.invoice_place_of_supply}</strong><br></br>
                                LR Number : <strong>{data.invoice_lr_number}</strong><br></br>
                                Vehicle Placement Date : <strong>{data.invoice_vehicle_placement_date}</strong><br></br>
                                Vehicle Number : <strong>{data.invoice_vehicle_number}</strong><br></br>
                                Service Month : <strong>{data.invoice_service_month}</strong>
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
                                <td style={{"paddingLeft": "15px"}}>{data.invoice_destination_address}<br></br>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px"}}>{data.invoice_destination}</td>

                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px"}}>{data.invoice_destination_pincode}</td>


                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px", "paddingBottom": "10px"}}>{data.invoice_gst}</td>

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
                            {
                                data['invoice_transanctions'].map((transaction, itemId) => {
                                    // const transaction = invoices['invoice_transanctions'];
                                    return (
                                        <tr style={{"borderBottom": "1px solid #9e9e9e"}}>
                                            <td>{itemId + 1}</td>
                                            <td>{transaction['invoice_transaction_desc']}</td>
                                            <td>{transaction['invoice_transaction_lr']}</td>
                                            <td>{transaction['invoice_transaction_vehicle']}</td>
                                            <td>{transaction['invoice_transaction_date']}</td>
                                            <td>{transaction['invoice_transaction_qty']}</td>
                                            <td>{transaction['invoice_transaction_amount']}</td>
                                            <td>{transaction['invoice_transaction_gst']}</td>
                                        </tr>
                                    )
                                })
                            }
                            <tr>
                                <td colSpan={8}>
                                    <Button onClick={() => {
                                        setData({
                                            ...data,
                                            invoice_transanctions: [
                                                ...data['invoice_transanctions'],
                                                {
                                                    id: data['invoice_transanctions'].length,
                                                    invoice_transaction_desc: '',
                                                    invoice_transaction_lr: '',
                                                    invoice_transaction_vehicle: '',
                                                    invoice_transaction_date: '',
                                                    invoice_transaction_qty: '',
                                                    invoice_transaction_amount: '',
                                                    invoice_transaction_gst: ''
                                                }
                                            ]
                                        });
                                    }}>
                                        + Add Row
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div id="container"
                             style={{"float": "right", "width": "50%", "display": "inline-block"}}>
                            <div id="to">
                                <p style={{
                                    "alignment": "right",
                                    "border": "solid 0.09px #9e9e9e",
                                    "width": "60%",
                                    "float": "right",
                                    "paddingBottom": "10px",
                                    "paddingLeft": "10px",
                                    "borderTop": "none",
                                    "borderBottom": "none"
                                }}>
                                    <container>
                                        <br></br><strong>Sub Total : <span style={{
                                        "float": "right",
                                        "margin-right": "2vw"
                                    }}> &#8377;{data.invoice_amount}</span></strong><br></br>


                                        <Input type="text" name="invoice_amount" id="invoice_amount"
                                               value={data.invoice_amount}
                                               onChange={handleInputChange}/>


                                        <strong>Total : <span style={{
                                            "float": "right",
                                            "margin-right": "2vw"
                                        }}>&#8377;{data.invoice_amount}<br></br></span></strong><br></br>


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
                                    "border": "solid 0.09px #9e9e9e",
                                    "width": "60%",
                                    "float": "right",
                                    "paddingBottom": "10px",
                                    "paddingLeft": "10px",
                                    "text-align": "center"
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
                            <p>Terms & Conditions<br></br>
                                Bank Name: ICICI Bank<br></br>
                                Account Name: Yantraksh Logistics Pvt Ltd<br></br>
                                Account No: 8505004142<br></br>
                                IFSC: ICIC0000085<br></br>
                                <br/><br/>
                                1) The payment should be made by way of Account Payee Cheque / Demand Draft / NEFT /
                                RTGS in the name of
                                "Yantraksh Logistics".
                                <br/>
                                2) We are exempted under section 194 C, TDS shall not be deducted on any payment.
                                <br/>
                                3) Any Discrepancy in the invoice shall be informed within 7 days of the invoice
                                submission at finance@yantraksh.com
                                <br/>
                                4) Interest at 2% p.m. or part thereof will be charged if the bill is not paid on the
                                due date.
                                <br/>
                                5) Any dispute is subject to Anand Jurisdiction.
                            </p>
                        </div>

                        <div id="footer">
                            <p></p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
