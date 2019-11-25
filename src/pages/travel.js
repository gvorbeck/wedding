import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import travelStyles from "./travel.module.scss"

export default ({ data }) => (
    <Layout pageName={travelStyles.travel}>
        <SEO title="Travel" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={travelStyles.directions}>
                <h1 className={[globalStyles.title, travelStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                <section className={[globalStyles.pageContent, travelStyles.pageContent].join(' ')} dangerouslySetInnerHTML={{ __html: node.html }} />
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
