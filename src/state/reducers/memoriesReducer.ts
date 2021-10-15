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

type StateType = Array<Memory> 

interface AddMemory {
    type : string,
    payload : Memory  
};
interface LoadMemories{
    type :string;
    payload : Memory[]
}
export type ActionsMemoriesT = AddMemory | LoadMemories ;

const memoriesReducer = (state : StateType = [] as Memory[], action : ActionsMemoriesT) => {
    switch(action.type){
        case Actions.ADD_MEMORY :
            return [...state, action.payload];
        case Actions.LOAD_MEMORIES :
            return state.concat(action.payload as Memory[])
        default : return state;
    }
}

export default memoriesReducer;