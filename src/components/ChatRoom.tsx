import { Button, TextField, Typography, Container, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import { Room } from "../interfaces";
import { Socket, io } from "socket.io-client";


export default function ChatRoom({id, dateCreated}: Room) {
    const theme = useTheme();
    const [mySocket, setMySocket] = useState<Socket>();
    const [message, setMessage] = useState("hello server");
    const [messageHistory, setMessageHistory] = useState<string[]>([]);
    // const printChat = () => {
    //     let chat = 
    // }
    const handleSendMessage = () => {
        mySocket.emit("send_message", {
            "room": id,
            "type": "CLIENT",
            "message": message
        });
        console.log(messageHistory);
        setMessageHistory(messageHistory => [...messageHistory, message]);
    }
    

    useEffect(() => {
        console.log("Trying to create a room ", id);
        const socket = io("http://localhost:8085?room=" + id);

        socket.on("connect", () => {
            console.log("Connected " + socket.id);
        });


        socket.on("disconnect", () => {
            console.log("Disconnected " + socket.id);
        });

        socket.on("get_message", (arg) => {
            if(arg instanceof String) {
                setMessageHistory(messageHistory => [...messageHistory, arg]);
            }
            else {
                setMessageHistory(messageHistory => [...messageHistory, arg.message]);
            }
            
        });

        setMySocket(socket);
        
        return () => {
            
        }
    }, [id])
    
    return (
        <>
        <Container 
         maxWidth="sm"
         sx={{
            marginTop: '10px',
            alignContent: 'center',
            height: '75vh',
            border: '2px solid white'
         }}
        >
        <Typography variant="h6">Room = {id}</Typography>
        <Typography variant="h6">Date Created = {dateCreated}</Typography>
        <TextField 
         fullWidth
         id="message"
         label="message"
         value={message}
         onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
         onClick={handleSendMessage}
         sx={{ 
            color: theme.palette.primary.contrastText, 
            backgroundColor: theme.palette.secondary.main,
            width: '100%',
            marginTop: '10px',
            '&:hover': {
                backgroundColor: theme.palette.error.main,
            }
         }} 
          >Send</Button>
          {messageHistory.map((msg) => (<Typography variant="h6">{msg}</Typography>))}
        </Container>
        </>
    );
}