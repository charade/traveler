import { makeStyles } from "@material-ui/core";

const useMainStyle = makeStyles(theme => ({
    root : {
        width : '90%',
        height : '50%',
        // border : '2px solid red',
        display :'flex',
        flexDirection : 'column',
        [theme.breakpoints.up('sm')] : {
            height : '75%',
            '& > *' : {
                margin : '4% 0'
            }
        },
        [theme.breakpoints.up('md')] : {
            height : '85%'
        }
    },
    markerContainer : {
        border : 'none',
        background :'transparent',
        fontSize : '3.5rem'
    }

}))

export default useMainStyle;