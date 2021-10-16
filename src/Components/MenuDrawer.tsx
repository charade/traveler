import { Drawer } from "@material-ui/core";
import { CategoriesPanel } from "./CategoriesPanel";
import { useDrawerStyle } from '../assets/styles/index.styles';

type PropsT = {
    open : boolean,
    setOpen: (open : boolean) => void
};

export const MenuDrawer = (props: PropsT) => {
    const classes = useDrawerStyle();

    return(
        <Drawer
            classes = {{paper: classes.root}}
            open = {props.open}
            onClose = { () => props.setOpen(false) }
        >
            <CategoriesPanel />
        </Drawer>
    )
}