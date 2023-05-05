import React, { useState } from 'react'
import './Expense.css'
import Form from './Form'
import List from './List';
import {GiHamburgerMenu} from "react-icons/gi"

const Struct = (props) => {
 
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem(props.storageKey);
    return savedList ? JSON.parse(savedList) : [];
  });

  const addList = (formData) => {
    if (formData !== ' ') {
      const newList = [...list, formData];
      setList(newList);
      localStorage.setItem(props.storageKey, JSON.stringify(newList));
    }
  };

  const deleteListItem = (key) => {
    const newList = [...list];
    newList.splice(key, 1);
    setList(newList);
    localStorage.setItem(props.storageKey, JSON.stringify(newList));
  };
  
    const getColor = (textContent) => {
      if (textContent === 'Expenses') {
        return 'green';
      } else {
        return 'red';
      }
    };
    
  const renderList = () => {
    if (props.dataList) {
      return props.dataList.map((item, index) => (
        
         <List key={index} index={index} item={item} deleteItem={deleteListItem}/>
       
      ));
    } else {
     
    }
  };
  
  return (

   <div className='Expense' style={{backgroundColor:"#fff"}}>
      
     {props.showForm!==false && <div><div className='main-heading'><h1>{props.title}</h1><GiHamburgerMenu className='GiHamburgerMenu'/></div> 
        {props.showform!==false && <div className="heading" style={{backgroundColor:"#fff"}}>
            <h2 style={{backgroundColor:"#fff"}}> Total <span style={{color:getColor(props.title)}}>{props.title}</span>: <span>$3120</span></h2>
        </div>}
        <div className="form" style={{display:"flex"}}>
       { props.showform!==false && <Form addList={addList}/>}
        <div className="result" style={{width:"55%",marginLeft:"1rem",  marginTop:"2rem"}}>
         { list.map((listItem,i)=>{
            return(
              <List key={i} index={i} item={listItem} deleteItem={deleteListItem} style={{color:getColor(props.title)}}/>
            )
          })}</div>
        
        </div>
        </div>}
      {renderList()}
    </div>

  )
}

export default Struct
