import { useSelector } from "react-redux";
import { ReducerRootStateType } from "../state/store";
import { useAutoCompletePaneStyle } from '../assets/styles/index.styles';

export const AutoCompletePane = () =>{
    const requestStore = useSelector( (store : ReducerRootStateType) => store.requestStore)
    const classes = useAutoCompletePaneStyle();
    
    return(
        <ul className = {classes.root}> 
        {/* request.datas possibly null in case axios error returned */}
        {requestStore.datas && requestStore.datas.map(data => {
            return <li>{data.properties.label}</li>
        })}
        </ul>
    )
}