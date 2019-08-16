import React, {useState} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/bids";


export default (props) => {
    const [data] = useState([
        {
            name: 'Faisal Manzer',
            date: '29th July, 2019',
            bid_amount: '25,000',
            id: 4
        }
    ]);

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Bid for RFQ (id: {props.match.params.id}) <small
                    className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <DataTable columns={columns} data={data}/>
                </CardBody>
            </Card>
        </div>
    );
}
