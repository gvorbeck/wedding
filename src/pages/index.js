import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FireSVG from "../components/fireSVG"
import indexStyles from "./index.module.scss"


export default ({ data }) => (
  <Layout pageName="page--home">
    <SEO title="Home" />
    <div className={indexStyles.advert}>
        <FireSVG />
        <span>We're getting married!</span>
        <div>
            <h2>September 5th, 2020</h2>
            <h3>Unionville Vineyards</h3>
        </div>
    </div>
    <Img fluid={data.imageOne.childImageSharp.fluid} />
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
