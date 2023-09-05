import { Grid, Container, MenuItem, TextField, Typography, Avatar, useTheme, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import supportedLanguages from "../data/supportedLanguages.json";
import { Editor } from "@monaco-editor/react";
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import { editor } from "monaco-editor";
import { useLocation } from "react-router-dom";
import { changeLanguage } from "../services/room";
import { useContext } from "react";
import { SocketContext } from "../context/SocketContext";

const serverWsUrl = import.meta.env.VITE_SERVER_WS_URL;

export default function CodeRoom() {
    const theme = useTheme();
    
    const { state } = useLocation();
    const [language, setLanguage] = useState(state.language);
    const [participants, setParticipants] = useState<string[]>(state.participants);
    const socket = useContext(SocketContext);

    const HandleLanguageChange = (language: string) => {
        setLanguage(language);
        changeLanguage(language, state.roomId)
        .then((data) => console.log("Language changed to " + data.programmingLanguage));
        socket.emit('language:change', {"language": language, "roomId": state.roomId });
    }

    const editorRef = useRef<editor.IStandaloneCodeEditor>();
    
    function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
        editorRef.current = editor;

        // Initialize yjs
        const doc = new Y.Doc(); // collection of shared objects

        // Connect to peers with Web RTC
        const provider: WebsocketProvider = new WebsocketProvider(serverWsUrl, state.roomId, doc);
        const type = doc.getText("monaco");

        // Bind yjs doc to Manaco editor
        const binding = new MonacoBinding(type, editorRef.current!.getModel()!, new Set([editorRef.current!]));
        console.log(binding, provider);

    }

    useEffect(() => {
      socket.on('participant:add', (data) => {
        if(data.roomId == state.roomId) {
            console.log(data);
            setParticipants(data.participants);
            setLanguage(data.programmingLanguage);
        }
      })

      socket.on('language:change', (data) => {
        if(data.roomId == state.roomId) {
            console.log(data);
            setLanguage(data.language);
        }
        
      })
    
      return () => {

      }
    }, [])
    
    
    return (
        <>
        <Grid container>
            <Grid item xs={12} md={10}>
                <Editor 
                height="100vh"
                language={language}
                defaultValue={"// your code here"}
                theme={theme.palette.mode === "dark" ? "vs-dark" : "vs-light"}
                onMount={handleEditorDidMount}
                />
            </Grid>
            <Grid item xs={12} md={2} sx={{ padding: '24px' }}>
                <Typography variant="subtitle1">Room ID: {state.roomId}</Typography>
                <Typography variant="subtitle1">Date: {state.dateCreated}</Typography>
                <TextField 
                sx={{
                    width: '100%',
                    marginBlock: '4em'
                }}
                variant="standard"
                size="small"
                select
                label="Programming Language"
                value={language}
                defaultValue="cpp"
                >
                    {supportedLanguages.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={() => HandleLanguageChange(option.value)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="body1">Participants</Typography>
                <Container disableGutters sx={{ marginBlock: '1em' }}>
                {participants.map((p) => (
                    <ListItem key={p} sx={{ paddingLeft: '0' }}>
                        <ListItemAvatar>
                            <Avatar alt={p}>{ p[0].toUpperCase() }</Avatar>
                        </ListItemAvatar>
                        <ListItemText 
                         primary={p}
                        />
                    </ListItem>
                ))}
                </Container>
            </Grid>
        </Grid>
        </>
    );
}