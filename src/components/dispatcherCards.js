import React from 'react';
import {Line} from 'react-chartjs-2';
import {
    Card,
    CardBody,
} from 'reactstrap';

export default ({data, title,id ,vehicle,grossWeight,volumeUtilization,route,routeDistance,routeTAT,dispatchTime,options, type: CartType = Line, bg='primary', container=true}) => (
    <div className={`text-white bg-${bg}`}>
        <div className="pb-0">
            <b><div style={{fontsize:'22px'}}>{title}</div></b>
            <div>{id}</div>
            <div>{vehicle}</div>
            <div>{grossWeight}</div>
            <div>{volumeUtilization}</div>
            <div>{route}</div>
            <div>{routeDistance}</div>
            <div>{routeTAT}</div>
            <div>{dispatchTime}</div>
        </div>
    </div>
)
