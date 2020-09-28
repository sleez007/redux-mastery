import React from "react";
import store from "../../store";
import { setTypingValue } from "../../actions";
import styles from  "./messageInput.module.css";
import { sendMessage } from '../../actions';

const MessageInput = ({ value }) => {

  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  const state = store.getState();  
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = state;
    store.dispatch(sendMessage(typing, activeUserId));
  };

  return (
    <form className={styles.Message} onSubmit={handleSubmit}>
      <input
        className={styles.Message__input}
        onChange={handleChange}
        value={value}
        placeholder="write a message"
      />
    </form>
  );
};

export default MessageInput;