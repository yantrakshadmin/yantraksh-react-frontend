import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import {CardHeader, Button} from 'reactstrap';
import "react-datepicker/dist/react-datepicker.css";
import {CREATE_ACCOUNT_SHIPPER, getCompanyShipper, getReportsShipper,} from "../../../helpers/api";
import DataTable from '../../../components/dataTable'

//date_to
//date_from
//c_name

let columnFarzi = [
    {
        'truck_name': 'Truck Name',
        'truck_type': 'truck type',
        'origin': "origin"
    }, {
        'truck_name': 'Truck Name',
        'truck_type': 'truck type',
        'origin': "origin"
    }, {
        'truck_name': 'Truck Name',
        'truck_type': 'truck type',
        'origin': "origin"
    }, {
        'truck_name': 'Truck Name',
        'truck_type': 'truck type',
        'origin': "origin"
    },
];

let items = [
    {
        'name': 'something',
        'length': 2,
        'width': 2

    }, {
        'name': 'something',
        'length': 2,
        'width': 2

    }, {
        'name': 'something',
        'length': 2,
        'width': 2

    }, {
        'name': 'something',
        'length': 2,
        'width': 2

    },
];

class ShowReports extends Component {
    state = {
        startDate: new Date,
        startDateString: '2019-11-05',
        endDate: new Date,
        endDateString: '2019-11-11',
        companiesList: [],
        company_name: 1,
        data: []
    };

    changeFormat = (date) => {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-')
    };
    handleStartChange = date => {
        this.setState({
            startDate: date,
            startDateString: this.changeFormat(date)
        });
    };
    handleEndChange = date => {
        this.setState({
            endDate: date,
            endDateString: this.changeFormat(date)
        });
    };

    componentDidMount() {
        getCompanyShipper(CREATE_ACCOUNT_SHIPPER)
            .then((result) => {
                this.setState({companiesList: result})
            })
            .catch(e => console.log(e))
    }

    getReport = () => {
        getReportsShipper(this.props.url, {
            date_from: this.state.startDateString, date_to: this.state.endDateString,
            c_name: 1
        })
            .then(result => {
                this.setState({
                    data: result.data,
                })
            })
            .catch(e => console.error(e));
    };

    render() {
        const {companiesList, data} = this.state;
        const {columns_props, column_collapsed,showExpandColumn} = this.props;
        const CustomDatePicker = ({value, onClick}) => (
            <button type="button" className="btn btn-sm btn-success" onClick={onClick}>{value}</button>
        );
        const expandRow = {
            renderer: (row, rowIndex) => {
                return column_collapsed ? (
                    <div className={'p-3 '}>
                        <DataTable
                            exportAll={true}
                            columns={column_collapsed}
                            data={data[rowIndex].items}
                        />
                    </div>) : null
            },
            showExpandColumn: showExpandColumn,
            expandByColumnOnly: true,
            onlyOneExpanding: true,
        };
        return (
            <div className={'bg-white'}>
                <CardHeader>
                    Get Reports
                </CardHeader>
                <div style={{padding: 10, flexDirection: 'row', display: "flex", alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                        <h5 style={{margin: 5}}>To:
                        </h5>
                        <div style={{margin: 10,}}>
                            <DatePicker
                                selected={this.state.startDate}
                                showTimeSelect={false}
                                dateFormat="yyyy-MM-dd"
                                customInput={<CustomDatePicker/>}
                                onChange={this.handleStartChange}
                            />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                        <h5 style={{margin: 5}}>From:
                        </h5>
                        <div style={{margin: 10,}}>
                            <DatePicker
                                selected={this.state.endDate}
                                dateFormat="yyyy-MM-dd"
                                showTimeSelect={false}
                                customInput={<CustomDatePicker/>}
                                onChange={this.handleEndChange}
                            />
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',}}>
                        <h5 style={{margin: 5}}>Company:
                        </h5>
                        <select style={{margin: 5,}} onChange={(e) => {
                            this.setState({company_name: e.target.value})
                        }} className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            {companiesList.map((element) => (
                                    <option key={element.company_name}>{element.company_name}</option>
                                )
                            )}
                        </select>
                    </div>
                    <button className={'btn btn-success btn-sm m-3'} onClick={() => this.getReport()}>Get Report
                    </button>
                </div>
                <div className={'m-3'}>
                    <div className={'scrolling-wrapper-flexbox'}>
                        <DataTable
                            headerClasses={'bg-light'}
                            expandRow={expandRow}
                            exportAll={true}
                            data={data}
                            columns={columns_props}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default ShowReports;
