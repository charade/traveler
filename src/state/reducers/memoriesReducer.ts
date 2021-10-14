import { Actions } from "../actions";
import { LatLng, Marker } from 'leaflet';
/**
 * @param state obj
 *    canAddMarker : boolean, 
 *    memories : [{ label, coords, marker, pop up msg}],
 */

export interface Memory{
    label : string;
    coords : LatLng;
    marker : Marker,
    message : string
};

type StateType = Memory[] | [];

interface CreateMemories{
    type : string;
    payload :  Memory[] | Memory
}

//a user can dispatch one or more memories by requesting databas for instance
export type MarkerActionType = CreateMemories;

const memoriesReducer = (state : StateType = [], action : MarkerActionType) => {
    switch(action.type){
        case Actions.CREATE_MEMORIES : 
        return [...state, action.payload];
        default : return state;
    } 
}
export default memoriesReducer;