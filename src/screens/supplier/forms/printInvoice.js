import React, { useEffect, useState } from 'react';
import '../../../scss/printInvoice.scss'
import {
    Container,
    Button,
    Table
} from 'reactstrap';
import { editInvoice, getInvoiceDetails } from "../../../helpers/api";
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

    console.log(data, '------- ooo ---------', data['invoice_transanctions']);
    return (
        <div>

            <Button className="mb-4" onClick={() => global.print()}>
                Print Invoice
            </Button>

            <Container style={{ border: '2px solid black', padding: '20px 30px' }}>


                <Table borderless className="my-2" style={{ borderBottom: '2px solid black' }}>
                    <tbody>
                        <tr className="d-flex">
                            <td className="col-3">
                                YANTRAKSH
                            </td>
                            <td className="col-9">
                                TAX INVOICE
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table borderless>
                    <tbody>
                        <tr className="d-flex">
                            <td className="col" style={{ lineHeight: '18px' }}>
                                <strong>Invoice No. :</strong> YNT{data.invoice_number}
                                <br />
                                <strong>Invoice Date :</strong> {formatDate(data.invoice_date)}
                                <br />
                                <strong>Terms :</strong> {data.invoice_number}
                                <br />
                                <strong>Due Date :</strong> {formatDate(data.invoice_due_date)}
                            </td>
                            <td className="col" style={{ lineHeight: '18px' }}>
                                <strong>Place of supply :</strong> {data.invoice_place_of_supply}
                            </td>
                        </tr>
                    </tbody>
                </Table>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                <strong>Bill to:</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ lineHeight: '18px' }}>
                                <strong>{data.invoice_destination}</strong>
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

                <Table>
                    <thead>
                        <tr>
                            <th>
                                <strong>Bill to:</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ lineHeight: '18px' }}>
                                <strong>{data.invoice_destination}</strong>
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

            </Container>


        </div>
    )
}
