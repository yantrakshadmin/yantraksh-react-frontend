import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {setRedirectTo} from "../../actions/navigation";

// does nothing than redirect guest to sign-in
const DashboardPublic =  (props) => {
    props.setRedirectTo(window.location.hash);

    return (
        <div>
            <Redirect to={`/sign-in/?redirect=${window.location.hash}`} />
        </div>
    )
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    setRedirectTo: (url) => dispatch(setRedirectTo(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPublic)
