import { Actions } from "../actions"

export type CategoriesActionT = {
    type : string;
    payload : string
}


const categoriesReducer = (state : string[] = [], action : CategoriesActionT) => {
    switch(action.type){
        case Actions.ADD_CATEGORY : 
            return [...state, action.payload]
        case Actions.REMOVE_CATEGORY : 
            return state.filter((category) => category !== action.payload)
        default : return state
    }
}

export default categoriesReducer;