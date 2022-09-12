import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Payment from "./Payment/Payment";
import { auth } from "./firebase";
import { connect } from "react-redux";
import { userLogin, userLogout } from "./actions";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import {
  HashRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

const promise = loadStripe(
  "pk_test_51LeuwyCaFXx8q5KvvAKa48RxQ33O6gWOMx9o34dhCvJzmYaKqAqqQ6wWBVQ8Gn0Tnt87AJIRXbGNmhRM7yA96wSf00hwHATlD5"
);

function App(props) {
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        props.login(authUser);
      } else {
        props.logout();
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" redirectTo="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(userLogin(payload)),
  logout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
