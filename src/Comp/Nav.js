import React from 'react'
import './nav.css'
import {RiDashboardFill} from "react-icons/ri"
import {FcMoneyTransfer } from "react-icons/fc"
import {GiExpense} from "react-icons/gi"
import {MdAttachMoney,MdLogin}  from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <div className='nav' >
        <div className='upper'><CgProfile size={50} style={{marginTop:"2rem"}}/><div className="profile"> <h1 style={{margin: "1rem -1rem"}}>my name</h1>
        <p>your money</p></div>
        </div>
        <div className='mid'>
                <Link to="/" className='item'><RiDashboardFill size={30}/> dashboard</Link>
                <Link to="/" className='item'><FcMoneyTransfer size={30}/> transactions</Link>
                <Link to="/Incomes" className='item'><MdAttachMoney size={30}/> incomes</Link>
                <Link to="/Expenses" className='item'><GiExpense size={30}/> expenses</Link>
            
        </div>
        <div className='low'><MdLogin/> sign out</div>

      
    </div>
  )
}

export default Nav
