import { Paper, useTheme } from "@mui/material"
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
