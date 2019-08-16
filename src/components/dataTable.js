import React from "react";
import ToolkitProvider, {Search} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Loader from "./loader";

const NCSVButton = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <button className="btn" onClick={handleClick}>
            <i className={"fa fa-download"}/> &nbsp;
            Export to CSV
        </button>
    );
};

export default (props) => {
    const {
        columns, data = [], right = () => {
        }, left = () => {
        }, refPass = () => {
        }, loading = false, loaded = true, keyField = "id",
        select,
        ...unusedprops
    } = props;

    return (
        <ToolkitProvider
            keyField={keyField}
            data={data}
            columns={columns}
            search
            exportCSV={{onlyExportSelection: true, exportAll: true}}
        >
            {
                xprops => (
                    <div>
                        <div style={{paddingTop: 10, paddingBottom: 10}}>
                            {left(xprops)}

                            <div style={{float: 'right', display: 'inline-block'}}>
                                {right(xprops)}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <NCSVButton {...props.csvProps} />

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Search.SearchBar {...xprops.searchProps} />
                            </div>
                        </div>
                        <BootstrapTable
                            {...xprops.baseProps}
                            ref={node => refPass(node)}
                            hover
                            condensed
                            bordered={false}
                            pagination={paginationFactory()}
                            selectRow={select}
                            loading={loading}
                            noDataIndication={() => !loaded ? <Loader/> : 'No orders here'}
                            {...unusedprops}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    );
}
