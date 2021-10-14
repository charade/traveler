import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useFormStyle } from '../../assets/styles/index.styles';
import { TextField, Button} from "@material-ui/core";
import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../../state/store";
import Picker, {IEmojiData} from "emoji-picker-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Form = () => {
    const classes = useFormStyle();
    //save comment linked to a place for pop up
    const [comment, setComment] = useState('');
    //toggle emojis picker display
    const [showEmojisPicker, setShowEmojisPicker] = useState<boolean>(false);
    //get selected are coords & label
    const position = useSelector((store : ReducerRootStateType) => store.mapStore);
    //save emojis as markers
    const [marker, setMarker] = useState<string>('');

    const handleCommentChanges = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setComment(target.value);
    };

    const handleSubmit =  (e : React.SyntheticEvent) => {
        e.preventDefault();
    };

    return(
        <form 
            className = {classes.root}
            onSubmit =  { handleSubmit }
        >
            <SearchBar />
            <TextField 
                fullWidth
                InputLabelProps = {{style : {fontSize : '1.7rem', width : "130px", background :'white'}}}
                onChange = { handleCommentChanges }
                multiline
                maxRows = {5}
                minRows = {5}
                label = 'add a comment'
                variant = 'outlined'
                inputProps = {{style : {fontSize : '1.7rem'}}}
            />
            <Picker
                native
                onEmojiClick = {(e, emojisObj: IEmojiData) => setMarker(emojisObj.emoji)} 
                pickerStyle = {{
                    zIndex : '10',
                    position : 'absolute',
                    display : showEmojisPicker ? "flex" : "none",
                    top : '96%',
                    left: '',
                    height : '300px',
                }}
                disableAutoFocus
            />
            <div className = {classes.btnBox}>
                <Button
                    className = {classes.emojisPickerToggler} 
                    role = 'span'
                    aria-labelledby = 'marker-picker-toggler' 
                    startIcon = {<LocationOnIcon />}
                    variant = 'outlined'
                    onClick = {() => setShowEmojisPicker((bool : boolean) => !bool)}
                >
                    pick a marker
                </Button>
                <Button 
                    type = 'submit'
                    variant = 'outlined'
                    size = 'small'
                >
                    Save
                </Button>
                <span role ="img">{marker}</span>
            </div> 
        </form>
    )
}