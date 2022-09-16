import { Component } from 'react';


export class Form extends Component {
  state = {
    name: '',
    lastname: '',
    level: 'senior',
    license: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', lastname: '' });
  };

  handleLicense = (e) => {
    this.setState({ license: e.target.checked });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          LastName{' '}
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </label>
        <p>Your level:</p>
        <label>
          Junior{' '}
          <input
            type="radio"
            name="level"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.level === 'junior'}
          />
        </label>
        <label>
          Middle{' '}
          <input
            type="radio"
            name="level"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.level === 'middle'}
          />
        </label>
        <label>
          Senior{' '}
          <input
            type="radio"
            name="level"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.level === 'senior'}
          />
        </label>
        <label>
          <input type="checkbox" name="license" checked={this.state.license } onChange={this.handleLicense} /> Accept the license
        </label>
        <button type="submit" disabled={!this.state.license}>Підписатися</button>
      </form>
    );
  }
}
