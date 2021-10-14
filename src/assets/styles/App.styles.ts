import { makeStyles } from '@material-ui/core' ;

const useAppStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        height :'100vh',
        alignItems : 'center',
        flexDirection : 'column',
        paddingTop: '20px',
        '& > *' : {
            margin :'0 2%'
        },
        [theme.breakpoints.up('md')] : {
            flexDirection : 'row',
        }
    }
}))

export default useAppStyle;