import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"


export default ({ data }) => (
  <Layout pageName={indexStyles.home}>
    <SEO title="Home" />
    <section className={indexStyles.intro}>
        <div className={indexStyles.img}>
            <Img fluid={data.imgHeads.childImageSharp.fluid} />
        </div>
    </section>
    <section className={indexStyles.info}>
        <p className={indexStyles.title}><span className={indexStyles.name}>Krishanti Daryanani</span><span>&</span><span className={indexStyles.name}>Garrett Vorbeck</span></p>
        <p className={indexStyles.date}>
            <span>09/05</span><span className={indexStyles.year}>2020</span>
        </p>
        <Img className={indexStyles.img} fluid={data.imgFire.childImageSharp.fluid} />
        <p className={indexStyles.location}>
            <span>Unionville Vineyards</span>
            <span>New Jersey</span>
        </p>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    imgHeads: file(relativePath: { eq: "wedding-couple.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imgFire: file(relativePath: { eq: "wedding-dress.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
