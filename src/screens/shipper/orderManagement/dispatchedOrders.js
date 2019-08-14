import React from 'react';
import OrderTable from "../../../components/orderTable";
import {DISPATCHED_ORDERS} from "../../../data/orderTitles";
import {connect} from "react-redux";



const DispatchedOrdersScreen = (props) => {
    return (
        <OrderTable title={DISPATCHED_ORDERS} orders={props.orders} dispatched={true} />
    );
};

const mapStateToProps = (state) => ({
    orders: state.data.orders.data
});

export default connect(mapStateToProps)(DispatchedOrdersScreen);
