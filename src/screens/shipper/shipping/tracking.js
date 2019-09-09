import React from "react";
import DataTable from "../../../components/dataTable";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import CardHeader from "reactstrap/es/CardHeader";
import {assignedTrucks, trackNow} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";

const apiKey = "AIzaSyBa6popp4h4-uNP98vV_-qhI9-GdHg1uQ8";

//clase based mai connnnvert krlo is
//kese hota h ??
//nahii aata bc :/
//classs banao return wala render(){return ()} is return mai dal do or use state ki jnga this.state={},set plan kiplace prr this,setState({)
const DispatchMap = (props) => {
    console.log(props, "here");

    return <Map google={props.google}
                zoom={10}
                center={{
                    lat: props.location[0].loc[0] || 28.689631,
                    lng: props.location[0].loc[1] || 77.129890,
                }}

    >
        <Marker
            name={'Your position'}
            position={{
                lat: props.location[0].loc[0] || 28.689631,
                lng: props.location[0].loc[1] || 77.129890,
            }}
        />


    </Map>
};
const DispatchMapWrapper = GoogleApiWrapper({
    apiKey: apiKey,

})(DispatchMap);

class Tracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plan: [{loc: [33, 77]}],
            data: [],
        }
    }

    componentDidMount() {
        const getTrucks = async () => {
            refreshing();
            const truckData = await assignedTrucks();
            this.setState({data: truckData});
            console.log(truckData, "truck")
        };
        const getLoacation = async (id) => {
            const locationPlan = await trackNow(id);
            this.setState({data: locationPlan});

            console.log(locationPlan, "locationPlan");
        };

        getTrucks();
        getLoacation();
    }


    render() {

        console.log(DispatchMap);


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

                        <Button color="primary" onClick={async () => {
                            const locationPlan = await trackNow(row.id);
                            console.log(locationPlan);
                            this.setState({
                                plan: locationPlan
                            })
                        }

                        }>
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






    return (
        <Row style={{position: 'relative', flexWrap: 'nowrap', padding: '0'}}>
            {/*<DispatchMapWrapper/>*/}

            <Card sm={"6"} lg={"6"}>
                <CardHeader>
                    <b>Dispatch Plan</b>
                </CardHeader>
                <CardBody sm={"6"} lg={"6"} md={"6"} xs={"6"} style={{padding: '0'}}>
                    <DataTable columns={assignedTruckColumns} data={this.state.data}/>
                </CardBody>
            </Card>


            <Col sm={"6"} lg={"6"} xs={"6"} xl={"6"} style={{padding: '0'}}>

                <Card sm={"6"} lg={"6"} style={{padding: 0, marginBottom: '0'}}>
                    <CardHeader>
                        <b>Loading Plan</b>
                    </CardHeader>
                    <div>
                        <DataTable columns={dispatchListColumns} data={this.state.plan}/>
                    </div>
                </Card>
                <Card>
                    <CardHeader>
                        <b>Route</b>
                    </CardHeader>
                    <CardBody sm={"6"} lg={"6"} style={{padding: '0', height: '15vw'}}>
                        <DispatchMapWrapper location={this.state.plan}/>
                    </CardBody>

                </Card>
            </Col>
        </Row>
    )


    }
}

export default Tracking
