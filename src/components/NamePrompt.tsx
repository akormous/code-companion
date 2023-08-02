import { Modal, Box, TextField, Button, useTheme } from "@mui/material";
import { useState } from "react";

const url = "http://localhost:3001/api/v1/room/create"

interface NamePromptProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NamePrompt({open, setOpen}: NamePromptProps) {
    const theme = useTheme();
    const [name, setName] = useState("");
    const handleClose = () => setOpen(false);

    const handleRoomJoin = () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ name: name }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => res.json())
        .then((data) => {
            window.location.replace(`http://localhost:5173/room/${data.roomId}`);
        });
    }
    
    return (
        <>
            <Modal
                open={open}
            >
                
            <Box sx={{
                 position: 'absolute',
                 top: '50%',
                 left: '50%',
                 transform: 'translate(-50%, -50%)',
                 width: 400,
                 bgcolor: 'background.paper',
                 border: '2px solid #000',
                 boxShadow: 24,
                 p: 4,
            }}>
                
            <TextField
                sx={{
                    marginRight: '1em',
                    marginBlock: '10px',
                    
                }}
                id="roomId"
                label="Enter name"
                value={name}
                size="small"
                onChange={(e) => setName(e.target.value)}
            />
                <Button sx={{
                    color: theme.palette.text.primary,
                    marginRight: '1em',
                    marginBlock: '10px',
                    '&:hover': {
                        'box-shadow': `0px 0px 25px ${theme.palette.primary.main}`,
                        }
                    }}
                    onClick={handleRoomJoin}
                    variant="text">
                        Join
                </Button>
                <Button 
                sx={{
                    color: theme.palette.text.primary,
                    marginRight: '1em',
                    marginBlock: '10px',
                    '&:hover': {
                        'box-shadow': `0px 0px 25px ${theme.palette.primary.main}`,
                        }
                    }}
                onClick={handleClose}>Close</Button>
            </Box>
        </Modal>
        </>
    );
}
