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

const LoadingPlan = ({row}) => {

    const [plan, setPlan] = useState([]);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getDispatchHistory();
            setPlan(data)
        };

        getNetwork();
    }, [setPlan]);

    return (
        <div className={"animated slideInDown lightSpeedIn"} style={{backgroundColor: '#f1f1f1'}}>
            <Row>
                <Col lg={7}>
                    <DataTable columns={dispatchListColumns} data={[]}/>
                </Col>
                <Col lg={4}>
                    <DispatchMapWrapper/>
                </Col>
            </Row>
        </div>
    )
};

const expandRow = {
    renderer: row => (
        <LoadingPlan row={row}/>
    )
};

export default (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getDispatchHistory();
            setData(data)
        };

        getNetwork();
    }, [setData]);

    return (
        <Row>
            <Col lg={12}>
                <Card>
                <CardHeader>
                    <b>Dispatch Plan</b>
                </CardHeader>
                <CardBody>
                    <DataTable columns={dispatchPlanColumns} data={data} expandRow={expandRow}/>
                </CardBody>
                </Card>

            </Col>
        </Row>
    )
}

{/*<Col>*/
}

{/*    <Card>*/
}
{/*        <CardHeader>*/
}
{/*            <b>Loading Plan</b>*/
}
{/*        </CardHeader>*/
}
{/*        <div>*/
}
{/*            <DataTable columns={dispatchListColumns} data={plan}/>*/
}
{/*        </div>*/
}

{/*    </Card>*/
}

{/*    <Card>*/
}

{/*        <CardHeader>*/
}
{/*            <b>Route</b>*/
}
{/*        </CardHeader>*/
}
{/*        <CardBody>*/
}
{/*            <DispatchMapWrapper/>*/
}
{/*        </CardBody>*/
}

{/*    </Card>*/
}
{/*</Col>*/
}
