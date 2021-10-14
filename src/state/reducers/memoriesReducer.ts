import { LatLng } from "leaflet";
import { Actions } from "../actions";

export interface Memory{
    //coordinates need to be compatible with position coords type
    //that can be null at start if user denied to give its position coords
    coords : LatLng | null,
    //place label
    label : string,
    //place marker
    marker: string,
    //message for pop up
    comment : string
};

type StateType = Array<Memory> | []

interface ActionsType {
    type : string,
    payload : Memory
};

export type ActionsMemoriesT = ActionsType;

const memoriesReducer = (state : StateType = [], action : ActionsMemoriesT) => {
    switch(action.type){
        case Actions.ADD_MEMORY :
            return [...state, action.payload];
        default : return state;
    }
}

export default memoriesReducer;