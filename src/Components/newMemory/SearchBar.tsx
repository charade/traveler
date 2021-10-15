import React, { useState, useRef, useLayoutEffect } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import ExploreIcon from '@mui/icons-material/Explore';
import InputAdornment from '@mui/material/InputAdornment';
import * as actionCreators from '../../state/actions-creators/request-action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { AutoCompletePane } from './AuctoCompletePane';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSearchBarStyle } from '../../assets/styles/index.styles';

export const SearchBar = ()=>{
    //field entry
    const [entry, setEntry] = useState<string>('');
    const [selectedArea, setSelectedArea] = useState<string>('');
    //positionning popper
    const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const { request } = bindActionCreators(actionCreators, dispatch);
    const classes = useSearchBarStyle();
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
        //reload request on field change every 400ms
        setTimeout(() => request(entry), 400);

    },[entry, request]);

    //onChange inputEl value
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEntry(e.target.value);
        setPopperAnchorEl(e.target)
    }
    //onBlur inputEl
    const handleBlurInputField = () => setTimeout(() => setPopperAnchorEl(null), 300);
    //empty input field
    const handleEmptyInput = () => {
        if(inputRef.current)
            inputRef.current.value = ''
    }
 
    return(
        <>
            <TextField
                type = 'text'
                inputRef = { inputRef }
                InputLabelProps = {{
                    style : {
                        fontSize : '1.5rem', 
                        width : "170px", 
                        background :'white',
                        color : 'red'
                    }
                }}
                variant = 'outlined'
                required
                size = 'small'
                label = 'type your location here' 
                onChange = {handleChange}
                onBlur = { handleBlurInputField }
                inputProps = {{style : {fontSize : '1.7rem', height :'100%'}}}
                InputProps = {{
                    startAdornment: (
                        <InputAdornment position = 'start'>
                            <ExploreIcon />
                        </InputAdornment>
                    )
                }}
            />
            <CancelIcon 
                role = 'button' 
                aria-label = 'close-icon-button'  
                className = {classes.closeBtn}
                onClick = { handleEmptyInput }
            />
            <AutoCompletePane 
                anchor = {popperAnchorEl} 
                setSelectedArea = {setSelectedArea}
            />
        </>
    )
}