import React, {useState, useEffect} from "react";
import DataTable from "../../components/dataTable";
import {Col, Row, Card, CardBody, Button} from "reactstrap";
import {Map, GoogleApiWrapper} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";

const apiKey = "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8";

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
        text: 'Distance',
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
    }, [setData, setPlan]);

    return (
        <Row style={{position: 'relative',flexWrap: 'nowrap', padding:'0'}}>
            {/*<DispatchMapWrapper/>*/}

                <Card sm={"6"} lg={"6"}>
                    <CardHeader>
                        <b>Dispatch Plan</b>
                    </CardHeader>
                    <CardBody sm={"6"} lg={"6"} md={"6"} xs={"6"} style={{ padding:'0'}} >
                        <DataTable columns={dispatchPlanColumns} data={data}/>
                    </CardBody>
                </Card>


                <Col sm={"6"} lg={"6"} xs={"6"} xl={"6"} style={{padding:'0'}}>

                        <Card sm={"6"} lg={"6"} style={{padding:0,marginBottom:'0'}}>
                            <CardHeader>
                                <b>Loading Plan</b>
                            </CardHeader>
                            <div>
                                <DataTable columns={dispatchListColumns} data={plan}/>
                            </div>

                        </Card>


                        <Card >

                            <CardHeader>
                                <b>Route</b>
                            </CardHeader>
                            <CardBody  sm={"6"} lg={"6"}  style={{ padding:'0',height:'20vw'}}>
                                <DispatchMapWrapper/>
                            </CardBody>

                        </Card>
                </Col>



        </Row>
    )
}
