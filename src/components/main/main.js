import React from "react";
import styles from "./main.module.css";
import Empty from '../empty/empty';
import ChatWindow from '../../containers/chatWindow/chatWindow';

const Main = ({user,activeUserId}) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
      return <ChatWindow activeUserId={activeUserId} />;
    }
  };
return <main className={styles.Main}>{renderMainContent()}</main>;
};

export default Main;