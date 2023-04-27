
import './App.css';
import {Route,Routes} from "react-router-dom"
import Hero from './Routes/Hero';
import Expenses from './Routes/Expenses';
import Incomes from './Routes/Incomes';


function App() {
  return (
 <div style={{background:"#e3f6f5"}}>
 <Routes>
      <Route path="/" element={<Hero/>} />
         <Route path="/Expenses" element={<Expenses/>} />
         <Route path="/Incomes" element={<Incomes/>} />
          {/* <Route path="/Contact" element={<Contact />} />  */}
         </Routes>
    </div>  
   
    
  );
}

export default App;
