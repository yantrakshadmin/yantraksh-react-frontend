import React from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";


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
    dataField: 'total_truck',
    text: 'NO. of trucks',

}, {
    dataField: 'weight',
    text: 'Weight',
    sort: true
}, {
    dataField: 'posted_on',
    text: 'Date',
    sort: true,
}, {
    dataField: 'total_bid',
    text: 'Total Bids',
    sort: true
},
    {
        dataField: 'Date',
        text: 'date',
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


export default ({data=[]}) => (
    <div className="animated fadeIn">
        <Card>
            <CardHeader>
                <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
            </CardHeader>
            <CardBody>
                {/*<Nav tabs>*/}
                {/*    <NavItem>*/}
                {/*        <NavLink href="#" active={active === 'all'}>All Orders</NavLink>*/}
                {/*    </NavItem>*/}
                {/*    <NavItem>*/}
                {/*        <NavLink href="/#/dashboard/orders/on-hold" active={active === 'hold'}>On Hold</NavLink>*/}
                {/*    </NavItem>*/}
                {/*    <NavItem>*/}
                {/*        <NavLink href="/#/dashboard/orders/ready-to-dispatch" active={active === 'rtd'}>Ready To*/}
                {/*            Dispatched</NavLink>*/}
                {/*    </NavItem>*/}
                {/*    <NavItem>*/}
                {/*        <NavLink href="/#/dashboard/orders/dispatched"*/}
                {/*                 active={active === 'dispatched'}>Dispatched</NavLink>*/}
                {/*    </NavItem>*/}
                {/*</Nav>*/}
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
                                    <ButtonGroup>
                                        <Button color={"warning"}>
                                            <i className={"fa fa-pause-circle"}/> &nbsp;
                                            Mark Hold
                                        </Button>
                                        <Button color="primary">
                                            <i className={"fa fa-share"}/> &nbsp;
                                            Dispatch
                                        </Button>
                                        <Button color={"success"}>
                                            <i className={"fa fa-truck"}/> &nbsp;
                                            Plan Vehicle
                                        </Button>
                                    </ButtonGroup>


                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Search.SearchBar {...props.searchProps} />
                                </div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    striped
                                    hover
                                    condensed
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
