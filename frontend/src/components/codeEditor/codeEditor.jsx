import React, { useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import Languageselector from './Languageselector'

const CodeEditor = () => {
    const [value,setValue]=useState('')
    const editorRef= useRef()
    const onMount=(editor)=>{
        editorRef.current=editor
        editor.focus();
    }

  return (
    <div className=' flex flex-col'>
      <Languageselector/>
      <Editor height="50vh" width="50vw" defaultLanguage="javascript"
       defaultValue="//some comment" 
       onMount={onMount}
       value={value} 
       theme='vs-dark'
       onChange={(value)=>{setValue(value)}}
       className='fixed top-20 left-10 right-10'/>
    </div>
  )
}

export default CodeEditor
