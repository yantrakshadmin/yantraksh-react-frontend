import React from 'react';
import OrderTable from "../../../components/orderTable";
import {ALL_ORDERS} from "../../../data/orderTitles";
import {connect} from "react-redux";


const AllOrderScreen = (props) => {
    return (
        <OrderTable title={ALL_ORDERS} orders={props.orders} rtd={true} dispatched={true} hold={true}/>
    );
};


const mapStateToProps = (state) => ({
    orders: state.data.orders.data
});

export default connect(mapStateToProps)(AllOrderScreen);
