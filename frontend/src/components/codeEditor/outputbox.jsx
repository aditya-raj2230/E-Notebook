import React, { useState } from 'react'
import { executeCode } from './api';

const OutputBox = ({editorRef,language}) => {
    const [output,setOutput]=useState(null)
    const runCode = async()=>{
        const sourceCode=editorRef.current.getValue();
        if(!sourceCode)return;
        try{
            const{run:result}=await executeCode(language,sourceCode)
            setOutput(result.output)
        }catch(error){
          console.log(error)
        }}
    
  return (
    <div className='flex flex-col gap-2' >
       
      <button className='bg-green-600 text-white w-28' onClick={runCode}>Run Code</button>
      <div className='bg w-96 h-72 text-white p-3 bg-gray-900'>
        {
            output?output:'click "run code" to see the out put here'
        }
      </div>
    </div>
  )
}

export default OutputBox
