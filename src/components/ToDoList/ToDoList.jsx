import { Component } from 'react';
import classNames from 'classnames';
import './ToDoList.scss'

export class ToDoList extends Component {
  render() {
    const { todos, onDeleteToDo, onToggleCompleted } = this.props;
    return (
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li key={id} className={classNames('TodoList__item', {'TodoList__item--completed': completed})}>
            <input
              type="checkbox"
              className="TodoList__checkbox"
              onChange={() => onToggleCompleted(id)}
              checked={completed}
            />
            <p className="TodoList__text">{text}</p>
            <button className="TodoList__btn" onClick={() => onDeleteToDo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
