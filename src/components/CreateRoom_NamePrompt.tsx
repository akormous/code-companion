import { Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import PrimaryBox from "./ui/PrimaryBox";
import { useNavigate } from "react-router-dom";
import { createRoom } from "../services/room";


interface NamePromptProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CreateRoomNamePrompt({open, setOpen}: NamePromptProps) {
    const [name, setName] = useState("");
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleCreateRoom = () => {
        createRoom(name)
        .then((data) => {
            console.log(data);
            navigate(`/room/${data.roomId}`, { state: { roomId: data.roomId, dateCreated: data.dateCreated, participants: data.participants, language: data.programmingLanguage  } })
        });
    }
    
    return (
        
        <Modal open={open} onClose={handleClose}>
            <PrimaryBox sx={{ alignContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography align="center" variant="h4" sx={{ paddingBottom: '1em' }}>Create new room</Typography> 
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
                            handleCreateRoom();
                        }
                            
                    }}
                />
                <PrimaryButton sx={{ minWidth: '0', width: '100%' }} disabled={!name.replace(/\s/g, '').length} onClick={handleCreateRoom} variant="text">
                        Join
                </PrimaryButton>
            </PrimaryBox>
        </Modal>
        
    );
}
