import React from 'react'
import { NavLink } from 'react-router-dom'


const Award = () => {
  return (
    <div className="device-container">
      <div className="header">
      <NavLink to="../about" className="arrow-icon link-no-underline">&#8592;</NavLink>
        <h1>OxygenOS Contributors</h1>
      </div>
    <p className="award-text">
      OxygenOS Beta Program: Explained.
      Oct 13, 2016 16:30
      414.7k
      967
      Favorite
    </p>
    <h2>General Provisions</h2>

<div>
  <h3>Never Settle</h3>
  <p>
  When you buy a new OnePlus smartphone, you might notice this important little message printed on the side of the box: “Created Together With Our Fans.” It’s not marketing nonsense; it’s a phrase that we live by. It’s a philosophy that pervades everything we do, and software is a big part of what we do. Back when we first started our software journey almost two years ago, you guys actually gave OxygenOS its name . It's been a group effort since the very beginning.

You’ve probably noticed new "Community Builds" for OxygenOS popping up on the forums over the past few months. What are Community Builds? Why do they exist? What’s going on with OxygenOS? Solid questions, my curious friends. Here’s the short answer: Community Builds represent one component of our new, expanded software beta program. It all goes back to that “Created Together” thing. We want to make sure that every feature, tweak, and addition to OxygenOS passes the ultimate test: the scrutiny of, well, you.

To help accomplish this goal, OxygenOS now exists simultaneously in three different “streams”: Closed Beta, Open Beta, and Official Release. At every step of the way, we collect general feedback, bug reports, and feature requests directly from you, our community. Here’s how it works:

  </p>
</div>
    </div>
  )
}

export default Award
