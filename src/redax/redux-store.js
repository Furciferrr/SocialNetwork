import {applyMiddleware, combineReducers, createStore} from 'redux';
import contentPageReducer from './contentPage-reducer'
import messagePageReducer from './messagePage-reducer'
import bestFriendsReducer from './bestFriends-reducer'
import userPageReducer from './users-reducer'
import newsPageReducer from './news-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    contentPage:contentPageReducer,
    messagesPage:messagePageReducer,
    bestFriends:bestFriendsReducer,
    usersPage:userPageReducer,
    newsPage:newsPageReducer,
    auth:authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;