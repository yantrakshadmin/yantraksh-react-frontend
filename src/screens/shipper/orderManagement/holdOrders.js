import React from 'react';
import OrderTable from "../../../components/orderTable";
import {ON_HOLD_ORDERS} from "../../../data/orderTitles";
import {connect} from "react-redux";



const HoldOrdersScreen = (props) => {
    return (
        <OrderTable title={ON_HOLD_ORDERS} orders={props.orders} hold={true}/>
    );
};


const mapStateToProps = (state) => ({
    orders: state.data.orders.data
});

export default connect(mapStateToProps)(HoldOrdersScreen);
