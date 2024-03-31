import React,{useState} from 'react'
import Loginrightimage from '../pages/images/Loginrightimage-removebg-preview.png'
import textimage from '../pages/images/logo-removebg-preview.png'
import { useSignup } from '../hooks/useSignup'


const Signup = () => {
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [firstName,setfirstName]=useState('')
  const [lastName,setlastName]=useState('')
  const {signup,error,isLoading}=useSignup()

  const handleSubmit=async(e)=>{
    e.preventDefault()

    await signup(email,password,firstName,lastName)
  }

  return (
    <div className="bg-gradient-to-r from-black via-gray-700 to-gray-400 grid place-content-center min-h-screen h-screen" >
      <div className="flex flex-row gap-20 bg-gradient-to-l from-black via-gray-800 to-gray-400 border-1 border-gray-900 rounded-3xl p-12 shadow-2xl" >
        <div className='left font-mono text-white text-xl'>
            <div className=' mb-16'>
            <div className='text-7xl font-mono font-extrabold' >Register</div>
            <div >As new user</div>
            </div>
            <label>
            <div className='mb-5 font-bold'>
                <div>First Name</div>
                <input type="text" className='rounded-xl font-mono text-gray-900 p-0.5' onChange={(e)=>setfirstName(e.target.value)} value={firstName}/>
            </div></label>
            <label>
            <div className='mb-5 font-bold'>
                <div>Last Name</div>
                <input type="text" className='rounded-xl font-mono text-gray-900 p-0.5'onChange={(e)=>setlastName(e.target.value)} value={lastName} />
            </div></label>
            <label>
            <div className='mb-5 font-bold'>
                <div>Email Address</div>
                <input type="email" className='rounded-xl font-mono text-gray-900 p-0.5' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div></label>
            <div className='mb-5 '>
              <label>
                <div className='font-bold'>Password</div>
                <input type="password"  className='rounded-xl font-mono text-gray-900 p-0.5'onChange={(e)=>setpassword(e.target.value)} value={password}/>
                </label>
            </div>
            <div className="loginbtn"><button  disabled={isLoading} className='bg-white text-gray-900 hover:bg-gray-900 hover:text-white pr-2 pl-2 rounded-2xl' onClick={handleSubmit}>Sign Up</button></div>
            {error && <div className='error'>{error}</div>}
        </div>
        <div className='right'>
            <img src={Loginrightimage} alt="" className="max-h-96" />
            <img src={textimage} alt="" className='m-o ml-3 mb-2'/>
        </div>
      </div>
    </div>
  )
}

export default Signup

