import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import globalStyles from "../styles/global.module.scss"
import travelStyles from "../styles/travel.module.scss"

export default ({ data }) => (
    <Layout pageName={travelStyles.travel}>
        <SEO title="Travel" />
        {data.allMarkdownRemark.edges.map(({ node, i }) => (
            <article key={node.id} className={travelStyles.directions}>
                <header>
                    <h1 className={[globalStyles.title, travelStyles.title].join(' ')}>{node.frontmatter.title}</h1>
                    <div className={[travelStyles.img, globalStyles.img].join(' ')}>
                        <Img fluid={data.imgGirl.childImageSharp.fluid}/>
                    </div>
                </header>
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
      },
      imgGirl: file(relativePath: { eq: "dancing-girl_lo.png" }) {
          childImageSharp {
              fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
              }
          }
      }
    }
`
