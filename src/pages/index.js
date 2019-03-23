import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Homepage"
          keywords={[`useful links`, `gatsby`, `javascript`, `react`]}
        />
          <div>
            <p>LA, CA</p>
            <p>a collection of links I find useful</p>
          </div>
      </Layout>
    )
  }
}

export default Index


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`