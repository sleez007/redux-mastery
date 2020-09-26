import React from 'react';
import styles from './user.module.css';
const user = ({user})=>{
    const { name, profile_pic, status } = user;
    return(
      <div className={styles.User}>
        <img src={profile_pic} alt={name} className={styles.User__pic} />
        <div className={styles.User__details}>
          <p className={styles.User__details_name}>{name}</p>
          <p className={styles.User__details_status}>{status}</p>
        </div>
      </div>
    );
}

export default user;