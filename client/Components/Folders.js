import React, {Component} from 'react'
import Folder from './Folder'

class Folders extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      children: []
    }
    this.addFolder = this.addFolder.bind(this)
  }

  addFolder() {
    this.setState(
      {
        id: this.state.id + 1,
        children: [...this.state.children, `Folder ${this.state.id}`]
      }
    );
    console.log('clicked')
  }

  render() {
    return (
      <div className="named-folders">
        <div className="folder main">
          <div className="add-folder">Folders</div>
          <button type="button" className="add-menu" onClick={this.addFolder}>
            +
          </button>
        </div>
        <div className="named-folder-list">
          {this.state.children.map(child => 
          <Folder key={child} title={child}/>
          )}
        </div>
      </div>
    )
  }
} 

export default Folders