import React, { useRef, useState } from 'react'
import HTMLReactParser from 'html-react-parser'
import JoditEditor from 'jodit-react';
const Textbox = () => {
    const [content,setContent]=useState('')
    const editor=useRef(null)


  return (
    <div>
      <JoditEditor ref={editor} value={content} onChange={newContent=>setContent(newContent)}/>
      {/* <div>{HTMLReactParser(content)}</div> */}
      <div>{HTMLReactParser(content)}</div>
    </div>
  )
}

export default Textbox
