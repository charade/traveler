import { makeStyles } from "@material-ui/core";

const useFormStyle = makeStyles(theme => ({
    root : {
        // border: '2px solid red',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '80%',
        height : '200px',
        // border : '2px solid blue',
        '& > *' : {
            width :'100%',
            marginBottom :'20px'
        },
        [theme.breakpoints.up('md')] :{
            width : '40%'
        }

    }
}));
export default useFormStyle;