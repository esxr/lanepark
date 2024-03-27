import React, { Component } from 'react';
import Link from 'next/link';
import { Transition } from 'react-transition-group';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import CartItem from '../cart/CartItem';
import { connect } from 'react-redux';
// Cart redux action creators for Lanepark
import { retrieveCart as dispatchRetreiveCart } from '../../store/actions/cartActions';

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  backgroundColor: '#FFF', // Assuming Lanepark prefers a clean, white background for modal elements
  color: '#333', // Dark text for readability, aligned with minimal design principles
};

const transitionStyles = {
  entering: { transform: 'translateX(100%)' },
  entered: { transform: 'translateX(0)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
};

const backdropTransitionStyles = {
  entering: { opacity: '0' },
  entered: { opacity: '0.5' }, // Slightly darker backdrop for better focus on the cart modal
  exiting: { opacity: '0' },
  exited: { opacity: '0' },
};

class Cart extends Component {
  constructor(props) {
    super(props);
    this.cartScroll = React.createRef();
    this.onEntering = this.onEntering.bind(this);
    this.onExiting = this.onExiting.bind(this);
  }

  componentDidMount() {
    this.props.dispatchRetreiveCart();
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  onEntering() {
    disableBodyScroll(this.cartScroll.current);
  }

  onExiting() {
    enableBodyScroll(this.cartScroll.current);
  }

  render() {
    const { isOpen, toggle } = this.props;
    const { cart } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={duration}
        unmountOnExit
        onEntering={this.onEntering}
        onExiting={this.onExiting}
      >
        {state => (
          <div className="lanepark-cart-modal"> {/* Updated class name for custom styling */}
            <div
              className="backdrop"
              style={{
                transition: `opacity ${duration}ms ease-in-out`,
                ...backdropTransitionStyles[state]
              }}
              onClick={() => toggle(false)}
            />
            <div
              className="main-cart-content"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div className="cart-header">
                <h3>Shopping Cart</h3> {/* Simplified and stylized header */}
                <button
                  className="close-button"
                  onClick={() => toggle(false)}
                >
                  <img src="/icon/close.svg" alt="Close" /> {/* Assuming Lanepark uses a custom close icon */}
                </button>
              </div>
              {cart.total_unique_items > 0 ? (
                <div className="cart-items">
                  <div className="items-list" ref={this.cartScroll}>
                    {cart.line_items.map(item => (
                      <CartItem
                        key={item.id}
                        item={item}
                      />
                    ))}
                  </div>
                  <div className="cart-footer">
                    <p>Subtotal: {cart.subtotal.formatted_with_symbol}</p>
                    <Link href="/checkout"><a className="checkout-button">Checkout</a></Link>
                    <Link href="/collection"><a className="continue-shopping">Continue Shopping</a></Link>
                  </div>
                </div>
              ) : (
                <div className="empty-cart">
                  <img src="/icon/empty-cart.svg" alt="Empty Cart" />
                  <p>Your cart is empty</p>
                </div>
              )}
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

export default connect(state => state, { dispatchRetreiveCart })(Cart);
