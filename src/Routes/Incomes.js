import React  from 'react'
import Nav from '../Comp/Nav'
import Struct from '../Comp/Struct'


const Incomes = () => {


  return (
    <div style={{display:"flex"}}>
      <Nav/>
     {<Struct title="Incomes" storageKey='income-list' />}
     
    </div>
  )
}

export default Incomes;
