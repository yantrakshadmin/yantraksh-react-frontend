import React from 'react';
import OrderTable from "../../../components/orderTable";
import {RTD_ORDERS} from "../../../data/orderTitles";



export default () => {
    return (
        <OrderTable title={RTD_ORDERS} rtd={true} />
    );
};
