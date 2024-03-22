import React from 'react'
import Darkbutton from './Darkbutton'
import codeBtnImg from '../pages/images/codeBtnImg.png'
import pageBtnImg from '../pages/images/pageBtnImg.png'
import profileImg from '../pages/images/profileImg.png'
const Leftpanel = () => {
  return (
    <div className='h-screen w-20 bg-black flex flex-col ' >
      <button className='w-14 m-2'><img src={pageBtnImg} alt="" className='' /></button>
      <Darkbutton />
      <button className='w-16 '><img src={codeBtnImg}  alt="btn img" className='m-1'/></button>
      <div className='fixed top-3/4'><button className='w-16 m-1 mt-24'><img src={profileImg} alt="" /></button></div>
    </div>
  )
}

export default Leftpanel
