import React, {Component, lazy} from 'react';
import {Bar, Line,} from 'react-chartjs-2';
import {ButtonDropdown, ButtonGroup, Card, CardBody, CardHeader, CardTitle, Col, Dropdown, Row,} from 'reactstrap';

import {getStyle, hexToRgba} from '@coreui/coreui/dist/js/coreui-utilities'
import {getEventsData, getKPIData, getMap, getNumberOfTrucksData, getNumberOfWeightData} from "../../helpers/api";
import Iframe from 'react-iframe'

import FullCalendar from '@fullcalendar/react'

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


const Widget03 = lazy(() => import('../../components/Widgets/Widget03'));

const brandPrimary = getStyle('--primary');
const brandSuccess = getStyle('--success');
const brandInfo = getStyle('--info');
const brandWarning = getStyle('--warning');
const brandDanger = getStyle('--danger');

// Card Chart 1
const cardChartData1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandPrimary,
            borderColor: 'rgba(255,255,255,.55)',
            data: [65, 59, 84, 84, 51, 55, 40],
        },
    ],
};

const cardChartOpts1 = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    }
}


// Card Chart 2
const cardChartData2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: brandInfo,
            borderColor: 'rgba(255,255,255,.55)',
            data: [1, 18, 9, 17, 34, 22, 11],
        },
    ],
};

const cardChartOpts2 = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent',
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                },

            }],
        yAxes: [
            {
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
                    max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
                },
            }],
    },
    elements: {
        line: {
            tension: 0.00001,
            borderWidth: 1,
        },
        point: {
            radius: 4,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};

// Card Chart 3
const cardChartData3 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40],
        },
    ],
};

const cardChartOpts3 = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        line: {
            borderWidth: 2,
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
        },
    },
};

// Card Chart 4
const cardChartData4 = {
    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.3)',
            borderColor: 'transparent',
            data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
        },
    ],
};

const cardChartOpts4 = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
                barPercentage: 0.6,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
};

// Social Box Chart
const socialBoxData = [
    {data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook'},
    {data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter'},
    {data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin'},
    {data: [35, 23, 56, 22, 97, 23, 64], label: 'google'},
];

const makeSocialBoxData = (dataSetNo) => {
    const dataset = socialBoxData[dataSetNo];
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: dataset.data,
                label: dataset.label,
            },
        ],
    };
    return () => data;
};

const socialChartOpts = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};

// sparkline charts
const sparkLineChartData = [
    {
        data: [35, 23, 56, 22, 97, 23, 64],
        label: 'New Clients',
    },
    {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Recurring Clients',
    },
    {
        data: [35, 23, 56, 22, 97, 23, 64],
        label: 'Pageviews',
    },
    {
        data: [65, 59, 84, 84, 51, 55, 40],
        label: 'Organic',
    },
    {
        data: [78, 81, 80, 45, 34, 12, 40],
        label: 'CTR',
    },
    {
        data: [1, 13, 9, 17, 34, 41, 38],
        label: 'Bounce Rate',
    },
];

const makeSparkLineData = (dataSetNo, variant) => {
    const dataset = sparkLineChartData[dataSetNo];
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: variant ? variant : '#c2cfd6',
                data: dataset.data,
                label: dataset.label,
            },
        ],
    };
    return () => data;
};

const sparklineChartOpts = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        xAxes: [
            {
                display: false,
            }],
        yAxes: [
            {
                display: false,
            }],
    },
    elements: {
        line: {
            borderWidth: 2,
        },
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
    legend: {
        display: false,
    },
};

// Main Chart

//Random Numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
    data1.push(random(50, 200));
    data2.push(random(80, 100));
    data3.push(65);
}

const mainChart = {
    labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: hexToRgba(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1,
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2,
        },
        {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3,
        },
    ],
};

