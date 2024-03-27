import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/actions/cartActions';

class LaneparkCartItem extends Component {
  constructor(props) {
    super(props);

    this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleUpdateCartItem(lineItem, quantity) {
    // Dispatches an action to update the quantity of a cart item
    this.props.dispatch(updateCartItem(lineItem, quantity));
  }

  handleRemoveFromCart(lineItem) {
    // Dispatches an action to remove an item from the cart
    this.props.dispatch(removeFromCart(lineItem));
  }

  render() {
    const { item } = this.props;

    return (
      <div className="lanepark-cart-item">
        <div className="item-display d-flex align-items-center">
          {item.media && (
            <div
              className="item-image"
              style={{ backgroundImage: `url("${item.media.source}")` }}
            />
          )}
          <div className="item-details flex-grow-1">
            <div className="item-name-price d-flex justify-content-between">
              <p className="item-name">{item.name}</p>
              <p className="item-price">
                {item.line_total.formatted_with_symbol}
              </p>
            </div>
            <div className="item-options d-flex justify-content-between">
              {item.selected_options.map((option, i) => (
                <p key={i} className="option">
                  {option.group_name}: {option.option_name}
                </p>
              ))}
            </div>
            <div className="item-actions d-flex justify-content-between align-items-center">
              <div className="quantity-controls d-flex align-items-center">
                <button
                  className="decrease-quantity"
                  onClick={() => item.quantity > 1 ? this.handleUpdateCartItem(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)}
                >
                  <img src="/icon/minus.svg" alt="Decrease" />
                </button>
                <p className="quantity">{item.quantity}</p>
                <button
                  className="increase-quantity"
                  onClick={() => this.handleUpdateCartItem(item.id, item.quantity + 1)}
                >
                  <img src="/icon/plus.svg" alt="Increase" />
                </button>
              </div>
              <p className="remove-item" onClick={() => this.handleRemoveFromCart(item.id)}>
                Remove
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LaneparkCartItem);
