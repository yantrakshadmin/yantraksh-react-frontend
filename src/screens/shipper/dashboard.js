import React, {useState, useEffect} from 'react';
import {
    Col,
    Row,
} from 'reactstrap';
import SmallChartCard from "../../components/smallChartCard";
import {Bar} from "react-chartjs-2";
import {cardChartData1, cardChartData2, cardChartData3, cardChartData4} from "../../data/mockCharts";
import {totalOrdersConfig, totalTruckConfig, totalWeightConfig, totalDistanceConfig} from "../../data/mockCharts";

export default () => {

    const [totalOrders] = useState(cardChartData1);
    const [trucksDispatchedByMonth] = useState(cardChartData2);
    const [totalWeight] = useState(cardChartData3);
    const [totalDistance] = useState(cardChartData4);


    useEffect(() => {
        const getCharts = async () => {
            //    get chart data here
        };

        getCharts();
    });

    return (
        <div>
            <Row>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard
                        title={'Total Orders'}
                        data={totalOrders}
                        options={totalOrdersConfig}
                        bg={'primary'}
                    />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard
                        title={'Total Trucks'}
                        data={trucksDispatchedByMonth}
                        options={totalTruckConfig}
                        bg={'info'}
                    />
                </Col>
                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard
                        title={'Total Weight'}
                        data={totalWeight}
                        options={totalWeightConfig}
                        bg={'warning'}
                        container={''}
                    />
                </Col>

                <Col xs="12" sm="6" lg="3">
                    <SmallChartCard
                        title={'Total Distance'}
                        data={totalDistance}
                        options={totalDistanceConfig}
                        type={Bar}
                        bg={'danger'}
                    />
                </Col>
            </Row>
        </div>
    )
}
