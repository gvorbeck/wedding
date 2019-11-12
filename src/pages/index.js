import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"


export default ({ data }) => (
  <Layout pageName="page--home">
    <SEO title="Home" />
    {/*<div className={indexStyles.advert}>
        <div>
            <h2>September 5th, 2020</h2>
            <h2>9/5/20</h2>
            <h3>Unionville Vineyards</h3>
        </div>
        <p>We're getting <span>married!</span></p>
    </div>*/}
    {/*<Img fluid={data.imageOne.childImageSharp.fluid} />*/}
    <section className={indexStyles.intro}>
        {/*<HandSVG />*/}
        <Img fluid={data.imageTwo.childImageSharp.fluid} />
        <p><span className={indexStyles.name}>Krishanti Daryanani</span> and <span className={indexStyles.name}>Garrett Vorbeck</span></p>
    </section>
    <section className={indexStyles.info}>
        <p className={indexStyles.date}><span>09/05</span><span>2020</span></p>
        <Img className={indexStyles.imgCouple} fluid={data.imageThree.childImageSharp.fluid} />
        <p className={indexStyles.location}>
            <span>Unionville</span><span>Vineyards</span>
            <span>Ringoes, NJ</span>
        </p>
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
    imageTwo: file(relativePath: { eq: "wedding-couple.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    },
    imageThree: file(relativePath: { eq: "wedding-dress.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`
