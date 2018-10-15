import React, {Component} from 'react';
import axios from 'axios';

class InputFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.title
    }
    this.handleChange = this.handleChange.bind(this);
    this.createFolder = this.createFolder.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('title-input');
    input.addEventListener('keyup', event => {
      if (event.which == 13) {
        input.blur();
      }
    })
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  async createFolder(event) {
    const parent = event.target.parentElement;
    const folderName = document.createTextNode(this.state.name);
    event.target.remove();
    parent.append(folderName);
    let response = await axios.post('/api/folders', {name: this.state.name})
    this.setState({name: ''});
    this.props.addedFolder();
  }

  render() {
    return (
      <div className="folder-name">
        <input id="title-input"
          value={this.state.name}
          onChange={this.handleChange}
          onBlur={this.createFolder}
          autoFocus
        />
      </div>
    )
  }
}

export default InputFolder