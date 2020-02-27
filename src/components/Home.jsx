import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Main Page Title</title>
    </Helmet>
    <h1>{`Home`}</h1>
  </div>
)

export default Home