import React ,{useState}from 'react'
import Nav from '../Comp/Nav'
import Struct from '../Comp/Struct'
import { GiHamburgerMenu } from 'react-icons/gi';
import "./index.css"

const Incomes = () => {
  const [show, setShow] = useState(false);

  const handle = () => {
    setShow(!show);
    
  };

  return (
    <div style={{display:"flex"}}>
            <div className='hamburger' style={{position:"fixed", padding:"2rem"}}><GiHamburgerMenu onClick={()=>handle()}/></div>
        <Nav class={show ? 'hidden' : 'nav'}/>
     {<Struct title="Incomes" storageKey='income-list' />}
     
    </div>
  )
}

export default Incomes;
