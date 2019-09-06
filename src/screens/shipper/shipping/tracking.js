import React, {useEffect, useState} from "react";
import DataTable from "../../../components/dataTable";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {GoogleApiWrapper, Map} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";
import {assignedTrucks, trackNow} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";

const apiKey = "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8";

const LoadingPlan = ({row}) => {
    const latt = row.lat[0];
    const long = row.lat[1];
}


const DispatchMap = (props) => (

    <Map google={props.google}
         zoom={10}
         initialCenter={{
             lat: 353,
             lng: 455454,
         }}
    />
);
console.log(DispatchMap);

const DispatchMapWrapper = GoogleApiWrapper({
    apiKey: apiKey
})(DispatchMap);


const assignedTruckColumns = [
    {
        dataField: 'origin',
        text: 'Origin',
        sort: true

    }, {
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
    },
    {
        dataField: 'trackNow',
        isDummyField: true,
        text: 'Track Now',
        sort: true,
        formatter: (cell, row) => (
            <div>

                <Button color="primary" onClick={() =>
                    trackNow(row.id)}>
                    Track Now!

                </Button>

            </div>
        )

    }];


const dispatchListColumns = [
    {
        dataField: 'Date and Time',
        text: 'Date and time ',
        sort: true,
        formatter: (cell, row) => {
            return (row.createdAt)

        }
    },
    {
        dataField: 'tel',
        text: 'Location',
        sort: true,
        formatter: (cell, row) => {
            return (row.address)
        }
    },

    {
        dataField: 'location',
        text: 'Location',
        sort: true,
        formatter: (cell, row) => {
            return (row.loc[0])
        }
    },

    {
        dataField: 'location',
        text: 'Location',
        sort: true,
        formatter: (cell, row) => {

            return (row.loc[1])
        }
    },
];


export default (props) => {
    // "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8"

    const [data, setData] = useState([]);
    const [plan, setPlan] = useState([]);

    useEffect(() => {
            const getTrucks = async () => {
                refreshing();
                const truckData = await assignedTrucks();
                setData(truckData);
                console.log(truckData, "truck")
            };
            const getLoacation = async () => {
                const locationPlan = await trackNow();
                setPlan(locationPlan);
                console.log(locationPlan, "locationPlan");
            };

            getTrucks();
            getLoacation();
        }, [assignedTrucks], [trackNow]
    );

    return (
        <Row style={{position: 'relative',flexWrap: 'nowrap', padding:'0'}}>
            {/*<DispatchMapWrapper/>*/}

            <Card sm={"6"} lg={"6"}>
                <CardHeader>
                    <b>Dispatch Plan</b>
                </CardHeader>
                <CardBody sm={"6"} lg={"6"} md={"6"} xs={"6"} style={{ padding:'0'}} >
                    <DataTable columns={assignedTruckColumns} data={data}/>
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
                    <CardBody  sm={"6"} lg={"6"}  style={{ padding:'0',height:'15vw'}}>
                        <DispatchMapWrapper/>
                    </CardBody>

                </Card>
            </Col>



        </Row>
    )
}
