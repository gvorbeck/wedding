import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import scheduleStyles from "./schedule.module.scss"

export default ({ data }) => (
    <Layout pageName={scheduleStyles.schedule}>
        <SEO title="Schedule" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={scheduleStyles.dates}>
                <h1 className={[globalStyles.title, scheduleStyles.title].join(' ')}>{node.frontmatter.title}</h1>
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
      imageOne: file(relativePath: { eq: "dancing-girl.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`
