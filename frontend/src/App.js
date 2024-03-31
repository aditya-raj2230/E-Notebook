
import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";

import {Routes,Route, BrowserRouter,Navigate} from 'react-router-dom'
import Login from './pages/Login'
import Signup from "./pages/signup";
import LoggedInpage from "./pages/LoggedInpage";
// import LoggedInpage from "./pages/LoggedInpage";



function App() {
  const {user}=useAuthContext()
  return (
   
    <div className="App h-screen w-screen  bg-black m-0 p-0 ">
       <BrowserRouter>
       
      <Routes>
        <Route path="/login" exact element={!user?<Login/>:<Navigate to = '/'/>}>
        </Route>
        <Route path="/signup" exact element={!user?<Signup/>:<Navigate to ='/'/>}></Route>
        <Route path='/' exact element={user?<LoggedInpage/>:<Navigate to='/login'/>}></Route>
        
      </Routes>
     
    

      </BrowserRouter>
      
     {/* <LoggedInpage/> */}
    
    </div>
  );
}

export default App;
