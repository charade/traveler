//fires when user attemp to create a new souvenir
import { PowerInputSharp } from "@mui/icons-material";
import { 
    Dialog, 
    DialogContent, 
    DialogContentText, 
    DialogActions,
    Button
} from "@mui/material";

type DialogPropsT = {
    setAddMarker : (create : boolean) => void;
    open : boolean
    setOpen : (open : boolean) => void
};

export const DialogPane = (props : DialogPropsT) => {

    const handleClose = () => props.setOpen(false);
    const handleAddMarker = () => props.setAddMarker(true);

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
                    <Button 
                        variant = 'outlined' 
                        onClick = { handleAddMarker }>
                            yes, I do
                    </Button>
                    <Button 
                        variant = 'outlined' 
                        onClick = { handleClose }>
                            nop
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}