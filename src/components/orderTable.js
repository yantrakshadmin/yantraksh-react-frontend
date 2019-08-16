import React, {Component} from 'react';
import {Card, NavLink, Nav, NavItem, CardBody, CardHeader, Button, ButtonGroup} from 'reactstrap';
import {loadOrders, markOrdersOnHold, markOrdersRTD, planVehiclesForOrders} from "../actions/data";
import {connect} from "react-redux";
import {ALL_ORDERS, DISPATCHED_ORDERS, ON_HOLD_ORDERS, RTD_ORDERS} from "../data/orderTitles";
import {refreshing} from "../helpers/notifications";
import {withRouter} from 'react-router-dom'
import Upload from "./upload";
import DataTable from "../components/dataTable";
import columns from "../data/columns/orders";


const filterData = (data, hold, rtd, dispatched) => {
    let xd = [];
    data.map((row) => {
        if (!row.is_dispatched && !row.rtd && hold)
            xd.push(row);

        if (row.is_dispatched && dispatched)
            xd.push(row);

        if (row.rtd && rtd)
            xd.push(row);

        return null
    });

    return xd;
};

class OrderTable extends Component {

    refPass = (node) => {
        this.tableNode = node;
    };

    getSelectedData = () => {
        const selected = this.tableNode.selectionContext.selected;
        this.props.markHold(selected);
        return this.tableNode.selectionContext.selected;
    };

    markHold() {
        const selected = this.getSelectedData();
        this.props.markHold(selected);
        this.props.history.push('/orders/on-hold')
    }

    markRTD() {
        const selected = this.getSelectedData();
        this.props.markRTD(selected);
        this.props.history.push('/orders/ready-to-dispatch')
    }

    planVehicle() {
        const selected = this.getSelectedData();
        this.props.planVehicle(selected);
        this.props.history.push('/orders/dispatched')
    }

    componentDidMount() {
        if (!this.props.loaded)
            this.props.getOrders()
    }

    render() {
        const {orders = [], title, rtd = false, hold = false, dispatched = false, loading, loaded, getOrders, props} = this.props;

        const leftButtons = (props) => (
            <div style={{display: 'inline-block'}}>
                <ButtonGroup>
                    <Button color={"warning"}
                            onClick={this.markHold.bind(this)}
                            disabled={title === ON_HOLD_ORDERS}>
                        <i className={"fa fa-pause-circle"}/> &nbsp;
                        Mark Hold
                    </Button>

                    <Button color="primary"
                            onClick={this.markRTD.bind(this)}
                            disabled={title === RTD_ORDERS}>
                        <i className={"fa fa-share"}/> &nbsp;
                        Ready to Dispatch
                    </Button>

                </ButtonGroup>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button color={"success"}
                        onClick={this.planVehicle.bind(this)}
                        disabled={title === DISPATCHED_ORDERS}>
                    <i className={"fa fa-rocket"}/> &nbsp;
                    Plan Vehicle
                </Button>
            </div>
        );

        const rightButtons = (props) => (
            <div style={{display: 'inline-block'}}>
                <Upload/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Button color={"link"} onClick={() => {
                    refreshing();
                    getOrders();
                }}>
                    <i className={"fa fa-refresh"}/> &nbsp;
                    Refresh
                </Button>
            </div>
        );

        return (
            (
                <div>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"/>{title}
                            <small className="text-muted"/>
                        </CardHeader>
                        <CardBody>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="/#/dashboard/orders"
                                             active={title === ALL_ORDERS}>{ALL_ORDERS}</NavLink>
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
                            <DataTable
                                data={filterData(orders, hold, rtd, dispatched)}
                                loading={loading}
                                loaded={loaded}
                                columns={columns}
                                right={rightButtons}
                                left={leftButtons}
                                keyField={"id"}
                                select={{mode: "checkbox"}}
                                refPass={this.refPass.bind(this)}
                                {...props}
                            />
                        </CardBody>
                    </Card>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.data.orders.loading,
    loaded: state.data.orders.loaded,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(loadOrders()),
    markHold: (selected) => dispatch(markOrdersOnHold(selected)),
    markRTD: (selected) => dispatch(markOrdersRTD(selected)),
    planVehicle: (selected) => dispatch(planVehiclesForOrders(selected))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderTable));
