import { LatLng  } from "leaflet";
import { useLayoutEffect, useEffect } from "react";
import { useMap } from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActionCreators from '../state/actions-creators/map-actions-creators';
import { ReducerRootStateType } from '../state/store';

export const AnimateMap = () => {
    //get selected place on search result
    const dispatch = useDispatch();
    const { mapFlyTo } = bindActionCreators(mapActionCreators, dispatch);
    const position = useSelector((store : ReducerRootStateType) => store.mapStore);
    const map = useMap();
    //get user geolocation to init the map
    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                mapFlyTo({
                    coords : new LatLng(position.coords.latitude, position.coords.longitude),
                    label :  ''
                });
            },async() => {
                /**if user denied position acces we can get it's IP position */

                // const position = await fetch('https://ipapi.co/json')
                // .then(res => res.json())
                // .then(location => location);
                // mapFlyTo({
                //     coords : new LatLng(position.latitude, position.longitude),
                //     label : ''}
                //     );
            })
        }
    },[mapFlyTo]);

    //animate zoom when clicking on a place
    useEffect(() => {
        const handleClick = () => map.setZoom(map.getZoom() + 1, {easeLinearity : 1})
        map.on('click',handleClick);
    },[]);

    //update map with a fly effect when new location selected
    useLayoutEffect(() => {
        //position contains coords and label properties
        //coords are type LatLng oject with lat(latitude key) & lng(lngitude key)
        if(position.coords){
            map.flyTo([position.coords!.lat, position.coords!.lng],16, {
                duration : 2,
            })
        }
    },[position, map]);

    return null
}