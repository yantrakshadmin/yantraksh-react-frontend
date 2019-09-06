import React, {Component} from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Col,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    Row
} from 'reactstrap';
import {
    loadOrders,
    markOrdersOnHold,
    markOrdersRTD,
    planVehiclesForOrders,
    planVehiclesManuallyForOrders
} from "../actions/data";
import {connect} from "react-redux";
import {ALL_ORDERS, DISPATCHED_ORDERS, ON_HOLD_ORDERS, RTD_ORDERS} from "../data/orderTitles";
import {refreshing} from "../helpers/notifications";
import {withRouter} from 'react-router-dom'
import Upload from "./upload";
import DataTable from "../components/dataTable";
import columns from "../data/columns/orders";
import {BeatLoader} from "react-spinners";
import {getStyle} from "@coreui/coreui/dist/js/coreui-utilities";
import {Line} from "react-chartjs-2";
import {getKPIData} from "../helpers/api";


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
    constructor(props){

        super(props);
        this.state={

            kpi:[
                {total_time:""},
                {total_trucks:""},
                {total_orders:""},
                {total_orders_planned:""},
                {total_rfq:""},
                {total_bids:""},
                {total_orders_hold:""},
                {total_orders_delayed:""},
                {total_orders_pending:""},
                {total_trucks_assigned:""},
                {total_trucks_in_transit:""},
                {total_weight:""},
                {total_distance:""},

            ]
        }

    }




    refPass = (node) => {
        this.tableNode = node;
    };

    getSelectedData = () => {
        return this.tableNode.selectionContext.selected;
    };

    async markHold() {
        const selected = this.getSelectedData();
        await this.props.markHold(selected, this.props.history.push);
    }

    async markRTD() {
        const selected = this.getSelectedData();
        await this.props.markRTD(selected, this.props.history.push);
    }

    planVehicle() {
        this.props.planVehicle(this.props.history.push);
        // this.props.history.push('/orders/dispatched')
    }

    planVehicleManually() {
        this.props.planVehicleManually(this.props.history.push);
        // this.props.history.push('/orders/dispatched')
    }

    async componentDidMount() {

        try {
            const kpi = await getKPIData(); // fetching the data from api, before the page loaded
            // const kpiData = await kpi.json();
            console.log(kpi, "KPI data")
            this.setState({
                kpi,

            });
        } catch (e) {
            console.log(e);
        }


        if (!this.props.loaded)
            this.props.getOrders()
    }


    render() {
        const {
            orders = [],
            title,
            rtd = false,
            hold = false,
            dispatched = false,
            loading,
            loaded,
            getOrders,
            changing,
            props

        } = this.props;

        const sparkLineChartData = [
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'New Clients',
            },
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Recurring Clients',
            },
            {
                data: [35, 23, 56, 22, 97, 23, 64],
                label: 'Pageviews',
            },
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Organic',
            },
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'CTR',
            },
            {
                data: [1, 13, 9, 17, 34, 41, 38],
                label: 'Bounce Rate',
            },
        ];
        const brandPrimary = getStyle('--primary')
        const brandDanger = getStyle('--danger')
        const sparklineChartOpts = {
            tooltips: {
                enabled: false,
                // custom: CustomTooltips
            },
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [
                    {
                        display: false,
                    }],
                yAxes: [
                    {
                        display: false,
                    }],
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                },
            },
            legend: {
                display: false,
            },
        };


        const makeSparkLineData = (dataSetNo, variant) => {
            const dataset = sparkLineChartData[dataSetNo];
            const data = {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                    {
                        backgroundColor: 'transparent',
                        borderColor: variant ? variant : '#c2cfd6',
                        data: dataset.data,
                        label: dataset.label,
                    },
                ],
            };
            return () => data;
        };

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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button color={"success"}
                        onClick={this.planVehicleManually.bind(this)}
                        disabled={title === DISPATCHED_ORDERS}>
                    <i className={"fa fa-rocket"}/> &nbsp;
                    Plan Vehicle Manually
                </Button>

                <Label for="truck_type">Truck Type</Label>
                <Input type="select" name="truck_type" id="truck_type">
                    <option selected disabled>---- Select ----</option>
                    <option value="1">Open</option>
                    <option value="2">Container</option>
                    <option value="3">Trailer</option>
                </Input>





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
                            <Row>
                                <Col sm="3">
                                    <div className="callout callout-info">
                                        <small className="text-muted">Total Orders</small>
                                        <br />
                                        {
                                            this.state.kpi.map(item => (
                                                <strong className="h4">{item.total_orders}</strong>
                                            ))}

                                        <div className="chart-wrapper">
                                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="3">
                                    <div className="callout callout-danger">
                                        <small className="text-muted">Delayed Orders</small>
                                        <br />
                                        {
                                            this.state.kpi.map(item => (
                                                <strong className="h4">{item.total_orders_delayed}</strong>
                                            ))}
                                        <div className="chart-wrapper">
                                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                        </div>
                                    </div>
                                </Col><Col sm="3">
                                <div className="callout callout-info">
                                    <small className="text-muted">Pending Orders</small>
                                    <br />
                                    {
                                        this.state.kpi.map(item => (
                                            <strong className="h4">{item.total_orders_pending}</strong>
                                        ))}
                                    <div className="chart-wrapper">
                                        <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                                    </div>
                                </div>
                            </Col>
                                <Col sm="3">
                                    <div className="callout callout-danger">
                                        <small className="text-muted">Planned Orders</small>
                                        <br />
                                        {
                                            this.state.kpi.map(item => (
                                                <strong className="h4">{item.total_orders_planned}</strong>
                                            ))}
                                        <div className="chart-wrapper">
                                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <small className="text-muted"/>
                            <span style={{float: 'right'}}>
                                {changing ? <BeatLoader/> : null}

                            </span>
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
    changing: state.data.orders.changing,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(loadOrders()),
    markHold: (selected, redirect) => dispatch(markOrdersOnHold(selected, redirect)),
    markRTD: (selected, redirect) => dispatch(markOrdersRTD(selected, redirect)),
    planVehicle: (redirect) => dispatch(planVehiclesForOrders(redirect)),
    planVehicleManually: (redirect) => dispatch(planVehiclesManuallyForOrders(redirect))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderTable));
