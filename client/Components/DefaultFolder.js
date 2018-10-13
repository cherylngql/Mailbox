import React, {Component} from 'react'
import store, {selectFolder} from '../store'

class DefaultFolder extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, folder) {
    const selectedFolder = document.getElementById('default-folders').querySelector('.selected');
    if (selectedFolder) {
      selectedFolder.classList.remove('selected');
    }
    store.dispatch(selectFolder(folder));
    if (event.target.classList.contains('folder')) {
      event.target.classList.add('selected');
    } else {
      event.target.parentElement.classList.add('selected');
    }
  }

  render() {
    return (
      <div className="folder" onClick={(event) => this.handleClick(event, this.props.title)}>
        <div className="folder-name">
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default DefaultFolder