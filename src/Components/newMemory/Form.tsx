import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useFormStyle } from '../../assets/styles/index.styles';
import { TextField } from "@material-ui/core";

export const Form = () => {
    const classes = useFormStyle();

    return(
        <form className = {classes.root}>
            <SearchBar />
            <TextField 
                multiline
                maxRows = {5}
                minRows = {5}
                label = 'add a comment'
                variant = 'outlined'
                inputProps = {{style : {fontSize : '1.7rem'}}}
            />
        </form>
    )
}