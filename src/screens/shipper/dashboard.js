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
    { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
    { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
    { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
    { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
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
            labelColor: function(tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
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
            kpi:[
                {total_time:""},
                {total_trucks:""},
                {total_orders:""},
                {total_orders_planned:""},
                {total_rfq:""},
                {total_bids:""},
                {total_orders_hold:""},
                {total_orders_delayed:""},
                {total_orders_pending:""},
                {total_trucks_assigned:""},
                {total_trucks_in_transit:""},
                {total_weight:""},
                {total_distance:""},

            ],

            calendarWeekends: true,
            // calendarEvents: {}
            //     // initial event data
            //     { title: "Event Now", start: new Date() }
            // ],


            calendarEvent:{events:[
                {totalTrucks:'',
                    weight:0+"KG",
                    scheduled_date:'2019-09-22',
                totalWeight:''}
            ]}




        };
    }
    calendarComponentRef = React.createRef();


    async componentDidMount() {

        try {
            const kpi = await getKPIData();

            this.setState({
                kpi,

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
        this.setState({calendarEvent:calendarEvent},()=>console.log(this.state.calendarEvent));

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
                        label: 'Total Number Of Trucks',
                        backgroundColor: 'rgb(0,142,255)',
                        borderColor: 'rgb(0,100,255)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgb(0,219,255)',
                        hoverBorderColor: 'rgb(0,135,255)',
                        data:  truckData
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
                        data:  weightData
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
            return;
        }
        this.setState({
            // add new event data
            calendarEvents: this.state.calendarEvents.concat({
                // creates a new array
                title: "New Event",
                start: arg.date,
                allDay: arg.allDay
            })
        });



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
                                    <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>

                                    </ButtonDropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_orders_pending}</div>
                                    ))}


                                <div>Orders to Ship</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-primary">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>

                                    </Dropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_trucks}</div>
                                    ))}

                                <div>Total dispatches</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-warning">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>

                                    </Dropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_rfq}</div>
                                    ))}

                                <div>Total RFQs</div>
                            </CardBody>
                            <div className="chart-wrapper" style={{ height: '70px' }}>
                                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-white bg-danger">
                            <CardBody className="pb-0">
                                <ButtonGroup className="float-right">
                                    <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>


                                    </ButtonDropdown>
                                </ButtonGroup>
                                {
                                    this.state.kpi.map(item => (
                                        <div className="text-value">{item.total_time}</div>
                                    ))}

                                <div>Total Time (Hours)</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Your Shipment Stats
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" md="6" xl="6">


                                        <Card>
                                            <CardBody>

                                                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                                                    {/*<Line data={this.state.mainChart} options={mainChartOpts} height={300} />*/}
                                                    <Bar data={this.state.mainChart} height={125}/>
                                                </div>
                                            </CardBody>
                                        </Card>






                                    </Col>
                                    <Col xs="12" md="6" xl="6">



                                        <Card>
                                            <CardBody>


                                                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
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
                                            <CardBody style={{paddingTop:'0'}}>
                                                <div className="chart-wrapper" style={{ height: 650 + 'px', marginTop: 10 + 'px', padding:'0' }}>
                                                    <Iframe url="data:text/html;charset=utf-8;base64,PCFET0NUWVBFIGh0bWw+CjxoZWFkPiAgICAKICAgIDxtZXRhIGh0dHAtZXF1aXY9ImNvbnRlbnQtdHlwZSIgY29udGVudD0idGV4dC9odG1sOyBjaGFyc2V0PVVURi04IiAvPgogICAgCiAgICAgICAgPHNjcmlwdD4KICAgICAgICAgICAgTF9OT19UT1VDSCA9IGZhbHNlOwogICAgICAgICAgICBMX0RJU0FCTEVfM0QgPSBmYWxzZTsKICAgICAgICA8L3NjcmlwdD4KICAgIAogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjUuMS9kaXN0L2xlYWZsZXQuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY29kZS5qcXVlcnkuY29tL2pxdWVyeS0xLjEyLjQubWluLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjIuMC9qcy9ib290c3RyYXAubWluLmpzIj48L3NjcmlwdD4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9MZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy8yLjAuMi9sZWFmbGV0LmF3ZXNvbWUtbWFya2Vycy5qcyI+PC9zY3JpcHQ+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbGVhZmxldEAxLjUuMS9kaXN0L2xlYWZsZXQuY3NzIi8+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMi4wL2Nzcy9ib290c3RyYXAubWluLmNzcyIvPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC8zLjIuMC9jc3MvYm9vdHN0cmFwLXRoZW1lLm1pbi5jc3MiLz4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjMvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzIi8+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL0xlYWZsZXQuYXdlc29tZS1tYXJrZXJzLzIuMC4yL2xlYWZsZXQuYXdlc29tZS1tYXJrZXJzLmNzcyIvPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL3Jhd2Nkbi5naXRoYWNrLmNvbS9weXRob24tdmlzdWFsaXphdGlvbi9mb2xpdW0vbWFzdGVyL2ZvbGl1bS90ZW1wbGF0ZXMvbGVhZmxldC5hd2Vzb21lLnJvdGF0ZS5jc3MiLz4KICAgIDxzdHlsZT5odG1sLCBib2R5IHt3aWR0aDogMTAwJTtoZWlnaHQ6IDEwMCU7bWFyZ2luOiAwO3BhZGRpbmc6IDA7fTwvc3R5bGU+CiAgICA8c3R5bGU+I21hcCB7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7Ym90dG9tOjA7cmlnaHQ6MDtsZWZ0OjA7fTwvc3R5bGU+CiAgICAKICAgICAgICAgICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwKICAgICAgICAgICAgICAgIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ubyIgLz4KICAgICAgICAgICAgPHN0eWxlPgogICAgICAgICAgICAgICAgI21hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5MyB7CiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAuMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAuMCU7CiAgICAgICAgICAgICAgICAgICAgbGVmdDogMC4wJTsKICAgICAgICAgICAgICAgICAgICB0b3A6IDAuMCU7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvc3R5bGU+CiAgICAgICAgCjwvaGVhZD4KPGJvZHk+ICAgIAogICAgCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvbGl1bS1tYXAiIGlkPSJtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMiID48L2Rpdj4KICAgICAgICAKPC9ib2R5Pgo8c2NyaXB0PiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzID0gTC5tYXAoCiAgICAgICAgICAgICAgICAibWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzIiwKICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICBjZW50ZXI6IFsyMS4wLCA3OC4wXSwKICAgICAgICAgICAgICAgICAgICBjcnM6IEwuQ1JTLkVQU0czODU3LAogICAgICAgICAgICAgICAgICAgIHpvb206IDQuNzUsCiAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsCiAgICAgICAgICAgICAgICAgICAgcHJlZmVyQ2FudmFzOiBmYWxzZSwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgKTsKCiAgICAgICAgICAgIAoKICAgICAgICAKICAgIAogICAgICAgICAgICB2YXIgdGlsZV9sYXllcl8xZTBmMjQ5YWI4MzE0MjQyODIzOTk4NzUwNGFkN2IxYyA9IEwudGlsZUxheWVyKAogICAgICAgICAgICAgICAgImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nIiwKICAgICAgICAgICAgICAgIHsiYXR0cmlidXRpb24iOiAiRGF0YSBieSBcdTAwMjZjb3B5OyBcdTAwM2NhIGhyZWY9XCJodHRwOi8vb3BlbnN0cmVldG1hcC5vcmdcIlx1MDAzZU9wZW5TdHJlZXRNYXBcdTAwM2MvYVx1MDAzZSwgdW5kZXIgXHUwMDNjYSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIlx1MDAzZU9EYkxcdTAwM2MvYVx1MDAzZS4iLCAiZGV0ZWN0UmV0aW5hIjogZmFsc2UsICJtYXhOYXRpdmVab29tIjogMTgsICJtYXhab29tIjogMTgsICJtaW5ab29tIjogMCwgIm5vV3JhcCI6IGZhbHNlLCAib3BhY2l0eSI6IDEsICJzdWJkb21haW5zIjogImFiYyIsICJ0bXMiOiBmYWxzZX0KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfNmI2ZDk2NzY3ZjkzNGE2M2FmOWFjYTE5ODVmOGFiNjIgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyMy4yNTk5MzMzLCA3Ny40MTI2MTVdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2YzNDM0ZjYxODRjMzQ4NDBhYzNkMTRiYTkyYWY5NGRmID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9mMzVjNTJhNzExNjY0NGUzOTU3YTYyMGNlNjc2MGFlMiA9ICQoYDxkaXYgaWQ9Imh0bWxfZjM1YzUyYTcxMTY2NDRlMzk1N2E2MjBjZTY3NjBhZTIiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPkJob3BhbDwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF9mMzQzNGY2MTg0YzM0ODQwYWMzZDE0YmE5MmFmOTRkZi5zZXRDb250ZW50KGh0bWxfZjM1YzUyYTcxMTY2NDRlMzk1N2E2MjBjZTY3NjBhZTIpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfNmI2ZDk2NzY3ZjkzNGE2M2FmOWFjYTE5ODVmOGFiNjIuYmluZFBvcHVwKHBvcHVwX2YzNDM0ZjYxODRjMzQ4NDBhYzNkMTRiYTkyYWY5NGRmKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzkzY2Q4MWY2ZjE5MDQwZDlhZmE2MGVhOWMxODZjMWM5ID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjIuNDcwNzAxOSwgNzAuMDU3NzNdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2FiYTBmOTU5YjJkZDRjYTJhMWIyNjM5YWU1NmJhZWE5ID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF84NjE2MDZjYTYxNTU0YTMwYTgwNDAzOGZlZmMyZjM3YyA9ICQoYDxkaXYgaWQ9Imh0bWxfODYxNjA2Y2E2MTU1NGEzMGE4MDQwMzhmZWZjMmYzN2MiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPmphbW5hZ2FyPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwX2FiYTBmOTU5YjJkZDRjYTJhMWIyNjM5YWU1NmJhZWE5LnNldENvbnRlbnQoaHRtbF84NjE2MDZjYTYxNTU0YTMwYTgwNDAzOGZlZmMyZjM3Yyk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl85M2NkODFmNmYxOTA0MGQ5YWZhNjBlYTljMTg2YzFjOS5iaW5kUG9wdXAocG9wdXBfYWJhMGY5NTliMmRkNGNhMmExYjI2MzlhZTU2YmFlYTkpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfNWYzNjY3YjJhYmM2NDc4N2I0NDBiYjc5NmNkZDU4NGIgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsxOS4zOTE5Mjc1LCA3Mi44Mzk3MzE3XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF82MTAyMmQ1MGEyNDE0ZDNjYmZmYTYyZDZjY2ExMTVkMiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfNjA4NWU2MjEwM2JlNDQzNThjNzJmYjlkNzQ4OWE0YjggPSAkKGA8ZGl2IGlkPSJodG1sXzYwODVlNjIxMDNiZTQ0MzU4YzcyZmI5ZDc0ODlhNGI4IiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5WYXNhaTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF82MTAyMmQ1MGEyNDE0ZDNjYmZmYTYyZDZjY2ExMTVkMi5zZXRDb250ZW50KGh0bWxfNjA4NWU2MjEwM2JlNDQzNThjNzJmYjlkNzQ4OWE0YjgpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfNWYzNjY3YjJhYmM2NDc4N2I0NDBiYjc5NmNkZDU4NGIuYmluZFBvcHVwKHBvcHVwXzYxMDIyZDUwYTI0MTRkM2NiZmZhNjJkNmNjYTExNWQyKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyX2FhYWQ3Y2U4ZDYxMTQ3YTE5MGRiYzY3ODdlYjBiYWJmID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjIuNTcyNjQ2LCA4OC4zNjM4OTUwMDAwMDAwMV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfMDA0OGVmNzYyYTUxNDI4NjkxMjBmYmQ0ZDA5NTgxMzYgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2U4ODY4ZGNiM2M3NDQ2YjA4NzJlMWJjNTZlNjhlNGFhID0gJChgPGRpdiBpZD0iaHRtbF9lODg2OGRjYjNjNzQ0NmIwODcyZTFiYzU2ZTY4ZTRhYSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+S29sa2F0YTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF8wMDQ4ZWY3NjJhNTE0Mjg2OTEyMGZiZDRkMDk1ODEzNi5zZXRDb250ZW50KGh0bWxfZTg4NjhkY2IzYzc0NDZiMDg3MmUxYmM1NmU2OGU0YWEpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfYWFhZDdjZThkNjExNDdhMTkwZGJjNjc4N2ViMGJhYmYuYmluZFBvcHVwKHBvcHVwXzAwNDhlZjc2MmE1MTQyODY5MTIwZmJkNGQwOTU4MTM2KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyX2ZlZWVlZDZkMTNlYjRhMjdiYWUzYjAzY2UxMDQ2ZDJhID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMTMuMDgyNjgwMiwgODAuMjcwNzE4NF0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfZjgwMzM5MWU4NDZmNDcyZmIxMzAzZTQ2YTQyODc3ZjcgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sXzg3NWE4NmMwMWM0MzQyNzFiYjRkMzhjZWY1NjFlODkxID0gJChgPGRpdiBpZD0iaHRtbF84NzVhODZjMDFjNDM0MjcxYmI0ZDM4Y2VmNTYxZTg5MSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+Q2hlbm5haTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF9mODAzMzkxZTg0NmY0NzJmYjEzMDNlNDZhNDI4NzdmNy5zZXRDb250ZW50KGh0bWxfODc1YTg2YzAxYzQzNDI3MWJiNGQzOGNlZjU2MWU4OTEpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfZmVlZWVkNmQxM2ViNGEyN2JhZTNiMDNjZTEwNDZkMmEuYmluZFBvcHVwKHBvcHVwX2Y4MDMzOTFlODQ2ZjQ3MmZiMTMwM2U0NmE0Mjg3N2Y3KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzY2ZWU1OGQwNTY5NTRmNzNhZjVmZWI4MGZhOWEzM2ZmID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMTkuMjQwMzMwNSwgNzMuMTMwNTM5NV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfNGFhNDgxMzI2ZDZkNGYwYmExZjdiNTBmYWRhYjk1MGQgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2QxNjQyMmRmMWJjYTRkYTM4ZWI1ZWYwMDgyZDA4Y2Y0ID0gJChgPGRpdiBpZD0iaHRtbF9kMTY0MjJkZjFiY2E0ZGEzOGViNWVmMDA4MmQwOGNmNCIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+S2FseWFuPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzRhYTQ4MTMyNmQ2ZDRmMGJhMWY3YjUwZmFkYWI5NTBkLnNldENvbnRlbnQoaHRtbF9kMTY0MjJkZjFiY2E0ZGEzOGViNWVmMDA4MmQwOGNmNCk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl82NmVlNThkMDU2OTU0ZjczYWY1ZmViODBmYTlhMzNmZi5iaW5kUG9wdXAocG9wdXBfNGFhNDgxMzI2ZDZkNGYwYmExZjdiNTBmYWRhYjk1MGQpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfMzRhNDhkMWIxZDBiNDQ0ZTgxYmE3YTBiNWQxYjUwMWQgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyNS4zMTc2NDUyLCA4Mi45NzM5MTQ0XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF80YTkzNGY2YTY1YWQ0ZDk1YTEyODljMGVhNmRhNzA0NiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfOGQyZTY4YWM1OWFlNDliZjlhN2JlYWE2ZDVmMzZkZGEgPSAkKGA8ZGl2IGlkPSJodG1sXzhkMmU2OGFjNTlhZTQ5YmY5YTdiZWFhNmQ1ZjM2ZGRhIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5WYXJhbmFzaTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF80YTkzNGY2YTY1YWQ0ZDk1YTEyODljMGVhNmRhNzA0Ni5zZXRDb250ZW50KGh0bWxfOGQyZTY4YWM1OWFlNDliZjlhN2JlYWE2ZDVmMzZkZGEpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfMzRhNDhkMWIxZDBiNDQ0ZTgxYmE3YTBiNWQxYjUwMWQuYmluZFBvcHVwKHBvcHVwXzRhOTM0ZjZhNjVhZDRkOTVhMTI4OWMwZWE2ZGE3MDQ2KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzBjYzBkZWIzNWMyNjQwMTVhOTYwMTgyNWU4ZTFlZGYyID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjUuNTk0MDk0NywgODUuMTM3NTY0NV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfMjg3ZWM2YTkxMTkzNGEwYWI1MDQ0YjEzM2FiYmY5M2YgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2ZlZWM4MjU1MDg1OTRjM2FhOTIwYzgwMWNlYjQ0M2JhID0gJChgPGRpdiBpZD0iaHRtbF9mZWVjODI1NTA4NTk0YzNhYTkyMGM4MDFjZWI0NDNiYSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+UGF0bmE8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfMjg3ZWM2YTkxMTkzNGEwYWI1MDQ0YjEzM2FiYmY5M2Yuc2V0Q29udGVudChodG1sX2ZlZWM4MjU1MDg1OTRjM2FhOTIwYzgwMWNlYjQ0M2JhKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzBjYzBkZWIzNWMyNjQwMTVhOTYwMTgyNWU4ZTFlZGYyLmJpbmRQb3B1cChwb3B1cF8yODdlYzZhOTExOTM0YTBhYjUwNDRiMTMzYWJiZjkzZikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl80YzU3N2ZkMjE2ZWQ0OGVmYTU2MTQ1ZjBmZTA2OGRhZCA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE5LjIxODMzMDcsIDcyLjk3ODA4OTddLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2YzMGQzZjBiZGVjNzRiZTI4YWNkNjY3NjZhOTBhOGZhID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF85MGRlYzhlMjljODI0OGU5YjMxM2I3NDczYmVhMjQzNiA9ICQoYDxkaXYgaWQ9Imh0bWxfOTBkZWM4ZTI5YzgyNDhlOWIzMTNiNzQ3M2JlYTI0MzYiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPlRoYW5lPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwX2YzMGQzZjBiZGVjNzRiZTI4YWNkNjY3NjZhOTBhOGZhLnNldENvbnRlbnQoaHRtbF85MGRlYzhlMjljODI0OGU5YjMxM2I3NDczYmVhMjQzNik7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl80YzU3N2ZkMjE2ZWQ0OGVmYTU2MTQ1ZjBmZTA2OGRhZC5iaW5kUG9wdXAocG9wdXBfZjMwZDNmMGJkZWM3NGJlMjhhY2Q2Njc2NmE5MGE4ZmEpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfMjRmY2NlOWJhYWRlNGJlNTliOWVhMDI3Y2VjM2M2OTMgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsxNS4yOTkzMjY1LCA3NC4xMjM5OTU5OTk5OTk5OV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfZDcwNWQzZWE4M2Q4NGQ2OGIxMDkzZGQ0ZTc5OGFmZmMgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sXzRiM2U4ZTE3ODU0YjQyYzA5ZTc3YzJiNDc4MGQ0YjUxID0gJChgPGRpdiBpZD0iaHRtbF80YjNlOGUxNzg1NGI0MmMwOWU3N2MyYjQ3ODBkNGI1MSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+R29hLCBJbmRpYTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF9kNzA1ZDNlYTgzZDg0ZDY4YjEwOTNkZDRlNzk4YWZmYy5zZXRDb250ZW50KGh0bWxfNGIzZThlMTc4NTRiNDJjMDllNzdjMmI0NzgwZDRiNTEpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfMjRmY2NlOWJhYWRlNGJlNTliOWVhMDI3Y2VjM2M2OTMuYmluZFBvcHVwKHBvcHVwX2Q3MDVkM2VhODNkODRkNjhiMTA5M2RkNGU3OThhZmZjKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyX2QwZTBhODhmMzZhZDQ5NzU5OTY3ODg3ZDk4Njg2Y2Q5ID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjguOTg0NDYxOCwgNzcuNzA2NDEzN10sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfYWM0MjFkZGNjMjJkNDg3M2EyOTljNmI1YTg0YTRhMjUgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2QwNmM4MmI2ODI1ZTQ5ZDE4NjllYzc4ZWU4NDkxZjExID0gJChgPGRpdiBpZD0iaHRtbF9kMDZjODJiNjgyNWU0OWQxODY5ZWM3OGVlODQ5MWYxMSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+TWVlcnV0PC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwX2FjNDIxZGRjYzIyZDQ4NzNhMjk5YzZiNWE4NGE0YTI1LnNldENvbnRlbnQoaHRtbF9kMDZjODJiNjgyNWU0OWQxODY5ZWM3OGVlODQ5MWYxMSk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9kMGUwYTg4ZjM2YWQ0OTc1OTk2Nzg4N2Q5ODY4NmNkOS5iaW5kUG9wdXAocG9wdXBfYWM0MjFkZGNjMjJkNDg3M2EyOTljNmI1YTg0YTRhMjUpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfMTY4MWE3NDk0MTI4NDcxZDhiZGY2NWRkNDc4MTI1MGIgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyMS4xNDU4MDA0LCA3OS4wODgxNTQ2XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9kMTI4OGVmODE4MjA0YzBiOGUzZTg3NDdhNGUyNGRmNiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfNjAxMGNlZjEyMGFkNGVlOGJkYWUyMjY0ODY2ZmQ1M2QgPSAkKGA8ZGl2IGlkPSJodG1sXzYwMTBjZWYxMjBhZDRlZThiZGFlMjI2NDg2NmZkNTNkIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5OYWdwdXI8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfZDEyODhlZjgxODIwNGMwYjhlM2U4NzQ3YTRlMjRkZjYuc2V0Q29udGVudChodG1sXzYwMTBjZWYxMjBhZDRlZThiZGFlMjI2NDg2NmZkNTNkKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzE2ODFhNzQ5NDEyODQ3MWQ4YmRmNjVkZDQ3ODEyNTBiLmJpbmRQb3B1cChwb3B1cF9kMTI4OGVmODE4MjA0YzBiOGUzZTg3NDdhNGUyNGRmNikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl9kZDk4Y2U4ZTIwNjY0ZDI3YWQ3YjVhYTkyNmFjZTA1MCA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE4LjYyOTc4MTEsIDczLjc5OTcwOTRdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2VmYWQ5YzIyNmU3ODQ3Y2E5MjFjNGVlNzFmOWNkNjlhID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9hMWNhZjAxMGY2MDA0YWQ2ODEyYWE2MGU4ZTRiZjVkNyA9ICQoYDxkaXYgaWQ9Imh0bWxfYTFjYWYwMTBmNjAwNGFkNjgxMmFhNjBlOGU0YmY1ZDciIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPlBpbXByaTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF9lZmFkOWMyMjZlNzg0N2NhOTIxYzRlZTcxZjljZDY5YS5zZXRDb250ZW50KGh0bWxfYTFjYWYwMTBmNjAwNGFkNjgxMmFhNjBlOGU0YmY1ZDcpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfZGQ5OGNlOGUyMDY2NGQyN2FkN2I1YWE5MjZhY2UwNTAuYmluZFBvcHVwKHBvcHVwX2VmYWQ5YzIyNmU3ODQ3Y2E5MjFjNGVlNzFmOWNkNjlhKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzM3NWM5ZTk5Njk5NTQxOTY5YzM2NmU1Yzg2MjYwNjljID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjMuMDIyNTA1LCA3Mi41NzEzNjIxXSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9kMDUyYmFkODAyZGQ0MGE2YmFkNTQxNGVkOGZhOTA2YiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfYjliZGI1YWZlZWVmNDZmZThmOTZjMDIxMWQ4YzZiMDYgPSAkKGA8ZGl2IGlkPSJodG1sX2I5YmRiNWFmZWVlZjQ2ZmU4Zjk2YzAyMTFkOGM2YjA2IiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5BaG1lZGFiYWQ8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfZDA1MmJhZDgwMmRkNDBhNmJhZDU0MTRlZDhmYTkwNmIuc2V0Q29udGVudChodG1sX2I5YmRiNWFmZWVlZjQ2ZmU4Zjk2YzAyMTFkOGM2YjA2KTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzM3NWM5ZTk5Njk5NTQxOTY5YzM2NmU1Yzg2MjYwNjljLmJpbmRQb3B1cChwb3B1cF9kMDUyYmFkODAyZGQ0MGE2YmFkNTQxNGVkOGZhOTA2YikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8yMjM1NGZlY2Q3MzM0NzA1OGJkYTA5Y2RlMmMwZDM5OSA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzIyLjMwMzg5NDUsIDcwLjgwMjE1OTg5OTk5OTk5XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9kNWM4MjI3YmFkMmI0NDk3OTYwNjdjY2YwNzk3MWQ2NCA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfOWZkMzJlMzZkMDg5NDU5ZDlhZDNhOWVjNWJmNTc5ZGYgPSAkKGA8ZGl2IGlkPSJodG1sXzlmZDMyZTM2ZDA4OTQ1OWQ5YWQzYTllYzViZjU3OWRmIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5SYWprb3Q8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfZDVjODIyN2JhZDJiNDQ5Nzk2MDY3Y2NmMDc5NzFkNjQuc2V0Q29udGVudChodG1sXzlmZDMyZTM2ZDA4OTQ1OWQ5YWQzYTllYzViZjU3OWRmKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzIyMzU0ZmVjZDczMzQ3MDU4YmRhMDljZGUyYzBkMzk5LmJpbmRQb3B1cChwb3B1cF9kNWM4MjI3YmFkMmI0NDk3OTYwNjdjY2YwNzk3MWQ2NCkKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl82ZGU0YmUxM2Q0MmI0ZTBjYjdmYWE5MDU5NWYxZmIzYyA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE3LjY4NjgxNTksIDgzLjIxODQ4MTVdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2RiZTYwZWI2MTgzNDQwMzI4YWNmZTNmOTliMTRkNWQ5ID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9lYTg4N2Y3ZTVkZjg0YjVlYjZhNzBhODZlNDgyNjI5NCA9ICQoYDxkaXYgaWQ9Imh0bWxfZWE4ODdmN2U1ZGY4NGI1ZWI2YTcwYTg2ZTQ4MjYyOTQiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPlZpc2FraGFwYXRuYW08L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfZGJlNjBlYjYxODM0NDAzMjhhY2ZlM2Y5OWIxNGQ1ZDkuc2V0Q29udGVudChodG1sX2VhODg3ZjdlNWRmODRiNWViNmE3MGE4NmU0ODI2Mjk0KTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzZkZTRiZTEzZDQyYjRlMGNiN2ZhYTkwNTk1ZjFmYjNjLmJpbmRQb3B1cChwb3B1cF9kYmU2MGViNjE4MzQ0MDMyOGFjZmUzZjk5YjE0ZDVkOSkKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8zNTEyMzU4ZWVlZWQ0NGI1YWMzMTYxMzNhMTMwN2QzZCA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzI4LjcwNDA1OTIsIDc3LjEwMjQ5MDE5OTk5OTk5XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF84YWY1YmQ0MGE0ZTM0ZjU4OWEzZjI3YTYwYzg5YzM5ZiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfNjdkMTFlNmI4MjdlNDJkOTgwODI0MzkxZTkxZmEyNWIgPSAkKGA8ZGl2IGlkPSJodG1sXzY3ZDExZTZiODI3ZTQyZDk4MDgyNDM5MWU5MWZhMjViIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5EZWxoaSwgSW5kaWE8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfOGFmNWJkNDBhNGUzNGY1ODlhM2YyN2E2MGM4OWMzOWYuc2V0Q29udGVudChodG1sXzY3ZDExZTZiODI3ZTQyZDk4MDgyNDM5MWU5MWZhMjViKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzM1MTIzNThlZWVlZDQ0YjVhYzMxNjEzM2ExMzA3ZDNkLmJpbmRQb3B1cChwb3B1cF84YWY1YmQ0MGE0ZTM0ZjU4OWEzZjI3YTYwYzg5YzM5ZikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl82YmNkN2Q1MWUxMGU0MDYxYjY4MzQ3YWM5YTE3Mzk4MiA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzMwLjMxNjQ5NDUsIDc4LjAzMjE5MTc5OTk5OTk5XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9iZTBjZDY1Y2Q2OTA0MGYyYjdiYmY0MDQxMzgxYzJkOSA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfOTI3ZGVhNDI4ODg1NGU5Njk1YjVjYjk1N2U3NzE3MzEgPSAkKGA8ZGl2IGlkPSJodG1sXzkyN2RlYTQyODg4NTRlOTY5NWI1Y2I5NTdlNzcxNzMxIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5EZWhyYWR1bjwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF9iZTBjZDY1Y2Q2OTA0MGYyYjdiYmY0MDQxMzgxYzJkOS5zZXRDb250ZW50KGh0bWxfOTI3ZGVhNDI4ODg1NGU5Njk1YjVjYjk1N2U3NzE3MzEpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfNmJjZDdkNTFlMTBlNDA2MWI2ODM0N2FjOWExNzM5ODIuYmluZFBvcHVwKHBvcHVwX2JlMGNkNjVjZDY5MDQwZjJiN2JiZjQwNDEzODFjMmQ5KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzU3YzdmMDAzMWUyZjQ4ZGI5MGFkN2RlODA1OTg2MTBjID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjIuMzA3MTU4OCwgNzMuMTgxMjE4N10sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfOTNiZTJlMmM3M2FjNGE2Mjk4ZmUwZjUwZGZkMDY3OTUgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sXzRlNjkzZWQ4ZTVkMTQ2NmJhNWQwMGMyNWUxZTU4OWQ1ID0gJChgPGRpdiBpZD0iaHRtbF80ZTY5M2VkOGU1ZDE0NjZiYTVkMDBjMjVlMWU1ODlkNSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+VmFkb2RhcmE8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfOTNiZTJlMmM3M2FjNGE2Mjk4ZmUwZjUwZGZkMDY3OTUuc2V0Q29udGVudChodG1sXzRlNjkzZWQ4ZTVkMTQ2NmJhNWQwMGMyNWUxZTU4OWQ1KTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzU3YzdmMDAzMWUyZjQ4ZGI5MGFkN2RlODA1OTg2MTBjLmJpbmRQb3B1cChwb3B1cF85M2JlMmUyYzczYWM0YTYyOThmZTBmNTBkZmQwNjc5NSkKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8yNzlmNmMyMzM3NDk0MDJkYmQ2MWJlYWMzNGNiN2U2NCA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzI2LjQ0OTkyMywgODAuMzMxODczNl0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfMjBjZGU4ODdiY2ZhNDA5OWI0Y2YxODgzM2YwNzVlYTMgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2ZlOWE1ZTAxZTdjYjQzYWI4ZGM2ZDhmZjgyZmQ2ZWUwID0gJChgPGRpdiBpZD0iaHRtbF9mZTlhNWUwMWU3Y2I0M2FiOGRjNmQ4ZmY4MmZkNmVlMCIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+S2FucHVyPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzIwY2RlODg3YmNmYTQwOTliNGNmMTg4MzNmMDc1ZWEzLnNldENvbnRlbnQoaHRtbF9mZTlhNWUwMWU3Y2I0M2FiOGRjNmQ4ZmY4MmZkNmVlMCk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl8yNzlmNmMyMzM3NDk0MDJkYmQ2MWJlYWMzNGNiN2U2NC5iaW5kUG9wdXAocG9wdXBfMjBjZGU4ODdiY2ZhNDA5OWI0Y2YxODgzM2YwNzVlYTMpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfNjFkNTNjNjQ1MGMyNGJjNjhkM2Y4NGZkZGRmODRmZWQgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsxOS4wNzU5ODM3LCA3Mi44Nzc2NTU5XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF82ZjExMjlmZjE3MDY0OWZlODFkYzU2YmNjMzFjZGE3NiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfYWZmNjZlOTI0MTZhNDFmYWJmYjljZWI5OTYyZDBkMWQgPSAkKGA8ZGl2IGlkPSJodG1sX2FmZjY2ZTkyNDE2YTQxZmFiZmI5Y2ViOTk2MmQwZDFkIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5NdW1iYWk8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfNmYxMTI5ZmYxNzA2NDlmZTgxZGM1NmJjYzMxY2RhNzYuc2V0Q29udGVudChodG1sX2FmZjY2ZTkyNDE2YTQxZmFiZmI5Y2ViOTk2MmQwZDFkKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzYxZDUzYzY0NTBjMjRiYzY4ZDNmODRmZGRkZjg0ZmVkLmJpbmRQb3B1cChwb3B1cF82ZjExMjlmZjE3MDY0OWZlODFkYzU2YmNjMzFjZGE3NikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl9hZGIwYWYxZGRjZTE0NjFjODhkMTYxZmMxMWJlZmFiMyA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzI4LjQ1OTQ5NjUsIDc3LjAyNjYzODNdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzIxYzVkOTI1NWY2ZjQxZmY5OTk2YjkzYWNkODgzMjMyID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9iMzE5MjY4MDU5ZTg0ZDFlOTM5NTA4YzJjMTVjZDU4MCA9ICQoYDxkaXYgaWQ9Imh0bWxfYjMxOTI2ODA1OWU4NGQxZTkzOTUwOGMyYzE1Y2Q1ODAiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPkd1cmdhb248L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfMjFjNWQ5MjU1ZjZmNDFmZjk5OTZiOTNhY2Q4ODMyMzIuc2V0Q29udGVudChodG1sX2IzMTkyNjgwNTllODRkMWU5Mzk1MDhjMmMxNWNkNTgwKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyX2FkYjBhZjFkZGNlMTQ2MWM4OGQxNjFmYzExYmVmYWIzLmJpbmRQb3B1cChwb3B1cF8yMWM1ZDkyNTVmNmY0MWZmOTk5NmI5M2FjZDg4MzIzMikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl81ZDJlMzViZDIzOGI0NzEwYmY5Zjg3ZGFiMjhiMzk5MSA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzIyLjcxOTU2ODcsIDc1Ljg1NzcyNThdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzFhNTdlOGViZjUyZDRlY2U5ODFmYTI3NWM1MDM3OGQwID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF84YWI0ODAxMDM4ZGU0NGY2OWQxNDU3NTg5NDI5ZmNlMCA9ICQoYDxkaXYgaWQ9Imh0bWxfOGFiNDgwMTAzOGRlNDRmNjlkMTQ1NzU4OTQyOWZjZTAiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPkluZG9yZTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF8xYTU3ZThlYmY1MmQ0ZWNlOTgxZmEyNzVjNTAzNzhkMC5zZXRDb250ZW50KGh0bWxfOGFiNDgwMTAzOGRlNDRmNjlkMTQ1NzU4OTQyOWZjZTApOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfNWQyZTM1YmQyMzhiNDcxMGJmOWY4N2RhYjI4YjM5OTEuYmluZFBvcHVwKHBvcHVwXzFhNTdlOGViZjUyZDRlY2U5ODFmYTI3NWM1MDM3OGQwKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzA1NmVmYWMzNGJlYjRlNDhhNTUzMjEwZTRhOGY4ODVkID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMTIuOTcxNTk4NywgNzcuNTk0NTYyN10sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfNWNjMDFkZjE1MWNmNGU0ZThmMjNmNDQ3ZTMyNzhmNmEgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2FiYmM3YWZlZjM2NTQwZWNiODk4OTI5YTYyNmEwMTAzID0gJChgPGRpdiBpZD0iaHRtbF9hYmJjN2FmZWYzNjU0MGVjYjg5ODkyOWE2MjZhMDEwMyIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+QmFuZ2Fsb3JlPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzVjYzAxZGYxNTFjZjRlNGU4ZjIzZjQ0N2UzMjc4ZjZhLnNldENvbnRlbnQoaHRtbF9hYmJjN2FmZWYzNjU0MGVjYjg5ODkyOWE2MjZhMDEwMyk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl8wNTZlZmFjMzRiZWI0ZTQ4YTU1MzIxMGU0YThmODg1ZC5iaW5kUG9wdXAocG9wdXBfNWNjMDFkZjE1MWNmNGU0ZThmMjNmNDQ3ZTMyNzhmNmEpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfYWRhZTljZjY3MWE3NDI3Zjk5OTQ3ZmMyOThkMTkwYmEgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsxNy4zODUwNDQsIDc4LjQ4NjY3MV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfMTg5YWVmZTQ5Y2Q0NGUxZTg4NTc2ODYzMDg3N2U4YWMgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sXzllMGYwOGVkYTBiOTRjNThhOWQyODlhNWY0MDk5NDhkID0gJChgPGRpdiBpZD0iaHRtbF85ZTBmMDhlZGEwYjk0YzU4YTlkMjg5YTVmNDA5OTQ4ZCIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+SHlkZXJhYmFkPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzE4OWFlZmU0OWNkNDRlMWU4ODU3Njg2MzA4NzdlOGFjLnNldENvbnRlbnQoaHRtbF85ZTBmMDhlZGEwYjk0YzU4YTlkMjg5YTVmNDA5OTQ4ZCk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9hZGFlOWNmNjcxYTc0MjdmOTk5NDdmYzI5OGQxOTBiYS5iaW5kUG9wdXAocG9wdXBfMTg5YWVmZTQ5Y2Q0NGUxZTg4NTc2ODYzMDg3N2U4YWMpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfZTc3ZTBlY2MxNjkyNGQ3OGFlNThlZTI4YzVhZmUzNzkgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyOC42MTM5MzkxLCA3Ny4yMDkwMjEyXSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF85YmVhNTNiNjY4MWU0YjEzODlmZGE0MWUyYWJhZDQ5NCA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfMjI3NjdmZGY5YjgyNDNhMzhkNjJhZDFhNmY1MTAwZjUgPSAkKGA8ZGl2IGlkPSJodG1sXzIyNzY3ZmRmOWI4MjQzYTM4ZDYyYWQxYTZmNTEwMGY1IiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5OZXcgRGVsaGksIERlbGhpLCBJbmRpYTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF85YmVhNTNiNjY4MWU0YjEzODlmZGE0MWUyYWJhZDQ5NC5zZXRDb250ZW50KGh0bWxfMjI3NjdmZGY5YjgyNDNhMzhkNjJhZDFhNmY1MTAwZjUpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfZTc3ZTBlY2MxNjkyNGQ3OGFlNThlZTI4YzVhZmUzNzkuYmluZFBvcHVwKHBvcHVwXzliZWE1M2I2NjgxZTRiMTM4OWZkYTQxZTJhYmFkNDk0KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzAwY2NiYjM2ZGU0NjQ0YWZiMmU2MGM1ZjliNTRjNTdkID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjguNzA0MDU5MiwgNzcuMTAyNDkwMTk5OTk5OTldLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzJkYzc4MTUyMzQ0OTQzMTlhZWI4NGJlMDlkZjFhN2U4ID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9kYjA0MzJmNWIyZmM0YzU3OTdiZGNiZmZjM2VhYThiMCA9ICQoYDxkaXYgaWQ9Imh0bWxfZGIwNDMyZjViMmZjNGM1Nzk3YmRjYmZmYzNlYWE4YjAiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPkRlbGhpPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzJkYzc4MTUyMzQ0OTQzMTlhZWI4NGJlMDlkZjFhN2U4LnNldENvbnRlbnQoaHRtbF9kYjA0MzJmNWIyZmM0YzU3OTdiZGNiZmZjM2VhYThiMCk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl8wMGNjYmIzNmRlNDY0NGFmYjJlNjBjNWY5YjU0YzU3ZC5iaW5kUG9wdXAocG9wdXBfMmRjNzgxNTIzNDQ5NDMxOWFlYjg0YmUwOWRmMWE3ZTgpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfMDM4MDQzNTA2MzMzNDkwYjg4OWMzMWI1MjM5ZDc3NDYgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsxMi45NzE1OTg3LCA3Ny41OTQ1NjI3XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9jNzhhNDliNzY3ZjE0N2FlYmQ0MzU2NjY5MTkxYTA4YiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfZTk5YTZlYTE5NTM5NGE0MDljMzc0ZmU3MWJhOGYzZDEgPSAkKGA8ZGl2IGlkPSJodG1sX2U5OWE2ZWExOTUzOTRhNDA5YzM3NGZlNzFiYThmM2QxIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5CZW5nYWxhcnU8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfYzc4YTQ5Yjc2N2YxNDdhZWJkNDM1NjY2OTE5MWEwOGIuc2V0Q29udGVudChodG1sX2U5OWE2ZWExOTUzOTRhNDA5YzM3NGZlNzFiYThmM2QxKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzAzODA0MzUwNjMzMzQ5MGI4ODljMzFiNTIzOWQ3NzQ2LmJpbmRQb3B1cChwb3B1cF9jNzhhNDliNzY3ZjE0N2FlYmQ0MzU2NjY5MTkxYTA4YikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl9hMTk4OWY4ZTBjYWQ0Yjg0OGU5NTNiZjE2YThlZDQ4ZCA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE5LjA3NTk4MzcsIDcyLjg3NzY1NTldLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzMxZTQ0N2I1ZTk3NDRiMzA5OWY1NTU1NDk4MzU0YmI4ID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9iYTIxMmZmYmRjMjQ0M2UwYmUwZTNiN2E1MTNmMjAzNSA9ICQoYDxkaXYgaWQ9Imh0bWxfYmEyMTJmZmJkYzI0NDNlMGJlMGUzYjdhNTEzZjIwMzUiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPk11bWJhaSwgTWFoYXJhc2h0cmEsIEluZGlhPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzMxZTQ0N2I1ZTk3NDRiMzA5OWY1NTU1NDk4MzU0YmI4LnNldENvbnRlbnQoaHRtbF9iYTIxMmZmYmRjMjQ0M2UwYmUwZTNiN2E1MTNmMjAzNSk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9hMTk4OWY4ZTBjYWQ0Yjg0OGU5NTNiZjE2YThlZDQ4ZC5iaW5kUG9wdXAocG9wdXBfMzFlNDQ3YjVlOTc0NGIzMDk5ZjU1NTU0OTgzNTRiYjgpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfYmQyZDljZjkzOTNlNGQ1NDg2NWI1YzFmZjlhNDYyOWYgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyNC43OTEzOTU3LCA4NS4wMDAyMzM2XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF84MjEyZTQyMjNiNDM0OGUzOTA1Nzk1N2MwM2U4ZmUwMSA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfYjFiMjJlZDg4NmRmNDA4MGIwNzZkMjMxZWVmNmYxNDcgPSAkKGA8ZGl2IGlkPSJodG1sX2IxYjIyZWQ4ODZkZjQwODBiMDc2ZDIzMWVlZjZmMTQ3IiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5HYXlhPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwXzgyMTJlNDIyM2I0MzQ4ZTM5MDU3OTU3YzAzZThmZTAxLnNldENvbnRlbnQoaHRtbF9iMWIyMmVkODg2ZGY0MDgwYjA3NmQyMzFlZWY2ZjE0Nyk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9iZDJkOWNmOTM5M2U0ZDU0ODY1YjVjMWZmOWE0NjI5Zi5iaW5kUG9wdXAocG9wdXBfODIxMmU0MjIzYjQzNDhlMzkwNTc5NTdjMDNlOGZlMDEpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfYjM3Y2E5ZDBkZTA1NDVlZTgyZDI3ZTk0NWNmZjMwZGIgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyNC43OTEzOTU3LCA4NS4wMDAyMzM2XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9iODNmNTAxOWUzZjE0ZDZhODE3MGY4N2M0ZjE0N2ZjNiA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfMWUyZTUwNDIwNmVkNGY5Njg2OGMxOTk4MzRhNWIwODkgPSAkKGA8ZGl2IGlkPSJodG1sXzFlMmU1MDQyMDZlZDRmOTY4NjhjMTk5ODM0YTViMDg5IiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5nYXlhPC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwX2I4M2Y1MDE5ZTNmMTRkNmE4MTcwZjg3YzRmMTQ3ZmM2LnNldENvbnRlbnQoaHRtbF8xZTJlNTA0MjA2ZWQ0Zjk2ODY4YzE5OTgzNGE1YjA4OSk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9iMzdjYTlkMGRlMDU0NWVlODJkMjdlOTQ1Y2ZmMzBkYi5iaW5kUG9wdXAocG9wdXBfYjgzZjUwMTllM2YxNGQ2YTgxNzBmODdjNGYxNDdmYzYpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfMzRhMzNlMjRjN2I1NGRmMmI0NGQwOGFmOWZlMGUzYjcgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyNi44NDY2OTM3LCA4MC45NDYxNjU5OTk5OTk5OV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfMjc5Mjg2MDg5M2U4NGUzOTgzY2NhOTBiZjNmYTc3MmUgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sX2JhNTgxNDcxZjE1MDQ2NTY5YWFhOGM4Zjc3M2M5YTkzID0gJChgPGRpdiBpZD0iaHRtbF9iYTU4MTQ3MWYxNTA0NjU2OWFhYThjOGY3NzNjOWE5MyIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+THVja25vdzwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF8yNzkyODYwODkzZTg0ZTM5ODNjY2E5MGJmM2ZhNzcyZS5zZXRDb250ZW50KGh0bWxfYmE1ODE0NzFmMTUwNDY1NjlhYWE4YzhmNzczYzlhOTMpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfMzRhMzNlMjRjN2I1NGRmMmI0NGQwOGFmOWZlMGUzYjcuYmluZFBvcHVwKHBvcHVwXzI3OTI4NjA4OTNlODRlMzk4M2NjYTkwYmYzZmE3NzJlKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyX2QxYzc3ODNhM2E2YzRkNmI4NjI2YWFiMGYyNDA5YWI2ID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMjEuMTcwMjQwMSwgNzIuODMxMDYwNzAwMDAwMDFdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwX2NjMTg4NTExZWRkNDRkZWNiNzA4MDQ5ZWYwZTE4ODZlID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF84ZDJhMmI3MWZkOGQ0NWQwYjBkNTI4ZmJiYWFlYjgxZCA9ICQoYDxkaXYgaWQ9Imh0bWxfOGQyYTJiNzFmZDhkNDVkMGIwZDUyOGZiYmFhZWI4MWQiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPlN1cmF0PC9kaXY+YClbMF07CiAgICAgICAgICAgIHBvcHVwX2NjMTg4NTExZWRkNDRkZWNiNzA4MDQ5ZWYwZTE4ODZlLnNldENvbnRlbnQoaHRtbF84ZDJhMmI3MWZkOGQ0NWQwYjBkNTI4ZmJiYWFlYjgxZCk7CiAgICAgICAgCgogICAgICAgIG1hcmtlcl9kMWM3NzgzYTNhNmM0ZDZiODYyNmFhYjBmMjQwOWFiNi5iaW5kUG9wdXAocG9wdXBfY2MxODg1MTFlZGQ0NGRlY2I3MDgwNDllZjBlMTg4NmUpCiAgICAgICAgOwoKICAgICAgICAKICAgIAogICAgCiAgICAgICAgICAgIHZhciBtYXJrZXJfZTNjOTA3MWExMTMwNGZkYTliZjUyODkyM2VkNmYyN2IgPSBMLm1hcmtlcigKICAgICAgICAgICAgICAgIFsyNi45MTI0MzM2LCA3NS43ODcyNzA5XSwKICAgICAgICAgICAgICAgIHt9CiAgICAgICAgICAgICkuYWRkVG8obWFwXzIxNWI2YWIzYTE4NzQxOTlhMmUxYTlkZDUwMmRiYjkzKTsKICAgICAgICAKICAgIAogICAgICAgIHZhciBwb3B1cF9jMTk1NmE3ZDdlZjk0NTZlYTZhNGQwMjkwNWExYjZkMSA9IEwucG9wdXAoeyJtYXhXaWR0aCI6ICIxMDAlIn0pOwoKICAgICAgICAKICAgICAgICAgICAgdmFyIGh0bWxfZWE0YTM3Y2E3MzZlNGYxNjk1MzQ2MDFmMWE3ZjkzN2MgPSAkKGA8ZGl2IGlkPSJodG1sX2VhNGEzN2NhNzM2ZTRmMTY5NTM0NjAxZjFhN2Y5MzdjIiBzdHlsZT0id2lkdGg6IDEwMC4wJTsgaGVpZ2h0OiAxMDAuMCU7Ij5KYWlwdXI8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfYzE5NTZhN2Q3ZWY5NDU2ZWE2YTRkMDI5MDVhMWI2ZDEuc2V0Q29udGVudChodG1sX2VhNGEzN2NhNzM2ZTRmMTY5NTM0NjAxZjFhN2Y5MzdjKTsKICAgICAgICAKCiAgICAgICAgbWFya2VyX2UzYzkwNzFhMTEzMDRmZGE5YmY1Mjg5MjNlZDZmMjdiLmJpbmRQb3B1cChwb3B1cF9jMTk1NmE3ZDdlZjk0NTZlYTZhNGQwMjkwNWExYjZkMSkKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8wMjQyODY5YjhiMzk0OGU2YTE5MjliOWQxOGZjODBmYiA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE4LjYyOTc4MTEsIDczLjc5OTcwOTRdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzkwMTg2ZTFjZmI2ODQ4M2U4OWNhYTBkOGQyOWRlZWQ2ID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF9mYTc5NDU5MGEyMjI0MjhmOTk4ZDM0MGJlYWE4YjM1YiA9ICQoYDxkaXYgaWQ9Imh0bWxfZmE3OTQ1OTBhMjIyNDI4Zjk5OGQzNDBiZWFhOGIzNWIiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPkNoaW5jaHdhZDwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF85MDE4NmUxY2ZiNjg0ODNlODljYWEwZDhkMjlkZWVkNi5zZXRDb250ZW50KGh0bWxfZmE3OTQ1OTBhMjIyNDI4Zjk5OGQzNDBiZWFhOGIzNWIpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfMDI0Mjg2OWI4YjM5NDhlNmExOTI5YjlkMThmYzgwZmIuYmluZFBvcHVwKHBvcHVwXzkwMTg2ZTFjZmI2ODQ4M2U4OWNhYTBkOGQyOWRlZWQ2KQogICAgICAgIDsKCiAgICAgICAgCiAgICAKICAgIAogICAgICAgICAgICB2YXIgbWFya2VyXzM2M2IwMzg4ZmE5NzQwNzA5YmU2YzA2YTA1MzM0MDFkID0gTC5tYXJrZXIoCiAgICAgICAgICAgICAgICBbMzQuMDgzNjcwOCwgNzQuNzk3MjgyNV0sCiAgICAgICAgICAgICAgICB7fQogICAgICAgICAgICApLmFkZFRvKG1hcF8yMTViNmFiM2ExODc0MTk5YTJlMWE5ZGQ1MDJkYmI5Myk7CiAgICAgICAgCiAgICAKICAgICAgICB2YXIgcG9wdXBfOTY2OGQ5ODdiMzYwNDI3NWE0ZmE3NjYwZTdiYjkzOWEgPSBMLnBvcHVwKHsibWF4V2lkdGgiOiAiMTAwJSJ9KTsKCiAgICAgICAgCiAgICAgICAgICAgIHZhciBodG1sXzE1M2EyN2M3ZmRlYTRjOTY4ZDEzNjE0YjUzYTg5NDA5ID0gJChgPGRpdiBpZD0iaHRtbF8xNTNhMjdjN2ZkZWE0Yzk2OGQxMzYxNGI1M2E4OTQwOSIgc3R5bGU9IndpZHRoOiAxMDAuMCU7IGhlaWdodDogMTAwLjAlOyI+U3JpbmFnYXI8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfOTY2OGQ5ODdiMzYwNDI3NWE0ZmE3NjYwZTdiYjkzOWEuc2V0Q29udGVudChodG1sXzE1M2EyN2M3ZmRlYTRjOTY4ZDEzNjE0YjUzYTg5NDA5KTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzM2M2IwMzg4ZmE5NzQwNzA5YmU2YzA2YTA1MzM0MDFkLmJpbmRQb3B1cChwb3B1cF85NjY4ZDk4N2IzNjA0Mjc1YTRmYTc2NjBlN2JiOTM5YSkKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8zZjhhMmY3ZTliM2M0MDM0ODkwNGIxM2M4NzQxN2ZhMiA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzE4LjUyMDQzMDMsIDczLjg1Njc0MzddLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzY2ZjgwNzZlY2Y4YjQ1ZjlhN2RhMjljYWM0YTlkMmNmID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF84N2FkMDk2ZGI5ZWQ0MjE2OTk5M2MxNzczZGI1OWJhNCA9ICQoYDxkaXYgaWQ9Imh0bWxfODdhZDA5NmRiOWVkNDIxNjk5OTNjMTc3M2RiNTliYTQiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPlB1bmU8L2Rpdj5gKVswXTsKICAgICAgICAgICAgcG9wdXBfNjZmODA3NmVjZjhiNDVmOWE3ZGEyOWNhYzRhOWQyY2Yuc2V0Q29udGVudChodG1sXzg3YWQwOTZkYjllZDQyMTY5OTkzYzE3NzNkYjU5YmE0KTsKICAgICAgICAKCiAgICAgICAgbWFya2VyXzNmOGEyZjdlOWIzYzQwMzQ4OTA0YjEzYzg3NDE3ZmEyLmJpbmRQb3B1cChwb3B1cF82NmY4MDc2ZWNmOGI0NWY5YTdkYTI5Y2FjNGE5ZDJjZikKICAgICAgICA7CgogICAgICAgIAogICAgCiAgICAKICAgICAgICAgICAgdmFyIG1hcmtlcl8wODRlMzJmMDUxMWM0MGJiODc1NjVhMDEyNWY0NGViZSA9IEwubWFya2VyKAogICAgICAgICAgICAgICAgWzIyLjU3MjY0NiwgODguMzYzODk1MDAwMDAwMDFdLAogICAgICAgICAgICAgICAge30KICAgICAgICAgICAgKS5hZGRUbyhtYXBfMjE1YjZhYjNhMTg3NDE5OWEyZTFhOWRkNTAyZGJiOTMpOwogICAgICAgIAogICAgCiAgICAgICAgdmFyIHBvcHVwXzI4OWY2NjQzMzNhODQzZDE4ZjgyZWNhZWVmYWMyZmUyID0gTC5wb3B1cCh7Im1heFdpZHRoIjogIjEwMCUifSk7CgogICAgICAgIAogICAgICAgICAgICB2YXIgaHRtbF8zZmY3MDAzMDk1YmU0YjM3OWFlZGI1NGM5ZmNmM2VmOCA9ICQoYDxkaXYgaWQ9Imh0bWxfM2ZmNzAwMzA5NWJlNGIzNzlhZWRiNTRjOWZjZjNlZjgiIHN0eWxlPSJ3aWR0aDogMTAwLjAlOyBoZWlnaHQ6IDEwMC4wJTsiPktvbGthdGEsIFdlc3QgQmVuZ2FsLCBJbmRpYTwvZGl2PmApWzBdOwogICAgICAgICAgICBwb3B1cF8yODlmNjY0MzMzYTg0M2QxOGY4MmVjYWVlZmFjMmZlMi5zZXRDb250ZW50KGh0bWxfM2ZmNzAwMzA5NWJlNGIzNzlhZWRiNTRjOWZjZjNlZjgpOwogICAgICAgIAoKICAgICAgICBtYXJrZXJfMDg0ZTMyZjA1MTFjNDBiYjg3NTY1YTAxMjVmNDRlYmUuYmluZFBvcHVwKHBvcHVwXzI4OWY2NjQzMzNhODQzZDE4ZjgyZWNhZWVmYWMyZmUyKQogICAgICAgIDsKCiAgICAgICAgCiAgICAKPC9zY3JpcHQ+"
                                                            width="100%"
                                                            height="100%"
                                                            id="myId"
                                                            className="myClassname"
                                                            // display="initial"
                                                            // position="relative"
                                                        />
                                                    {/*<iframe src={}></iframe>*/}
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col xs="12" md="6" xl="6">



                                        <Card>
                                            <CardBody>


                                                <div className="chart-wrapper" style={{ height: 650 + 'px', marginTop: 0 + 'px' }}>
                                                    {<FullCalendar defaultView="dayGridMonth"


                                                                  events={[{ title: this.state.calendarEvent.events[0].weight.toString(), date:this.state.calendarEvent.events[0].scheduled_date.slice(0,10)  }]}
                                                                  // defaultView="dayGridMonth"
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
