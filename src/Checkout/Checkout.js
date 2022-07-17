import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { connect } from "react-redux";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
          {/* Basket Item */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.checkoutState.basket,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
