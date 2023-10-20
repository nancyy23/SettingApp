import React from 'react'
import {NavLink} from 'react-router-dom'

const Screencast = () => {
  return (
    <div> 
        <div className="container">
    <div className="header">
    <NavLink to="../Connections" className="arrow-icon link-no-underline">&#8592;</NavLink>
      <h1>Screencast</h1>
    </div>
        <NavLink to="/Search" className="link">
          Search for display devices
      </NavLink>

    <hr className="line" />

    <NavLink to="/Help" className="link">
          Help
      </NavLink>

      <NavLink to="/Privacy" className="link">
          Privacy Notice
      </NavLink>
    </div>
    </div>
  )
}

export default Screencast