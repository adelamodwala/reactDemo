import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        return(
            <div>
                <button onClick={() => this.props.onBtnClick()}>Click Me!</button>
                <span>Clicks: {this.props.clicks}</span>
            </div>
        );
    }
}