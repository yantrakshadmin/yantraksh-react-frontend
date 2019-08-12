import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Card,
    CardBody,
} from 'reactstrap';

export default ({data, title, options, type: CartType = Line, bg='primary', container=true}) => (
    <Card className={`text-white bg-${bg}`}>
        <CardBody className="pb-0">
            <div>{title}</div>
        </CardBody>
        <div className={`chart-wrapper ${container? 'mx-3' : ''}`} style={{height: '70px'}}>
            <CartType data={data} options={options} height={70}/>
        </div>
    </Card>
)
