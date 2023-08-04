import { Box, styled } from "@mui/material";

const PrimaryBox = styled(Box)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 'auto',
    width: 'auto',
    backgroundColor: theme.palette.background.paper,
    paddingBlock: '2em',
    paddingInline: '2em',
    alignItems: 'center',
    borderRadius: '10px'
}));

export default PrimaryBox;