import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import faqStyles from "../styles/faqs.module.scss"

export default ({ data }) => (
    <Layout pageName={faqStyles.faqs}>
        <SEO title="FAQs" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={faqStyles.article}>
                <h1 className={[globalStyles.title, faqStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                <section className={[globalStyles.pageContent, faqStyles.pageContent].join(' ')}>
                    <div dangerouslySetInnerHTML={{ __html: node.html }} />
                    <dl className={faqStyles.questions}>
                        {node.frontmatter.questions.map((question) =>
                            <>
                                <dt><h2>{question.q}</h2></dt>
                                <dd><p>{question.a}</p></dd>
                            </>
                        )}
                    </dl>
                </section>
            </article>
        ))}
    </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "FAQs"}}}) {
      edges {
        node {
          frontmatter {
            title
            questions {
              q
              a
            }
          }
          html
          id
        }
      }
    }
  }
`
