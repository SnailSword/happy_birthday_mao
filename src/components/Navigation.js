import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/game">game</Link></li>
      <li><Link to="/result">result</Link></li>
    </ul>
  </div>
)

export default Navigation
