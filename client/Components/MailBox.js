import React, {Component} from 'react';
import axios from 'axios';

class MailBox extends Component {
  constructor() {
    super();
    this.state = {
      mails: []
    };
  }

  async componentDidMount() {
    console.log(this.props.folder);
    if (this.props.folder) {
      const response = await axios.get(`/api/folders/${this.props.folder}`);
      this.setState({
        mails: response.data.mails
      });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.folder !== this.props.folder) {
      const response = await axios.get(`/api/folders/${this.props.folder}`);
      this.setState({
        mails: response.data.mails
      });
    }
  }

  render() {
    return (
      <div className="mailbox">
        {
          this.props.folder && this.state.mails.length ? 
          this.state.mails.map(mail => (
            <div className='mail-summary' key={mail.id}>
              <p>{mail.subject}</p>
              <p>{mail.content}</p>
            </div>
          )) :
          !this.props.folder ? <p>Select a folder to view mails</p> : <p>This folder is currently empty</p>
        }
      </div>
    )
  }
}

export default MailBox