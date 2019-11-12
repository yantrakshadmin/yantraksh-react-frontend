import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from 'reactstrap';
import DataTable from "../../../components/dataTable";
import {refreshing} from "../../../helpers/notifications";
import {assignRFQs, rfqresults} from "../../../helpers/api";
import {Line} from "react-chartjs-2";
import Button from "reactstrap/es/Button";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";

const columns = [

    {
        dataField: 'supplier',
        text: 'Supplier Name',
        sort: true,
    },

    {
        dataField: 'least_bid',
        text: 'Least Bid',
        sort: true,

    },
    {
        dataField: 'confirmed',
        text: 'Status',
        sort: true
    }, {
        dataField: 'taken_quizzes',
        text: 'Assign',
        sort: true,
        formatter: (cell, row) => (
            <div>

                    <Button color="primary" onClick={() =>
                        assignRFQs(row.quiz,row.id) }>
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
    const brandPrimary = getStyle('--primary');
    const brandDanger = getStyle('--danger');
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
                    <i className="fa fa-align-justify"/>Bids <small className="text-muted"/>
                    <Row>
                        <Col sm="3">
                            <div className="callout callout-info">
                                <small className="text-muted">Total Bids received</small>
                                <br/>
                                <strong className="h4">0</strong>

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
                                <strong className="h4">0</strong>

                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                          width={100} height={30}/>
                                </div>
                            </div>
                        </Col><Col sm="3">
                        <div className="callout callout-info">
                            <small className="text-muted">Total Trucks Assigned</small>
                            <br/>
                            <strong className="h4">0</strong>

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

                                <strong className="h4">0</strong>
                                <div className="chart-wrapper">
                                    <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts}
                                          width={100} height={30}/>
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
