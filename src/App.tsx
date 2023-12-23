import { Paper, Typography, useTheme } from "@mui/material"
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from "./components/About";
import CodeRoom from "./pages/CodeRoom";
import Home from './pages/Home';


function App() {
  const theme = useTheme();

  return (
    <>
    <Navbar />
    <Paper sx={{
      height: 'auto',
      backgroundColor: theme.palette.background.default,
      borderRadius: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBlock: '12px'
     }}>
    <Typography variant="body2" maxWidth={"lg"}>Dear users, please be advised that this website is deprecated, and the project has concluded. We appreciate your support. You can find the code of this project here: <a href="https://github.com/akormous/code-companion" style={{ color: 'blue' }}>Frontend</a>, <a href="https://github.com/akormous/code-companion-server" style={{ color: 'blue' }}>Backend</a> </Typography><br />
    </Paper>
    <Paper
     sx={{
      minHeight: '92vh',
      height: 'auto',
      backgroundColor: theme.palette.background.default,
      borderRadius: '0px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
     }}
    >
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/room/:id" element={<CodeRoom />} />
      
    </Routes>
    
        </Paper>        
    </>
  )
}

export default App
