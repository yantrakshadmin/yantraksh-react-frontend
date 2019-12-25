import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { refreshing } from "../../../helpers/notifications";
import { getKPIData, invoiceView, uploadPODFile } from "../../../helpers/api";
import Loader from "../../../components/loader";
import { Link } from "react-router-dom";
import Button from "reactstrap/es/Button";
import Upload from '../../../components/upload';
import { Line } from "react-chartjs-2";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";


function formatDate(d) {
    let hrs = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();

    return (
        <span>{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()} {("0" + hrs).slice(-2)}:{("0" + mins).slice(-2)}:{("0" + secs).slice(-2)}</span>
    )
}

const columns = [
    {
        dataField: 'invoice_quiz',
        text: 'Origin',
        sort: true,
        formatter: (cell, row) => {
            return row.invoice_quiz.origin
        }
    },
    {
        dataField: 'invoice_quiz',
        text: 'Destination',
        sort: true,
        formatter: (cell, row) => {
            return row.invoice_quiz.destination
        }
    },
    {
        dataField: 'invoice_quiz',
        text: 'Weight',
        sort: true,
        formatter: (cell, row) => {
            return row.invoice_quiz.weight
        }
    },
    {
        dataField: 'invoice_quiz',
        text: 'Scheduled Date',
        sort: true,
        formatter: (cell, row) => {
            let d = new Date(row.invoice_quiz.scheduled_date);
            return formatDate(d);
        }
    },
    {
        dataField: 'invoice_number',
        text: 'Invoice Number',
        sort: true

    },
    {
        dataField: 'invoice_date',
        text: 'Invoice Date',
        sort: true,
        formatter: (cell, row) => {
            let d = new Date(row.invoice_date);
            return formatDate(d);
        }
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
                <Link to={`/supplier/invoice/${row.id}/`}>
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
                <Link to={`/supplier/printinvoice/${row.id}`}>
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
            console.log(trucks)
            setData(trucks);
        };
        const loadKpiData = async () => {
            refreshing();
            const kpi = await getKPIData();
            setKpiData(kpi);
            console.log(kpi, "kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            console.log(kpiData, "wfnwdiacoaoashoasdosjdoasjdo", setKpiData);
        };

        loadApiData();
        loadKpiData();
    }, []);

    const [kpiData, setKpiData] = useState([
        { total_time: "0" },
        { total_trucks: "0" },
        { total_orders: "0" },
        { total_orders_planned: "0" },
        { total_rfq: "0" },
        { total_bids: "0" },
        { total_orders_hold: "0" },
        { total_orders_delayed: "0" },
        { total_orders_pending: "0" },
        { total_trucks_assigned: "0" },
        { total_trucks_in_transit: "0" },
        { total_weight: "0" },
        { total_distance: "0" },

    ]);
    const sparkLineChartData = [
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'New Clients',
        },
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Recurring Clients',
        },
        {
            data: [35, 23, 56, 22, 97, 23, 64],
            label: 'Pageviews',
        },
        {
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Organic',
        },
        {
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'CTR',
        },
        {
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Bounce Rate',
        },
    ];
    const brandPrimary = getStyle('--primary')
    const brandDanger = getStyle('--danger')
    const sparklineChartOpts = {
        tooltips: {
            enabled: false,
            // custom: CustomTooltips
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [
                {
                    display: false,
                }],
            yAxes: [
                {
                    display: false,
                }],
        },
        elements: {
            line: {
                borderWidth: 2,
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            },
        },
        legend: {
            display: false,
        },
    };


    const makeSparkLineData = (dataSetNo, variant) => {
        const dataset = sparkLineChartData[dataSetNo];
        const data = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [
                {
                    backgroundColor: 'transparent',
                    borderColor: variant ? variant : '#c2cfd6',
                    data: dataset.data,
                    label: dataset.label,
                },
            ],
        };
        return () => data;
    };


    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify" />Financials<small className="text-muted" />
                    <Row>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Bids received</small>
                                <br />
                                <strong className="h4">0</strong>

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total RFQ Raised</small>
                                <br />
                                <strong className="h4">0</strong>

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col><Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Trucks Assigned</small>
                                <br />
                                <strong className="h4">0</strong>

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total Trucks In Transit</small>
                                <br />

                                <strong className="h4">0</strong>
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                    </Row>
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
                                    <div style={{ paddingTop: 10, paddingBottom: 10, float: 'right' }}>
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
