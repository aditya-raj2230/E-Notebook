import React, { useState ,useEffect} from 'react'

import pageBtnImg from '../pages/images/pageBtnImg.png'
import profileImg from '../pages/images/profileImg.png'

const Leftpanel = () => {
  const [expand,setExpand]=useState(false)
  const [notebooks,setNotebooks]=useState(null)

  
  useEffect(()=>{
    const fetchNotebook=async()=>{
    const response = await fetch('/api/notebook')
    const json= await response.json()

    if(response.ok){
      setNotebooks(json)
    }

    }
    fetchNotebook()
  },[])



  return (
    <div className={`h-screen w-20 m-4 bg-black ${expand?"w-96":"w-20"} `} >
      <div className={`${expand?"h-screen" &&"w-40":"h-20"} flex `}>
        {expand?<h2 className='text-yellow-700 m-2 mt-6 text-3xl font-mono text-yel'>CODEMATE</h2>:""}
      <button onClick={()=>setExpand((curr)=>!curr)}>{expand?<div className='text-white'>
        <h2 className='text-white align m-0 pb-14 h-2 bg-yellow hover:text-yellow-700 text-6xl'>&lt;</h2> 
        <br />
        <div className='flex flex-row fixed top-70 left-2'>
          <input type="text" className='text-black border-2 w-40 border-black'placeholder='add notebook' name="" id="" onClick={()=>setExpand((curr)=>!curr)}/>
          <button onClick={()=>setExpand((curr)=>!curr)} className='border-2 h-6 m-1 border-white '>+
          </button>
          </div>


          


          <div className='fixed top-32 m-2 left-3 flex flex-col text-white'>
            {notebooks && notebooks.map((notebook)=>(
              <p key={notebook._id}>{notebook.name}</p>
            ))}
          </div>





          </div>:
          <img src={pageBtnImg} alt="" className='' />}
          </button>
      </div>
      
      
      <div className='fixed top-3/4'><button className='w-16 m-1 mt-24'><img src={profileImg} alt="" /></button></div>
    </div>
  )
}

export default Leftpanel
