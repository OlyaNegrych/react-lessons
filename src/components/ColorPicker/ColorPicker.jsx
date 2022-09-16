import { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionInd: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionInd: index });
  };

  makeOptionClassName = index => {
    // const optionClasses = ['ColorPicker__option'];
    // if (index === this.state.activeOptionInd) {
    //   optionClasses.push('ColorPicker__option--active');
    // }
    // return optionClasses.join(' ');
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === this.state.activeOptionInd,
    });
  };
  render() {
    const { activeOptionInd } = this.state;
    const { colors } = this.props;
    const { label, color } = colors[activeOptionInd];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p style={{ color: color }}>Выбран цвет: {label}</p>
        <div>
          {this.props.colors.map(({ label, color }, index) => {
            return (
              <button
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIdx(index)}
              ></button>
            );
          })}
        </div>
      </div>
    );
  }
}
