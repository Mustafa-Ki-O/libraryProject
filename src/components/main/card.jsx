import { Container, Typography,Card,CardActions,CardContent } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import '../../assets/css/main.css'

const MainCard = ({buttonName,action,image,description,icon}) =>  {
    return (
      <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Card id='cardMain' sx={{width:300, height: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden'}}>
        <img
          id='media'
          src={image}
          title={buttonName}
        />
        <CardContent id='content' sx={{ display:'flex',flexDirection:'column',flexGrow:1,alignItems:'self-start',justifyContent:'flex-start'}}>
          <Typography gutterBottom variant="h5" component="p" sx={{fontWeight:"bold",fontFamily:'Edu VIC WA NT Beginner',display:'flex',alignItems:'center',gap:1}}>
            {buttonName} {icon}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{fontFamily:'Edu VIC WA NT Beginner'}} >
           {description}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'flex-end'}}>
          <li onClick={action} style={{cursor:'pointer',listStyleType:'none',textDecoration:'underline',color:'blue',fontSize:18,display:'flex',alignItems:'center',gap:6 }} > <ArrowForward id='arrow'/> {buttonName} </li>
        </CardActions>
      </Card>
      </Container>
    );
  }
  export default MainCard