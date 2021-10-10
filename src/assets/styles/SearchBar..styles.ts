import { makeStyles } from "@material-ui/core"; 

const useSearchBarStyle = makeStyles({
    inputEl : {
        width : '300px',
        '&::placeholder' : {
            fontStyle : 'italic',
            color : 'rgba(0,0,0,.4)'
        }
    }
})

export default useSearchBarStyle;