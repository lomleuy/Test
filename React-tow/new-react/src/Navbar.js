import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to={"/moviekide"}><li>MovieKide</li></Link>
    </ul>
    </>
    
  )
}

export default Navbar