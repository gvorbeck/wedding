import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"

import fireSVG from "../images/yagna.svg"

export default ({ data }) => (
  <Layout pageName="page--home">
    <SEO title="Home" />
    <div className={indexStyles.advert}>
        <img alt="yagna" src={fireSVG} />
        <span>We're getting married!</span>
        <h2>Junetember 71st, 2020</h2>
        <h3>Farmsdale Village Landfill</h3>
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
