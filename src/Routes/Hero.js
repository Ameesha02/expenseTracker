import React from 'react'
import Nav from '../Comp/Nav'
import Dashboard from '../Comp/Dashboard'

const Hero = () => {
  return (
    <div style={{display:"flex"}}>
      <Nav/>
      <Dashboard/>
    </div>
  )
}

export default Hero
