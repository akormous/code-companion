import { TextField, Typography, Button, Container, Paper, useTheme } from "@mui/material"
import { Link } from 'react-router-dom';
import { Room } from "../interfaces";
import { useState } from "react";


interface HomeProps {
    createRoom(): void,
    setRoom: React.Dispatch<React.SetStateAction<Room>>,
    room: Room
}

export default function Home({createRoom, setRoom, room} : HomeProps) {
    const theme = useTheme();
    
    const [roomid, setRoomId] = useState("");

    return (
        <Container maxWidth="lg" sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h1">Chat</Typography>
            <Paper sx={{ 
                alignItems: 'center', 
                display: 'flex', 
                flexDirection: 'column',
                marginTop: '45px',
                width: '50%',
                height: '100%',
                padding: '20px'
            }}
            >
            <TextField
                id="roomid"
                label="Room ID"
                sx={{ marginBlock: '20px' }}
                value={roomid}
                onChange={(e) => setRoomId(e.target.value)}
            />
            <Button sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.primary
                }}
                onClick={createRoom}
            >
                Create Room
            </Button>
            <Button sx={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.text.primary
                }}
                onClick={() => setRoom({id: roomid, dateCreated: Date().toString()})}
            >
                Join Room
            </Button>
            </Paper>
            <Link to={"/room/" + room.id} state={{id: room.id, dateCreated: room.dateCreated}}>Join {room.id}</Link>
        </Container>
    );
}