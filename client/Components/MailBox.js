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

  getSender(senderEmail) {
    const sender = senderEmail.slice(0, senderEmail.indexOf('@'));
    return sender[0].toUpperCase() + sender.slice(1);
  }

  getDate(time) {
    return time.slice(0, time.indexOf('T'));
  }

  render() {
    return (
      <div className="mailbox">
        {
          this.props.folder && this.state.mails.length ? 
          this.state.mails.map(mail => (
            <div className="single-mail" key={mail.id}>
              <div className="left-mail"></div>
              <div className="right-mail">
                <div className="sender">{this.getSender(mail.sender)}<span className="date">{this.getDate(mail.createdAt)}</span></div>
                <div className="subject">{mail.subject}</div>
                <div className="summary">{mail.content}</div>
              </div>
            </div>
          )) :
          !this.props.folder ? <div className="message">Select a folder to view mails</div> : <div className="message">This folder is currently empty</div>
        }
      </div>
    )
  }
}

export default MailBox