import React from 'react'
import Leftpanel from "../components/Leftpanel";
import Textbox from '../components/Textbox';
import CodeEditor from '../components/codeEditor/codeEditor';

const LoggedInpage = () => {
  return (
    <div className='flex flex-row h-screen w-screen m-0 p-0'>
      <Leftpanel/>
      <Textbox />
      <div className='m-5 mb-0 p-0'>
      <CodeEditor/>
      </div>
    </div>
  )
}

export default LoggedInpage
