import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/avocado.png"
import { FaInstagram, FaFacebook, FaYelp, FaTripadvisor } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="logo-wrapper">
      <Link className="logo" to="/">
        <img src={Logo} />
      </Link>
    </div>
    <div className="links-wrapper">
      <Link to="/">Home</Link>
      <Link to="/tours">Our Tours</Link>
      <Link to="/about">About Us</Link>
      <Link className="reserve" to="/tours">
        Reserve Now
      </Link>
      <div className="social-links">
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaYelp />
        </a>
        <a href="/">
          <FaTripadvisor />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Foodies on Foot`,
}

export default Header
