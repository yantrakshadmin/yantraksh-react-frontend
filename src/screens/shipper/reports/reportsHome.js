import React, {Component} from 'react';
import {Col, Row} from 'reactstrap'
import Link from "react-router-dom/Link";

class ReportHome extends Component {
    render() {
        const anayticsReports=[
            {
                title:'Dispatcher Vs LR',
                link:'/report-dispatcher-vs-lr',
                type:'dispatcher-vs-lr'
            },
            {
                title:'Tracking Vs LR',
                link:'/report-tracking-vs-lr',
                type:'tracking-vs-lr',
            },
            {
                title:'Tracking Vs Invoice',
                link:'/report-tracking-vs-invoice',
                type:'tracking-vs-invoice',
            },
        ];
        const normalReports=[
            {
                title:'LR',
                link:'/report-lr',
                type:'lr'
            },
            {
                title:'Tracking',
                link:'/report-tracking',
                type:'tracking',
            },
            {
                title:'Invoice',
                link:'/report-invoice',
                type:'invoice',
            },
            {
                title:'Dispatcher',
                link:'/report-dispatcher',
                type:'dispatcher',
            }
        ];

        return (
            <Row>
                <Col sm={12} xs={12} md={6} xl={3} lg={3}>
                    <p style={{fontSize: 24, fontWeight: 'bold'}}>Analytics</p>
                    {anayticsReports.map((element,index)=>(
                        <Col span={12} key={index}>
                            <Link to={element.link} type={element.type}>
                                <p style={{fontSize: 18}}>{element.title}</p>
                            </Link>
                        </Col>
                    ))
                    }
                </Col>
                <Col sm={12} xs={12} md={6} xl={3} lg={3}>
                    <p style={{fontSize: 24, fontWeight: 'bold'}}>Normal</p>
                    {normalReports.map((element,index)=>(
                        <Col span={12} key={index}>
                            <Link to={element.link} type={element.type}>
                                <p style={{fontSize: 18}}>{element.title}</p>
                            </Link>
                        </Col>
                    ))}
                </Col>
            </Row>
        )
    }
}

export default ReportHome;
