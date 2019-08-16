import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {rfq} from "../../../helpers/api";
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/RFQ";


export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await rfq();
            setData(trucks)
        };

        loadApiData();
    }, []);


    return (

        <div>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>Request For Quotation<small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <DataTable columns={columns} data={data} />
                </CardBody>
            </Card>
        </div>

    );
}
