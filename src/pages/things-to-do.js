import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import ttdStyles from "./things-to-do.module.scss"

export default ({ data }) => (
    <Layout pageName={ttdStyles.stuff}>
        <SEO title="Things to Do" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={ttdStyles.directions}>
                <h1 className={[globalStyles.title, ttdStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                <section className={[globalStyles.pageContent, ttdStyles.pageContent].join(' ')} dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
        ))}
    </Layout>
)

export const query = graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "Things to Do"}}}) {
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
