import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { requestReducer, mapReducer } from './reducers/index';

const reducer = combineReducers({ 
        requestStore : requestReducer,
        mapStore : mapReducer,
    })
    
export const store = createStore(reducer, applyMiddleware(thunk));
//export reducer type to acces properties linked to it
export type ReducerRootStateType = ReturnType<typeof reducer> ;