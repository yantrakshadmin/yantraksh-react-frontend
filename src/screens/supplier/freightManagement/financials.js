import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {refreshing} from "../../../helpers/notifications";
import {invoiceView, uploadPODFile} from "../../../helpers/api";
import Loader from "../../../components/loader";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";
import Upload from '../../../components/upload';


const columns = [
    {
        dataField: 'invoice_number',
        text: 'Invoice Number',
        sort: true

    },
    {
        dataField: 'invoice_date',
        text: 'Invoice Date',
        sort: true,

    }, {
        dataField: 'invoice_salesperson',
        text: 'Billing Party',
        sort: true


    },
    {
        dataField: 'invoice_amount',
        text: 'Total Amount',
        sort: true

    },
    {
        dataField: 'invoice_gst',
        text: 'GST Number',
        sort: true

    },
    {
        dataField: 'invoice_quiz',
        text: 'Edit Invoice',
        sort: true,
        formatter: (cell, row) => (
            <div>
                <Link to={`/supplier/invoiceapi/${row.invoice_quiz}/`}>
                    <Button color="primary">
                        Edit Invoice
                    </Button>
                </Link>
            </div>
        )

    },
    {
        dataField: 'Print Invoice',
        text: 'Print Invoice',
        sort: true,
        formatter: (cell, row) => (
            <div>
                <Link to={`/supplier/printinvoice/${row.invoice_quiz}`}>
                    <Button color="primary">
                        Print Invoice
                    </Button>
                </Link>
            </div>
        )

    },
    {
        dataField: 'Upload POD',
        text: 'Upload POD',
        sort: true,
        isDummyField: true,
        formatter: (cell, row) => {
            console.log(row, 'HJBHJEDBHRGH RH R');
            return (
                <div>
                    <Upload upload={async (file) => {
                        await uploadPODFile(file, row.invoice_quiz);
                    }} types={['*']} />
                </div>
            )
        }

    },
];


export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await invoiceView();
            setData(trucks);
        };

        loadApiData();
    }, []);

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>Financial
                    <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <ToolkitProvider
                        keyField="id"
                        data={data}
                        columns={columns}
                        search
                    >
                        {
                            props => (
                                <div>
                                    <div style={{paddingTop: 10, paddingBottom: 10, float: 'right'}}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Search.SearchBar {...props.searchProps} />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        condensed
                                        striped

                                        bordered={false}
                                        pagination={paginationFactory()}
                                        noDataIndication={Loader}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </CardBody>
            </Card>
        </div>
    );
}
