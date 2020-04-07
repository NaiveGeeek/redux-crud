import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user_state from '../reducer/userReduser';
const store = createStore(user_state,applyMiddleware(thunk));

export default store;
