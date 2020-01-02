import React, { useState, useEffect } from "react";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Loader from "./loader";

const NCSVButton = (props) => {
    const handleClick = () => {
        props.onExport();
    };
    return (
        <button className="btn" onClick={handleClick}>
            <i className={"fa fa-download"} /> &nbsp;
            Export to CSV
        </button>
    );
};

export default (props) => {
    const [loadingIndicator, changeLoadingIndicator] = useState(true);
    useEffect(() => { setTimeout(() => { changeLoadingIndicator(false); }, 5000) },
        [loadingIndicator]);
    const {
        columns, data = [], right = () => {
        }, left = () => {
        }, refPass = () => {
        }, loading = false, loaded = true, keyField = "id",
        select,
        expandRow = {},
        noDataIndication = { Loader },
        section,
        searchClass,
        searchContainerClass,
        exportAll,
        headerClasses,
        ...unusedprops
    } = props;

    return (
        <ToolkitProvider
            keyField={keyField}
            data={data}
            columns={columns}
            search
            exportCSV={{ onlyExportSelection: !exportAll, exportAll: true }}
        >
            {
                xprops => (
                    <div>
                        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                            {left(xprops)}
                            <div className={searchContainerClass} style={{ float: 'right', display: 'inline-block' }}>
                                {right(xprops)}
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <NCSVButton {...xprops.csvProps} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Search.SearchBar className={searchClass} {...xprops.searchProps} />
                            </div>
                        </div>
                        {section ? (
                            <div style={{ paddingTop: 10, paddingBottom: 10 }}>
                                {section}
                            </div>
                        ) : null}
                        <BootstrapTable
                            {...xprops.baseProps}
                            wrapperClasses="table-responsive"
                            ref={node => refPass(node)}
                            hover
                            condensed
                            bordered={false}
                            pagination={paginationFactory()}
                            selectRow={select}
                            loading={loading}
                            expandRow={expandRow}
                            headerClasses={headerClasses}
                            noDataIndication={loadingIndicator ? Loader : <div className={'w-100'}><p>No Data</p></div>}
                            {...unusedprops}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    );
}
