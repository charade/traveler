import { makeStyles } from "@material-ui/core";

const useSearchBarStyle = makeStyles(theme => ({
    closeBtn:{
        position : 'absolute',
        left: '96%',
        top : '4px',
        maxWidth : '25px',
        minHeight :'30px',
        cursor : 'pointer',
        background : 'white',
    },
}))

export default useSearchBarStyle;