
import React from "react";
// import Home from './pages/Home'
// import {Routes,Route, BrowserRouter} from 'react-router-dom'
// import Login from './pages/Login'
// import Signup from "./pages/signup";
import LoggedInpage from "./pages/LoggedInpage";



function App() {
  
  return (
   
    <div className="App h-screen w-screen bg-white dark:bg-black m-0 p-0 ">
       {/* <BrowserRouter>
      
      <Routes>
        <Route path="/login" exact element={<Login/>}>
          Login
        </Route>
        <Route path="/signup" exact element={<Signup/>}>Signup</Route>
        <Route path="/" exact element={<Home/>}></Route>
      </Routes>
     

      </BrowserRouter> */}
     <LoggedInpage/>
    </div>
  );
}

export default App;
