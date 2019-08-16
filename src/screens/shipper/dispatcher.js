import React from "react";
import DataTable from "../../components/dataTable";
import columns from "../../data/columns/dispatcher";

const expandRow = {
    renderer: row => (
        <div>
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>You can render anything here, also you can add additional data on every row object</p>
            <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
    )
};

export default () => (
    <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
    }}>
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'green',
        }}>
            <h2>
                kg3jdyf
            </h2>
        </div>
        <div style={{
            width: 320,
            backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            left: 0
        }}>
            <h1>bhjv</h1>
        </div>
    </div>
)
