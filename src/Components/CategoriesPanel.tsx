import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoriesActionsCreators from '../state/actions-creators/caterogies-action-creators';
import * as memoriesActionsCreators from '../state/actions-creators/memories-actions-creators'
import { ReducerRootStateType } from "../state/store";
import { Chip, TextField, Button } from "@material-ui/core";
import { useCategoriesStyle } from "../assets/styles/index.styles";

export const CategoriesPanel = () => {
    const [newCategory, setNewCategory] = useState<string>('');
    const dispatch = useDispatch();
    const { addCategory, removeCategory } = bindActionCreators(categoriesActionsCreators, dispatch);
    const { deleteMemories } = bindActionCreators(memoriesActionsCreators, dispatch);
    const categories = useSelector((store: ReducerRootStateType) => store.catoriesStore)
    const classes = useCategoriesStyle();

    const handleNewCategoryChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement ;
        setNewCategory(target.value);
    }

    //create a new category
    const handleCreateNewCategory = () => newCategory && addCategory(newCategory);
    
    //delete a category and all related memories
    const handleChipDelete = (e : React.MouseEvent<SVGElement>) => {
        e.stopPropagation();
        const btnTarget = e.target as SVGElement;
        //span elemnt innerText correponds to category label
        const target = btnTarget.previousElementSibling as HTMLSpanElement
        removeCategory(target.innerText);
        deleteMemories(target.innerText);
    };

    return(
        <div className = { classes.root }>
            <div className = { classes.newCategory }>
                <TextField
                    className = {classes.inputEl} 
                    label = "create a new catetgory"
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
                {(categories as string[]).map(category => {
                    return(
                        <Chip label = {category}
                            onDelete = { handleChipDelete }
                        />
                    )
                })}
            </div>
        </div>
    )
}