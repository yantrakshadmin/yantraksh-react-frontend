import React from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";


const columns = [

    {
        dataField: 'name',
        text: 'Origin',
        sort: true

    },
    {
    dataField: 'truck_type',
    text: 'Truck Type',
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

}, {
    dataField: 'material_type',
    text: 'Material Type',
    sort: true
}, {
    dataField: 'posted_on',
    text: 'Date',
    sort: true,
}, {
    dataField: 'offered_price',
    text: 'Offered Price',
    sort: true
}, ];


export default ({data=[]}) => {


    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Live Trucks <small className="text-muted"/>
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

                    >
                        {
                            props => (
                                <div>
                                    <div style={{paddingTop: 10, paddingBottom: 10}}>



                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Search.SearchBar {...props.searchProps} />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        striped
                                        hover
                                        condensed
                                        pagination={paginationFactory()}
                                        selectRow={{mode: 'checkbox'}}
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
