import React from 'react'
import {connect} from 'react-redux';
import Toolbar from './Toolbar'
import Menu from './Menu'
import MailBox from './MailBox'
import Mail from './Mail'

const App = (props) => {
  return (
    <div>
      <Toolbar/>
      <div id="three-panel">
        <Menu/>
        <MailBox folder={props.folder}/>
        <Mail/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  folder: state.selectedFolder
});

export default connect(mapStateToProps)(App)