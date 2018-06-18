import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

class Loading extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h4>
                    Loading data, please wait... &nbsp;
                    <span className="fa fa-spin fa-spinner"/>
                    {this.props.error.error && <Alert bsStyle="warning">{this.props.error.error} occured. We are attempting to retrieve your contacts again.</Alert>}
                </h4>
            </div>
        )
    }
}

Loading.propTypes = {
    error: PropTypes.shape({
        error: PropTypes.string,
    }),
}

export default Loading;
