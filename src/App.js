import React from "react";

import { Link } from "react-router-dom";
import Display from "./Display";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from "./Login";
const App=()=>
{
 
  
  return(
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route  path="/Display"  element={<Display/>}/>
        </Routes>
      
        
       
        
      
      </BrowserRouter>
      
    </div>
  )
}
export default App;
