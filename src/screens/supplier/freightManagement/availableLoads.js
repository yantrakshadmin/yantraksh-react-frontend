import React, {useEffect, useState} from 'react';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {liveAvailableLoads} from "../../../helpers/api";
import DataTable from "../../../components/dataTable";
import Button from "reactstrap/es/Button";
import {Link} from "react-router-dom";
import Loader from "../../../components/loader";

export default () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            const trucks = await liveAvailableLoads();
            setData(trucks)
        };

        loadApiData();
    }, []);

    const leftButton = () => (
        <Link to={"/freight/post-truck"}>
            <Button color={"primary"}>
                <i className={"fa fa-plus"}/>
                &nbsp;&nbsp;&nbsp;
                Post Truck
            </Button>
        </Link>
    );
    const availableLoadsColumn=[


        {
            dataField: 'id',
            text: 'SKU ID',
            sort: true
        },
       {
            dataField: 'destination',
            text: 'Destination',
            sort: true,
        },{
            dataField: 'total_trucks',
            text: 'No. of Trucks',
            sort: true,
        },{
            dataField: 'material_type',
            text: 'Material Type',
            sort: true,
        },{
            dataField: 'date',
            text: 'Date',
            sort: true,
        },{
            dataField: 'offered_price',
            text: 'Offered Price',
            sort: true,
        },{
            dataField: 'comments',
            text: 'Comments',
            sort: true,
        },
        {
            dataField: 'Bid Now',
            text: 'Track Now',
            sort: true,
            formatter: (cell, row) => (
                <div>
                    <Link to={`/freight/bid-now/${row.id}`}>
                        <Button color="primary">
                             Bids Now
                        </Button>
                    </Link>
                </div>
            )
        },
    ];

    return (

        <div>
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/>Available Loads
                    <small className="text-muted"/>
                    <leftButton/>
                </CardHeader>
                <CardBody>
                    <DataTable
                        noDataIndication={Loader}
                        columns={availableLoadsColumn} data={data} left={leftButton}/>
                </CardBody>
            </Card>
        </div>
    );
}
