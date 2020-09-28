import React from "react";
import _ from 'lodash';
import { connect } from 'react-redux';

import Header from '../../components/header/header';
import Chat from '../chat/chat';
import styles from './chatWindow.module.css';
import MessageInput from "../messageInput/messageInput";

const ChatWindow = (props) => {
    const  { activeUserId, typing, contacts, messages } = props;
    const activeUser = contacts[activeUserId];
    const activeMsgs = messages[activeUserId];
  return (
    <div className={styles.ChatWindow}>
        <Header user={activeUser}/>
        <Chat messages={_.values(activeMsgs)} />
        <MessageInput  value={typing}/>
    </div>
  );
};

const mapStateToProps = (state) =>{
    return {
        typing : state.typing,
        contacts : state.contacts,
        messages : state.messages
    }
}

export default connect(mapStateToProps,null)(ChatWindow) ; 