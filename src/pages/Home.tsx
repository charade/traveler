import { useHomeStyles } from '../assets/styles/index.styles';
import { Map, SearchBar } from '../Components/index';

export const Home = () => {

    const classes = useHomeStyles();

    return(
        <div className = {classes.root}>
            <SearchBar />
            <Map />
        </div>
    )

}