import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => (
    <Layout pageName="page--story">
    <SEO title="Our Story" />
    {data.allMarkdownRemark.edges.map(({ node, i }) => (
        <article key={node.id} className="story">
            <h1 className="page--title">{node.frontmatter.title}</h1>
            <section dangerouslySetInnerHTML={{ __html: node.html }} />
        </article>
    ))}
    </Layout>
)

export const query = graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "Our Story"}}}) {
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
