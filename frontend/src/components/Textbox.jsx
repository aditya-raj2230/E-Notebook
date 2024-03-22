import React, { useRef, useState } from 'react'
// import HTMLReactParser from 'html-react-parser'
import JoditEditor  from 'jodit-react';
const Textbox = () => {
    const [content,setContent]=useState('')
    const editor=useRef(null)

    const config={
      height:"42rem",
      width:"62rem"
    
    }

  return (
    <div className='m-5 w-screen h-screen'>
      <JoditEditor config={config}  ref={editor} value={content} onBlur={newContent=>setContent(newContent)} />
     
     
    </div>
  )
}

export default Textbox
