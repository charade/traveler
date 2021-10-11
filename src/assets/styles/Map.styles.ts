import { makeStyles } from "@material-ui/core";

const useMapStyle = makeStyles(theme => ({
    root : {
        width : '98%',
        height : '50vh',
        [theme.breakpoints.up('md')] : {
            width : '900px',
        },
    }
}))

export default useMapStyle;