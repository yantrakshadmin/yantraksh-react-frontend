import React from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";


const columns = [{
    dataField: 'name',
    text: 'Name',
    sort: true
}, {
    dataField: 'pid',
    text: 'SKU ID',
    sort: true

}, {
    dataField: 'quantity',
    text: 'Quantity',
    sort: true
}, {
    dataField: 'height',
    text: 'Dimension',
    isDummyField: true,
    formatter: (cell, row) => (<div>
        {row.length} x {row.width} x {row.height}
    </div>)
}, {
    dataField: 'weight',
    text: 'Weight',
    sort: true
}, {
    dataField: 'volume',
    text: 'Volume',
    sort: true,
}, {
    dataField: 'origin',
    text: 'Origin',
    sort: true
}, {
    dataField: 'destination',
    text: 'Destination',
    sort: true
}, {
    dataField: 'date',
    text: 'Date',
    sort: true,
    // formatter: (cell) => Date.parse(cell).getDate()
}];


const NCSVButton = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <button className="btn" onClick={handleClick}>
            <i className={"fa fa-download"}/> &nbsp;
            Export to CSV
        </button>
    );
};

export default ({data, active = 'all', rtdButton = true, hold = true, plan = true}) => (
    <div className="animated fadeIn">
        <Card>
            <CardHeader>
                <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
            </CardHeader>
            <CardBody>
                <Nav tabs>
                    <NavItem>
                        <NavLink href="#" active={active === 'all'}>All Orders</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/dashboard/orders/on-hold" active={active === 'hold'}>On Hold</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/dashboard/orders/ready-to-dispatch" active={active === 'rtd'}>Ready To
                            Dispatched</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#/dashboard/orders/dispatched"
                                 active={active === 'dispatched'}>Dispatched</NavLink>
                    </NavItem>
                </Nav>
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

                                    <span style={{float: 'right'}}>
                                        <NCSVButton {...props.csvProps} />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <Search.SearchBar {...props.searchProps} />
                                    </span>
                                </div>
                                <BootstrapTable
                                    {...props.baseProps}
                                    striped
                                    hover
                                    condensed
                                    pagination={paginationFactory()}
                                    selectRow={{mode: 'checkbox'}}
                                    noDataIndication={BeatLoader}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </CardBody>
        </Card>
    </div>
);
