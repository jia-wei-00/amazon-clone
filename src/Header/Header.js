import React from "react";
import "./Header.css";
import SearchIcons from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../firebase";

function Header(props) {
  const handleAuthentication = () => {
    if (props.user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcons className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!props.user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {!props.user ? "Guest" : props.user.email}
            </span>
            <span className="header__optionLineTwo">
              {props.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {props.basket.length}
            </span>
          </div>
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
