import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import {getKPIData, rfq} from "../../../helpers/api";
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/RFQ";
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";
import {Line} from "react-chartjs-2";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";


export default (props) => {


    const KPI = useState([
        // {total_time: ""},
        // {total_trucks: ""},
        // {total_orders: ""},
        // {total_orders_planned: ""},
        // {total_rfq: ""},
        // {total_bids: ""},
        // {total_orders_hold: ""},
        // {total_orders_delayed: ""},
        // {total_orders_pending: ""},
        // {total_trucks_assigned: ""},
        // {total_trucks_in_transit: ""},
        // {total_weight: ""},
        // {total_distance: ""},

    ]);


    const [data, setData] = useState([]);
    const [kpiData, setKPIData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await rfq();
            setData(trucks)
        };

        const loadKPIData = async () => {
            const kpi = await getKPIData();
            console.log("kpi data h ye", kpi)
            setKPIData(kpi);
            console.log(setKPIData, "<--KPI data");
        };

        loadKPIData();
        loadApiData();
    }, []);

    const leftButton = () => (
        <Link to={"/freight/request-for-quotation/new"}>
            <Button color={"primary"}>
                <i className={"fa fa-plus"}/>
                &nbsp;&nbsp;&nbsp;
                New Request for Quotation
            </Button>
        </Link>
    );
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
                    <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
                    <Row>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Bids received</small>
                                <br/>
                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_bids}</strong>))}

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts}
                                          width={100} height={30}/>
                                </div>
                            </div>
                        </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total RFQ Raised</small>
                                <br/>
                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_rfq}</strong>))}

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                          width={100} height={30}/>
                                </div>
                            </div>
                        </Col><Col sm="3">
                        <div className="callout callout-info">
                            <small className="text-muted">Total Trucks Assigned</small>
                            <br/>
                            {
                                kpiData.map(item => (<strong className="h4">{item.total_trucks_assigned}</strong>))}

                            <div className="chart-wrapper">
                                <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100}
                                      height={30}/>
                            </div>
                        </div>
                    </Col>
                        <Col sm="3">
                            <div className="callout callout-danger">
                                <small className="text-muted">Total Trucks In Transit</small>
                                <br/>

                                {
                                    kpiData.map(item => (<strong className="h4">{item.total_trucks}</strong>))}
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                          width={100} height={30}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <DataTable columns={columns} data={data} left={leftButton}/>
                </CardBody>
            </Card>
        </div>
    );
}
