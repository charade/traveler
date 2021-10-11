import { MapContainer, TileLayer} from 'react-leaflet';
import { useMapStyle } from '../../assets/styles/index.styles';
import { AnimateMap } from './AnimateMap';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from '../../state/store';

const DEFAULT_POSITION_ON_PARIS = {
    lat : 48.8534,
    long : 2.3488
}

const Map = () => {
    const classes = useMapStyle();

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
            </MapContainer>
        </div>
    )
}

export default Map;