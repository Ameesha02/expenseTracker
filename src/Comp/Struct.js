import React, { useState } from 'react'
import './Expense.css'
import Form from './Form'
import List from './List';

const Struct = (props) => {
  const [list,setList]=useState([]);
  let addList=(formData)=>{
    if(formData!==' ')
   setList([...list,formData]);
    console.log(formData);
  }
  const deleteListItem=(key)=>{
    let newListToDo=[...list];
    newListToDo.splice(key,1);
    setList([...newListToDo])
  }
  const getColor = (textContent) => {
    if (textContent === 'Expenses') {
      return 'green';
    } else{
      return 'red';
    }}

  return (

    <div className='Expense' style={{backgroundColor:"#fff"}}>
        <h1>{props.title}</h1>
        <div className="heading" style={{backgroundColor:"#fff"}}>
            <h2 style={{backgroundColor:"#fff"}}> Total <span style={{color:getColor(props.title)}}>{props.title}</span>: <span>$3120</span></h2>
        </div>
        <div className="form" style={{display:"flex"}}>
        <Form addList={addList}/>
        <div className="result" style={{width:"55%",marginLeft:"1rem",  marginTop:"2rem"}}>
         { list.map((listItem,i)=>{
            return(
              <List key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })}</div>
        
       
        </div>
      
    </div>
  )
}

export default Struct
