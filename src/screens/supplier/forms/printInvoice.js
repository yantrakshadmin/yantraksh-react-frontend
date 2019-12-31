import React, { useEffect, useState } from 'react';
import {
    Container,
    Button,
    Table,
    Row,
    Col,
} from 'reactstrap';
import { getInvoiceDetails } from "../../../helpers/api";
import { refreshing } from "../../../helpers/notifications";



function formatDate(text) {

    let d = new Date(text);

    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    return (
        <span>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()} {("0" + hrs).slice(-2)}:{("0" + mins).slice(-2)}:{("0" + secs).slice(-2)}</span>
    )
}

var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function inWords(num) {
    try {
        if ((num = num.toString()).length > 9) return 'overflow';
        var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] !== 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] !== 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] !== 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] !== 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] !== 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }
    catch (e) {
        return null;
    }
}


export default (props) => {

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

    const renderItemsList = () => {
        return data.invoice_transanctions.map(i => {
            return (
                <tr key={i.id}>
                    <td>{i.invoice_transaction_desc}</td>
                    <td>{i.invoice_transaction_lr}</td>
                    <td>{i.invoice_transaction_vehicle}</td>
                    <td>{formatDate(i.invoice_transaction_date)}</td>
                    <td>{i.invoice_transaction_qty}</td>
                    <td>{i.invoice_transaction_amount}</td>
                    <td>{i.invoice_transaction_gst}</td>
                </tr>
            );
        })
    }

    console.log(data, '------- ooo ---------', data['invoice_transanctions']);
    return (
        <div>

            <Button color="primary" className="mb-4" onClick={() => global.print()}>
                Print Invoice
            </Button>

            <Container className="my-2" style={{ border: '2px solid black', padding: '20px 30px', backgroundColor: 'white' }}>


                <Table borderless className="mb-2" style={{ borderBottom: '2px solid black' }}>
                    <tbody>
                        <tr className="d-flex">
                            <td className="col-6">
                                <img height="44px" className="mb-2" src="https://res.cloudinary.com/rumeetsingh/image/upload/v1577341732/yantraksh/home-logo.png" />
                            </td>
                            <td className="col-6">
                                TAX INVOICE
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table borderless>
                    <tbody>
                        <tr className="d-flex">
                            <td className="col" style={{ lineHeight: '18px' }}>
                                <b>Invoice No. :</b> YNT{data.invoice_number}
                                <br />
                                <b>Invoice Date :</b> {formatDate(data.invoice_date)}
                                <br />
                                <b>Terms :</b> {data.invoice_number}
                                <br />
                                <b>Due Date :</b> {formatDate(data.invoice_due_date)}
                            </td>
                            <td className="col" style={{ lineHeight: '18px' }}>
                                <b>Place of supply :</b> {data.invoice_place_of_supply}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                Bill to:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ lineHeight: '18px' }}>
                                <b>{data.invoice_destination}</b>
                                <br />
                                {data.invoice_destination_address}
                                <br />
                                {data.invoice_destination_pincode}
                                <br />
                                GST: {data.invoice_gst}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table className="mb-4" bordered>
                    <thead>
                        <tr>
                            <th>Item Details</th>
                            <th>LR No.</th>
                            <th>Vehicle No.</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>GST</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItemsList()}
                    </tbody>
                </Table>

                <Row style={{ lineHeight: '16px' }} className="my-2">
                    <Col>
                        Total in words:
                        <br />
                        <b>{inWords(1)}</b>
                        <br />
                        <br />
                        Bank Name: ICICI Bank<br />
                        Account Name: Yantraksh Logistics Pvt Ltd<br />
                        Account No: 8505004142<br />
                        IFSC: ICIC0000085<br />
                        <br /><br />
                        1. The payment should be made by way of Account Payee Cheque / Demand Draft / NEFT /
                        RTGS in the name of
                        "Yantraksh Logistics".
                        <br />
                        2. We are exempted under section 194 C, TDS shall not be deducted on any payment.
                        <br />
                        3. Any Discrepancy in the invoice shall be informed within 7 days of the invoice
                        submission at finance@yantraksh.com
                        <br />
                        4. Interest at 2% p.m. or part thereof will be charged if the bill is not paid on the
                        due date.
                        <br />
                        5. Any dispute is subject to Anand Jurisdiction.
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        Authorized Signature
                    </Col>
                </Row>

            </Container>


        </div>
    )
}
