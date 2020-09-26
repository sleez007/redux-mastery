import React from 'react';
import styles from './sidebar.module.css';

import User from '../../containers/user/user';

const Sidebar = ({contacts})=>{
    return <aside className={styles.Sidebar}>
        {contacts.map(contact=><User user={contact} key={contact.user_id} />)}
    </aside>;
}

export default Sidebar;