import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {rfq} from "../../../helpers/api";
import DataTable from "../../../components/dataTable";
import columns from "../../../data/columns/RFQ";
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await rfq();
            setData(trucks)
        };

        loadApiData();
    }, []);

    const leftButton = () => (
        <Link to={"/freight/request-for-quotation/new"}>
            <Button color={"primary"}>
                <i className={"fa fa-plus"}/>
                &nbsp;&nbsp;&nbsp;
                New Request for Quotation
            </Button>
        </Link>
    );


    return (

        <div>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>Request For Quotation
                    <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <DataTable columns={columns} data={data} left={leftButton}/>
                </CardBody>
            </Card>
        </div>
    );
}
