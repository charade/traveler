import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoriesActionsCreators from '../state/actions-creators/caterogies-action-creators';
import * as memoriesActionsCreators from '../state/actions-creators/memories-actions-creators'
import * as selectCategoriesActionCreators from '../state/actions-creators/selectedCategory-action-creators';
import { ReducerRootStateType } from "../state/store";
import { Chip, TextField, Button } from "@material-ui/core";
import { useCategoriesStyle } from "../assets/styles/index.styles";

export const CategoriesPanel = () => {
    const [newCategory, setNewCategory] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const { addCategory, removeCategory } = bindActionCreators(categoriesActionsCreators, dispatch);
    const { deleteMemories } = bindActionCreators(memoriesActionsCreators, dispatch);
    const { selectCategory } = bindActionCreators(selectCategoriesActionCreators, dispatch);
    const categories = useSelector((store: ReducerRootStateType) => store.catoriesStore)
    const classes = useCategoriesStyle();

    //saving categories each time it changes;
    useEffect(() => {
        localStorage.setItem('categories', JSON.stringify(categories));
    },[categories]);
    //input field changes
    const handleNewCategoryChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement ;
        setNewCategory(target.value);
    }
    //create a new category
    const handleCreateNewCategory = () =>{
        //assert newCategories not already exist and not ''
        newCategory && 
        (categories as string[]).indexOf(newCategory) === -1 && 
        addCategory(newCategory);
        //clean up input field
        if(inputRef.current){
            inputRef.current.value = ''
        }
    } 
    //select category on click chip
    const handleSelectCategory  = (e : React.MouseEvent<HTMLSpanElement>) => {
        const target = e.target as HTMLSpanElement;
        selectCategory(target.innerText);
    }
    //delete a category and all related memories
    const handleDeleteCategory = (e : React.PointerEvent<SVGElement>) => {
        // e.stopPropagation();
        console.log('clicked')
        const btnTarget = e.target as SVGElement;
        //span elemnt innerText correponds to category label
        const target = btnTarget.previousElementSibling as HTMLSpanElement
        if(target){
            removeCategory(target.innerText);
            deleteMemories(target.innerText);
        }
    };

    return(
        <div className = { classes.root }>
            <div className = { classes.newCategory }>
                <TextField
                    inputRef = {inputRef}
                    className = {classes.inputEl} 
                    label = "create a new category"
                    onChange = { handleNewCategoryChange }
                    variant = "outlined"
                    size = "medium"
                />
                <Button
                    className = {classes.btn} 
                    variant = 'outlined' 
                    size ='small'
                    onClick = { handleCreateNewCategory }
                >
                    create
                </Button>
            </div>
            <div className = {classes.caterories}>

                {(categories as string[]).length ? 
                    <Chip 
                        label = "all"
                        onClick = { handleSelectCategory }
                        size = 'medium'
                    /> : ''
                }

                {(categories as string[]).map(category => {
                    return(
                        <Chip label = {category}
                            onDelete = { handleDeleteCategory }
                            onClick = { handleSelectCategory }
                            size = 'medium'
                        />
                    )
                })}
            </div>
        </div>
    )
}