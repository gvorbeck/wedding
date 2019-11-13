import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import travelStyles from "./travel.module.scss"

export default ({ data }) => (
    <Layout pageName={travelStyles.schedule}>
        <SEO title="Travel" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={travelStyles.dates}>
                <h1 className={travelStyles.title}>{node.frontmatter.title}</h1>
                <section dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
        ))}
    </Layout>
)

export const query = graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "Travel"}}}) {
        edges {
          node {
            frontmatter {
              title
            }
            html
            id
          }
        }
      }
    }
`
