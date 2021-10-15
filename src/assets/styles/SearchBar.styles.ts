import { makeStyles } from "@material-ui/core";

const useSearchBarStyle = makeStyles(theme => ({
    closeBtn:{
        position : 'absolute',
        left: '100%',
        top : '4px',
        maxWidth : '25px',
        minHeight :'30px',
        cursor : 'pointer',
        background : 'white',
        // border :'1px solid'
    },
}))

export default useSearchBarStyle;