import React, {useState, useEffect} from "react";
import DataTable from "../../components/dataTable";
import {Col, Row, Card, CardBody, Button} from "reactstrap";
import {Map, GoogleApiWrapper} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";
import {getDispatchHistory} from "../../helpers/api";

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
        text: 'ID',
        sort: true
    },
    {
        dataField: 'truck_name',
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
        dataField: 'distance',
        text: 'Route Distance',
    },
    {
        dataField: 'route_tat',
        text: 'Date',
        sort: true,
    },
    {
        dataField: 'time',
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

    const [data, setData] = useState([]);
    const [plan, setPlan] = useState([]);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getDispatchHistory();
            const plan = await getDispatchHistory();
            setData(data)
            setData(plan)
        };

        getNetwork();
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
