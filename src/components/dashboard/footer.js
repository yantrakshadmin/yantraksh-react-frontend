import React, { Component } from 'react';

const defaultProps = {};

class DefaultFooter extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>
                <span><a href="https://yantraksh.com">Yantraksh Logistics</a> &copy; All rights reserved </span>
            </React.Fragment>
        );
    }
}

DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
