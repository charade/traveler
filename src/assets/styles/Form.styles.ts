import { makeStyles } from "@material-ui/core";

const useFormStyle = makeStyles(theme => ({
    root : {
        // border: '2px solid red',
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '80%',
        // overflow : 'scroll',
        // border : '2px solid blue',
        //excluding submit button
        "& > *:not([type='submit'])" : {
            width :'100%',
            marginBottom :'10px'
        },
        [theme.breakpoints.up('md')] :{
            width : '40%',
            // alignSelf : 'flex-start'
        }
    },
    btnBox : {
       display :'flex',
       justifyContent: "space-between"
    },
    emojisPickerToggler :{
        maxWidth : '200px',
        color: 'rgb(61, 131, 246)',
        fontSize :'1.2rem',
    },
}));
export default useFormStyle;