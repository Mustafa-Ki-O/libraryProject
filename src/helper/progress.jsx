import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Progress() {
    console.log('progress')
  return (
    <Box sx={{ display: 'flex',backgroundColor:'#ffffff55',width:'200%',position:'absolute',height:'400%',alignItems:'center',justifyContent:'center'
     }} >
      <CircularProgress />
    </Box>
  );
}