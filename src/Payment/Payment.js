import React from "react";
import { connect } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

const Payment = (props) => {
  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - Delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payment__address">
            <p>{props.user?.email}</p>
            <p>123, Jalan Selatan</p>
            <p>Desa South, MY</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {props.basket.map( item => (
                <CheckoutProduct id={item.id} title={item.title} image={item.image}
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section"></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basket: state.checkoutState.basket,
    user: state.authState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
