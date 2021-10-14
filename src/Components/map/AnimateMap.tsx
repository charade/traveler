import { LeafletMouseEvent, LatLng  } from "leaflet";
import { useLayoutEffect, useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActionCreators from '../../state/actions-creators/map-actions-creators';
import * as requestActionCreator from '../../state/actions-creators/request-action-creators'
import { ReducerRootStateType } from '../../state/store';


export const AnimateMap = () => {
    //toogle dialog
    //save coords when click on a place
    const [coords, setCoords] = useState<LatLng | null>(null);
    //get selected place on search result
    const dispatch = useDispatch();
    const { mapFlyTo } = bindActionCreators(mapActionCreators, dispatch);
    const { requestByCoords } = bindActionCreators(requestActionCreator, dispatch);
    const position = useSelector((store : ReducerRootStateType) => store.mapStore);
    const map = useMap();
    
    //get user geolocation to init the map
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

    //animate zoom when clicking on a place
    useEffect(() => {
        const handleClick = () => map.setZoom(map.getZoom() + 2, {easeLinearity : 1})
        map.on('click',handleClick)
    },[]);
    
    //update map with a fly effect when new location selected
    useLayoutEffect(() => {
        map.flyTo([position.latitude, position.longitude],17, {
            duration : 4,
        })
    },[position, map]);
   

    return(
        <Marker position={[position.latitude, position.longitude]}
            
        >
           
        </Marker>
    )
    
}