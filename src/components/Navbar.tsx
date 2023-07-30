import { useContext } from "react";
import { ColorModeContext } from "../theme/CustomThemeProvider";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Link } from "react-router-dom"
export default function Navbar() {
    const colorMode = useContext(ColorModeContext);
    return (
        <AppBar 
         position="static" 
         sx={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            borderRadius: '0px',
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',                
            }
         }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            THOOK
          </Typography>
          <ThemeSwitch onClick={colorMode.toggleColorMode} />
          <Button component={Link} to="/" color="inherit">HOME</Button>
        </Toolbar>
      </AppBar>
    );
}