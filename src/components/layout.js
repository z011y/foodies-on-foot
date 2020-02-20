/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Yelp from '../images/yelp.png'
import Tripadvisor from '../images/4x/tripadvisor.png'
import Logo from '../images/4x/header-logo.png';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="content-wrapper">
        <main>{children}</main>
        </div>
        <footer className="footer">
          <div className="footer__email">
            <h2>Available Tuesday thru Saturday</h2>
            <div className="contact">
              <a href="tel:707-208-4691">707-208-4691</a>
              <a href="email:foodiesonfoot@yahoo.com">foodiesonfoot@yahoo.com</a>

            </div>

          </div>
          <div className="reviews">
            Review us on
            <a className="yelp" href="https://www.yelp.com/biz/foodies-on-foot-napa?osq=foodies+on+foot" target="blank">Yelp</a> 
            or
            <a className="tripadvisor" target="blank" href="https://www.tripadvisor.com/Attraction_Review-g32766-d6534585-Reviews-Foodies_on_Foot-Napa_Napa_Valley_California.html">Tripadvisor</a>
          </div>
          © {new Date().getFullYear()}, Foodies on Foot
          {` `}
          <img src={Logo} alt=""/>
        </footer>
      
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
