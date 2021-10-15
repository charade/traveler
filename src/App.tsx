import { useAppStyle } from "./assets/styles/index.styles"
import { Map } from "./components/map/Map";
import { Form } from "./components/newMemory/Form";

function App() {
  const classes = useAppStyle();
  
  return (
    <div className = {classes.root}>
        <Form />
        <Map />
    </div>
  );
}

export default App;
