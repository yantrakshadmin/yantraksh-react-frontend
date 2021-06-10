import React, {Component} from 'react';

const defaultProps = {};

class DefaultFooter extends Component {
    render() {

        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment >
                <div className={'d-flex flex-row align-items-center justify-content-end w-100'}>
                <span><a
                    href="https://trakkia.com">Trakkia</a> &copy; All rights reserved </span>
                </div>
            </React.Fragment>
        );
    }
}

DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
