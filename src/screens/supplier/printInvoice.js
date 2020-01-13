import React, { useEffect, useState, useCallback } from 'react';
import {
    Container,
    Button,
    Table,
    Row,
    Col,
} from 'reactstrap';
import { fetchSupplierInvoice } from '../../helpers/api';


function formatDate(text) {

    let d = new Date(text);

    return (
        <span>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()}</span>
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

    const [data, setData] = useState({});

    useEffect(() => {
        if (props.match.params.id) {
            const fetchInvoiceData = async () => {
                const invoiceData = await fetchSupplierInvoice(props.match.params.id);
                setData(invoiceData);
            }
            fetchInvoiceData();
        }
    }, [])


    const renderBillTo = useCallback(
        () => {
            if (data.customer_name) {
                return (
                    <td style={{ lineHeight: '18px' }}>
                        <b>{data.customer_name.billing_attention}</b>
                        <br />
                        {data.customer_name.billing_address}
                        <br />
                        {data.customer_name.billing_city}, {data.customer_name.billing_state}, {data.customer_name.billing_country}
                        <br />
                        {data.customer_name.billing_pin_code}
                        <br />
                        GSTIN / PAN: {data.customer_name.gstin_pan}
                    </td>
                )
            } else if (data.invoice_quiz) {
                return (
                    <td style={{ lineHeight: '18px' }}>
                        <b>{`${data.invoice_quiz.get_shipper.shipper_fname} ${data.invoice_quiz.get_shipper.shipper_lname}`}</b>
                        <br />
                        {data.invoice_quiz.get_shipper.shipper_street}, {data.invoice_quiz.get_shipper.shipper_address}
                        <br />
                        {data.invoice_quiz.get_shipper.shipper_city}, {data.invoice_quiz.get_shipper.shipper_state}
                        <br />
                        {data.invoice_quiz.get_shipper.shipper_pin}
                        <br />
                        GSTIN / PAN: {data.invoice_quiz.get_shipper.shipper_gst}
                    </td>
                )
            }

        }
    )

    const renderItemsList = useCallback(
        () => {
            return data.invoice_transactions.map(i => {
                return (
                    <tr key={i.id}>
                        <td>{i.invoice_transaction_desc}</td>
                        <td>{i.invoice_transaction_lr}</td>
                        <td>{i.invoice_transaction_vehicle}</td>
                        <td>{formatDate(i.invoice_transaction_date)}</td>
                        <td>{i.invoice_transaction_qty}</td>
                        <td>{i.invoice_transaction_rate}</td>
                        <td>{i.invoice_transaction_gst}</td>
                        <td>{i.invoice_transaction_amount}</td>
                    </tr>
                );
            });
        },
        [data,]
    )

    if (!data.id) {
        return null;
    }

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
                                <b>Invoice No. :</b> {data.invoice_number}
                                <br />
                                <b>Invoice Date :</b> {formatDate(data.invoice_date)}
                                <br />
                                <b>Due Date :</b> {formatDate(data.invoice_due_date)}
                            </td>
                            <td className="col" style={{ lineHeight: '18px' }}>
                                <b>Place of supply :</b> {data.place_of_supply}
                                <br />
                                <b>Service Month : </b> {data.service_month}
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
                            {renderBillTo()}
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
                            <th>Rate</th>
                            <th>GST</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderItemsList()}
                    </tbody>
                </Table>

                <Row style={{ lineHeight: '16px' }} className="my-2">
                    <Col>
                        <br />
                        <br />
                        {data.company_notes}
                        <br /><br />
                        {data.terms_and_conditions}
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
