import React from "react"

import Layout from "../components/layout"
import "./our-story.scss"

export default ({ data }) => (
    <Layout pageName="page--story">
    {data.allMarkdownRemark.edges.map(({ node }) => (
        <article>
            {/*}<h1>{node.frontmatter.title}</h1>*/}
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
          }
        }
      }
    }
`
