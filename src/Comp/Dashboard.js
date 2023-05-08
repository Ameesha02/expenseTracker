import React,{useContext} from 'react'
import  './Dashboard.css'
import Graph from './Graph'
import SumContext from "./SumContext"
const Dashboard = () => {
  const sumOfLastNames = useContext(SumContext);

  return (
    <div className="Dashboard">
      <div className="transactions">
        <h1 style={{marginLeft:"2rem"}}>All Transactions</h1>
      </div>

      <Graph className="graph"/>
     <div className="boxes">
      <div style={{display:"flex"}}>
        <div className="box">
        <h1>Total Income</h1>
        <h2>$ 17700</h2>
      </div>
      <div className="box">
        <h1>Total Expense</h1>
        <h2>$ 4120</h2>
      </div></div> 
      <div className="box" style={{marginLeft:"12rem"}}>
        <h1>Total Balance</h1>
        <h2>${sumOfLastNames}</h2>
      </div></div>
     {/*  <div className="history">
        <h1>Recent History</h1>
        <div className="box">
          <h3>Rent</h3>
          <h3>$1200</h3>
        </div>
        <div className="box">
          <h3>Rent</h3>
          <h3>$1200</h3>
        </div>
        <div className="box">
          <h3>Rent</h3>
          <h3>$1200</h3>
        </div>
        <div className="salary">
        <h3>Min</h3>
        <h1>Salary</h1>
          <h3>Max</h3>
        <div className="box">
          <h3>$8000</h3>
          <h3>$1200</h3>
        </div>
        </div>
        <div className="salary">
        <h3>Min</h3>
        <h1>Salary</h1>
          <h3>Max</h3>
        <div className="box">
          <h3>$8000</h3>
          <h3>$1200</h3>
        </div> 
        </div>
      </div>*/}
    </div>
  )
}

export default Dashboard
