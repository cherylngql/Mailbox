import React from 'react'
import Toolbar from './Toolbar'
import Menu from './Menu'
import MailBox from './MailBox'
import Mail from './Mail'

const App = () => {
  return (
    <div>
      <Toolbar/>
      <div id="three-panel">
        <Menu/>
        <MailBox/>
        <Mail/>
      </div>
    </div>
  )
}

export default App