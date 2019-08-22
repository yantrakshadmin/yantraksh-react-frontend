import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Badge} from 'reactstrap';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {refreshing} from "../../../helpers/notifications";
import {myBids} from "../../../helpers/api";
import Loader from "../../../components/loader";
import {Link} from "react-router-dom";
import Button from "reactstrap/es/Button";


const columns = [
    {
        dataField: 'id',
        text: 'ID',
        sort: true

    }, {
        dataField: 'quiz',
        text: 'Truck Type',
        sort: true,
        formatter: (cell, row) => {
            return (row.quiz.truck_name)

        }
    },{
        dataField: 'quiz',
        text: 'Truck Type',
        sort: true,
        formatter: (cell, row) => {
            return (row.quiz.truck_name)

        }
    },{
        dataField: 'quiz',
        text: 'Truck Type',
        sort: true,
        formatter: (cell, row) => {
            return (row.quiz.truck_type)

        }
    },
    {
        dataField: 'your_bids',
        text: 'Your Bids',
        sort: true,

    }, {
        dataField: 'confirmed',
        text: 'Status',
        sort: true

    },
    {
        dataField: 'quiz',
        text: 'Origin',
        sort: true,
        formatter: (cell, row) => {
            return (row.quiz.origin)

        }


    },
    {
        dataField: 'date',
        text: 'Destination',
        sort: true,
        formatter: (cell, row) => {
            return (row.quiz.destination)

        }

    },


    {
        dataField: 'action	',
        text: 'Action',
        sort: true,
        isDummyField:true,
        formatter: (cell, row) => (
            <div>
                <Link to={`/freight/request-for-quotation/bids/${row.id}`}>
                    <Button color="primary">
                        Bid Now
                    </Button>
                </Link>
            </div>
        )

    },
];


export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const loadApiData = async () => {
            refreshing();
            const trucks = await myBids();
            setData(trucks)
        };

        loadApiData();
    }, []);

    return (
        <div className="animated fadeIn">
            <Card>
                <CardHeader>
                    <i className="fa fa-align-justify"/> Live Trucks <small className="text-muted"/>
                </CardHeader>
                <CardBody>
                    <ToolkitProvider
                        keyField="id"
                        data={data}
                        columns={columns}
                        search

                    >
                        {
                            props => (
                                <div>
                                    <div style={{paddingTop: 10, paddingBottom: 10, float: 'right'}}>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Search.SearchBar {...props.searchProps} />
                                    </div>
                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        condensed
                                        striped

                                        bordered={false}
                                        pagination={paginationFactory()}
                                        noDataIndication={Loader}
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </CardBody>
            </Card>
        </div>
    );
}
