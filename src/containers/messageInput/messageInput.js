import React from "react";
import { connect } from 'react-redux';
import { setTypingValue , sendMessage} from "../../actions";
import styles from  "./messageInput.module.css";

const MessageInput = (props) => {

  const handleChange = e => {
    props.setTypingValue(e.target.value);
  };
 
  const handleSubmit = e => {
    e.preventDefault();
    const { typing, activeUserId } = props;
    props.sendMessage(typing, activeUserId);
  };

  return (
    <form className={styles.Message} onSubmit={handleSubmit}>
      <input
        className={styles.Message__input}
        onChange={handleChange}
        value={props.value}
        placeholder="write a message"
      />
    </form>
  );
};

const mapStateToProps = (state) =>{
    return {
        typing : state.typing,
        activeUserId : state.activeUserId
    }
}

export default connect(mapStateToProps,{setTypingValue , sendMessage})(MessageInput) ; 