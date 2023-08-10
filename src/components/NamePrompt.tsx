import { Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PrimaryButton from "./ui/PrimaryButton";
import PrimaryBox from "./ui/PrimaryBox";
import { useNavigate } from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

console.log(serverUrl);
console.log(baseUrl);
interface NamePromptProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NamePrompt({open, setOpen}: NamePromptProps) {
    const [name, setName] = useState("");
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        fetch(`${serverUrl}/api/v1/room/create`, {
            method: 'POST',
            body: JSON.stringify({ name: name }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
        .then((data) => {
            navigate(`/room/${data.roomId}`, { state: { roomId: data.roomId, dateCreated: new Date().toLocaleString(), participants: [name] } })
            //return redirect(`${baseUrl}/room/${data.roomId}`);
            // window.location.replace(`${baseUrl}/room/${data.roomId}`);
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
                />
                <PrimaryButton sx={{ minWidth: '0', width: '100%' }} disabled={!name.replace(/\s/g, '').length} onClick={handleJoinRoom} variant="text">
                        Join
                </PrimaryButton>
            </PrimaryBox>
        </Modal>
        
    );
}
