import { TextField, Typography, Button, useTheme, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react";
import NamePrompt from "./NamePrompt";
import CodeSvgDark from "../assets/undraw_collaboration_dark.svg";
import CodeSvgLight from "../assets/undraw_collaboration_light.svg";


export default function Home() {
    const theme = useTheme();
    
    const [roomId, setRoomId] = useState("");
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const handleRoomIdChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRoomId(e.target.value);
    }

    const collabSvg = () => {
        if(theme.palette.mode == 'dark') {
            return (<img style={{ height: "60%", width: "60%" }} src={CodeSvgDark} alt="Code Companion Illustration" />              );
        }
        else {
            return (<img style={{ height: "60%", width: "60%" }} src={CodeSvgLight} alt="Code Companion Illustration" />              );
        }
    }
    return (
        <>
            <Grid container maxWidth="lg" sx={{ height: "100%", alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ paddingInline: '1em', paddingBlock: '1em' }}>
                    <Typography variant="h2" marginBottom={3}>Code collaboration.<br /> Free for everyone.</Typography>
                    <Typography variant="body1" marginBottom={3}>epic insane coding platform epic epic all i do is win win win no matter what got money on my mind and never get enough</Typography>
                        <Button sx={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.secondary.contrastText,
                                marginRight: '1em',
                                minWidth: '12em',
                                marginBlock: '10px',
                                '&:hover': {
                                    backgroundColor: theme.palette.secondary.main,
                                    'box-shadow': `0px 0px 25px ${theme.palette.secondary.main}`,
                                }
                            }}
                            size="large"
                            onClick={handleOpen}
                        >
                            Create Room
                        </Button>
                        <NamePrompt open={open} setOpen={setOpen} />
                        <TextField
                            sx={{
                                marginRight: '1em',
                                marginBlock: '10px',
                                
                            }}
                            id="roomId"
                            label="Enter Room ID"
                            value={roomId}
                            size="small"
                            onChange={(e) => handleRoomIdChange(e)}
                        />
                        {roomId !== "" ? (<Button sx={{
                                            color: theme.palette.text.primary,
                                            marginRight: '1em',
                                            marginBlock: '10px',
                                            '&:hover': {
                                                'box-shadow': `0px 0px 25px ${theme.palette.primary.main}`,
                                                }
                                            }}
                                            component={Link} to={"/room/" + roomId}
                                            variant="text">Join</Button>) : (<></>) }
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {collabSvg()}
                </Grid>
            </Grid>            
            
        </>
    );
}