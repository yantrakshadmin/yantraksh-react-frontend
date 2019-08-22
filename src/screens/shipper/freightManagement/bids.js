import React, {useState,useEffect} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/bids";
import {refreshing} from "../../../helpers/notifications";
import {rfqresults} from "../../../helpers/api";



export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const bids = await rfqresults();
            setData(bids)
        };

        loadApiData();
    }, []);


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
