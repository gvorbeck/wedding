import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    </div>
    {/*<Link to="/our-story/">Go to our story</Link>*/}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
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
