import { Container } from '@mui/material';
import empty from '../assets/Icons/empty.png'
import '../assets/css/empty.css'

const Empty=({isBooks})=>{
    return(
        <>
        <Container sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <img id='emptyImg' src={empty} width="15%" />
          <p>{isBooks ? 'No books selected !' : 'No package validated !'}</p>
        </Container>
        </>
    )

}
export default Empty;