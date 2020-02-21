import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/4x/foodies-on-foot.png"
import OxbowLogo from "../images/avocado.png"
import MillLogo from "../images/cheese.png"
import SonomaLogo from "../images/4x/header-logo.png"
import SegwayLogo from "../images/segway.png"

const ToursPage = () => (
  <Layout>
    <SEO title="Our Tours" />
    <div className="tours__overview">
      <h1>
        <span>Taste</span> your way through Napa and Sonoma!
      </h1>
      <h3>
        Drinks are not included. Feel free to purchase a drink if you wish.
      </h3>
      <h3 className="see-below">See below for available tours</h3>
    </div>
    <div className="oxbow-market tour">
      <div className="tour__navbar oxbow-navbar">
        <div className="tour__logo">
          <img src={OxbowLogo} />
        </div>
      </div>
      <div className="tour__content oxbow-img">
        <div className="tour__content__title">
          <h1>Oxbow Market</h1>
          <Link to="/tours" className="reserve-tours">
            Reserve Now
          </Link>
        </div>
        <div className="tour__content__info">
          <h3>$79 each</h3>
          <h4>7 stops may include</h4>
          <div className="tour__content__info__items">
            <ul className="column-one">
              <li>Organic Juice Bar</li>
              <li>Model Bakery</li>
              <li>Ca’Momi</li>
              <li>Carpe Diem</li>
              <li>La Esperanza</li>
              <li>Melted </li>
              <li>Bui Bistro</li>
              <li>Napa Valley Bistro</li>
              <li>Lucero</li>
            </ul>
            <ul className="column-two">
              <li>Taqueria Rosita</li>
              <li>Kara’s Cupcakes</li>
              <li>Ristorante Allegria</li>
              <li>Velo Pizza</li>
              <li>Small World Cafe</li>
              <li>Three Twins</li>
              <li>Tarla</li>
              <li>Clementes</li>
              <li>C’Casa</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="historic-napa-mill tour">
      <div className="tour__navbar mill-navbar">
        <div className="tour__logo">
          <img src={MillLogo} />
        </div>
      </div>
      <div className="tour__content mill-img">
        <div className="tour__content__title">
          <h1>Historic Napa Mill</h1>
          <Link to="/tours" className="reserve-tours">
            Reserve Now
          </Link>
        </div>
        <div className="tour__content__info">
          <h3>$79 each</h3>
          <h4>7 stops may include</h4>
          <div className="tour__content__info__items">
            <ul className="column-one">
              <li>Sweetie Pies</li>
              <li>Vintage Sweet Shoppe</li>
              <li>The Pear Southern Bistro </li>
              <li>Tarla’s</li>
              <li>Grace’s Table</li>
              <li>Eight Noodle </li>
              <li>Small World Cafe</li>
              <li>Napa General Store</li>
              <li>Frati</li>
            </ul>
            <ul className="column-two">
              <li>Clementes</li>
              <li>Napa Valley Olive Oil</li>
              <li>Ristorante Allegria</li>
              <li>Napkins</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="sonoma-square tour">
      <div className="tour__navbar sonoma-navbar">
        <div className="tour__logo">
          <img src={SonomaLogo} />
        </div>
      </div>
      <div className="tour__content sonoma-img">
        <div className="tour__content__title">
          <h1>Sonoma Square</h1>
          <Link to="/tours" className="reserve-tours">
            Reserve Now
          </Link>
        </div>
        <div className="tour__content__info">
          <h3>$85 each</h3>
          <h4>7 stops may include</h4>
          <div className="tour__content__info__items">
            <ul className="column-one">
              <li>Basque Boulangerie Bakery </li>
              <li>Vella Cheese Factory</li>
              <li>Taste of the Himalayas </li>
              <li>El Dorado Kitchen </li>
              <li>Wine Country Chocolates </li>
              <li>The Red Grape </li>
              <li>Bui Bistro</li>
              <li>La Casa</li>
              <li>The Swiss Hotel</li>
            </ul>
            <ul className="column-two">
              <li>The Patch</li>
              <li>Maya</li>
              <li>La Bodega</li>
              <li>Sunflower Caffe</li>
              <li>The Chocolate Cow</li>
              <li>Sonoma Cheese Factory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="segway tour">
      <div className="tour__navbar segway-navbar">
        <div className="tour__logo">
          <img src={SegwayLogo} />
        </div>
      </div>
      <div className="tour__content segway-img">
        <div className="tour__content__title">
          <h1>Segway Tours</h1>
          <Link to="/tours" className="reserve-tours">
            Reserve Now
          </Link>
        </div>
        <div className="tour__content__info">
          <h3>$109 each</h3>
          <h4>7 stops may include</h4>
          <div className="tour__content__info__items segway-items">
            <ul className="column-one">
              <li>Sweetie Pies</li>
              <li>Vintage Sweet Shoppe </li>
              <li>The Pear Southern Bistro</li>
              <li>Tarla’s </li>
              <li>Carpe Diem</li>
              <li>Sushi Mambo </li>
              <li>Small World Cafe</li>
              <li>Ca’Momi </li>
              <li>La Esperanza</li>
              <li>Bui Bistro </li>
              <li>Lucero </li>
              <li>Three Twins </li>
            </ul>
            <ul className="column-two">
              <li>Napa General Store</li>
              <li>Frati</li>
              <li>Clementes</li>
              <li>Napa Valley Olive Oil</li>
              <li>Ristorante Allegria</li>
              <li>Napkins</li>
              <li>Model Bakery</li>
              <li>Mango on Main</li>
              <li>Melted</li>
              <li>Napa Valley Bistro</li>
              <li>Taqueria Rosita</li>
              <li>Kara’s Cupcakes</li>
              <li>Smoakville</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ToursPage
