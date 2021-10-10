import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useMapStyle } from '../assets/styles/index.styles';

const DEFAULT_LAT = -55;
const DeFAULT_LON = 109.5;

const Map = () => {
    const [position , setPosition] = useState<GeolocationCoordinates>();
    const classes = useMapStyle();
    
    useEffect(() => {
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition(position.coords);
            })
            // GeolocationPositionError.code === 1 && console.log('not');
        }
    },[])

    return(
        <div className = {classes.root}>
            <MapContainer center={[position?.latitude || DEFAULT_LAT , position?.longitude || DeFAULT_LON]} zoom={2} >
                <TileLayer
                    // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[position?.latitude || DEFAULT_LAT, position?.longitude || DeFAULT_LON]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map;