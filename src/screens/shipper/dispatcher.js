import React, {useState, useEffect} from "react";
import DataTable from "../../components/dataTable";
import {Col, Row, Card, CardBody, Badge, Button} from "reactstrap";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";

const apiKey = "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8";
// const [data, setData] = useState(false);

const DispatchMap = (props) => (
    <Map google={props.google}
         zoom={10}
         initialCenter={{
             lat: 35.5496939,
             lng: -120.7060049
         }}

    />
);

const DispatchMapWrapper = GoogleApiWrapper({
    apiKey: apiKey
})(DispatchMap);

const dispatchPlanColumns = [
    {
        dataField: 'id',
        text: 'Destination',
        sort: true
    }, {
        dataField: 'Vehicle',
        text: 'NO. of trucks',

    }, {
        dataField: 'Gross_Weight',
        text: 'Weight',
        sort: true
    },
    {
        dataField: 'Route',
        text: 'Route',
        sort: true,
    },
    {
        dataField: 'Route_Distance',
        text: 'Route Distance',
        sort: true,
    },
    {
        dataField: 'Route_TAT',
        text: 'Date',
        sort: true,
    },
    {
        dataField: 'Dispatch_Time',
        text: 'Dispatch Time',
        sort: true,
    },
    {
        dataField: 'Action',
        text: 'Action',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Raise RFQ</Button>
        )


    }


];
const dispatchListColumns = [
    {
        dataField: 'SKU_ID',
        text: 'SKU ID',
        sort: true
    },
    {
        dataField: 'Name',
        text: 'Name',
        sort: true
    },


    {
        dataField: 'Quantity',
        text: 'Quantity',
        sort: true,
    }, {

        dataField: 'Weight',
        text: 'Weight',
        sort: true
    },
    {
        dataField: 'Action',
        text: 'Action',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Route Map</Button>
        )


    }
];


export default (props) => {
    // "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8"

    const [data, setData] = useState([]);
    const [plan, setPlan] = useState([]);

    useEffect(() => {
        setData([
            {
                'id': 'YNT1151',
                'Vehicle': 'Container 20ft sxl 7 TON',
                'Gross_Weight': '7878700 KG',
                'Volume_Utilization': '778787%',
                'Route': 'Delhi-Mumbai',
                'Route_Distance': '665656km',
                'Route_TAT': '76 HOURS',
                'Dispatch_Time': 'July 30, 2019, 4:48 p.m.',
            },
            {
                'id': 'YNT1151',
                'Vehicle': 'Container 20ft sxl 7 TON',
                'Gross_Weight': '7878700 KG',
                'Volume_Utilization': '778787%',
                'Route': 'Delhi-Mumbai',
                'Route_Distance': '665656km',
                'Route_TAT': '76 HOURS',
                'Dispatch_Time': 'July 30, 2019, 4:48 p.m.',
            },
            {
                'id': 'YNT1151',
                'Vehicle': 'Container 20ft sxl 7 TON',
                'Gross_Weight': '7878700 KG',
                'Volume_Utilization': '778787%',
                'Route': 'Delhi-Mumbai',
                'Route_Distance': '665656km',
                'Route_TAT': '76 HOURS',
                'Dispatch_Time': 'July 30, 2019, 4:48 p.m.',
            },
            {
                'id': 'YNT1151',
                'Vehicle': 'Container 20ft sxl 7 TON',
                'Gross_Weight': '7878700 KG',
                'Volume_Utilization': '778787%',
                'Route': 'Delhi-Mumbai',
                'Route_Distance': '665656km',
                'Route_TAT': '76 HOURS',
                'Dispatch_Time': 'July 30, 2019, 4:48 p.m.',
            },
        ]);


        setPlan([
            {
                'SKU_ID': '8787787',
                'Quantity': '433',
                'Name': 'Anchor Bolts',
                'Weight': '343'
            },
            {
                'SKU_ID': '8787787',
                'Quantity': '433',
                'Name': 'Anchor Bolts',
                'Weight': '343'
            },
            {
                'SKU_ID': '8787787',
                'Quantity': '433',
                'Name': 'Anchor Bolts',
                'Weight': '343'
            },

        ]);
    });

    return (


        <Row style={{position: 'relative', top: -30, left: -30}}>
            <DispatchMapWrapper/>
            <Col sm="12" lg="6" style={{position: 'absolute',top:'5'}}>
                <Card>
                    <CardHeader>
                        <b>Dispatch Plan</b>
                    </CardHeader>
                    <CardBody>
                        <DataTable columns={dispatchPlanColumns} data={data}/>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" lg="6" style={{position: 'absolute', right: 0}}>
                <Row>
                    <Col sm={"12"} lg={"12"}>
                        <Card style={{height: '40vh', padding:'0'}}>
                            <CardHeader>
                                <b>Route</b>
                            </CardHeader>
                            <CardBody style={{ padding:'0'}}>
                                <DispatchMapWrapper/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={"12"} lg={"12"}>
                        <Card >
                            <CardHeader>
                                <b>Loading Plan</b>
                            </CardHeader>
                            <div>
                                <DataTable columns={dispatchListColumns} data={plan}/>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}
