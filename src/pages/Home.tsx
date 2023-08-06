import { TextField, Typography, useTheme, Grid, InputAdornment } from "@mui/material"
import { Link } from "react-router-dom"
import { useState } from "react";
import NamePrompt from "../components/NamePrompt";
import CodeSvgDark from "../assets/undraw_collaboration_dark.svg";
import CodeSvgLight from "../assets/undraw_collaboration_light.svg";
import PrimaryButton from "../components/ui/PrimaryButton";
import SecondaryButton from "../components/ui/SecondaryButton";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import KeyboardIcon from '@mui/icons-material/Keyboard';

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
                        <PrimaryButton size="large" onClick={handleOpen} startIcon={<MeetingRoomIcon />}>
                            Create a Room
                        </PrimaryButton>
                        <NamePrompt open={open} setOpen={setOpen} />
                        &nbsp;
                        or
                        &nbsp;
                        <TextField
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <KeyboardIcon />
                                </InputAdornment>
                                ),
                            }}
                            sx={{ marginRight: '1em', marginBlock: '10px' }}
                            id="roomId"
                            label="Enter Room ID"
                            value={roomId}
                            size="small"
                            onChange={(e) => handleRoomIdChange(e)}
                        />
                        <SecondaryButton sx={{ minWidth: '0' }} disabled={!roomId.replace(/\s/g, '').length} component={Link} to={`/room/${roomId}`}variant="text">
                            Join
                        </SecondaryButton>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {collabSvg()}
                </Grid>
            </Grid>            
            
        </>
    );
}