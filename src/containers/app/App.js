import React from 'react';
import _ from 'lodash';

import './App.css';
import store from '../../store';


import Sidebar from '../../components/sidebar/sidebar';
import Main from '../../components/main/main';


function App() {
 // console.log(store.getState().contacts)
  const { contacts } = store.getState();
  return (
    <div className="App">
      <Sidebar contacts={ _.values(contacts)} />
      <Main/>
    </div>
  );
}

export default App;
