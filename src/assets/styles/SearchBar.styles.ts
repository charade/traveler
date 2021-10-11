import { makeStyles } from "@material-ui/core"; 

const useSearchBarStyle = makeStyles( theme =>({
    root : {
        display : 'flex',
        alignItems : 'center',
        height : '8rem',
        width : '100%',
        margin : '5%',
        justifyContent : 'center',
        // border : '2px solid'
        '& > *' : {
            margin : '5px'
        }
    },
    inputEl : {
        width : '100%',
        borderRadius : '8px',
        fontSize : '1.9rem',
        fontWeight : 300,
        [theme.breakpoints.up('xs')] : {
            width : '360px'
        }
    },
    btn : {
        border: '1px solid rgba(0, 0, 0, .3)',
        '&:hover' : {
            background : 'rgba(80, 70, 100, .4)'
        }
    }
}))

export default useSearchBarStyle;