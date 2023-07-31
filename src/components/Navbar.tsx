import { useContext, useEffect } from "react";
import { ColorModeContext } from "../theme/CustomThemeProvider";
import { Box, AppBar, Toolbar, Typography, Button, useTheme } from "@mui/material";
import ThemeSwitch from "../theme/ThemeSwitch";
import { Link } from "react-router-dom"

export default function Navbar() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    useEffect(() => {
      document.body.style.backgroundColor = theme.palette.background.default;
    }, [])
    
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar 
         position="static" 
         sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.contrastText,
            boxShadow: '0',
         }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            code companion
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <ThemeSwitch onClick={colorMode.toggleColorMode} />
        </Toolbar>
      </AppBar>
      </Box>
    );
}