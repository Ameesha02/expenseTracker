// import React from 'react'
// import Nav from '../Comp/Nav'
// import Struct from '../Comp/Struct'
// // import Struct from '../Comp/Struct'
// // import List from '../Comp/List'
// const Transcation = () => {
//   return (
//     <div style={{display:"flex"}}>
//     <Nav/>
//     {<Struct title="Incomes" storageKey='income-list' showform={false}/>}
//     <Struct title="Expenses" storageKey='expenses-list'  showform={false}/>
//   </div>
//   )
// }

// export default Transcation
import React, { useEffect, useState } from 'react';
import Nav from '../Comp/Nav';
import Struct from '../Comp/Struct';
import { GiHamburgerMenu } from 'react-icons/gi';
import "./index.css"
const Combined = () => {
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    const incomeData = JSON.parse(localStorage.getItem('income-list') || '[]');
    const expenseData = JSON.parse(localStorage.getItem('expenses-list') || '[]');
    setMergedData([...incomeData, ...expenseData]);
  }, []);
  const [show, setShow] = useState(false);

  const handle = () => {
    setShow(!show);
    console.log(show)
  };

  return (
    <div style={{ display: 'flex' }}>
           <div className='hamburger' style={{position:"fixed", padding:"2rem"}}><GiHamburgerMenu onClick={()=>handle()}/></div>
        <Nav class={show ? 'hidden' : 'nav'}/>
      <Struct title='All transcations' dataList={mergedData} showForm={false} />
    </div>
  );
};

export default Combined;
