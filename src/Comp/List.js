import React from 'react'
import "./Form.css"
import {AiFillDelete} from "react-icons/ai"

import {RiFirstAidKitFill} from "react-icons/ri"
import {BiMessageRoundedDots} from "react-icons/bi"
import {FiCalendar} from "react-icons/fi"
import {MdAttachMoney}  from "react-icons/md"
const List = (props) => {
  return (
    <div>
      <div className="result" style={{width:"55%",marginLeft:"1rem",  marginTop:"2rem"}}>
            {/* <div className="result1"><div className="icon"><RiFirstAidKitFill/></div>
            <div className="body">
                <h1>Dentist Appointment</h1>
                <div className="main"><p><MdAttachMoney className="Sicon"/>120</p>
                <p><FiCalendar className="Sicon"/> 27/01/23</p>
                <p><BiMessageRoundedDots className="Sicon"/> Tooth Removal</p></div></div>
                <div className="icon"> <AiFillDelete/></div></div> */}

          
            {/* <div className="result1"><div className="icon"><BiWorld/></div>
            <div className="body">
                <h1>Travelling</h1>
                <div className="main"><p><MdAttachMoney className="Sicon"/>120</p>
                <p><FiCalendar className="Sicon"/> 27/01/23</p>
                <p><BiMessageRoundedDots className="Sicon"/> Australia</p></div></div></div> */}

<div className="result1"><div className="icon"><RiFirstAidKitFill/></div>
            <div className="body"><h1>{props.item}</h1>
                <div className="main"><p><MdAttachMoney className="Sicon"/>{props.j}</p>
                <p><FiCalendar className="Sicon"/> {props.d}</p>
                <p><BiMessageRoundedDots className="Sicon"/> {props.m}</p>
                </div>
            </div>
            <div className="icon" onClick={e=>{
                props.deleteItem(props.index)
            }}> <AiFillDelete/></div>
            </div>
            </div>
    </div>
  )
}

export default List
