import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      hello home
      <Link to='/signup' className='text-white'>signup</Link>
      <Link to='/login'className='text-white'>Login</Link>
      <Link to='/home'className='text-white'>HOME</Link>
    </div>
  )
}

export default Home
