import React from 'react';
import styles from './user.module.css';
import store from '../../store';

import { setActiveUserId } from '../../actions';

const user = ({user})=>{
    const { name, profile_pic, status } = user;
    
    return(
      <div className={styles.User} onClick={handleUserClick.bind(null, user)}>
        <img src={profile_pic} alt={name} className={styles.User__pic} />
        <div className={styles.User__details}>
          <p className={styles.User__details_name}>{name}</p>
          <p className={styles.User__details_status}>{status}</p>
        </div>
      </div>
    );
}

function handleUserClick({ user_id }) {
  console.log(user_id)
  store.dispatch(setActiveUserId(user_id));
} 

export default user;