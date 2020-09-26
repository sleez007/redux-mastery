import { createStore } from 'redux';

import reducer from '../reducers';
//import { contacts} from '../data/static-data';

// const store = createStore(reducer, {contacts});
const store = createStore(reducer);

export default store;
