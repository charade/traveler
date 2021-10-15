import { makeStyles } from "@material-ui/core";

const useMainStyle = makeStyles(theme => ({
    root : {
        width : '90%',
        height : '58%',
        display :'flex',
        flexDirection : 'column',
        [theme.breakpoints.up('md')] : {
            // width : '900px',
        },
    },
    markerContainer : {
        border : 'none',
        background :'transparent',
        fontSize : '3.5rem'
    }

}))

export default useMainStyle;