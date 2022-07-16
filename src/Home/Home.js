import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The lean Startup: How Constant Innovation Creates Radically Successful Business Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="DeskCycle 2 Under Desk Bike Pedal Exerciser with Adjustable Leg - Mini Exercise Bike Desk Cycle, Leg Exerciser"
            price={199.0}
            image="https://m.media-amazon.com/images/I/61k4fqIuEYL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="49456094"
            title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 256GB) - Purple (5th Generation)"
            price={749.0}
            image="https://m.media-amazon.com/images/I/61k05QwLuML._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="74837564"
            title="Meta Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={299.0}
            image="https://m.media-amazon.com/images/I/61tE7IcuLmL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="52168555"
            title="Nintendo Switch – OLED Model w/ White Joy-Con"
            price={349.0}
            image="https://m.media-amazon.com/images/I/61dYrzvBLbL._AC_UL320_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12548444"
            title="SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor, 1ms, NVIDIA G-SYNC & FreeSync, QLED (LC49G95TSSNXZA)"
            price={549.0}
            image="https://m.media-amazon.com/images/I/81R+Ffz+01L._AC_SX450_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
