import React, {  useRef, useState } from 'react'
import Editor from '@monaco-editor/react'
import OutputBox from './outputbox'
import { LANGUAGE_VERSIONS } from './constants'


const CodeEditor = () => {
  
    const [value,setValue]=useState('')
    const editorRef= useRef()
    const onMount=(editor)=>{ 
        editorRef.current=editor
        editor.focus();
    }
    const [language,setLanguage]=useState('javascript')
   
  
 
    const onSelect1 =()=>{
      setLanguage("javascript")
      setValue("//enter your javascript code here")
      
    };
  
    const onSelect2 =()=>{
      setLanguage("python")
      setValue("#enter python code here")
    };
    const onSelect3 =()=>{
      setLanguage("typescript")
      setValue("//enter typescript code here")
    };
    const languages=Object.entries(LANGUAGE_VERSIONS)
    const lan=Object.values(languages)
  return (
    <div  className=' flex flex-col gap-1 '>
       <div className='w-10 flex flex-row gap-1' >
      <div className='border-gray-900 border-2 rounded-md pt-0 pb-0 p-1  dark:bg-black bg-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white' onClick={onSelect1}>
        {lan[0][0]}
      </div>
      <div  className='border-gray-900 border-2 rounded-md pt-0 pb-0 p-1  dark:bg-black bg-white hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white ' onClick={onSelect2} color={lan[1][0]==="python"?"white":"black"}>{lan[1][0]}</div>
      <div  className='border-gray-900 border-2 rounded-md pt-0 pb-0 p-1  dark:bg-black bg-white  hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white'onClick={onSelect3}>{lan[2][0]}</div>
    </div>
      <div className='h-72 w-96'>
      <Editor height="100%" width="100%" language={language}     defaultValue="//start here" 
       onMount={onMount}
       value={value} 
       theme='vs-dark'
       onChange={(value)=>{setValue(value)}} /></div>
       <div>
        <OutputBox editorRef={editorRef} language={language} />
       </div>
    </div>
  )
}

export default CodeEditor
