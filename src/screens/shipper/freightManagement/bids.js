import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Badge, Row, Col} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import DataTable from "../../../components/dataTable";
import {refreshing} from "../../../helpers/notifications";
import {assignedTrucks, assignRFQs, liveAvailableTrucks, rfqresults} from "../../../helpers/api";
import Loader from "../../../components/loader";
import SmallChartCard from "../../../components/smallChartCard";
import {
    cardChartData1, cardChartData2, cardChartData3, cardChartData4,
    totalDistanceConfig,
    totalOrdersConfig,
    totalTruckConfig,
    totalWeightConfig
} from "../../../data/mockCharts";
import {Bar, Line} from "react-chartjs-2";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";

const columns = [
    {
        dataField: 'name',
        text: 'Origin',
        sort: true

    },
    {
        dataField: 'least_bid',
        text: 'Truck Type',
        sort: true,
    },

    {
        dataField: 'least_bid',
        text: 'Origin',
        sort: true,

    },
    {
        dataField: 'destination',
        text: 'Destination',
        sort: true
    }, {
        dataField: 'total_trucks',
        text: 'NO. of trucks',

    }, {
        dataField: 'scheduled_date',
        text: 'Date',
        sort: true,
    }, {
        dataField: 'offered_price',
        text: 'Offered Price',
        sort: true
    }, {
        dataField: 'offered_price',
        text: 'Offered Price',
        sort: true,
        formatter: (cell, row) => (
            <div>

                    <Button color="primary" onClick={() =>
                        assignRFQs(row.id, row.bi, row._owner) }>
                        Assign Now!

                    </Button>

            </div>
        )
    }
];


export default (props) => {

    const [data, setData] = useState([]);

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
            const trucks = await rfqresults(props.match.params.id);
            console.log(trucks, "here are the trucks!!");
            setData(trucks);
        };

        loadApiData();
    }, []);

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Live Trucks <small className="text-muted"/>
                    <Row>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">New Clients</small>
                                <br />
                                <strong className="h4">9,123</strong>
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Recurring Clients</small>
                                <br />
                                <strong className="h4">22,643</strong>
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col><Col sm="3">
                        <div className="callout callout-info">
                            <small className="text-muted">New Clients</small>
                            <br />
                            <strong className="h4">9,123</strong>
                            <div className="chart-wrapper">
                                <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                            </div>
                        </div>
                    </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Recurring Clients</small>
                                <br />
                                <strong className="h4">22,643</strong>
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <DataTable data={data.taken_quizzes} columns={columns}/>
                </CardBody>
            </Card>
        </div>
    );
}
