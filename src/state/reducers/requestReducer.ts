import { Actions } from "../actions";
import { ResponseType } from '../../services/ResponseTypes';

export type StateT = {
    datas : ResponseType | null;
    error : ResponseType | null
};
export type ActionResponseType = {
    type: string,
    payload : ResponseType 
};
const INITIAL_STATE = {error : null, datas : []};

const requestReducer = (state: StateT = INITIAL_STATE, action: ActionResponseType ) =>{
    switch(action.type){
        case Actions.COMPUTE_REQUEST : 
            return {error : null, datas: action.payload};
        case Actions.REQUEST_ERROR : 
            return {datas : null, error: action.payload};
        default : return state;
    }
}

export default requestReducer;