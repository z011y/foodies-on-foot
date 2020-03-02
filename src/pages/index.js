import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/4x/foodies-on-foot.png"
import Cookie from "../images/4x/cookie_2.png"
import HeroLogo from "../images/4x/foodies-logo-grn.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="hero">
      <div className="logo-wrapper">
        <img src={HeroLogo} className="hero__logo" />
      </div>
      <Link to="/tours" className="see-tours-btn">
        See Tours
      </Link>
      <div className="subtitle-wrapper">
        <h1>Nibbling Napa and Sampling Sonoma - One Bite at a Time</h1>
      </div>
    </div>
    <div className="overview">
      <img src={Cookie} alt="cookie" className="cookie" />
      <h1 className="overview-title">
        Welcome to Foodies on Foot! Visit us in Napa and Sonoma.
      </h1>
      <h4 className="overview-text">
        We invite you to a unique blend of history and culinary adventure. Enjoy
        the tastes of Napa – a small area downtown that probably has more top
        restaurants than anywhere in the United States. Or the flavors of Sonoma
        Square - where California won its independence!
      </h4>
    </div>
  </Layout>
)

export default IndexPage
