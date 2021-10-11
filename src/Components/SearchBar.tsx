import React, { useState, useEffect } from 'react';
import { useSearchBarStyle } from '../assets/styles/index.styles';
import { IconButton, Popper, TextField } from '@material-ui/core';
import ExploreIcon from '@mui/icons-material/Explore';
import InputAdornment from '@mui/material/InputAdornment';
import * as actionCreators from '../state/actions-creators';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerRootStateType } from '../state/store';
import AppsIcon from '@mui/icons-material/Apps';
import { AutoCompletePane } from './AuctoCompletePane';
import { ClassNames } from '@emotion/react';

const SearchBar = ()=>{
    //field entry
    const [entry, setEntry] = useState<string>('');
    //positionning popper
    const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLInputElement | null>();
    const classes = useSearchBarStyle();
    const dispatch = useDispatch();
    const { request } = bindActionCreators(actionCreators, dispatch);
    const requestStoreDatas = useSelector((store : ReducerRootStateType) => store.requestStore);
    
    //make sure search field state not empty before requesting
    useEffect(() => {
        if(entry){
            request(entry)
        }
    },[entry, request]);

    //onChange inputEl value
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setEntry(e.target.value);
        setPopperAnchorEl(e.target)
    }
    //onBlur inputEl
    const handleBlurInputField = () => setPopperAnchorEl(null);
    
    return(
        <div className = {classes.root}>
            <TextField
                type = 'text'
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
            <Popper 
                open = { (popperAnchorEl && true ) ?? false}
                anchorEl = {popperAnchorEl}
                placement = 'bottom'
                disablePortal
            >
               <AutoCompletePane />
            </Popper>
        </div>
    )
}

export default SearchBar;