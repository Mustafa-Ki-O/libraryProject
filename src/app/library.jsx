import  {books } from "../components/library/book";
import Search from "../components/library/search";
import BookCard from "../components/library/card";
import {Button, Container,Grid}   from "@mui/material";
import { useNavigate } from "react-router-dom";
import '../assets/css/home.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";

const Library=()=>{
  const navigate = useNavigate();
  const [filteredBooks,setFilteredBooks] =useState([]);

     return(
        <>
<Container sx={{position :'relative' ,marginTop:14,marginBottom:14 ,display:'flex',flexDirection:'column',gap:3}}>
<Search books={books} setFilteredBooks={setFilteredBooks} />
  <Grid container spacing={10} sx={{columnGap:10,
    '@media (max-width: 1100px)': {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    transform:'translate(-25%)'
  },
  }}>
{filteredBooks && filteredBooks.map((book, index) => (
            <Grid item key={index} xs={5}>
              <BookCard
                image={book.image}
                title={book.title}
                description={book.description}
                author={book.author}
                id={index}
                salary={book.salary}
              />
            </Grid>
          ))}
  </Grid>
  <Button id="btn" sx = {{zIndex:3,fontFamily:'Edu VIC WA NT Beginner'}} variant="contained" color="primary" onClick={()=>navigate('/shopping-cart/')}> <AddShoppingCartIcon/></Button>
</Container>
       </>
     )
     
}
export default Library;