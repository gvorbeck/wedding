import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "../styles/index.module.scss"


export default ({ data }) => (
    <Layout pageName={indexStyles.home}>
        <SEO title="Home" />
        <section className={indexStyles.splash}>
            <h2>{data.site.siteMetadata.title}</h2>
            <div className={indexStyles.img}>
                <Img fluid={data.imgHands.childImageSharp.fluid}/>
            </div>
        </section>
        <section className={indexStyles.date}>
            <span>We're getting married</span>
            <h3>{data.site.siteMetadata.dateNumbers}</h3>
        </section>
        <section className={indexStyles.info}>
            <div className={indexStyles.img}>
                <Img fluid={data.imgFire.childImageSharp.fluid} />
            </div>
            <p>
                <span>Unionville Vineyards</span>
                <span>New Jersey</span>
            </p>
        </section>
    </Layout>
)

export const query = graphql`
query {
    site {
        siteMetadata {
            title
            dateNumbers
        }
    },
    imgHeads: file(relativePath: { eq: "wedding-couple.png" }) {
        childImageSharp {
            fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    imgHands: file(relativePath: { eq: "hands.jpg" }) {
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
