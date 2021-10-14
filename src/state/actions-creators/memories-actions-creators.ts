import { Dispatch } from 'react';
import { Actions } from '../actions/index';
import { Memory, ActionsMemoriesT } from '../reducers/memoriesReducer';

export const addMemory = (args : Memory ) => {
    return (dispatch : Dispatch<ActionsMemoriesT>) => {
        dispatch({
            type : Actions.ADD_MEMORY,
            payload : args
        })
    }
}