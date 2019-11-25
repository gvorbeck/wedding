import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.scss"


export default ({ data }) => (
    <Layout pageName={indexStyles.home}>
        <SEO title="Home" />
        <section className={indexStyles.splash}>
            <div className={indexStyles.img}>
                <Img fluid={data.imgHeads.childImageSharp.fluid} />
            </div>
        </section>
        <section className={indexStyles.info}>
            <p className={indexStyles.title}><strong>Krishanti Daryanani</strong><span> & </span><strong>Garrett Vorbeck</strong></p>
            <p className={indexStyles.date}>
                <span className={indexStyles.monthDay}>09/05</span>
                <span className={indexStyles.year}>2020</span>
            </p>
            <div className={indexStyles.img}>
                <Img fluid={data.imgFire.childImageSharp.fluid} />
            </div>
            <p className={indexStyles.location}>
                <span className={indexStyles.venue}>Unionville Vineyards</span>
                <span className={indexStyles.state}>New Jersey</span>
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
