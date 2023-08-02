import { Grid, Container, MenuItem, TextField, Typography, Avatar, useTheme, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import supportedLanguages from "../data/supportedLanguages.json";

const participants = ["James Bond", "Ethan Hunt", "John Wick"];

export default function CodeRoom() {
    const theme = useTheme();
    const [language, useLanguage] = useState("cpp");

    const HandleLanguageChange = (language: string) => {
        useLanguage(language);
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
                />
            </Grid>
            <Grid item xs={12} md={2} sx={{ padding: '24px' }}>
                <Typography variant="subtitle1">Room ID: </Typography>
                <Typography variant="subtitle1">Date: </Typography>
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
                {participants.map((p) => (
                    <ListItem key={p} sx={{ paddingLeft: '0' }}>
                        <ListItemAvatar>
                            <Avatar alt={p}>{p[0]}</Avatar>
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