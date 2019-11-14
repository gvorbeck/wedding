import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import registryStyles from "./registry.module.scss"

export default ({ data }) => (
    <Layout pageName={registryStyles.schedule}>
        <SEO title="Registry" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={registryStyles.directions}>
                <h1 className={[globalStyles.title, registryStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                <section className={globalStyles.pageContent} dangerouslySetInnerHTML={{ __html: node.html }} />
            </article>
        ))}
    </Layout>
)

export const query = graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {title: {eq: "Registry"}}}) {
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
