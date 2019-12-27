import React, { useEffect, useState } from 'react';
import {
    Container,
    Button,
    Table,
    Row,
    Col,
} from 'reactstrap';
import { getInvoiceDetails } from "../../../helpers/api";
import { getLRDetails } from "../../../helpers/api";



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
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }
    catch (e) {
        return null;
    }
}


export default (props) => {

    const [data, setData] = useState({ 'lr_quiz': {} });

    useEffect(async () => {
        const loadKpiData = async () => {
            const lr_details = await getLRDetails(props.match.params.id);
            setData(lr_details);
        };

        loadKpiData();
    }, [setData]);

    console.log(data, '------- ooo ---------', data['invoice_transanctions']);
    return (
        <div>

            <Button color="primary" className="mb-4" onClick={() => global.print()}>
                Print LR
            </Button>

            <Container className="my-2" style={{ border: '2px solid black', padding: '20px 30px', backgroundColor: 'white' }}>


                <Table borderless className="mb-2">
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

                <Table bordered>
                    <tbody style={{ lineHeight: '16px' }}>
                        <tr>
                            <td>
                                LR NUMBER:<br />
                                <strong>{data.lr_no}</strong>
                            </td>
                            <td>
                                LR DATE:<br />
                                <strong>{formatDate(data.lr_date)}</strong>
                            </td>
                            <td>
                                BILLING PARTY:<br />
                                <strong>{data.lr_billingparty}</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                ORIGIN:<br />
                                <strong>{data.lr_quiz.origin}</strong>
                            </td>
                            <td>
                                DESTINATION:<br />
                                <strong>{data.lr_quiz.destination}</strong>
                            </td>
                            <td>
                                PICK/DELIVERY:<br />
                                <strong>anything</strong>
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table bordered>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>
                                CONSIGNOR
                            </th>
                            <th>
                                CONSIGNEE
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{ lineHeight: '16px' }}>
                        <tr>
                            <td>
                                {data.lr_consignor_contact_name}
                                <br />
                                {data.lr_consignor_address}
                                <br />
                                Contact no : {data.lr_consignor_contact_phone}
                            </td>
                            <td>
                                {data.lr_consignee_contact_name}
                                <br />
                                {data.lr_consignee_address}
                                <br />
                                Contact no : {data.lr_consignee_contact_phone}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table bordered>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th colspan="4">INVOICE DETAILS</th>
                        </tr>
                    </thead>
                    <tbody style={{ lineHeight: '16px' }}>
                        <tr>
                            <td>INVOICE NO</td>
                            <td>INVOICE DATE</td>
                            <td>DECLARED VALUE</td>
                            <td>E-WAY BILL NO</td>
                        </tr>
                        <tr>
                            <td>{data.invoice_no}</td>
                            <td>{formatDate(data.lr_invoice_date)}</td>
                            <td>{data.lr_declared}</td>
                            <td>{data.ewaybill_no}</td>
                        </tr>
                    </tbody>
                </Table>

            </Container>


        </div>
    )
}
