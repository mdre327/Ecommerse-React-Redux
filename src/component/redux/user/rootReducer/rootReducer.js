import { combineReducers } from "redux";
//session
import { sessionReducer } from "redux-react-session";
import prodReducer from '../../product/prodReducer'
const RootReducer = combineReducers({
    session: sessionReducer,
    shop: prodReducer,
})

export default RootReducer