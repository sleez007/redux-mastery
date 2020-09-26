import React from 'react';
import styles from './empty.module.css';

export default ({user})=>{
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0];
    return (
        <div className={styles.Empty}>
            <h1 className={styles.Empty__name}>Welcome, {first_name} </h1>
            <img src={profile_pic} alt={name} className={styles.Empty__img} />
            <p className={styles.Empty__status}>
                <b>Status:</b> {status}
            </p>
            <button className={styles.Empty__btn}>Start a conversation</button>
            <p className={styles.Empty__info}>
                Search for someone to start chatting with or go to Contacts to see who
                is available
            </p>
        </div>
    )
}