import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSearchBarStyle } from '../assets/styles/index.styles';
import { IconButton, TextField } from '@material-ui/core';
import ExploreIcon from '@mui/icons-material/Explore';
import InputAdornment from '@mui/material/InputAdornment';
import * as actionCreators from '../state/actions-creators/requestAction';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import AppsIcon from '@mui/icons-material/Apps';
import { AutoCompletePane } from './AuctoCompletePane';

const SearchBar = ()=>{
    //field entry
    const [entry, setEntry] = useState<string>('');
    const [selectedArea, setSelectedArea] = useState<string>('');
    //positionning popper
    const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const classes = useSearchBarStyle();
    const dispatch = useDispatch();
    const { request } = bindActionCreators(actionCreators, dispatch);
    
    //once user select an area we want it to update text field
    useLayoutEffect(() => {
        //assert inputRef only update when selectedArea not empty
        //make sure inputRef objec loaded
        if(selectedArea && inputRef.current){
            inputRef.current.value = selectedArea
        }
    },[selectedArea]);
    //make sure search field state not empty before requesting
    useLayoutEffect(() => {
        setTimeout(() => request(entry), 400);
        //once requesting input user empty text field
        //no match messag not showing
        // !entry && setTimeout(() => setPopperAnchorEl(null), 300);
    },[entry, request]);

    //onChange inputEl value
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEntry(e.target.value);
        setPopperAnchorEl(e.target)
    }
    //onBlur inputEl
    const handleBlurInputField = () => setTimeout(() => setPopperAnchorEl(null), 300);
    
    return(
        <div className = {classes.root}>
            <TextField
                type = 'text'
                inputRef = { inputRef }
                variant = 'outlined'
                label = 'type your location here' 
                onChange = {handleChange}
                onBlur = { handleBlurInputField }
                classes = {{root : classes.inputEl}}
                inputProps = {{style : {fontSize : '1.7rem'}}}
                InputProps = {{
                    startAdornment: (
                        <InputAdornment position = 'start'>
                            <ExploreIcon />
                        </InputAdornment>
                    )
                }}
            />
            <IconButton className = {classes.btn}>
                <AppsIcon />
            </IconButton>
            <AutoCompletePane anchor = {popperAnchorEl} setSelectedArea = {setSelectedArea}/>
        </div>
    )
}

export default SearchBar;