import { Component } from 'react';
import './ToDoEditor.scss';

export class ToDoEditor extends Component {
  state = {
    message: '',
  };

  onChange = e => {
    this.setState({ message: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddTask(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    return (
      <form className="TodoEditor" onSubmit={this.onSubmit}>
        <textarea
          className="TodoEditor__textarea"
          value={this.state.message}
          onChange={this.onChange}
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Add
        </button>
      </form>
    );
  }
}
