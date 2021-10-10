import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { requestReducer } from './reducers';

const reducer = combineReducers({ requestStore : requestReducer })

export const store = createStore(reducer, applyMiddleware(thunk));

export type ReducerRootStateType = ReturnType<typeof reducer> ;