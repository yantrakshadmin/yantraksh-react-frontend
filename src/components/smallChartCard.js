import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Card,
    CardBody,
} from 'reactstrap';

export default ({data, title,id ,vehicle,grossWeight,volumeUtilization,route,routeDistance,routeTAT,dispatchTime,options, type: CartType = Line, bg='primary', container=true}) => (
    <Card className={`text-white bg-${bg}`} >
        <CardBody className="pb-0">
            <b><div>{title}</div></b>

            <div>{id}</div>
            <div>{vehicle}</div>
            <div>{grossWeight}</div>
            <div>{volumeUtilization}</div>
            <div>{route}</div>
            <div>{routeDistance}</div>
            <div>{routeTAT}</div>
            <div>{dispatchTime}</div>
        </CardBody>
        {/*    <CartType data={data} options={options} height={70}/>*/}

    </Card>
)
