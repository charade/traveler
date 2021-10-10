import { makeStyles } from "@material-ui/core";

const useMapStyle = makeStyles(theme => ({
    root : {
        width : '98%',
        [theme.breakpoints.up('md')] : {
            width : '900px',
        },
    }
}))

export default useMapStyle;