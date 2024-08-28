import { Card, CardContent, Typography, CardActionArea, Container } from "@mui/material";
import {Checkbox} from "@mui/material";
import { addBook } from "../../redux/action";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/action";
import '../../assets/css/card.css'

const BookCard=( {image, title, description, author,id ,salary} )=>{
  const dispatch=useDispatch();
 
  const date=new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).replace(/\//g, '-');

  const handleAdd = (e) => {
    console.log('Checkbox checked:', e);
    if (e) {
      const newBook = {
        image,
        title,
        description,
        author,
        id,
        salary,
        dateOfPurshase:date,
        restoreDate:'not selected yet',

      };
      console.log('Adding book:', newBook);
      dispatch(addBook(newBook));
    } else {
      console.log('Removing book:', id);
      dispatch(removeBook(id));
    }
  };

  return (
    <Container id='con1' sx={{display:'flex', alignItems:'center',width:{xs:350,sm:600}, justifyContent:'center'}}>
    <img src={image} height='350' width='200' style={{borderRadius:8,zIndex:2}}></img>
    <Card sx={{ height:{xs:150 ,sm:270} , borderRadius: 0 }}>
    <CardActionArea sx={{ display: 'flex', flexDirection: 'column', gap: '4px', height: '100%' }}>
    <CardContent sx={{ flex: 1 }}>
      <Typography gutterBottom variant="h5" component="div" color="primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 700 }}>
        {title}
      </Typography>
      <Typography variant="h6" color="text.primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
        {author}
      </Typography>
      <Typography variant="body3" color="text.secondary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
        {description}
      </Typography>
    </CardContent>
    <h4
      style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        position: 'absolute',
        bottom: 0,
        width:150,
        padding: 6,
        backgroundColor: '#20e7ff',
        borderRadius: 10,
        fontWeight:700,
      }}
    >
      Add to Chart
      <Checkbox label="Add to chart" onChange={(e) => handleAdd(e.target.checked)} />
    </h4>
  </CardActionArea>
</Card>
    </Container>
  );
}
export default BookCard