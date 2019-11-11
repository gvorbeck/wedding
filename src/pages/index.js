import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HandSVG from "../components/handSVG"
import indexStyles from "./index.module.scss"


export default ({ data }) => (
  <Layout pageName="page--home">
    <SEO title="Home" />
    <div className={indexStyles.advert}>
        <div>
            <h2>September 5th, 2020</h2>
            <h2>9/5/20</h2>
            <h3>Unionville Vineyards</h3>
        </div>
        <p>We're getting <span>married!</span></p>
    </div>
    <Img fluid={data.imageOne.childImageSharp.fluid} />
    <section className={indexStyles.intro}>
        <HandSVG />
        <p><span className={indexStyles.name}>Krishanti Daryanani</span> and <span className={indexStyles.name}>Garrett Vorbeck</span></p>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "faces.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
