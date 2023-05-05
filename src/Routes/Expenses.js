import React from 'react'
import Nav from '../Comp/Nav'
import Struct from '../Comp/Struct'
import {GiHamburgerMenu} from "react-icons/gi"
const Expenses = () => {
  return (
    <div style={{display:"flex"}}>
      <div className='hamburger'><GiHamburgerMenu/></div>
        <Nav/>
        <Struct title="Expenses" storageKey='expenses-list'/>

    </div>
  )
}

export default Expenses