const mainChartOpts = {
    tooltips: {
        enabled: false,
        // custom: CustomTooltips,
        intersect: true,
        mode: 'index',
        position: 'nearest',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor}
            }
        }
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [
            {
                gridLines: {
                    drawOnChartArea: false,
                },
            }],
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(500 / 5),
                    max: 500,
                },
            }],
    },
    elements: {
        point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
        },
    },
};

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {


            dropdownOpen: false,
            radioSelected: 2,
            mainChart: [],
            mapUrl:{},
            kpi: [
                {total_time: ""},
                {total_trucks: ""},
                {total_orders: ""},
                {total_orders_planned: ""},
                {total_rfq: ""},
                {total_bids: ""},
                {total_orders_hold: ""},
                {total_orders_delayed: ""},
                {total_orders_pending: ""},
                {total_trucks_assigned: ""},
                {total_trucks_in_transit: ""},
                {total_weight: ""},
                {total_distance: ""},

            ],

            calendarWeekends: true,
            // calendarEvents: {}
            //     // initial event data
            //     { title: "Event Now", start: new Date() }
            // ],


            events: [
                {
                    totalTrucks: '',
                    weight: 4545,
                    scheduled_date: '2019-09-29',
                    totalWeight: ''
                }
            ]
        }


    };

    calendarComponentRef = React.createRef();


    async componentDidMount() {

        try {
            const kpi = await getKPIData();
             const mapUrl = await getMap();
                console.log(mapUrl);
             this.setState({
                kpi,
                mapUrl
             });
        } catch (e) {
            console.log(e);
        }

        try {
            const map = await getMap(); // fetching the data from api, before the page loaded
            // const kpiData = await kpi.json();
            console.log(map, "map data")
            this.setState({
                map,

            });
        } catch (e) {
            console.log(e);
        }

        const calendarEvent = await getEventsData();
        this.setState({calendarEvent: calendarEvent}, () => console.log(this.state.calendarEvent));

        console.log(calendarEvent,
            "calendarEvents");


        const trucks = await getNumberOfTrucksData();

        let truckData = [];
        trucks.series[0].data.map(item => {
            truckData.push(item.y);
        });

        trucks.series[0].data.map(item => {
            truckData.push(item.y);
        });


        const weight = await getNumberOfWeightData();


        let weightData = [];
        weight.series[0].data.map(item => {

            weightData.push(item.y);
        });

        weight.series[0].data.map(item => {

            weightData.push(item.y);
        });

        this.setState({
            mainChart: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Total Trucks Dispatched',
                        backgroundColor: 'rgb(0,142,255)',
                        borderColor: 'rgb(0,100,255)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,219,255)',
                        hoverBorderColor: 'rgb(0,135,255)',
                        data: truckData
                    }
                ],

            },
            mainChart2: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        label: 'Total Weight Shipped',
                        backgroundColor: 'rgb(0,142,255)',
                        borderColor: 'rgb(0,100,255)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,219,255)',
                        hoverBorderColor: 'rgb(0,135,255)',
                        data: weightData
                    }
                ],

            }
        })
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }

    handleDateClick = arg => {
        if (window.confirm("Would you like to add an event to " + arg.dateStr + " ?")) {
            this.setState({
                // add new event data
                calendarEvents: this.state.calendarEvents.concat({
                    // creates a new array
                    title: "New Event",
                    start: arg.date,
                    allDay: arg.allDay
                })
            });
            return;
        }
    };


    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;


    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-info">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => {
                                        this.setState({card1: !this.state.card1});
                                    }}>

                                    </ButtonDropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_orders_pending}</div>
                                    ))}


                                <div>Orders to Ship</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{height: '70px'}}>
                                <Line data={cardChartData2} options={cardChartOpts2} height={70}/>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-primary">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown id='card2' isOpen={this.state.card2} toggle={() => {
                                        this.setState({card2: !this.state.card2});
                                    }}>

                                    </Dropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_trucks}</div>
                                    ))}

                                <div>Total dispatches</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{height: '70px'}}>
                                <Line data={cardChartData1} options={cardChartOpts1} height={70}/>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-warning">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown id='card3' isOpen={this.state.card3} toggle={() => {
                                        this.setState({card3: !this.state.card3});
                                    }}>

                                    </Dropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_rfq}</div>
                                    ))}

                                <div>Total RFQs</div>
                            </CardBody>
                            <div className="chart-wrapper" style={{height: '70px'}}>
                                <Line data={cardChartData3} options={cardChartOpts3} height={70}/>
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-danger">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => {
                                        this.setState({card4: !this.state.card4});
                                    }}>


                                    </ButtonDropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_time}</div>
                                    ))}

                                <div>Total Time (Hours)</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{height: '70px'}}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70}/>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Shipment Stats
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="6" xl="6">


                                        <Card>
                                            <CardBody>

                                                <div className="chart-wrapper"
                                                     style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                                                    {/*<Line data={this.state.mainChart} options={mainChartOpts} height={300} />*/}
                                                    <Bar data={this.state.mainChart} height={125}/>
                                                </div>
                                            </CardBody>
                                        </Card>


                                    </Col>
                                    <Col xs="12" md="6" xl="6">
                                        <Card>
                                            <CardBody>
                                                <div className="chart-wrapper"
                                                     style={{height: 300 + 'px', marginTop: 40 + 'px'}}>
                                                    {/*<Line data={this.state.mainChart} options={mainChartOpts} height={300} />*/}
                                                    <Bar data={this.state.mainChart2} height={125}/>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>

                </Row>


                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Location and Planning
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="6" xl="6">
                                        <Card>
                                            <CardBody style={{paddingTop: '0'}}>
                                                <div className="chart-wrapper"
                                                     style={{height: 650 + 'px', marginTop: 10 + 'px', padding: '0'}}>
                                                    <Iframe
                                                        url={this.state.mapUrl.map2}
                                                        width="100%"
                                                        height="100%"
                                                        id="myId"
                                                        className="myClassname"
                                                        // display="initial"
                                                        // position="relative"
                                                    />
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" xl="6">


                                        <Card>
                                            <CardBody>


                                                <div className="chart-wrapper"
                                                     style={{height: 650 + 'px', marginTop: 0 + 'px'}}>
                                                    {<FullCalendar defaultView="dayGridMonth"


                                                                   events={[{
                                                                       title: this.state.events[0].weight.toString(),
                                                                       date: this.state.events[0].scheduled_date.slice(0, 10)
                                                                   }]}
                                                                   header={{
                                                                       left: "prev,next today",
                                                                       center: "title",
                                                                       right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                                                                   }}
                                                                   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                                                   dateClick={this.handleDateClick}
                                                                   ref={this.calendarComponentRef}
                                                    />}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>

                </Row>


            </div>
        );
    }
}

export default Dashboard;
