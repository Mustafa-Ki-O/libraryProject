import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Checkbox,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{sm:400,xs:240} ,
  bgcolor: '#fff',
  color:'#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:4,
  fontFamily:'Edu VIC WA NT Beginner'
};

const BorrowingDateModal=({open,setOpen}) => {
    const [isChecked, setIsChecked] = useState(false);
    const navigate=useNavigate()
    const handleDone=()=>{
        if(isChecked){
            navigate('/payment/', { state: { termsAccepted: isChecked } })
        }
    }
  return (
    <div>
      <Modal
        sx={{backgroundColor:'#ffffff55'}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={()=>setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="p" component="p">
            Now you will be taken to the confirmation page
            </Typography>
            <br/>
           <Typography id="transition-modal-title" variant="h5" component="h5" sx={{fontFamily:'Edu VIC WA NT Beginner'}}>
             You agree to all terms and conditions
               <Checkbox label="Continue" onChange={(e) => setIsChecked(e.target.checked)} />
            </Typography>
            <div style={{display:'flex', justifyContent:'end',gap:8,paddingTop:20,paddingRight:20}}>
            <Button variant="contained" color='primary' onClick={handleDone} sx={{fontFamily:'Edu VIC WA NT Beginner'}}>Done</Button>
            <Button variant="outlined" onClick={()=>setOpen(false)} sx={{fontFamily:'Edu VIC WA NT Beginner'}}>Close</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default BorrowingDateModal
