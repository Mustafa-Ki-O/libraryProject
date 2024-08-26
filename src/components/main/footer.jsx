import { Typography } from "@mui/material";

const Footer=()=>{
   return(
    <footer style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#1976d2',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Typography component='div' variant="div" sx={{margin:'0 auto',fontWeight:'bold'}}>
            All Rights Reserved ©
        </Typography>
        
    </footer>
   )
}
export default Footer;