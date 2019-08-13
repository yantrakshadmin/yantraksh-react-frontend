import React from 'react';
import OrderTable from "../../../components/orderTable";
import {ON_HOLD_ORDERS} from "../../../data/orderTitles";



export default () => {
    return (
        <OrderTable title={ON_HOLD_ORDERS} hold={true}/>
    );
};
