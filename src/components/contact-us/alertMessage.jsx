import { Alert, Typography, Box } from '@mui/material';

const AlertMessage = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Alert severity="success" sx={{width:'60%',display:'flex',justifyContent:'center'}}>
        <Typography variant="h5" component="div" sx={{fontFamily:'Edu VIC WA NT Beginner'}}> 
          Message sent
        </Typography>
      </Alert>
    </Box>
  );
};

export default AlertMessage;