import React from 'react'
import { NavLink } from 'react-router-dom'

const Uptodate = () => {
  return (
    <div>
       <div className="container">
      <div className="header">
      <NavLink to="../about" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>Version up to date</h1>
      </div>
      <h1>Official Version</h1>
          <p>This update improves system stability and performance, and fixes an issue where new contacts cannot be added.</p>
          <button className="update-button">Update Now</button>
      </div>
    </div>
  )
}

export default Uptodate