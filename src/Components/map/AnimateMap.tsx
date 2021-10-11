import { useLayoutEffect, useEffect, useState } from "react";
import { useMapEvents, Marker, Popup, useMap } from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActionCreators from '../../state/actions-creators/mapAction';
import { ReducerRootStateType } from '../../state/store';

export const AnimateMap = () => {
    const dispatch = useDispatch();
    const { mapFlyTo } = bindActionCreators(mapActionCreators, dispatch);
    const position = useSelector((store : ReducerRootStateType) => store.mapStore);
    const map = useMap();

    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                mapFlyTo([position.coords.latitude, position.coords.longitude]);
            },async() => {
                /**if user denied position acces we get it's IP position */
                const position = await fetch('https://ipapi.co/json')
                .then(res => res.json())
                .then(location => location);
                mapFlyTo([position.latitude, position.longitude]);
            })
        }
    },[]);

    useLayoutEffect(() => {
        map.flyTo([position.latitude, position.longitude],14, {
            duration : 2
        })
        // map.setView([position.latitude, position.longitude], 14);
        // console.log(position)
    },[position, map]);

    return(
        <Marker position={[position.latitude, position.longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    )
    
}