import { Actions } from "../actions";


export type ActionsSelectedT = {
    type : string,
    payload: string
}

const selectedCategoryReducer = (state : string = 'all', action : ActionsSelectedT ) =>{
    switch(action.type){
        case Actions.SELECT_CATEGORY : 
            return action.payload
        default : return state
    }
}

export default selectedCategoryReducer;
