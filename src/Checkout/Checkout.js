import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import { connect } from "react-redux";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout(props) {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          {props.user && <h3>Hello, {props.user.email}</h3>}
          <h2 className="checkout__title">Your shopping Basket</h2>
          {props.basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
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
    user: state.authState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
