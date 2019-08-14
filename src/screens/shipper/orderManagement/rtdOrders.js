import React from 'react';
import OrderTable from "../../../components/orderTable";
import {RTD_ORDERS} from "../../../data/orderTitles";
import {connect} from "react-redux";



const RTDOrdersScreen = (props) => {
    return (
        <OrderTable title={RTD_ORDERS} orders={props.orders} rtd={true} />
    );
};


const mapStateToProps = (state) => ({
    orders: state.data.orders.data
});

export default connect(mapStateToProps)(RTDOrdersScreen);

