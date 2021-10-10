import React, { useState, useEffect } from 'react';
import { useSearchBarStyle } from '../assets/styles/index.styles';
import { IconButton } from '@material-ui/core';
import * as actionCreators from '../state/actions-creators';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state/store';

const SearchBar = ()=>{
    const [entry, setEntry] = useState<string>('');
    const classes = useSearchBarStyle();
    const dispatch = useDispatch();
    const { request } = bindActionCreators(actionCreators, dispatch);
    console.log(useSelector((store : ReducerRootStateType) => console.log(store.requestStore)))
    
    useEffect(() => {
        request(entry)
    },[entry, request]);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEntry(e.target.value);
    }
    
    return(
        <input 
            className = {classes.inputEl} 
            type = 'text' 
            onChange = {handleChange}
            placeholder = 'type your location here'
        />
    )
}

export default SearchBar;