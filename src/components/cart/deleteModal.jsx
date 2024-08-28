import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/action';
import { Button } from '@mui/material';

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
  borderRadius:4
};


const DeleteModal=({open,setOpen,id}) => {
const dispatch=useDispatch();

    const handleDelete=()=>{
        dispatch(removeBook(id))
        setOpen(false)
    }

  return (
    <div>
      <Modal
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
            <Typography id="transition-modal-title" variant="h5" component="p">
             Confirm
            </Typography>
            <br/>
           <Typography id="transition-modal-title" variant="h6" component="div">
              Are you sure ? You will remove this book from package !
            </Typography>
            <div style={{display:'flex', justifyContent:'end',gap:4,paddingTop:20,paddingRight:20}}>
            <Button variant="contained" color='primary' onClick={handleDelete}>Yes</Button>
            <Button variant="outlined" onClick={()=>setOpen(false)} >No</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
export default DeleteModal;
