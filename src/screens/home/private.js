import React, {Component} from 'react';
import {connect} from "react-redux";
import {USER_SIGN_OUT} from "../../actions";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>
                    Hi, {this.props.name}
                </h2>
                <a href="#!" onClick={this.props.signOut}>
                    Sign Out
                </a>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.auth.user.name
});

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch({type: USER_SIGN_OUT})
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
