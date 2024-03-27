import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LaneparkDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { children, name, value, placeholder, required, disabled, disabledOptionText } = this.props;

    return (
      <div className="lanepark-dropdown position-relative">
        <div
          className={`dropdown-toggle ${isOpen ? 'is-open' : ''}`}
          onClick={this.toggleDropdown}
        >
          <p className="dropdown-selected-value">{value || placeholder}</p>
          <img
            alt="Dropdown arrow"
            src="/icon/arrow-down.svg"
            className="dropdown-arrow"
          />
        </div>
        <select
          name={name}
          required={required}
          disabled={disabled}
          value={value}
          onChange={this.toggleDropdown} // To close the dropdown when a selection is made
          className="dropdown-select position-absolute top-0 right-0 bottom-0 left-0 w-100"
          style={{ opacity: 0, cursor: 'pointer' }}
        >
          <option value="" disabled>{disabledOptionText || 'Select an option'}</option>
          {children}
        </select>
      </div>
    );
  }
}

LaneparkDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledOptionText: PropTypes.string,
};

export default LaneparkDropdown;
