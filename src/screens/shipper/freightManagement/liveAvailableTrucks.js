import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { refreshing } from "../../../helpers/notifications";
import { getKPIData, liveAvailableTrucks } from "../../../helpers/api";
import Loader from "../../../components/loader";
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
        dataField: 'name',
        text: 'Name',
        sort: true

    },
    {
        dataField: 'truck_type',
        text: 'Truck Type',
        sort: true,
        formatter: (cell, row) => {
            if (row.truck_type === 1)
                return (<Badge color="success" style={{ width: '100%' }}>Container</Badge>);
            if (row.truck_type === 2)
                return (<Badge color="primary" style={{ width: '100%' }}>Trailer</Badge>);
            if (row.truck_type === 3)
                return (<Badge color="warning" style={{ width: '100%' }}>Open</Badge>)
        },

    }, {
        dataField: 'origin',
        text: 'Origin',
        sort: true

    }, {
        dataField: 'destination',
        text: 'Destination',
        sort: true
    }, {
        dataField: 'total_trucks',
        text: 'No. of trucks',

    }, {
        dataField: 'scheduled_date',
        text: 'Date',
        sort: true,
        formatter: (cell, row) => {
            let d = new Date(row.scheduled_date);
            return formatDate(d);
        }
    }, {
        dataField: 'offered_price',
        text: 'Offered Price',
        sort: true
    }
];


export default () => {

    const [data, setData] = useState([]);
    const [kpiData, setKpiData] = useState([
        { total_time: "" },
        { total_trucks: "" },
        { total_orders: "" },
        { total_orders_planned: "" },
        { total_rfq: "" },
        { total_bids: "" },
        { total_orders_hold: "" },
        { total_orders_delayed: "" },
        { total_orders_pending: "" },
        { total_trucks_assigned: "" },
        { total_trucks_in_transit: "" },
        { total_weight: "" },
        { total_distance: "" },

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

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await liveAvailableTrucks();
            setData(trucks)
        };

        const loadKpiData = async () => {
            refreshing();
            const kpi = await getKPIData();
            setKpiData(kpi);
            console.log(kpi, "kp");
            console.log(kpiData, "wfnwdiacoaoashoasdosjdoasjdo", setKpiData);
        };

        loadApiData();
        loadKpiData()

    }, []);


    return (
        <div className="animated fadeIn">
            <Card>

                <CardHeader>
                    <i className="fa fa-align-justify" /> Live available trucks <small className="text-muted" />
                    <Row>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total RFQ Raised</small>
                                <br />
                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_rfq}</strong>))}

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                        width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Bids received</small>
                                <br />
                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_bids}</strong>))}

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts}
                                        width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Trucks Assigned</small>
                                <br />
                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_trucks_assigned}</strong>))}

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100}
                                        height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total Trucks In Transit</small>
                                <br />

                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_trucks}</strong>))}
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                        width={100} height={30} />
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
