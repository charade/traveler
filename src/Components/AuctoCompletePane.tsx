import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useAutoCompletePaneStyle } from '../assets/styles/index.styles';
import { Popper } from "@material-ui/core";
import { NoMatchFound } from './NoMatchFound';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActionCreators from "../state/actions-creators/mapAction";
import React from "react";

type AutoCompletePropsT = {
    anchor : HTMLInputElement | null
}

export const AutoCompletePane = (props : AutoCompletePropsT) =>{
    const requestStore = useSelector( (store : ReducerRootStateType) => store.requestStore)
    const dispatch = useDispatch();
    const { mapFlyTo } = bindActionCreators(mapActionCreators, dispatch);
    const classes = useAutoCompletePaneStyle();
    
    const handleChangeMapPosition = (e : React.MouseEvent<HTMLLIElement>) =>{
        console.log(requestStore.datas);
        const target = e.target as HTMLLIElement;
        //assert target.getAttribute not null
        const index = parseInt(target.getAttribute('data-index')!);
        /*datas can be null in case of AxiosError or 
        at initialization before request 
        */
       if(requestStore.datas){
           const coords = requestStore.datas[index].geometry.coordinates;
           console.log(coords)
           //coords from api.gouv are inverted
           //send coord to the store
           mapFlyTo([coords[1], coords[0]]);
       }
    };

    return(
        <Popper 
            open = { (props.anchor && true ) ?? false}
            anchorEl = {props.anchor}
            placement = 'bottom'
            className = {classes.root}
            modifiers = {{
                offset: {
                    enabled: true,
                    //positionning popper bottom left of input element
                    offset: '-16, 2'
                },
                flip :{
                    //avoid popper to flip when scroll down
                    enabled : false
                }
            }}
        >
            <ul className = {classes.list}> 
                {/* request.datas possibly null in case axios error returned */}
                {requestStore.datas && requestStore.datas.map((data, i) => {
                    return( 
                        <li
                            key = {i}
                            data-index = {i}
                            className = {classes.item}
                            onClick = { handleChangeMapPosition }
                        >
                            <LocationOnIcon className = {classes.icon}/>
                            {data.properties.label}
                        </li>
                    )
                })}
            </ul>
            <NoMatchFound condition = {!requestStore.datas?.length}/>
        </Popper>
    )
}

