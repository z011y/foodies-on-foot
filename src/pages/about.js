import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from "../images/4x/foodies-on-foot.png"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about">
      <h1>What the Heck is Foodies on Foot Anyway?</h1>
      <h3>Do you like to walk quaint little towns?</h3>
      <h3>Do you love to eat at world class dining establishments?</h3>
      <p>
        Here in the Napa and Sonoma Valley we have BOTH! Napa, Sonoma,
        Yountville, Saint Helena and Calistoga are all small towns yet host a
        number of Michelin Star, TripAdvisor, Yelp! and AAA diamond rated
        eateries.


        With Foodies On Foot, we tailor a tour to include top TripAdvisor and
        Yelp! reviewed restaurants (Like a Pub Crawl, without the hangover) and
        sample one of their signature creations.


        We have done exhaustive research eating at hundreds of restaurants
        culling the less desirable and keeping the best for you; rough work, I
        know, but someone had to do it.
      </p>
      <p>
        Try Foodies On Foot, bring an appetite and sensible shoes….not
        necessarily in that order.
      </p>
    </div>
  </Layout>
)

export default AboutPage
