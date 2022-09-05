import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { getBasketTotal } from "../reducers/checkout";
import { useNavigate } from "react-router-dom";

function Subtotal(props) {
  const navigate = useNavigate();
  const [basket] = useState(props.basket.length);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket} items) :<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(props.basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    basket: state.checkoutState.basket,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Subtotal);
