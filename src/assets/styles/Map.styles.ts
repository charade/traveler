import { makeStyles } from "@material-ui/core";

const useMapStyle = makeStyles(theme => ({
    root : {
        width : '90%',
        height : '58%',
        [theme.breakpoints.up('md')] : {
            // width : '900px',
        },
    }
}))

export default useMapStyle;