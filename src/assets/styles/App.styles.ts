import { makeStyles } from '@material-ui/core' ;

const useAppStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        height :'100%',
        overflow : 'hidden',
        alignItems : 'center',
        flexDirection : 'column',
        paddingTop: '20px',
        '& > *' : {
            margin :'0 2%'
        },
        [theme.breakpoints.up('md')] : {
            alignItems : 'flex-start',
            paddingTop: '100px',
            flexDirection : 'row',
        }
    }
}))

export default useAppStyle;