import React from "react";
import "./CheckoutProduct.css";
import { removeFromBasket } from "../actions";
import { connect } from "react-redux";

function CheckoutProduct({ id, image, title, price, rating, removeBasket }) {
  const removeFromBasketFunction = () => {
    removeBasket(id);
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasketFunction}>Remove from Basket</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  removeBasket: (payload) => dispatch(removeFromBasket(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutProduct);
