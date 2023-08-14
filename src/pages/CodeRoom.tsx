import { Grid, Container, MenuItem, TextField, Typography, Avatar, useTheme, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useState, useRef } from "react";
import supportedLanguages from "../data/supportedLanguages.json";
import { Editor } from "@monaco-editor/react";
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { MonacoBinding } from 'y-monaco';
import { editor } from "monaco-editor";
import { useLocation } from "react-router-dom";

const serverWsUrl = import.meta.env.VITE_SERVER_WS_URL;
// const participants = ["James Bond", "Ethan Hunt", "John Wick"];


export default function CodeRoom() {
    const theme = useTheme();
    const [language, useLanguage] = useState("cpp");
    const { state } = useLocation();
    console.log(state);
    const HandleLanguageChange = (language: string) => {
        useLanguage(language);
    }

    const editorRef = useRef<editor.IStandaloneCodeEditor>();
    
    function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
        editorRef.current = editor;

        // Initialize yjs
        const doc = new Y.Doc(); // collection of shared objects

        // Connect to peers with Web RTC
        const provider: WebsocketProvider = new WebsocketProvider(serverWsUrl, 'test-room', doc);
        const type = doc.getText("monaco");

        // Bind yjs doc to Manaco editor
        const binding = new MonacoBinding(type, editorRef.current!.getModel()!, new Set([editorRef.current!]));

        console.log(provider);
        console.log(binding);
    }
    
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
                defaultValue={language}
                >
                    {supportedLanguages.map((option) => (
                        <MenuItem key={option.value} value={option.value} onClick={() => HandleLanguageChange(option.value)}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography variant="body1">Participants</Typography>
                <Container disableGutters sx={{ marginBlock: '1em' }}>
                {state.participants.map((p) => (
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