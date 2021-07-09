import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import RootReducer from './user/rootReducer/rootReducer';
import  {sessionService} from 'redux-react-session';


const initialstate = {};
const middleware =[thunk];
const store = createStore(RootReducer,initialstate,compose(applyMiddleware(...middleware),composeWithDevTools()))

sessionService.initSessionService(store);


export default store;