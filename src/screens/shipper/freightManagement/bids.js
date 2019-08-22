import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/bids";
import {liveAvailableLoads, rfqresults} from "../../../helpers/api";


export default (props) => {
    const [data, setData] = useState([

    ]);


    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await rfqresults();
            setData(trucks)
        };

        loadApiData();
    }, []);

    const availableRfqColumn=[


        {
            dataField: 'id',
            text: 'SKU ID',
            sort: true
        },
        {
            dataField: 'destination',
            text: 'Destination',
            sort: true,
        },


    ];




    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Bid for RFQ (id: {props.match.params.id}) <small
                    className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <DataTable columns={availableRfqColumn} data={data}/>
                </CardBody>
            </Card>
        </div>
    );
}
