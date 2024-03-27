import React, { Component } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import Radiobox from '../../common/atoms/Radiobox';

export default class LaneparkPaymentDetails extends Component {
  renderTestGateway() {
    const { gateways, onChangeGateway, selectedGateway, cardNumber, expMonth, expYear, cvc } = this.props;

    if (!gateways || !gateways.available['test_gateway']) {
      return null;
    }

    return (
      <div className="lanepark-payment-option">
        <label onClick={() => onChangeGateway('test_gateway')} className="lanepark-payment-label">
          <Radiobox checked={selectedGateway === 'test_gateway'} />
          <span>Credit/debit card</span>
        </label>
        {selectedGateway === 'test_gateway' && (
          <div className="lanepark-payment-inputs">
            <div className="row">
              <div className="col">
                <input
                  name="cardNumber"
                  pattern="[0-9. ]+"
                  value={cardNumber}
                  maxLength="16"
                  placeholder="Card Number"
                />
                <input
                  name="cvc"
                  value={cvc}
                  maxLength="3"
                  type="number"
                  placeholder="CVC (CVV)"
                />
                <input
                  name="expMonth"
                  type="number"
                  value={expMonth}
                  placeholder="Exp. Month"
                />
                <input
                  type="number"
                  name="expYear"
                  value={expYear}
                  placeholder="Exp. Year"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  renderStripe() {
    const { gateways, onChangeGateway, selectedGateway } = this.props;

    if (!gateways || !gateways.available['stripe']) {
      return null;
    }

    const cardElementOptions = {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    };

    return (
      <div className="lanepark-payment-option">
        <label onClick={() => onChangeGateway('stripe')} className="lanepark-payment-label">
          <Radiobox checked={selectedGateway === 'stripe'} />
          <span>Credit/debit card (via Stripe)</span>
        </label>
        {selectedGateway === 'stripe' && (
          <div className="lanepark-payment-inputs">
            <CardElement options={cardElementOptions} />
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="lanepark-payment-details">
        <h2>Payment Details</h2>
        <div className="lanepark-payment-gateways">
          {this.renderTestGateway()}
          {this.renderStripe()}
          {/* Implement additional gateways as needed */}
        </div>
      </div>
    );
  }
}

LaneparkPaymentDetails.propTypes = {
  gateways: PropTypes.object,
  onChangeGateway: PropTypes.func.isRequired,
  selectedGateway: PropTypes.string,
  cardNumber: PropTypes.string,
  expMonth: PropTypes.string,
  expYear: PropTypes.string,
  cvc: PropTypes.string,
};
