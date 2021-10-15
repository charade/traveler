import { useAppStyle } from "./assets/styles/index.styles"
import { Main } from "./components/Main";
import { Form } from "./components/newMemory/Form";

function App() {
  const classes = useAppStyle();
  
  return (
    <div className = {classes.root}>
        <Form />
        <Main />
    </div>
  );
}

export default App;
