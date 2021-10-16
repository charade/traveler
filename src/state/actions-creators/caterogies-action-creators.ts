import { Dispatch } from "react"; 
import { Actions } from "../actions";
import { CategoriesActionT } from "../reducers/categoriesReducer";

export const addCategory = (arg : string) => {
    return (dispatch : Dispatch<CategoriesActionT>) => {
        dispatch({
            type : Actions.ADD_CATEGORY,
            payload : arg
        })
    }
}

export const removeCategory = (str : string) => {
    return (dispatch : Dispatch<CategoriesActionT>) => {
        dispatch({
            type : Actions.REMOVE_CATEGORY,
            payload : str
        })
    }
}

export const loadCategories = (categories : string[]) => {
    return (dispatch : Dispatch<CategoriesActionT>) => {
        dispatch({
            type : Actions.LOAD_CATEGORIES,
            payload : categories
        })
    }
}