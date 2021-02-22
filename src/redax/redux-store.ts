import {applyMiddleware, combineReducers, createStore, compose, Action} from 'redux';
import contentPageReducer from './contentPage-reducer'
import messagePageReducer from './messagePage-reducer'
import bestFriendsReducer from './bestFriends-reducer'
import userPageReducer from './users-reducer'
import newsPageReducer from './news-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './app-reducer';
import settingReducer from './settingPage-reducer';
import { ThunkAction } from 'redux-thunk';


let reducers = combineReducers({
    contentPage:contentPageReducer,
    messagesPage:messagePageReducer,
    bestFriends:bestFriendsReducer,
    usersPage:userPageReducer,
    newsPage:newsPageReducer,
    auth:authReducer,
    form: formReducer,
    app: appReducer,
    setting: settingReducer
});

type RootreducerType = typeof reducers;
export type AppStateType = ReturnType<RootreducerType>

type PropertyTypes<T> = T extends {[key: string]: infer U} ? U : never
export type InferActionsTypes<T extends {[key: string]: (...args: any[])=> any}> = ReturnType<PropertyTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>>= ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

/* let store = createStore(reducers, applyMiddleware(thunkMiddleware)); */
// @ts-ignore
window.store = store

export default store;