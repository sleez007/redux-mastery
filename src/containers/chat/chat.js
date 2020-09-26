import React, { Component } from "react";
import styles from  "./chat.module.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`${styles.Chat} ${is_user_msg ? styles['is-user-msg'] : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  render() {
    return (
      <div className={styles.Chats}>
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;