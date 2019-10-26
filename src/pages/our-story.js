import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ourStoryStyles from "./our-story.module.scss"

export default ({ data }) => (
    <Layout pageName="page--story">
    {data.allMarkdownRemark.edges.map(({ node, i }) => (
        <article key={node.id} className={ourStoryStyles.article}>
            <h1>{node.frontmatter.title}</h1>
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
