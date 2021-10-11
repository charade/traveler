import { LeafletMouseEvent, LatLng } from "leaflet";
import { useLayoutEffect, useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActionCreators from '../../state/actions-creators/mapAction';
import { ReducerRootStateType } from '../../state/store';
import { DialogPane } from './DialogPane';

export const AnimateMap = () => {
    const dispatch = useDispatch();
    //open dialog asking if user do want to create a souvenir
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    //if user want to create a souvenir add a marker to that place
    const [ addMarker, setAddMarker ] = useState<boolean>(false);
    //save coords when click on a place
    const [coords, setCoords] = useState<LatLng | null>(null);
    //get selected place on search result
    const { mapFlyTo } = bindActionCreators(mapActionCreators, dispatch);
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
        map.flyTo([position.latitude, position.longitude],18, {
            duration : 3,
        })
    },[position, map]);

    //when user do want to create a souvenir we save coords
    useEffect(() => {
    },[addMarker])
    //fires when clicking on marker
    const handleOpenDialog = (e : LeafletMouseEvent) => {
        console.log('hihi', e);
        setOpenDialog(true);
        //save coords if we'll need to link a souvenir to this place
        setCoords(e.latlng)
    };

    return(
        <Marker position={[position.latitude, position.longitude]}
            eventHandlers = {{
                click : handleOpenDialog
            }}
        >
            <DialogPane 
                setAddMarker = {setAddMarker}
                open = {openDialog}
                setOpen = { setOpenDialog }
            />
        </Marker>
    )
    
}