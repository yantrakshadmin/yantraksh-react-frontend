import React, {useState, useEffect} from "react";
import DataTable from "../../../components/dataTable";
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
        dataField: 'supplier',
        text: 'supplier',
        sort: true
    }, {
        dataField: 'date',
        text: 'Date',

    }, {
        dataField: 'bidAmount',
        text: 'Weight',
        sort: true
    },
    {
        dataField: 'name',
        text: 'Name',
        sort: true,
    },

    {
        dataField: 'startTrip',
        text: 'Start Trip',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Start Trip</Button>
        )


    },
    {
        dataField: 'trackNow',
        text: 'Track Now',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Track Now!</Button>
        )


    },


];
const dispatchListColumns = [
    {
        dataField: 'lastSeen',
        text: 'Last Seen At',
        sort: true
    },
    {
        dataField: 'time',
        text: 'Time',
        sort: true
    },


];


export default (props) => {
    // "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8"

    const [data, setData] = useState([]);
    const [plan, setPlan] = useState([]);

    useEffect(() => {
        setData([
            {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            }, {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            }, {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            }, {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            }, {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            }, {
                'supplier': 'YNT1151',
                'date': 'Container 20ft sxl 7 TON',
                'bidAmount': '7878700 KG',
                'name': '778787%',
            },

        ]);


        setPlan([
            {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
            }, {
                'lastSeen': '12:12:12',
                'time':'433',
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
