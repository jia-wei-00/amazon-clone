import React from "react";
import "./Product.css";
import { addToBasket } from "../actions";
import { connect } from "react-redux";

function Product({ id, title, image, price, rating, addBasket }) {
  const addToBasketFunction = () => {
    const items = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    };

    addBasket(items);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasketFunction}>Add to Basket</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addBasket: (payload) => dispatch(addToBasket(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
