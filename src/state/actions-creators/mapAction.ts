import { Actions } from "../actions";
import { Dispatch } from "react";
import { ActionType } from "../reducers/mapReducer";

export const mapFlyTo = (args : [number, number]) => {
    return (dispatch : Dispatch<ActionType>) =>{
        dispatch({
            type : Actions.FLY_TO_COORD,
            payload : args
        })
    }
}