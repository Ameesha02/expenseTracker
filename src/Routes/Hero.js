import React,{useState} from 'react'
import Nav from '../Comp/Nav'
import Dashboard from '../Comp/Dashboard'
import { GiHamburgerMenu } from 'react-icons/gi';
import "./index.css"
const Hero = () => {
  const [show, setShow] = useState(false);

  const handle = () => {
    setShow(!show);
   
  };
  return (
    <div style={{display:"flex"}}>
            <div className='hamburger' style={{position:"fixed", padding:"2rem"}}><GiHamburgerMenu onClick={()=>handle()}/></div>
        <Nav class={show ? 'hidden' : 'nav'}/>
      <Dashboard/>
    </div>
  )
}

export default Hero
