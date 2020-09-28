import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import './App.css';


import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';


function App(props) {
  const { contacts, user,activeUserId } = props;
  return (
    <div className="App">
      <Sidebar contacts={ _.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    contacts : state.contacts,
    user  : state.user,
    activeUserId : state.activeUserId
  }
}

export default connect(mapStateToProps,null)(App) ;
