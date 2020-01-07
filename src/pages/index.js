import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "../styles/index.module.scss"


export default ({ data }) => (
    <Layout pageName={indexStyles.home}>
        <SEO title="Home" />
        <section className={[indexStyles.splash, indexStyles.box].join(' ')}>
            <h2 className={indexStyles.title}>{data.site.siteMetadata.title}</h2>
            <div className={indexStyles.img}>
                <Img fluid={data.imgHands.childImageSharp.fluid}/>
            </div>
        </section>
        <section className={indexStyles.date}>
            <span>We're getting married</span>
            <h3>{data.site.siteMetadata.dateNumbers}</h3>
        </section>
        <section className={[indexStyles.info, indexStyles.box].join(' ')}>
            <div className={indexStyles.img}>
                <Img fluid={data.imgPire.childImageSharp.fluid}/>
            </div>
            <h2 className={indexStyles.title}>
                <span>Unionville Vineyards</span>
                <span>New Jersey</span>
            </h2>
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
    imgHands: file(relativePath: { eq: "hands_lo.png" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
            }
        }
    },
    imgPire: file(relativePath: { eq: "wedding-dress_lo.png" }) {
        childImageSharp {
            fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
            }
        }
    },
}
`
