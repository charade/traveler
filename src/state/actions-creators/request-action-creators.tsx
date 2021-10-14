import { Dispatch } from "react";
import { Actions } from '../actions/index';
import { ActionResponseType } from "../reducers/requestReducer";
import { getPlace, reverseCoordToPlace } from "../../services";
import { AxiosError, AxiosResponse } from "axios";
import { LatLng } from "leaflet";

export const request = (entry: string) =>{
    return(dispatch : Dispatch<ActionResponseType>) => {
        getPlace(entry)
        .then((res: AxiosResponse<any>) => {
            dispatch({
                type : Actions.COMPUTE_REQUEST,
                payload : res.data.features
            })
        })
        .catch((error: AxiosError<any>) => {
            dispatch({
                type : Actions.REQUEST_ERROR,
                payload : error.response?.data
            })
        })
    }
};

export const requestByCoords = (coords : LatLng) => {
    return(dispatch : Dispatch<ActionResponseType>) =>{
        reverseCoordToPlace(coords)
        .then((res: AxiosResponse<any>) => {
            console.log(res.data)
            dispatch({
                type : Actions.COORDS_TO_LABEL,
                payload : res.data.features
            })
        })
        .catch((error : AxiosError<any>) => {
            dispatch({
                type : Actions.REQUEST_ERROR,
                payload : error.response?.data
            })
        })
    }
}