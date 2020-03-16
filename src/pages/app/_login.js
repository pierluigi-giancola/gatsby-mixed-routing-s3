import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <p>Welcome to your new Gatsby site.</p>
      <p>LOGIN PAGE</p>
      <Link to="/page-2/">Go to page 2 (which doesn't exist)</Link>
      <br />
      <Link to="/app/logout/">Go to Logout</Link>
    </div>
  )
}
