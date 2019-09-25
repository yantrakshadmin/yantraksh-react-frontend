import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import {getKPIData, liveAvailableLoads} from "../../../helpers/api";
import DataTable from "../../../components/dataTable";
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";
import Loader from "../../../components/loader";
import {Line} from "react-chartjs-2";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";
import {refreshing} from "../../../helpers/notifications";

export default () => {
    const [data, setData] = useState([]);
    const [kpiData, setKpiData] = useState([
        {total_time:"0"},
        {total_trucks:"0"},
        {total_orders:"0"},
        {total_orders_planned:"0"},
        {total_rfq:"0"},
        {total_bids:"0"},
        {total_orders_hold:"0"},
        {total_orders_delayed:"0"},
        {total_orders_pending:"0"},
        {total_trucks_assigned:"0"},
        {total_trucks_in_transit:"0"},
        {total_weight:"0"},
        {total_distance:"0"},

    ]);


    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await liveAvailableLoads();
            setData(trucks)


        };
        const loadKpiData = async () => {
            refreshing();
            const kpi = await getKPIData();
            setKpiData(kpi);
            console.log(kpi, "kpiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            console.log(kpiData ,"wfnwdiacoaoashoasdosjdoasjdo", setKpiData);
        };

        loadKpiData();
        loadApiData();
    }, []);

    const leftButton = () => (
        <Link to={"/freight/post-truck"}>
            <Button color={"primary"}>
                <i className={"fa fa-plus"}/>
                &nbsp;&nbsp;&nbsp;
                Post Truck
            </Button>
        </Link>
    );


    const availableLoadsColumn = [


        {
            dataField: 'id',
            text: 'RFQ ID',
            sort: true,
            formatter: (cell, row) => (
                <span>YNTL{row.id}</span>
            )
        },
        {
            dataField: 'truck_name',
            text: 'Truck Name',
            sort: true,
        },
        {
            dataField: 'origin',
            text: 'Origin',
            sort: true,
        },{
            dataField: 'destination',
            text: 'Destination',
            sort: true,
        }, {
            dataField: 'date',
            text: 'Date',
            sort: true,
        }, {
            dataField: 'offered_price',
            text: 'Offered Price',
            sort: true,
        },
        {
            dataField: 'Bid Now',
            text: 'Track Now',
            sort: true,
            formatter: (cell, row) => (
                <div>
                    <Link to={`/freight/bid-now/${row.id}`}>
                        <Button color="primary">
                            Bids Now
                        </Button>
                    </Link>
                </div>
            )
        },
    ];
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

        <div>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Available Loads <small className="text-muted"/>
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
                    <DataTable
                        noDataIndication={Loader}
                        columns={availableLoadsColumn} data={data} left={leftButton}/>
                </CardBody>
            </Card>
        </div>
    );
}
