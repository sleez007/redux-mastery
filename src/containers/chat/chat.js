import React, { Component } from "react";
import styles from  "./chat.module.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`${styles.Chat} ${is_user_msg ? styles['is-user-msg'] : ""}`}>{text}</span>
  );
};

class Chats extends Component {
    constructor(props){
        super(props);
        this.chatsRef = React.createRef();
    }
  render() {
    return (
      <div className={styles.Chats} ref={this.chatsRef}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }

  scrollToBottom = () => {
    this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
  };

  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

}

export default Chats;