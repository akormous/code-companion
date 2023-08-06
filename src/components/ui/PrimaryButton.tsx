import { Button, ButtonProps, styled } from "@mui/material";


const PrimaryButton = styled(Button)<ButtonProps>(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    minWidth: '12em',
    marginBlock: '10px',
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        boxShadow: `0px 0px 25px ${theme.palette.secondary.main}`,
    }
}));

export default PrimaryButton;