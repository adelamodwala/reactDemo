import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../reducers/appActions';

import Counter  from './Counter';
import Todos  from './Todos';

class App extends Component {

    onBtnClick() {
        this.props.actions.userClick();
    }

    render() {
        return (
            <div>
                <Counter clicks={this.props.clicks} onBtnClick={() => this.onBtnClick() }/>
                <Todos />
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
    const {userClick} = appActions;
    const dispatchActions = bindActionCreators({userClick}, dispatch);
    return {
        dispatch,
        actions: dispatchActions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);