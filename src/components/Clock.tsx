import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Clock() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, [])

    return (
        <>
        <Box sx={{ display: 'flex', padding: '10px', alignItems: 'center' }}>
            <Typography variant="body1">
                {dateState.toLocaleString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
                &nbsp;&nbsp;
                {"•"}
                &nbsp;&nbsp;
                {dateState.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })}
            </Typography>
        </Box>
        </>
    );
}