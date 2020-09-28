import React from 'react';
import { connect } from 'react-redux';

import styles from './user.module.css';

import { setActiveUserId } from '../../actions';

const user = (props)=>{
  console.log(props);
    const { name, profile_pic, status } = props.user;
    
    return(
      <div className={styles.User} onClick={handleUserClick.bind(null, props)}>
        <img src={profile_pic} alt={name} className={styles.User__pic} />
        <div className={styles.User__details}>
          <p className={styles.User__details_name}>{name}</p>
          <p className={styles.User__details_status}>{status}</p>
        </div>
      </div>
    );
}

function handleUserClick(props) {
  props.setActiveUserId(props.user.user_id);
} 

export default connect(null,{setActiveUserId})(user) ; 