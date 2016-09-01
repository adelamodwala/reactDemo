import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as counterActions from '../reducers/counterActions';

class App extends Component {

  onBtnClick() {
    this.props.actions.userClick();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onBtnClick()}>Click Me!</button>

        <div>Clicks: {this.props.clicks}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clicks: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  const {userClick} = counterActions;
  const dispatchActions = bindActionCreators({ userClick }, dispatch);
  return {
    dispatch,
    actions: dispatchActions
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);