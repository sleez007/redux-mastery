import React from "react";
import _ from 'lodash';

import store from '../../store'
import Header from '../../components/header/header';
import Chat from '../chat/chat';
import styles from './chatWindow.module.css';
import MessageInput from "../messageInput/messageInput";

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const { typing } = state;
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
  return (
    <div className={styles.ChatWindow}>
        <Header user={activeUser}/>
        <Chat messages={_.values(activeMsgs)} />
        <MessageInput  value={typing}/>
    </div>
  );
};

export default ChatWindow; 