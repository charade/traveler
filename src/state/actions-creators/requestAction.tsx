import { Dispatch } from "react";
import { Actions } from '../actions/index';
import { ActionResponseType } from "../reducers/requestReducer";
import { getPlace } from "../../services";
import { AxiosError, AxiosResponse } from "axios";

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
}