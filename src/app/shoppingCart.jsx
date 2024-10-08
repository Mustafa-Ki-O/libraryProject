import { Button, Container } from "@mui/material";
import TableBook from "../components/cart/tableBook";
import Header from "../components/cart/countOfBook";
import Empty from "../helper/emptyPage";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BorrowingDateModal from "../components/cart/borrowingDateModal";
import { useState } from "react";
import { useSelector } from "react-redux";

const ShoppingCart=()=>{
    const [open, setOpen] = useState(false);
    const books = useSelector(state => state.books.books);
  
    const allBooksHaveRestoreDate = books.every(book => {
        const restoreDate = book.restoreDate;
        return restoreDate && /^\d{2}-\d{2}-\d{4}$/.test(restoreDate);
      });
  
    console.log('allBooksHaveRestoreDate : ',allBooksHaveRestoreDate);

    const handleShowModal=()=>{
        setOpen(true);
    }

    return (
        <>
        <BorrowingDateModal open={open} setOpen={setOpen} />
        {books && books.length >0 ? (
       <Container sx={{ display: 'flex', justifyContent: 'spacebetween',flexDirection:'column',gap:5,position:'relative',marginBottom:10,marginTop:10 }}>
       <Header /> 
       <TableBook />
        <Button 
        variant="contained" 
        color="primary" 
        onClick={handleShowModal} 
        endIcon={<PersonAddIcon/>} 
        sx={{
          position:{xs:'static' ,sm:  'fixed'}, 
          bottom: {sm:'60px'}, 
          left: {sm:'50%'}, 
          transform: {sm:'translateX(-50%)'}, 
          width: {sm:'20%',xs:'40%'},
          fontFamily:'Edu VIC WA NT Beginner',
          alignSelf:{xs:'center'}
        }}
        disabled={!allBooksHaveRestoreDate}
        > Continue  </Button>
         </Container>):(<Empty isBooks={true}/>)}
       </>

    )
}
export default ShoppingCart;