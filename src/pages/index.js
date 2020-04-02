import React from "react"
import { Link } from "gatsby"
import "../components/styles.scss"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1 class="center back-text">BLIGHTED DISTRICTS</h1>
      <h2>A Quarantine Journal</h2>
      <Image/>
  </Layout>
)

export default IndexPage
