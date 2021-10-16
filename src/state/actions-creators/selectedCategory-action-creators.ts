import { ActionsSelectedT } from "../reducers/selectedCategoryReducer";
import { Actions } from "../actions"; 
import { Dispatch } from "react";

export const selectCategory = (category : string) => {
    return (dispatch : Dispatch<ActionsSelectedT>) => {
        dispatch({
            type: Actions.SELECT_CATEGORY,
            payload : category
        })
    }
}