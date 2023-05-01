import React from 'react'
import "./Form.css"
import {AiFillDelete} from "react-icons/ai"

import {RiFirstAidKitFill} from "react-icons/ri"
import {BiMessageRoundedDots,BiWorld} from "react-icons/bi"
import {FiCalendar} from "react-icons/fi"
import {MdAttachMoney}  from "react-icons/md"
import {BsFillCartFill}  from "react-icons/bs"
import {TbPigMoney} from "react-icons/tb"
import {ImHome3} from "react-icons/im"
const List = (props) => { 
//  const {temp}=props.item.track;
const renderIcon = (props) => {
  const temp=props;
  console.log(temp);
  switch (temp) {
    case "Rent":
      return <ImHome3 />;
    case "Health":
      return <RiFirstAidKitFill />;
    case "Travelling":
      return <BiWorld />;
    case "Grocery":
      return <BsFillCartFill />;
    case "Investment":
      return <TbPigMoney />;
    default:
      return null;
  }
};
  return (
    <div>
<div className="result1"><div className="icon">{renderIcon(props.item.track)}</div>
            <div className="body"><h1>{props.item.firstName}</h1>
                <div className="main"><p><MdAttachMoney className="Sicon"/>{props.item.lastName}</p>
                <p><FiCalendar className="Sicon"/> {props.item.date}</p>
                <p><BiMessageRoundedDots className="Sicon"/> {props.item.comments}</p>
                </div>
            </div>
            <div className="dicon" style={{fontSize:"2rem", margin:"1rem 11rem"
}} onClick={e=>{
                props.deleteItem(props.index)
            }}> <AiFillDelete/></div>
            </div>
            </div>
   
  )
}

export default List
