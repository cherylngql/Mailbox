import React from 'react'
import Folder from './Folder'
import Folders from './Folders'

const Menu = () =>  {
  return (
    <div id="menu">
      <div id="default-folders">
        <Folder title={'Inbox'}/>
        <Folder title={'VIP'}/>
        <Folder title={'Drafts'}/>
        <Folder title={'Sent'}/>
        <Folder title={'Archive'}/>
        <Folder title={'Trash'}/>
        <Folder title={'Junk'}/>
      </div>
      <Folders/>
    </div>
  )
}

export default Menu