import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
            <div>
                <p>
                    Loading data, please wait... & nbsp;
                    <span className="fa fa-spin fa-spinner"/>
                </p>
            </div>
        )
    }
}
