import { makeStyles } from "@material-ui/core";

const useCategoriesStyle = makeStyles(theme => ({
    root : {
        diplay : 'flex',
        height : '15%',
        flexDirection : 'column',
        // border: '2px solid'
        margin : '45px 0',
        '& > *' : {
            marginBottom : '10px'
        }
    },
    newCategory :{
        display : 'flex',
        alignItems : 'center',
        // border :'1px solid red'
        '& > *' :{
            margin : ' 0 5px'
        }
    },
    inputEl : {
        width : '200px'
    },
    btn : {
        height : '40px',
        width : '60px',
        flexBasis : '80px'
    },
    caterories:{
        border: '1px solie blue',
        display : 'flex',
        flexWrap : 'wrap',
        // margin : '25px',
        '& > *' : {
            margin :'7px'
        }
    }
}))

export default useCategoriesStyle;