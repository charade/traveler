import { useState } from "react";
import { useAppStyle } from "./assets/styles/index.styles"
import { Main } from "./Components/Main";
import { Form } from "./Components/newMemory/Form";
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, useMediaQuery } from "@material-ui/core";
import { MenuDrawer } from './Components/MenuDrawer';

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const classes = useAppStyle();
  const isScreenMobile = useMediaQuery('(max-width : 800px)');

  return (
    <div className = {classes.root}>
        {isScreenMobile && 
          <IconButton 
            className = {classes.toggler}
            onClick = {() => setOpenDrawer(!openDrawer)}
          >
              <AppsIcon />
          </IconButton>
        }
        {isScreenMobile && <MenuDrawer open = {openDrawer} setOpen = {setOpenDrawer}/>}
        <Form />
        <Main />
    </div>
  );
}

export default App;
