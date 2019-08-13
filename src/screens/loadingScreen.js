import React from "react";
import {connect} from "react-redux";


const LoadingScreen =  ({loading}) => {
    if(!loading)
        return null;

    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 0.5,
            position: 'absolute',
            zIndex: 100,
            backgroundColor: '#000000'
        }}>
            <h1>
                Faisal
            </h1>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: state.navigation.loading
});

export default connect(mapStateToProps)(LoadingScreen)
