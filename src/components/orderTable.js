import React, {useEffect} from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {BeatLoader} from "react-spinners";
import {loadOrders} from "../actions/orders";
import {connect} from "react-redux";
import {ALL_ORDERS, DISPATCHED_ORDERS, ON_HOLD_ORDERS, RTD_ORDERS} from "../data/orderTitles";
import {refreshing} from "../helpers/notifications";


const getStatus = (row) => {
    if (row.is_dispatched)
        return 'DISPATCHED';

    if (row.rtd)
        return 'RTD';

    return 'HOLD'
};

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
}, {
    dataField: 'height',
    text: 'Status',
    isDummyField: true,
    formatter: (cell, row) => {
        if (row.is_dispatched)
            return (<Badge color="success" style={{width: '100%'}}>Dispatched</Badge>);
        if (row.rtd)
            return (<Badge color="primary" style={{width: '100%'}}>RTD</Badge>);

        return (<Badge color="warning" style={{width: '100%'}}>On Hold</Badge>)
    },
    align: 'center',
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

const filterData = (data, hold, rtd, dispatched) => {
    // xd = new_data
    let xd = [];
    data.map((row) => {
        if (!row.is_dispatched && !row.rtd && hold)
            xd.push(row);

        if (row.is_dispatched && dispatched)
            xd.push(row);

        if (row.rtd && rtd)
            xd.push(row);

    });

    return xd;
};

const OrderTable = ({orders, title, rtd = false, hold = false, dispatched = false, loading, loaded, getOrders}) => {

    useEffect(() => {
        if (!loaded)
            getOrders()
    }, [getOrders, loaded]);


    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>{title}
                    <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <Nav tabs>
                        <NavItem>
                            <NavLink href="/#/dashboard/orders" active={title === ALL_ORDERS}>{ALL_ORDERS}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/dashboard/orders/on-hold"
                                     active={title === ON_HOLD_ORDERS}>{ON_HOLD_ORDERS}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/dashboard/orders/ready-to-dispatch"
                                     active={title === RTD_ORDERS}>{RTD_ORDERS}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/dashboard/orders/dispatched"
                                     active={title === DISPATCHED_ORDERS}>{DISPATCHED_ORDERS}</NavLink>
                        </NavItem>
                    </Nav>
                    <ToolkitProvider
                        keyField="id"
                        data={filterData(orders, hold, rtd, dispatched)}
                        columns={columns}
                        search
                        exportCSV={{onlyExportSelection: true, exportAll: true}}
                    >
                        {
                            props => (
                                <div>
                                    <div style={{paddingTop: 10, paddingBottom: 10}}>
                                        <ButtonGroup>
                                            {title !== ON_HOLD_ORDERS ? (
                                                <Button color={"warning"}>
                                                    <i className={"fa fa-pause-circle"}/> &nbsp;
                                                    Mark Hold
                                                </Button>
                                            ) : null}
                                            {title !== RTD_ORDERS ? (
                                                <Button color="primary">
                                                    <i className={"fa fa-share"}/> &nbsp;
                                                    Ready to Dispatch
                                                </Button>
                                            ) : null}

                                            {title !== DISPATCHED_ORDERS ? (
                                                <Button color={"success"}>
                                                    <i className={"fa fa-truck"}/> &nbsp;
                                                    Plan Vehicle
                                                </Button>
                                            ) : null}
                                        </ButtonGroup>
                                        <span style={{float: 'right'}}>
                                        <NCSVButton {...props.csvProps} />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <Button color={"link"} onClick={() => {
                                                refreshing();
                                                getOrders();
                                            }}>
                                            <i className={"fa fa-refresh"}/> &nbsp;
                                                Refresh
                                        </Button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                            <Search.SearchBar {...props.searchProps} />
                                    </span>
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        condensed
                                        bordered={false}
                                        pagination={paginationFactory()}
                                        selectRow={{mode: 'checkbox'}}
                                        loading={loading}
                                        noDataIndication={() => (
                                            <div style={{textAlign: 'center'}}><BeatLoader/></div>)}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </CardBody>
            </Card>
        </div>
    );
};


const mapStateToProps = (state) => ({
    orders: state.data.orders.data,
    loading: state.data.orders.loading,
    loaded: state.data.orders.loaded,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(loadOrders())
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
