import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout pageName="page--details">
    <SEO title="Details" />
    <div>
        <Img fluid={data.imageOne.childImageSharp.fluid} />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "faces2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
