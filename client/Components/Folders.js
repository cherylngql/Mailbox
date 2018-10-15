import React, {Component} from 'react'
import Folder from './Folder'
import axios from 'axios'

class Folders extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      children: [],
      addingFolder: false
    }
    this.addFolder = this.addFolder.bind(this);
    this.addedFolder = this.addedFolder.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get('/api/folders');
    this.setState({
      children: response.data.slice(7),
      id: response.data.length - 7 + 1
    });
  }

  addFolder() {
    this.setState(
      {
        addingFolder: true
      }
    );
  }

  async addedFolder() {
    const response = await axios.get('/api/folders');
    this.setState({
      children: response.data.slice(7),
      id: response.data.length - 7 + 1,
      addingFolder: false
    });
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
          <Folder key={child.id} title={child.name}/>
          )}
          {
            this.state.addingFolder ? 
            <Folder key={`Folder ${this.state.id}`} title={`Folder ${this.state.id}`} addedFolder={this.addedFolder}/> : 
            null
            }
        </div>
      </div>
    )
  }
} 

export default Folders