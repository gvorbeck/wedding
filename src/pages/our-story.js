import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import storyStyles from "./our-story.module.scss"

export default ({ data }) => (
    <Layout pageName={storyStyles.ourStory}>
    <SEO title="Our Story" />
    {data.allMarkdownRemark.edges.map(({ node, i }) => (
        <article key={node.id} className="story">
            <h1 className={storyStyles.title}>{node.frontmatter.title}</h1>
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
