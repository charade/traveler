import { Actions } from "../actions";
import { ResponseType } from '../../services/ResponseTypes';
export type StateT = {
    datas : ResponseType | null;
    error : ResponseType | null;
    type : string
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
export enum RequestedStateType{
    COMPUTE = "compute",
    REVERSE = "reverse",
    NULL = ''
}
const INITIAL_STATE = {error : null, datas : [], type : RequestedStateType.NULL};

export const requestReducer = (state: StateT = INITIAL_STATE, action: ActionResponseType ) =>{
    switch(action.type){
        case Actions.COMPUTE_REQUEST :
            return {error : null, datas: action.payload, type : RequestedStateType.COMPUTE};
            case Actions.COORDS_TO_LABEL: 
            return {error : null, datas: action.payload, type : RequestedStateType.REVERSE};
        case Actions.REQUEST_ERROR : 
            return {datas : null, error: action.payload, type : RequestedStateType.NULL};
        default : return state;
    }
}
