import { Dispatch } from "react";
import { MarkerActionType, Memory } from '../reducers/memoriesReducer';
import { Actions } from "../actions";

//user can dispacth one or more memories by requesting db for instance
export const createMemories = (args : Memory | Memory[] ) => {
    return(dispatch: Dispatch<MarkerActionType>) => {
        dispatch({
            type: Actions.CREATE_MEMORIES,
            payload : args
        })
    }
}