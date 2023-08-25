import { Typography, Grid,  useTheme, Box } from "@mui/material";

export default function About() {
    const theme = useTheme();
    return (
        <>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Box 
                 component="img"
                 src="/about.svg"
                 sx={{ 
                    height: '90%',
                    width: '90%',
                 }}
                />
            </Grid>
            <Grid item xs={12} md={6} sx={{ padding: theme.spacing(6) }}>
                
                    <Typography variant="h2" sx={{ marginTop: theme.spacing(4) }}>About Us</Typography>
                    <Typography variant="body1" align="justify" lineHeight={2}>
                        We are a team of developers who are passionate about code collaboration. 
                        We believe that real-time code collaboration is the future of software development, 
                        and we are committed to building the best platform for developers to work together.
                        Our website allows developers to collaborate on code in real time, regardless of their location. 
                        This means that developers can work together on the same project, even if they are on different continents.
                    </Typography>
            </Grid>
        
            
        </Grid>
        </>
    );
}