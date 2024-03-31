
import React from "react";

import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Signup from "./pages/signup";
import LoggedInpage from "./pages/LoggedInpage";
// import LoggedInpage from "./pages/LoggedInpage";



function App() {
  
  return (
   
    <div className="App h-screen w-screen  bg-black m-0 p-0 ">
       <BrowserRouter>
      
      <Routes>
        <Route path="/login" exact element={<Login/>}>
        </Route>
        <Route path="/signup" exact element={<Signup/>}></Route>
        
      </Routes>
     
      <LoggedInpage/>

      </BrowserRouter>
      
     {/* <LoggedInpage/> */}
    
    </div>
  );
}

export default App;
