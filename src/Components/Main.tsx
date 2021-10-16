import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
import { useMediaQuery } from '@material-ui/core';
import { useMainStyle } from '../assets/styles/index.styles';
import { AnimateMap } from './AnimateMap';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import * as memoriesActionCreators from '../state/actions-creators/memories-actions-creators';
import * as categoriesActionCreators from '../state/actions-creators/caterogies-action-creators';
import { ReducerRootStateType } from '../state/store';
import { Memory } from '../state/reducers/memoriesReducer';
import { useEffect } from 'react';
import { CategoriesPanel } from "./CategoriesPanel";

const DEFAULT_POSITION_ON_PARIS = {
    lat : 48.8534,
    long : 2.3488
}

export const Main = () => {
    const classes = useMainStyle();
    const memories = useSelector((store : ReducerRootStateType) => store.memoriesStore)
    const [memosToDisplay, setMemosToDisplay] = useState<Memory[]>([])
    const dispatch = useDispatch();
    const { loadMemories } = bindActionCreators(memoriesActionCreators, dispatch);
    const { loadCategories } = bindActionCreators(categoriesActionCreators, dispatch)
    //listening whether a category is selected
    const selectedCategory = useSelector((store : ReducerRootStateType) => store.selectedCategoryStore);
    const isScreenLarge = useMediaQuery('(min-width : 700px)');
    
    //loading local stored momeries & caegories at componentDidMount if there are some
    useEffect(() => {
        const memos = localStorage.getItem("memories");
        const categories = localStorage.getItem("categories");
        //loading categories
        categories && loadCategories(JSON.parse(categories));
        //loading memories
        memos && loadMemories(JSON.parse(memos))
    },[]);

    //each time new memory created we save memories into the local storage
    useEffect(() => {
        localStorage.setItem("memories", JSON.stringify(memories))
    },[memories]);

    useEffect(() => {
        if(selectedCategory === 'all'){
            setMemosToDisplay(memories)
            return;
        }
        const memos = (memories as Memory[]).filter(memo => memo.category === selectedCategory);
        memos.length && setMemosToDisplay(memos)
    },[selectedCategory, memories ]);

    return(
        <div className = {classes.root}>
            {isScreenLarge && <CategoriesPanel />}
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
                    memosToDisplay.map((memory : Memory) => {
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
