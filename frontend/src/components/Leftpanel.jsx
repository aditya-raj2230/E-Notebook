import React, { useState } from 'react'

import pageBtnImg from '../pages/images/pageBtnImg.png'
import profileImg from '../pages/images/profileImg.png'

const Leftpanel = () => {
  const [expand,setExpand]=useState(false)


  return (
    <div className={`h-screen w-20 m-4 bg-black ${expand?"w-96":"w-20"} `} >
      <div className={`${expand?"h-screen" &&"w-50":"h-20"} flex `}>
        {expand?<h2 className='text-yellow-700 m-2 mt-6 text-3xl font-mono text-yel'>CODEMATE</h2>:""}
      <button onClick={()=>setExpand((curr)=>!curr)}>{expand?<h2 className='text-white align m-0 pb-14 h-2 bg-yellow hover:text-yellow-700 text-6xl'>&lt;</h2>:<img src={pageBtnImg} alt="" className='' />}</button>
      </div>
      
      
      <div className='fixed top-3/4'><button className='w-16 m-1 mt-24'><img src={profileImg} alt="" /></button></div>
    </div>
  )
}

export default Leftpanel
