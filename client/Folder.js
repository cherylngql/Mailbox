import React, {Component} from 'react'

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.title
    }
    this.handleChange = this.handleChange.bind(this);
    this.setName = this.setName.bind(this);
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

  setName(event) {
    const parent = event.target.parentElement;
    const folderName = document.createTextNode(this.state.name);
    event.target.remove();
    parent.append(folderName);
    this.setState({name: ''});
  }

  render() {
    return (
      <div className="folder">
        <div className="folder-name">
          <input id="title-input"
            value={this.state.name}
            onChange={this.handleChange}
            onBlur={this.setName}
            autoFocus
          />
        </div>
      </div>
    )
  }
}

export default Folder