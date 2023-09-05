import { Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import PrimaryBox from "./ui/PrimaryBox";
import { joinRoom } from "../services/room";
import { useNavigate } from "react-router-dom";

interface NamePromptProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    roomId: string
}

export default function JoinRoomNamePrompt({open, setOpen, roomId}: NamePromptProps) {
    const [name, setName] = useState("");
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        // add participant and navigate to page
        joinRoom(name, roomId)
        .then((data) => {
            navigate(`/room/${data.roomId}`, { state: { roomId: data.roomId, dateCreated: data.dateCreated, participants: data.participants, language: data.programmingLanguage } })
        })
    }
    
    return (
        
        <Modal open={open} onClose={handleClose}>
            <PrimaryBox sx={{ alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography align="center" variant="h4" sx={{ paddingBottom: '1em' }}>Enter room: {roomId}</Typography> 
                <TextField
                    sx={{
                        width: '100%',
                    }}
                    id="roomId"
                    label="Enter your name"
                    value={name}
                    size="small"
                    onChange={(e) => setName(e.target.value)}
                    onKeyUp={(event) => {
                        if (event.key== 'Enter') {
                            handleJoinRoom();
                        }
                            
                    }}
                />
                <PrimaryButton sx={{ minWidth: '0', width: '100%' }} disabled={!name.replace(/\s/g, '').length} onClick={handleJoinRoom} variant="text">
                        Join
                </PrimaryButton>
            </PrimaryBox>
        </Modal>
        
    );
}
