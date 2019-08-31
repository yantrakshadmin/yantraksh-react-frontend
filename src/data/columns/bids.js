import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

export default      [{
    dataField: 'name',
    text: 'Name',
    sort: true,
    formatter: (cell,{name, id}) => {
        return (
            <Link to={`/supplier/profile/${id}`}>
                <img src={`https://api.adorable.io/avatars/25/${id}`} alt=""
                     style={{height: 25, width: 25, borderRadius: 25, marginRight: 10}}/>
                {name}
            </Link>
        )
    }
}, {
    dataField: 'date',
    text: 'Date',
    sort: true

}, {
    dataField: 'bid',
    text: 'Bid Amount',
    sort: true
}, {
    dataField: 'action',
    text: 'Action',
    sort: true,
    formatter: (cell, row) => (
        <div>
            <Link to={`/freight/request-for-quotation/bids/${row.id}`}>
                <Button color="primary">
                    Assign
                </Button>
            </Link>
        </div>
    )
}];
