import React, { useState ,useEffect} from 'react'
import { useNotebookContext } from '../hooks/useNotebookContext'
import pageBtnImg from '../pages/images/pageBtnImg.png'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'


const Leftpanel = () => {
  const [expand,setExpand]=useState(false)
  const [error,setError]=useState()

  const [name,setName]=useState('')

  const {notebooks,dispatch}=useNotebookContext()

  const [ profile,setProfile]=useState(false);
  const {user}=useAuthContext()
  const {logout}=useLogout()

const handleClick=()=>{
  logout()
}


  
  useEffect(()=>{
    const fetchNotebook=async()=>{
    const response = await fetch('/api/notebook')
    const json= await response.json()
    

    if(response.ok){
        dispatch({type:'SET_NOTEBOOK',payload:json })  }
    }
    fetchNotebook()
  },[dispatch])

 
  
  const ondeletehandle=async()=>{
    setExpand((curr)=>!curr)
    const response=await fetch('/api/notebook/'+notebooks._id,{
      method:'DELETE'
      
    })
    const json =await response.json()

    if(response.ok ){
      dispatch({type:'DELETE_NOTEBOOK',payload:json})
      console.log(notebooks)
    }
    if(!response.ok){
      console.log("error")
    }
  }





  const handlebtnChange=async(e)=>{
    setExpand((curr)=>!curr)
    e.preventDefault()

    const notebook = {name}
    const response = await fetch('api/notebook',{
      method:'POST',
      body:JSON.stringify(notebook),
      headers:{
        'Content-type':'application/json'
      }
    })
    const json = await response.json()
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      setName('')
      dispatch({type:'CREATE_NOTEBOOK',payload:json})
      console.log('new notebook added',json)
    }
  }

  const profilehandle =()=>{
    setProfile((curr)=>!curr)
  }


  return (
    <div className={`h-screen w-20 m-4 flex flex-col bg-black ${expand?"w-96":"w-20"} ${profile?"w-96 border-2 border-white" :"w-20 " } `} >
      <div className={`${expand?"h-screen" &&"w-40":"h-20"} flex `}>
        {expand?<h2 className='text-yellow-700 m-2 mt-6 text-3xl font-mono text-yel'>CODEMATE</h2>:""}
      <button onClick={()=>setExpand((curr)=>!curr)}>{expand?<div className='text-white'>
        <h2 className='text-white align m-0 pb-14 h-2 bg-yellow hover:text-yellow-700 text-6xl'>&lt;</h2> 
        <br />




        <div className='flex flex-row fixed top-70 left-2'>
          <input type="text" className='text-black border-2 w-40 border-black'placeholder='add notebook' id="" onClick={()=>setExpand((curr)=>!curr)} onChange={(e)=>setName(e.target.value)} value={name}/>
          <submit  onClick={handlebtnChange} className='border-2 h-6 m-1 border-white '>+
          </submit>
          </div>


          


          <div className='fixed top-32 m-2 left-3 flex flex-col text-white'>
            {notebooks && notebooks.map((notebook)=>(
              <p  className ='flex flex-row justify-between' key={notebook._id}>{notebook.name}<span onClick={ondeletehandle} className='ml-10 hover:bg-white hover:text-black'>X</span></p>
            ))}
          </div>





          </div>:
          <img src={pageBtnImg}  alt=""  className={``} />}
          </button>
      </div>

     {!user && ( 
     <div>
      {expand?  
   <div className='text-white fixed bottom-10 '>
   
   <Link to="/login"><button className={`m-5 border-2 border-white rounded-lg p-2`}>Login</button></Link>
   <Link to="/signup"><button className={` border-2 border-white rounded-lg p-2`}>Signup</button></Link>
   </div>:""}</div>)}

  {user &&(  <div className='text-white'>
    <span className='fixed bottom-16' >{user.email}</span>
    <button className='fixed bottom-6 border-2 text-white border-white hover:bg-white hover:text-black rounded-3xl p-2 pt-0 pb-0' onClick={handleClick}>Logout</button>
   </div>)}
    </div>
  )
}

export default Leftpanel
