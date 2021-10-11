import { makeStyles } from "@material-ui/core";

const useAutoCompletePaneStyle = makeStyles(theme => ({
    root : {
        zIndex : 10,
        background : 'white',
        width : '80%',
        borderRadius : '5px',
        border: '1px solid rgba(0, 0, 0, .5)',
        [theme.breakpoints.up('xs')] : {
            width : '360px'
        }
    },
    list :{
        listStyle : 'none',
        maxHeight : '500px',
        overflow :'scroll',
        border : '1px solid red',
        padding :0
    },
    item : {
        fontSize : '1.8rem',
        fontWeight : 300,
        cursor : 'pointer',
        display : 'flex',
        margin : '10px 0',
        alignItems : 'flex-start',
        justifyContent  :'flex-start',
        border: '1px solid blue'
    },
    icon : {
        margin: '5px'
    }
}))

export default useAutoCompletePaneStyle;