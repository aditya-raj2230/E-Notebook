import React, { useEffect, useState } from 'react'

const Darkbutton = () => {
const [theme,setTheme]= useState(null)

//to check browser mode and then render accordingly

useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }
},[])

useEffect(()=>{
if(theme==="dark"){
    document.documentElement.classList.add("dark");
}else{
    document.documentElement.classList.remove("dark")
}
},[theme]);

   function darkbtn(){
    setTheme(theme==="dark"?"light":"dark")
    }
  return (
    <div >
      <button className='bg-black p-0 m-2 w-14 border-2 border-white rounded-xl text-white dark:bg-white dark:text-black dark:border-white' onClick={darkbtn}>Dark Mode</button>
    </div>
  )
}

export default Darkbutton
