import { makeStyles } from "@material-ui/core";
import { useAutocomplete } from "@mui/core";

const useAutoCompletePaneStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        flexDirection : 'column',
        background :'lightgrey'
    }
}))

export default useAutoCompletePaneStyle;