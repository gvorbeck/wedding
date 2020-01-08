import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import scheduleStyles from "../styles/schedule.module.scss"

export default ({ data }) => (
    <Layout pageName={scheduleStyles.schedule}>
        <SEO title="Schedule" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={scheduleStyles.dates}>
                <header>
                    <h1 className={[globalStyles.title, scheduleStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                    <div className={[scheduleStyles.img, globalStyles.img].join(' ')}>
                        <Img fluid={data.imgGirl.childImageSharp.fluid}/>
                    </div>
                </header>
                <section className={[globalStyles.pageContent, scheduleStyles.pageContent].join(' ')} dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
        ))}
    </Layout>
)

export const query = graphql`
{
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "Schedule"}}}) {
        edges {
            node {
                frontmatter {
                    title
                }
                html
                id
            }
        }
    },
    imgGirl: file(relativePath: { eq: "dancing-girl_lo.png" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`
