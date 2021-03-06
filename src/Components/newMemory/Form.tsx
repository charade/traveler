import React, { useRef, useState } from "react";
import { SearchBar } from "./SearchBar";
import { useFormStyle } from '../../assets/styles/index.styles';
import { TextField, Button} from "@material-ui/core";
import { ReducerRootStateType } from "../../state/store";
import Picker, {IEmojiData} from "emoji-picker-react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as memoriesActionsCreator from '../../state/actions-creators/memories-actions-creators';

export const Form = () => {
    //autocomplete input field
    const autoCompleteRef = useRef<HTMLInputElement>(null);
    //comment area ref
    const commentRef = useRef<HTMLInputElement>(null);
    const classes = useFormStyle();
    //save comment linked to a place for pop up
    const [comment, setComment] = useState('');
    //toggle emojis picker display
    const [showEmojisPicker, setShowEmojisPicker] = useState<boolean>(false);
    //save emojis as markers
    const [marker, setMarker] = useState<string>('');
    //add category to memory
    //type need to be compatible with Autocomplete component onChange func value argument
    const [category, setCategory] = useState<string | null>('')
    //get selected are coords & label
    const position = useSelector((store : ReducerRootStateType) => store.mapStore);
    //get categories
    const categories = useSelector((store : ReducerRootStateType) => store.catoriesStore);
    //dispatch new created memory
    const dispatch = useDispatch();
    const { addMemory } = bindActionCreators(memoriesActionsCreator, dispatch);
    //comment area changes
    const handleCommentChanges = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setComment(target.value);
    };
    //select categories changes
    const handleCategoryChange = (e : React.SyntheticEvent, value : string | null) =>{
        setCategory(value);
    };
    //on submit new memory
    const handleSubmit =  (e : React.SyntheticEvent) => {
        e.preventDefault();
        //check if necessary datas are given before dispatch
        if(position.coords && marker && category){
            const datas = {...position, marker, comment, category};
            addMemory(datas);
            //when submit close emojis picker
            setShowEmojisPicker(false);
            //need to clean up
            autoCompleteRef.current!.value = '';
            commentRef.current!.value = '';
            setMarker('');
        }
    };

    return(
        <form 
            className = {classes.root}
            onSubmit =  { handleSubmit }
        >
            <SearchBar />
            <Autocomplete 
                disablePortal
                onChange = { handleCategoryChange }
                options = {categories}
                noOptionsText = "you need to add categories"
                renderInput = {
                    (params) => <TextField 
                        {...params} 
                        inputRef = { autoCompleteRef }
                        required 
                        variant = "outlined" 
                        label = "choose a category"
                        InputLabelProps = {{className : classes.textFieldLabel}}
                    />
                } 
            />
            <TextField 
                fullWidth
                inputRef = { commentRef }
                InputLabelProps = {{className : classes.textFieldLabel}}
                onChange = { handleCommentChanges }
                multiline
                maxRows = {3}
                minRows = {3}
                label = 'add a comment'
                variant = 'outlined'
                inputProps = {{style : {fontSize : '1.7rem', paddingTop : '5px'}}}
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
                {/* display chosen marker */}
                <Button 
                    type = 'submit'
                    variant = 'outlined'
                    size = 'small'
                >
                    Save
                </Button>
            </div> 
        </form>
    )
}