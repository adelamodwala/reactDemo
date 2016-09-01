import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        return(
            <div>
                <button onClick={() => this.props.onBtnClick()}>Click Me!</button>
                <div>Clicks: {this.props.clicks}</div>
            </div>
        );
    }
}