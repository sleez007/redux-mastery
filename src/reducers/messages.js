import { getMessages } from '../data/static-data';

export default (state = getMessages(10) , action)=>{
    switch(action.type){
        default:
            return state;
    }
}