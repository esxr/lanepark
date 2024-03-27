import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  zIndex: 1050, // Ensuring modal is above most other content
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export default class LaneparkModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bodyOverflow: '',
    };
  }

  handleEntering = () => {
    this.setState({ bodyOverflow: document.body.style.overflow });
    document.body.style.overflow = 'hidden';
  }

  handleExiting = () => {
    document.body.style.overflow = this.state.bodyOverflow;
  }

  render() {
    const { isOpen, children, onClose, maxW, className } = this.props;

    return (
      <Transition in={isOpen} timeout={duration} onEntering={this.handleEntering} onExiting={this.handleExiting} unmountOnExit>
        {state => (
          <div
            className="lanepark-modal-overlay position-fixed top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div
              className="lanepark-modal-backdrop position-fixed top-0 left-0 w-100 h-100 bg-black"
              style={{ opacity: 0.5 }}
              onClick={onClose}
            />
            <div
              role="dialog"
              aria-modal="true"
              className={`lanepark-modal-content rounded-lg shadow ${className}`}
              style={{ width: maxW, margin: '1rem', zIndex: 1051 }}
            >
              {children}
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

LaneparkModal.defaultProps = {
  maxW: '480px', // Default maximum width
  className: 'p-4', // Default padding, can be overridden with props
};
