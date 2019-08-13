import React from 'react';
import {Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn, DeleteButton} from "react-bootstrap-table";
// import 'node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// require('node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css');


const handleDeleteButtonClick = (onClick) => {

    console.log('This is my custom function for DeleteButton click event');
    onClick();
}
const createCustomDeleteButton = (onClick) => {
    return (
        <DeleteButton
            btnText='Delete Orders'
            btnContextual='btn-warning'
            className='my-custom-class'
            btnGlyphicon='glyphicon-edit'
            onClick={ () => handleDeleteButtonClick(onClick) }/>
    );
};

const cellEditProps = {
    mode: 'click',
    defaultSortName: 'name',  // default sort column name
    defaultSortOrder: 'desc',  // default sort order

};

const columns = [{
    dataField: 'pid',
    text: 'Product ID',
    sort: true
}, {
    dataField: 'name',
    text: 'Product Name',
    sort: true
}, {
    dataField: 'width',
    text: 'Product Price'
}];




const options = {
    deleteBtn: createCustomDeleteButton
};

export default ({data}) => (
        <div className="animated fadeIn">

            <Row>
                <Col xl={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"/> All Orders <small className="text-muted"/>
                        </CardHeader>
                        <CardBody>



                            <BootstrapTable data={data} pagination search exportCSV csvFileName='table-export' deleteRow options={options} columns={ columns } >
                                <TableHeaderColumn isKey dataField='name'>Name</TableHeaderColumn>
                                <TableHeaderColumn dataField='pid'>SKU ID</TableHeaderColumn>
                                <TableHeaderColumn dataField='quantity'>Quantity</TableHeaderColumn>
                                <TableHeaderColumn dataField='width'>Dimensions</TableHeaderColumn>
                                <TableHeaderColumn dataField='weight'>Weight</TableHeaderColumn>
                                <TableHeaderColumn dataField='volume'>Volume</TableHeaderColumn>
                                <TableHeaderColumn dataField='origin'>Origin</TableHeaderColumn>
                                <TableHeaderColumn dataField='destination'>Destination</TableHeaderColumn>
                                <TableHeaderColumn dataField='date'>Date</TableHeaderColumn>
                            </BootstrapTable>
                            {/*<Table responsive hover>*/}
                            {/*    <thead>*/}
                            {/*    <tr>*/}
                            {/*        <th scope="col">Name</th>*/}
                            {/*        <th scope="col">SKU ID</th>*/}
                            {/*        <th scope="col">Quantity</th>*/}
                            {/*        <th scope="col">Dimensions</th>*/}
                            {/*        <th scope="col">Weight</th>*/}
                            {/*        <th scope="col">Volume</th>*/}
                            {/*        <th scope="col">Origin</th>*/}
                            {/*        <th scope="col">Destination</th>*/}
                            {/*        <th scope="col">Date</th>*/}
                            {/*    </tr>*/}
                            {/*    </thead>*/}
                            {/*    <tbody>*/}


                            {/*    {data.map(item => (*/}
                            {/*        <tr>*/}
                            {/*            <td>{item.name}</td>*/}
                            {/*            <td>{item.pid}</td>*/}
                            {/*            <td>{item.quantity}</td>*/}
                            {/*            <td>{item.length} X {item.width} X {item.height}</td>*/}
                            {/*            <td>{item.weight}</td>*/}
                            {/*            <td>{item.volume}</td>*/}
                            {/*            <td>{item.origin}</td>*/}
                            {/*            <td>{item.destination}</td>*/}
                            {/*            <td>{item.time}</td>*/}
                            {/*        </tr>*/}
                            {/*    ))}*/}

                            {/*    </tbody>*/}
                            {/*</Table>*/}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
);

