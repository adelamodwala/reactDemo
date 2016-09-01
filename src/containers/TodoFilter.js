import React, {Component} from 'react';

export default class TodoFilter extends Component {
    render() {
        let isSelected = this.props.selectedFilter == this.props.filter;
        return(
            <span style={{color: isSelected ? 'black' : 'blue', margin: 3, cursor: isSelected ? 'default' : 'pointer'}}
                  onClick={() => this.props.toggleTodos(this.props.filter)}>
                {this.props.title}
            </span>
        );
    }
}