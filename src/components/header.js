import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/4x/header-logo.png"

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
