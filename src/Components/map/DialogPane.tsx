import { 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogActions ,
    Button
} from "@mui/material";

type DialogPropsT = {
    open : boolean
    setOpen : (open : boolean) => void
};

export const DialogPane = (props : DialogPropsT) => {
    
    const handleClose = () => props.setOpen(false);

    return(
        <Dialog
            open = {props.open}
            onClose = { handleClose }
        >
            <DialogContent>
                <DialogContentText>
                    Do you want to bind a souvenir to this place ?
                </DialogContentText>
                <DialogActions>
                    <Button variant = 'outlined' >yes, I do</Button>
                    <Button variant = 'outlined' >nop</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}