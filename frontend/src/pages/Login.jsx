import React,{useState} from 'react'
import Loginrightimage from '../pages/images/Loginrightimage-removebg-preview.png'
import textimage from '../pages/images/logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const {login}=useLogin()

  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await login(email,password)
  }

  return (
    <div className="bg-gradient-to-r from-black via-gray-700 to-gray-400 grid place-content-center min-h-screen h-screen" >
      <div className="flex flex-row gap-20 bg-gradient-to-l from-black via-gray-900 to-gray-400 border-1 border-gray-900 rounded-3xl p-12 shadow-2xl" >
        <div className='left font-mono text-white text-xl'>
            <div className=' mb-16'>
            <div className='text-7xl font-mono font-extrabold' >Login</div>
            <div >Doesn't have an account yet?<Link to='/signup' className="">Sign Up</Link></div>
            </div>
            <label>
            <div className='mb-5 font-bold'>
                <div>Email Address</div>
                <input type="email" className='rounded-xl font-mono text-gray-900 p-0.5' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div></label>
            <div className='mb-5 '>
              <label>
                <div className='font-bold'>Password</div>
                <input type="password"  className='rounded-xl font-mono text-gray-900 p-0.5'onChange={(e)=>setpassword(e.target.value)} value={password}/>
                </label>
                <div className="forgetpassword text-sm">Forgot Password?</div>
            </div>
            <div className="rememberme"><input type="checkbox"/>Remember me</div>
            <div className="loginbtn"><button className='bg-white text-gray-900 hover:bg-gray-900 hover:text-white pr-2 pl-2 rounded-2xl' onClick={handleSubmit} >LOGIN</button></div>
        </div>
        <div className='right'>
            <img src={Loginrightimage} alt="" className="max-h-96" />
            <img src={textimage} alt="" className='m-o ml-3 mb-2'/>
        </div>
      </div>
    </div>
  )
}

export default Login
