import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Card,
    CardBody,
} from 'reactstrap';

export default ({data, options, type: CartType = Line}) => (
    <Card className="text-white bg-info">
        <CardBody className="pb-0">
            <div>Total Orders</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{height: '70px'}}>
            <CartType data={data} options={options} height={70}/>
        </div>
    </Card>
)
