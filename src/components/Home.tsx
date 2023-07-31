import { TextField, Typography, Button, Box, Paper, useTheme, Grid } from "@mui/material"
import { Link } from 'react-router-dom';
import { Room } from "../interfaces";
import { useState } from "react";
import CodeSvgDark from "../assets/undraw_collaboration_dark.svg";
import CodeSvgLight from "../assets/undraw_collaboration_light.svg";


interface HomeProps {
    createRoom(): void,
    setRoom: React.Dispatch<React.SetStateAction<Room>>,
    room: Room
}

export default function Home({createRoom, setRoom, room} : HomeProps) {
    const theme = useTheme();
    
    const [roomId, setRoomId] = useState("");

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
                    <Typography variant="body1" marginBottom={3}>epic insane coding platform epic epic all i do is win win win no matter what money on my mind and never give up</Typography>
                        <Button sx={{
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.text.primary,
                                marginRight: '1em',
                                minWidth: '12em',
                                marginBlock: '10px',
                                '&:hover': {
                                    'box-shadow': `0px 0px 25px ${theme.palette.secondary.main}`,
                                }
                            }}
                            size="large"
                            onClick={createRoom}
                        >
                            Create Room
                        </Button>
                        
                        <TextField
                            sx={{
                                marginRight: '1em',
                                marginBlock: '10px',
                                
                            }}
                            id="roomId"
                            label="Enter Room ID"
                            value={roomId}
                            size="small"
                            onChange={(e) => setRoomId(e.target.value)}
                        />
                        {roomId !== "" ? (<Button sx={{
                                            color: theme.palette.text.primary,
                                            marginRight: '1em',
                                            marginBlock: '10px',
                                            '&:hover': {
                                                'box-shadow': `0px 0px 25px ${theme.palette.primary.main}`,
                                                }
                                            }}
                                            variant="text">Join</Button>) : (<></>) }
                        {/* <Link to={"/room/" + room.id} state={{id: room.id, dateCreated: room.dateCreated}}>Join {room.id}</Link> */}
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {collabSvg()}
                </Grid>
            </Grid>            
            
        </>
    );
}