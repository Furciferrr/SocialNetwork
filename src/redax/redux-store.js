import {combineReducers, createStore} from 'redux';
import contentPageReducer from './contentPage-reducer'
import messagePageReducer from './messagePage-reducer'
import bestFriendsReducer from './bestFriends-reducer'
import userPageReducer from './users-reducer'
import newsPageReducer from './news-reducer'

let reducers = combineReducers({
    contentPage:contentPageReducer,
    messagesPage:messagePageReducer,
    bestFriends:bestFriendsReducer,
    usersPage:userPageReducer,
    newsPage:newsPageReducer
});

let store = createStore(reducers);

window.store = store

export default store;