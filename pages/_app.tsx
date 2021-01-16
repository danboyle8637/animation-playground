import App from "next/app"

import Layout from "../src/Layouts/BaseLayout"
import Global from "../src/styles/Global"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Layout>
          <Global />
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}

export default MyApp
