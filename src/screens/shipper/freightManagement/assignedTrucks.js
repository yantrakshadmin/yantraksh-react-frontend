import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {assignedTrucks} from "../../../helpers/api";
import {refreshing} from "../../../helpers/notifications";
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/assignedTrucks";

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await assignedTrucks();
            setData(trucks);
        };

        loadApiData();
    }, []);


    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <DataTable columns={columns} data={data} />
                </CardBody>
            </Card>
        </div>

    );
}
