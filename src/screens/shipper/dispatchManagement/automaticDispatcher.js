import React, {useState, useEffect} from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";
import {refreshing} from "../../../helpers/notifications";
import {liveAvailableTrucks} from "../../../helpers/api";





const columns = [



    {
        dataField: 'name',
        text: 'ID',
        sort: true

    },
    {
    dataField: 'truck_type',
    text: ' Vehicles',
    sort: true,
        formatter: (cell, row) => {
            if (row.truck_type==1)
                return (<Badge color="success" style={{width: '100%'}}>Container</Badge>);
            if (row.truck_type==2)
                return (<Badge color="primary" style={{width: '100%'}}>Trailer</Badge>);
            if (row.truck_type==3)
                return (<Badge color="warning" style={{width: '100%'}}>Open</Badge>)
        },

}, {
    dataField: 'origin',
    text: 'Gross Weight',
    sort: true

}, {
    dataField: 'destination',
    text: 'Volume',
    sort: true
}, {
    dataField: 'total_trucks',
    text: 'Utilization',

},  {
    dataField: 'scheduled_date',
    text: 'Route',
    sort: true,
}, {
    dataField: 'offered_price',
    text: 'Route Distance',
    sort: true
},

    {
        dataField: 'offered_price',
        text: 'Route TAT',
        sort: true
    },


    {
        dataField: 'offered_price',
        text: 'Dispatch Time',
        sort: true
    },
    {
        dataField: 'offered_price',
        text: 'Loading Plan',
        sort: true
    },
    {
        dataField: 'offered_price',
        text: 'Action',
        sort: true,
        formatter: (row, cell) => (
            <Button color="primary">Raise RFQ</Button>
        )
    },










];


export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await liveAvailableTrucks();
            setData(trucks)
        };

        loadApiData();
    }, [liveAvailableTrucks]);

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Live Trucks <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <ToolkitProvider
                        keyField="id"
                        data={data}
                        columns={columns}
                        search

                    >
                        {
                            props => (
                                <div>
                                    <span style={{paddingTop: 10, paddingBottom: 10, float:'right'}}>



                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Search.SearchBar {...props.searchProps} />
                                    </span>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        condensed
                                        striped

                                        bordered={false}
                                        pagination={paginationFactory()}
                                        noDataIndication={() => (<div style={{textAlign: 'center'}}><BeatLoader/></div>)}


                                    />

                                </div>
                            )
                        }
                    </ToolkitProvider>
                </CardBody>
            </Card>

        </div>

    );
}
