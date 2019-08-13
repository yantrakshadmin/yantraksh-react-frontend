import React from 'react';
import OrderTable from "../../../components/orderTable";
import {ALL_ORDERS} from "../../../data/orderTitles";



export default () => {
    return (
        <OrderTable title={ALL_ORDERS} rtd={true} dispatched={true} hold={true} />
    );
};
