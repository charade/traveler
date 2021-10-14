import { Actions } from "../actions";
import { ResponseType } from '../../services/ResponseTypes';

export type StateT = {
    datas : ResponseType | null;
    error : ResponseType | null;
};
export type ActionResponseType = {
    type: string,
    payload : ResponseType 
};
/**
 * either requesting by label or by coords datas format are the same
 * we need to make a difference between datas from computed request
 * and from reverse coords request
 * so we add a type key
 */
const INITIAL_STATE = {error : null, datas : []};

export const requestReducer = (state: StateT = INITIAL_STATE, action: ActionResponseType ) =>{
    switch(action.type){
        case Actions.COMPUTE_REQUEST :
            return {error : null, datas: action.payload};
            case Actions.COORDS_TO_LABEL: 
            return {error : null, datas: action.payload};
        case Actions.REQUEST_ERROR : 
            return {datas : null, error: action.payload};
        default : return state;
    }
}
