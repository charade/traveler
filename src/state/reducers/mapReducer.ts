import { Actions } from "../actions"
import { LatLng } from 'leaflet';

//defining poition by coordinates and place label
export type StateType = {
    coords : LatLng | null,
    label : string
}

//action.payload is of type [latitude, longitude]
export type ActionType = {
    type : string,
    payload : StateType
};

const DEFAULT_POSITION_ON_PARIS = {
    coords : null,
    label : ''
}

const updateMapReducer = (state : StateType = DEFAULT_POSITION_ON_PARIS, action: ActionType) => {
    switch(action.type){
        case Actions.FLY_TO_COORD : 
            return {coords : action.payload.coords, label : action.payload.label};
        default : return state;
    }
}
export default updateMapReducer;
