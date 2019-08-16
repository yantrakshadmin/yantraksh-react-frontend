import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {refreshing} from "../../../helpers/notifications";
import {liveAvailableTrucks} from "../../../helpers/api";
import Loader from "../../../components/loader";


const columns = [
    {
        dataField: 'name',
        text: 'Origin',
        sort: true

    },
    {
        dataField: 'truck_type',
        text: 'Truck Type',
        sort: true,
        formatter: (cell, row) => {
            if (row.truck_type === 1)
                return (<Badge color="success" style={{width: '100%'}}>Container</Badge>);
            if (row.truck_type === 2)
                return (<Badge color="primary" style={{width: '100%'}}>Trailer</Badge>);
            if (row.truck_type === 3)
                return (<Badge color="warning" style={{width: '100%'}}>Open</Badge>)
        },

    }, {
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
    }
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
    }, []);

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
                                    <div style={{paddingTop: 10, paddingBottom: 10, float: 'right'}}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Search.SearchBar {...props.searchProps} />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        condensed
                                        striped

                                        bordered={false}
                                        pagination={paginationFactory()}
                                        noDataIndication={Loader}
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
