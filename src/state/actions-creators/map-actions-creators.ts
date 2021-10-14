import { Actions } from "../actions";
import { Dispatch } from "react";
import { ActionType, StateType } from "../reducers/mapReducer";

export const mapFlyTo = (args: StateType) => {
    return (dispatch : Dispatch<ActionType>) =>{
        dispatch({
            type : Actions.FLY_TO_COORD,
            payload : args
        })
    }
}