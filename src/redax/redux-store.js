import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
import contentPageReducer from './contentPage-reducer'
import messagePageReducer from './messagePage-reducer'
import bestFriendsReducer from './bestFriends-reducer'
import userPageReducer from './users-reducer'
import newsPageReducer from './news-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';


let reducers = combineReducers({
    contentPage:contentPageReducer,
    messagesPage:messagePageReducer,
    bestFriends:bestFriendsReducer,
    usersPage:userPageReducer,
    newsPage:newsPageReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

/* let store = createStore(reducers, applyMiddleware(thunkMiddleware)); */

window.store = store

export default store;