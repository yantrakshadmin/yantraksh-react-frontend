import React, {useState, useEffect} from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";
import {refreshing} from "../../../helpers/notifications";
import {rfq} from "../../../helpers/api";


const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true
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

},{
    dataField: 'truck_name',
    text: 'Truck Name',

},
    {
        dataField: 'truck_type',
        text: 'Truck Type',
        formatter: (cell, row) => {
            if (row.truck_type==1)
                return (<Badge color="success" style={{width: '100%'}}>Open</Badge>);
            if (row.truck_type==2)
                return (<Badge color="primary" style={{width: '100%'}}>Container</Badge>);
            if (row.truck_type==3)
                return (<Badge color="warning" style={{width: '100%'}}>Trailer</Badge>)
        },

    },


    {
    dataField: 'weight',
    text: 'Weight',
    sort: true
},  {
    dataField: 'total_bid',
    text: 'Total Bids',
    sort: true
},
    {
        dataField: 'posted_on',
        text: 'Date',
        sort: true
    },

    {
        dataField: 'status',
        text: 'Status',
        sort: true
    },

    {
    dataField: 'Action',
    text: 'Action',
    sort: true,
    formatter: (row, cell) => (
        <Button color="primary">View Bids</Button>
    )


},];


export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await rfq();
            setData(trucks)
        };

        loadApiData();
    }, []);


    return (

        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <ToolkitProvider
                        keyField="id"
                        data={data}
                        columns={columns}
                        search
                        exportCSV={{onlyExportSelection: true, exportAll: true}}
                    >
                        {
                            props => (
                                <div>
                                    <div style={{paddingTop: 10, paddingBottom: 10}}>
                                        <Search.SearchBar {...props.searchProps} />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        striped
                                        hover
                                        condensed
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
