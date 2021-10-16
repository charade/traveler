import { makeStyles } from '@material-ui/core' ;

const useAppStyle = makeStyles(theme => ({
    root : {
        display : 'flex',
        height :'100%',
        overflow : 'hidden',
        alignItems : 'center',
        flexDirection : 'column',
        // paddingTop: '20px',
        '& > *' : {
            margin :'0 2%'
        },
        [theme.breakpoints.up('sm')] : {
            paddingTop: '30px',
        },
        [theme.breakpoints.up('md')] : {
            alignItems : 'flex-start',
            paddingTop: '100px',
            flexDirection : 'row',
        }
    },
    toggler : {
        border : '1px solid rgba(0, 0, 0, .4)',
        margin: '10px 0 20px 0'
    }
}))

export default useAppStyle;