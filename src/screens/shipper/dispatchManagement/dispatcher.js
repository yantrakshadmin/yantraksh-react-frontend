import React, {useEffect, useState} from "react";
import DataTable from "../../../components/dataTable";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {GoogleApiWrapper, Map} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";
import {getDispatchHistory} from "../../../helpers/api";
import {Line} from "react-chartjs-2";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";
import {rfqRaised} from "../../../helpers/notifications";
const apiKey = "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8";
const lat = 287041;
const lng = 77.1025;



const DispatchMap = (props) => (
    <Map google={props.google}
         zoom={10}
         initialCenter={{
             lat: 287041,
             lng: 77.1025
         }}

    />
);

const DispatchMapWrapper = GoogleApiWrapper({
    apiKey: apiKey
})(DispatchMap);

const dispatchPlanColumns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true
    },
    {
        dataField: 'name',
        text: 'Truck',
        sort: true,
        isDummyField: true,
        formatter: (cell, row) => (
            <span>{row.truck_type} {row.truck_name}</span>
        )
    },
    {
        dataField: 'total_trucks',
        text: 'NO. of trucks',
        sort: true
    }, {
        dataField: 'weight',
        text: 'Weight',
        sort: true
    },
    {
        dataField: 'percent_filled',
        text: 'Volume utilisation',
        sort: true
    },
    {
        dataField: 'origin',
        text: 'Route',
        isDummyField: true,
        formatter: (cell, row) => (
            <span>{row.origin} -> {row.destination}</span>
        )
    },
    {
        dataField: 'route_distance',
        text: 'Route Distance',
        sort: true,
    },
    {
        dataField: 'scheduled_date',
        text: 'Date',
        sort: true,
    },
    {
        dataField: 'route_tat',
        text: 'Dispatch Time',
        sort: true,
    },


];
const dispatchListColumns = [
    {
        dataField: 'id',
        text: 'SKU ID',
        sort: true,
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true
    }, {
        dataField: 'pid',
        text: 'PID',
        sort: true,
    }, {
        dataField: 'quantity',
        text: 'Quantity',
        sort: true,
    }
];

const LoadingPlan = ({row}) => {

    return (
        <div className={"animated slideInDown lightSpeedIn"} style={{marginBottom: 60}}>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>Loading Plan
                    <small className="text-muted"/>
                </CardHeader>
            <Row>
                <Col lg={7}>
                    <DataTable columns={dispatchListColumns} data={row.items}/>
                </Col>
                <Col lg={5}>
                    <iframe src={row.route_link} frameBorder="0" style={{'height':'100%', 'width':'100%'}} />
                    {/*<DispatchMapWrapper/>*/}
                </Col>
            </Row>
            </Card>
        </div>
    )
};

const expandRow = row => (
    <LoadingPlan row={row}/>
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

export default (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getDispatchHistory();
            setData(data);
            console.log(data);
        };

        getNetwork();
    }, [setData]);

    return (
        <Row>

            <Col lg={12}>
                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"/>Dispatch Plan
                        <small className="text-muted"/>

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
                        <DataTable columns={dispatchPlanColumns} data={data} expandRow={{renderer: expandRow}}/>
                    </CardBody>
                </Card>

            </Col>
        </Row>
    )
}
