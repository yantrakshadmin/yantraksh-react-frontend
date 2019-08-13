import React from "react";
import {connect} from "react-redux";
import {BeatLoader} from "react-spinners";


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
            opacity: 1,
            position: 'absolute',
            zIndex: 1050,
            backgroundColor: '#FFFFFF'
        }}>
            <BeatLoader	 size={40} color={'#076af2'} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: state.navigation.loading
});

export default connect(mapStateToProps)(LoadingScreen)
