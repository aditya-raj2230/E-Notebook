import React, { useRef, useState } from 'react'
// import HTMLReactParser from 'html-react-parser'
import JoditEditor  from 'jodit-react';
const Textbox = () => {
    const [content,setContent]=useState('')
    const editor=useRef(null)

    const config={
      height:"42rem",
      width:"58rem"
    
    }

  return (
    <div className='mt-5 ml-3 mr-0 w-screen h-screen'>
      <JoditEditor config={config}  ref={editor} value={content} onBlur={newContent=>setContent(newContent)} />
     
     
    </div>
  )
}

export default Textbox
