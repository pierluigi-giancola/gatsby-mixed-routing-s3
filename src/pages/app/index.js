import React from "react"
import { Router } from "@reach/router"
import Login from "./_login"
import Logout from "./_logout"

import Layout from "../../components/layout"

const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <Login path="/login" />
        <Logout path="/logout" />
      </Router>
    </Layout>
  )
}

export default App
