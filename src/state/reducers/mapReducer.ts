import { Actions } from "../actions"

type StateType = {
    latitude : number,
    longitude : number
}

//action.payload is of type [latitude, longitude]
export type ActionType = {
    type : string,
    payload : [number, number]
};
const DEFAULT_POSITION_ON_PARIS = {
    latitude : 48.8534,
    longitude : 2.3488
}

const updateMapReducer = (state : StateType = DEFAULT_POSITION_ON_PARIS, action: ActionType) => {
    switch(action.type){
        case Actions.FLY_TO_COORD : 
            return {latitude : action.payload[0], longitude : action.payload[1]};
        default : return state;
    }
}
export default updateMapReducer;
