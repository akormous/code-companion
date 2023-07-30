import { useState } from "react";
import { Paper, useTheme } from "@mui/material"
import { Routes, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Room } from "./interfaces";


const url = 'http://localhost:8080/api/v1/room/create'; 

function App() {
  const theme = useTheme();
  const [myRoom, setMyRoom] = useState<Room>({id: "", dateCreated: ""});
    const handleCreateRoom = () => {
      fetch(url, {
        method: 'GET'
      })
      .then((response) => response.json())
      .then((data) => {
        setMyRoom(data);
        console.log(data);
      });
    }

  return (
    <>
    <Paper
     sx={{
      height: '100vh',
      backgroundColor: theme.palette.background.default
     }}
    >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home createRoom={handleCreateRoom} setRoom={setMyRoom} room={myRoom} />} />
      <Route 
       path="room/:id" 
       element={<ChatRoom id={myRoom.id} dateCreated={myRoom.dateCreated} />}
      /> 
    </Routes>
    
        </Paper>        
    </>
  )
}

export default App
