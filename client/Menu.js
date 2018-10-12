import React, {Component} from 'react'
import DefaultFolder from './DefaultFolder'
import Folders from './Folders'

const Menu = () =>  {
  return (
    <div id="menu">
      <div className="default-folders">
        <DefaultFolder title={'Inbox'}/>
        <DefaultFolder title={'VIP'}/>
        <DefaultFolder title={'Drafts'}/>
        <DefaultFolder title={'Sent'}/>
        <DefaultFolder title={'Archive'}/>
        <DefaultFolder title={'Trash'}/>
        <DefaultFolder title={'Junk'}/>
      </div>
      <Folders/>
    </div>
  )
}

export default Menu