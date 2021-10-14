import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import { useMapStyle } from '../../assets/styles/index.styles';
import { AnimateMap } from './AnimateMap';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from '../../state/store';
import { ReactHTMLElement } from 'react';

const DEFAULT_POSITION_ON_PARIS = {
    lat : 48.8534,
    long : 2.3488
}

export const Map = () => {
    const classes = useMapStyle();
    const memories = useSelector((store : ReducerRootStateType) => store.memoriesStore)
    
    return(
        <div className = {classes.root}>
            <MapContainer 
                center={[DEFAULT_POSITION_ON_PARIS.lat, DEFAULT_POSITION_ON_PARIS.long]} 
                zoom={8}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               <AnimateMap />
               {
                   memories.map(memory => {
                       return(
                            <Marker
                                position = {[memory.coords!.lat, memory.coords!.lng]}
                                icon = {new L.DivIcon({
                                    className : classes.markerContainer, 
                                    iconAnchor: [10, 20],
                                    html : memory.marker,
                                    popupAnchor : [0, -20]
                                })}
                            >
                                
                                    <Popup>
                                        {memory.comment ?
                                            <>
                                                adress : {memory.label}
                                                <br/>
                                                note : { memory.comment }
                                            </> :
                                            'no comments'
                                        }
                                    </Popup>
                           </Marker>
                       )
                   })
               }
            </MapContainer>
        </div>
    )
}
