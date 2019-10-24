import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.items.map( (item, key) => (
                        <li key={key}>{item.description}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList;
