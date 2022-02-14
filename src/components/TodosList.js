import React, { Component } from 'react';
import TodoItem from './TodoItems';

class TodosList extends Component {
    state = {  } 
    render() { 
        return (
          <ul>
            {this.props.todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        );
    }
}
 
export default TodosList;