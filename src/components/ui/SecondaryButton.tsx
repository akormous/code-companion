import { Button, ButtonProps, styled } from "@mui/material";


const SecondaryButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.text.primary,
    marginBlock: '10px',
    '&:hover': {
        boxShadow: `0px 0px 25px ${theme.palette.primary.main}`,
    }
}));

export default SecondaryButton;