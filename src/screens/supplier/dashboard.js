import React from 'react';
import {
    Col,
    Row,
} from 'reactstrap';
import SmallChartCard from "../../components/smallChartCard";
import {cardChartData2, cardChartOpts2} from "../../data/mockCharts";


export default () => {
    return (
        <div>
            <Row>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard data={cardChartData2} options={cardChartOpts2} />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard data={cardChartData2} options={cardChartOpts2} />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard data={cardChartData2} options={cardChartOpts2} />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard data={cardChartData2} options={cardChartOpts2} />
                </Col>
            </Row>
        </div>
    )
}
