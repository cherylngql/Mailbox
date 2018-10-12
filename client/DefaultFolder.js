import React from 'react'

const DefaultFolder = (props) => {
  return (
    <div className="folder">
      <div className="folder-name">
        {props.title}
      </div>
    </div>
  )
}

export default DefaultFolder