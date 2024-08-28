import { Container,Typography } from "@mui/material";
import MainCard from "../components/main/card";
import { useNavigate } from "react-router-dom";
import library from '../assets/library.jpg';
import histroy from'../assets/history.jpg';
import contact from '../assets/email.jpg'
import { Book } from '@mui/icons-material';
import { Timeline } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import WavingHandIcon from '@mui/icons-material/WavingHand';

import '../assets/css/main.css'
const Home=() => {
    const navigate=useNavigate()
    return(
        <>
<Container sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 4,rowGap:15,marginTop:5}}>
  <div id="div">
  <Typography id="welcome"  variant="h3" component="h1" >
    Welcome to Our Website...<WavingHandIcon sx={{fontSize:40}}/>
  </Typography>
  </div>
  <Container sx={{
  display: { xs: 'flex', sm: 'grid' },
  flexDirection: { xs: 'column', sm: 'row' },
  gridTemplateColumns: { sm: 'repeat(3, 1fr)' },
  gap: 4,
  marginBottom: 10,
  marginTop: {xs:'90%',sm:'30%'}
}}>
    <MainCard
      buttonName="Library"
      description="a big variety of books you can find here"
      action={() => navigate('/library/')}
      image={library}
      icon={<Book />}
    />
    <MainCard
      buttonName="History"
      description="You can know all the books you have borrowed"
      action={() => navigate('/history/')}
      image={histroy}
      icon={<Timeline />}
    />
    <MainCard
      sx={{ height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 2 }}
      buttonName="Contact-Us"
      description="any problem or questions ??"
      action={() => navigate('/contact-us/')}
      image={contact}
      icon={<Telegram/>}
    />
  </Container>
</Container>
        </>
    )

}
export default Home;