import React, { useState,useEffect } from 'react'
import './Expense.css'
import Form from './Form'
import List from './List';


// import SumContext from './SumContext';
// import Dashboard from './Dashboard';
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
  const [sumOfLastNames, setSumOfLastNames] = useState(0);
  
 
  useEffect(() => {
    let sum = 0;
    list.forEach(item => {
      sum += parseInt(item.lastName, 10);
    });
    setSumOfLastNames(sum);
  }, [list]);
  return (

   
   <div className='Expense' style={{backgroundColor:"#fff"}}>
      
      <div className='main-heading'><h1>{props.title}</h1>
   
      </div> 
        {props.showForm!==false && <div className="heading" style={{backgroundColor:"#fff"}}>
            <h2 style={{backgroundColor:"#fff"}}> Total <span style={{color:getColor(props.title)}}>{props.title}</span>: <span>${sumOfLastNames}</span></h2>
        </div>}
        { props.showForm!==false && <div className="form" style={{display:"flex"}}>
        <Form addList={addList}/>
        <div className="result">
         { list.map((listItem,i)=>{
            return(
              <List key={i} index={i} item={listItem} deleteItem={deleteListItem} style={{color:getColor(props.title)}}/>
            )
          })}</div>
       
        </div>}
        
      {renderList()}
    </div>

  )
 
}

export default Struct
