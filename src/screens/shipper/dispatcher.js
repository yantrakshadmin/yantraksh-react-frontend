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
        dataField: 'distance',
        text: 'Route Distance',
        sort: true,
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
        dataField: 'id',
        text: 'SKU ID',
        sort: true
    },
    {
        dataField: 'items',
        text: 'Name',
        sort: true,

        formatter: (cell, row) => {

                row.items.forEach(row.id)
            {
                {
                    for (var i = 0; i < row.items.length; i++) {
                        return (row.items[i].name);
                    }
                }
            }
        }



    },{
        dataField: 'items',
        text: 'ID',
        sort: true,
        formatter: (cell, row) => {
            for(var i = 0; i < row.items.length; i++)
            {
                return(row.items[i].id);
            }


            }

    },{
        dataField: 'items',
        text: 'Quantity',
        sort: true,
        formatter: (cell, row) => {


               for (var i = 0; i < row.items.length; i++) {

                   return (row.items[i].quantity);

           }



        }


    },

];

const LoadingPlan = ({row}) => {

    const [plan, setPlan] = useState([]);

    useEffect(() => {
        const getNetwork = async () => {
            const data = await getDispatchHistory();
            const plan = await getDispatchHistory();
            setPlan(data);
            setPlan(plan)
        };

        getNetwork();
    }, [setPlan]);

    return (
        <div className={"animated slideInDown lightSpeedIn"} style={{marginBottom: 60, marginTop: 20}}>
            <Row>
                <Col lg={7}>
                    <DataTable columns={dispatchListColumns} data={plan}/>
                </Col>
                <Col lg={4}>
                    <DispatchMapWrapper/>
                </Col>
            </Row>
        </div>
    )
};

const expandRow = row => (
    <LoadingPlan row={row}/>
);

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
                        <DataTable columns={dispatchPlanColumns} data={data} expandRow={{renderer: expandRow}}/>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}
