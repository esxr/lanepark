import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import { connect } from 'react-redux';
import Root from '../../components/common/Root';

class LaneparkConfirm extends Component {
  constructor(props) {
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
  }

  componentDidMount() {
    if (!this.props.orderReceipt) {
      this.props.router.push('/');
    }
  }

  handlePrint() {
    if (window && window.print) {
      window.print();
    }
  }

  renderPrintButton() {
    return (
      <button onClick={this.handlePrint} className="lanepark-print-button">
        Print receipt
      </button>
    );
  }

  renderOrderSummary() {
    const { orderReceipt } = this.props;
    if (!orderReceipt) return null;

    return (
      <div className="lanepark-order-summary">
        <p>Receipt number: {orderReceipt.customer_reference}</p>
        <p>Order total: {orderReceipt.order.total.formatted_with_code}</p>
        {this.renderPrintButton()}
      </div>
    );
  }

  render() {
    const { orderReceipt } = this.props;
    if (!orderReceipt) return <Root />;

    return (
      <Root>
        <div className="lanepark-confirm">
          <h2>Thank you for your purchase!</h2>
          <p>Your order has been placed successfully.</p>
          <p>Order number: {orderReceipt.customer_reference}</p>
          <div className="lanepark-confirm-actions">
            <Link href="/">
              <a className="lanepark-button">Home</a>
            </Link>
            <Link href="/collection">
              <a className="lanepark-button">Continue Shopping</a>
            </Link>
          </div>
          {this.renderOrderSummary()}
        </div>
      </Root>
    );
  }
}

export default withRouter(connect(state => state)(LaneparkConfirm));
