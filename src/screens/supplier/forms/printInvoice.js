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
import {editInvoice, getInvoiceDetails} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";
import {withRouter} from "react-router-dom";


const EditInvoice = (props) => {

    const [form, setForm] = useState({});
    const [data, setData] = useState({
        'invoice_transanctions': []
    });

    useEffect(() => {

        const loadKpiData = async () => {
            refreshing();
            const invoice_details = await getInvoiceDetails(props.match.params.id);
            console.log(invoice_details);
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

    const handelTransactionInputChange = (index, name, value) => {

        let transactions = data['invoice_transanctions'];
        transactions[index][name] = value;

        setData({
            ...data,
            'invoice_transanctions': transactions
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
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
                            <strong><Input type="text" name="invoice_salesperson"
                                           id="invoice_salesperson" class="editable-input"
                                           value={data.invoice_salesperson}
                                           onChange={handleInputChange}/></strong><br/>
                            <small><Input type="text" name="invoice_destination_address"
                                          id="invoice_destination_address" class="editable-input"
                                          value={data.invoice_destination_address}
                                          onChange={handleInputChange}/></small>
                            <br/>
                            <small><Input type="number" name="invoice_destination_pincode"
                                          id="invoice_destination_pincode" class="editable-input"
                                          value={data.invoice_destination_pincode}
                                          onChange={handleInputChange}/></small>
                            <br/>
                            <strong>LR No: <Input type="text" name="invoice_lr_number"
                                                  id="invoice_lr_number" class="editable-input"
                                                  value={data.invoice_lr_number}
                                                  onChange={handleInputChange}/></strong><br/>
                            <small>Date: <Input type="text" name="invoice_due_date"
                                                id="invoice_due_date" class="editable-input"
                                                value={data.invoice_due_date}
                                                onChange={handleInputChange}/></small>
                            <br/>
                            <small>GSTIN: <Input type="text" name="invoice_gst"
                                                 id="invoice_gst" class="editable-input"
                                                 value={data.invoice_gst}
                                                 onChange={handleInputChange}/></small>
                        </p>

                    </div>

                    <div id="fromto">
                        <div id="from">
                            <table style={{"lineHeight": "1.5"}}>
                                <tr>
                                    <td style={{"paddingRight": "10vw"}}>#</td>
                                    <td><strong>:YNT<Input type="text" name="invoice_number"
                                                           id="invoice_number" class="editable-input"
                                                           value={data.invoice_number}
                                                           onChange={handleInputChange}/></strong></td>
                                </tr>
                                <tr>
                                    <td>Invoice Date</td>
                                    <td><strong>:<Input type="text" name="invoice_date"
                                                        id="invoice_date" class="editable-input"
                                                        value={data.invoice_date}
                                                        onChange={handleInputChange}/></strong></td>
                                </tr>
                                <tr>
                                    <td>Terms</td>
                                    <td><strong>:Due on Receipt</strong></td>
                                </tr>
                                <tr>
                                    <td>Due Date</td>
                                    <td><strong>:<Input type="text" name="invoice_due_date"
                                                        id="invoice_due_date" class="editable-input"
                                                        value={data.invoice_due_date}
                                                        onChange={handleInputChange}/></strong></td>
                                </tr>

                            </table>

                        </div>
                        <div id="to">
                            <p style={{"font-size": "1.1em", "lineHeight": "1.4"}}>
                                Place of Supply : <strong><Input type="text" name="invoice_place_of_supply"
                                                                 id="invoice_place_of_supply" class="editable-input"
                                                                 value={data.invoice_place_of_supply}
                                                                 onChange={handleInputChange}/></strong><br></br>
                                LR Number : <strong><Input type="text" name="invoice_lr_number"
                                                           id="invoice_lr_number" class="editable-input"
                                                           value={data.invoice_lr_number}
                                                           onChange={handleInputChange}/></strong><br></br>
                                Vehicle Placement Date : <strong><Input type="text"
                                                                        name="invoice_vehicle_placement_date"
                                                                        id="invoice_vehicle_placement_date"
                                                                        class="editable-input"
                                                                        value={data.invoice_vehicle_placement_date}
                                                                        onChange={handleInputChange}/></strong><br></br>
                                Vehicle Number : <strong><Input type="text" name="invoice_vehicle_number"
                                                                id="invoice_vehicle_number" class="editable-input"
                                                                value={data.invoice_vehicle_number}
                                                                onChange={handleInputChange}/></strong><br></br>
                                Service Month : <strong><Input type="text" name="invoice_service_month"
                                                               id="invoice_service_month" class="editable-input"
                                                               value={data.invoice_service_month}
                                                               onChange={handleInputChange}/></strong>
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
                                <td style={{"paddingLeft": "15px"}}><Input type="text"
                                                                           name="invoice_destination_address"
                                                                           id="invoice_destination_address"
                                                                           class="editable-input"
                                                                           value={data.invoice_destination_address}
                                                                           onChange={handleInputChange}/><br></br>
                                </td>
                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px"}}><Input type="text" name="invoice_destination"
                                                                           id="invoice_destination"
                                                                           class="editable-input"
                                                                           value={data.invoice_destination}
                                                                           onChange={handleInputChange}/></td>

                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px"}}><Input type="text"
                                                                           name="invoice_destination_pincode"
                                                                           id="invoice_destination_pincode"
                                                                           class="editable-input"
                                                                           value={data.invoice_destination_pincode}
                                                                           onChange={handleInputChange}/></td>


                            </tr>
                            <tr>
                                <td style={{"paddingLeft": "15px", "paddingBottom": "10px"}}><Input type="text"
                                                                                                    name="invoice_gst"
                                                                                                    id="invoice_gst"
                                                                                                    class="editable-input"
                                                                                                    value={data.invoice_gst}
                                                                                                    onChange={handleInputChange}/>
                                </td>

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
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_desc']}"
                                                       id="{transaction['invoice_transaction_desc']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_desc']}
                                                       onChange={(e) => handelTransactionInputChange(itemId + 1, 'invoice_transaction_desc', e.target.value)}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_lr']}"
                                                       id="{transaction['invoice_transaction_lr']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_lr']}
                                                       onChange={handleInputChange}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_vehicle']}"
                                                       id="{transaction['invoice_transaction_vehicle']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_vehicle']}
                                                       onChange={handleInputChange}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_date']}"
                                                       id="{transaction['invoice_transaction_date']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_date']}
                                                       onChange={handleInputChange}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_qty']}"
                                                       id="{transaction['invoice_transaction_qty']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_qty']}
                                                       onChange={handleInputChange}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_amount']}"
                                                       id="{transaction['invoice_transaction_amount']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_amount']}
                                                       onChange={handleInputChange}/></td>
                                            <td><Input type="text"
                                                       name="{transaction['invoice_transaction_gst']}"
                                                       id="{transaction['invoice_transaction_gst']}"
                                                       class="editable-input"
                                                       value={transaction['invoice_transaction_gst']}
                                                       onChange={handleInputChange}/></td>
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
                                                    invoice_transaction_desc: 'form.invoice_transanctions[index].invoice_transaction_desc',
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
                                    }}> &#8377;<Input type="text" name="invoice_amount" id="invoice_amount"
                                                      class="editable-input"
                                                      value={data.invoice_amount}
                                                      onChange={handleInputChange}/></span></strong><br></br>


                                        <strong>Total : <span style={{
                                            "float": "right",
                                            "margin-right": "2vw"
                                        }}>&#8377;<Input type="text" name="invoice_amount" id="invoice_amount"
                                                         class="editable-input"
                                                         value={data.invoice_amount}
                                                         onChange={handleInputChange}/><br></br></span></strong><br></br>


                                        <strong>Balance Due : <span style={{
                                            "float": "right",
                                            "margin-right": "2vw"
                                        }}>&#8377;<Input type="text" name="invoice_amount" id="invoice_amount"
                                                         class="editable-input"
                                                         value={data.invoice_amount}
                                                         onChange={handleInputChange}/><br></br></span></strong><br></br>
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

                        <Button color={"primary"} size={"lg"} type="submit">Save</Button> &nbsp;&nbsp;&nbsp;


                        <div id="footer">
                            <p></p>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
};

export default withRouter(EditInvoice);