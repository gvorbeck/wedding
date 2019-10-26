import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

export default ({ data }) => (
  <Layout pageName="page--home">
    <SEO title="Home" />
    <div>
        <Img fluid={data.imageOne.childImageSharp.fluid} />
    </div>
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
    }
  }
`
