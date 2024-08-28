import { Table, TableHead, TableBody, TableRow, TableCell,  Button, Card,CardActionArea,CardContent,Typography } from '@mui/material';
import { useSelector} from "react-redux";
import '../../assets/css/tableBook.css'
import DeleteIcon from '@mui/icons-material/Delete';
import BorrowingDuration from './borrowingDuration';
import { useState } from 'react';
import DeleteModal from './deleteModal';

const TableBook=()=>{

    const books=useSelector(state=>state.books.books);
    const[open,setOpen]=useState(false);
    const [itemDeleted,setItemDeleted]=useState(null)
    const handleShowModal=(id)=>{
      setOpen(true);
      setItemDeleted(id);
    }

    return( 
      <> 
          <Table id='table' aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}} >Title</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Author</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Date of purchase</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Restore Date</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Number of borrowing days</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books && books.map((book, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{book.title}</TableCell>
                  <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{book.author}</TableCell>
                  <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{book.dateOfPurshase}</TableCell>
                  <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{book.restoreDate}</TableCell>
                    <TableCell align="right">
                    <BorrowingDuration id={book.id}/>
                    </TableCell>
                    <TableCell align="right" sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>
                    <Button sx={{color:'#f51225f5'}} onClick={()=>handleShowModal(book.id)}>
                      <DeleteIcon />
                    </Button>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
         {/* for mobiles screens */}
         {books && books.map((book) => (
         <Card id='card' sx={{ height:280, borderRadius: 0}}>
    <CardActionArea sx={{  height: '100%' }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '4px',justifyContent:'center',alignItems:'center' }}>
      <Typography gutterBottom variant="h5" component="div" color="primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 700 }}>
       Book-Tiltle : {book.title}
      </Typography>
      <Typography variant="h6" color="text.primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Book-Author : {book.author}
      </Typography>
      <Typography variant="body3" color="text.secondary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Date Of Purshase : {book.dateOfPurshase}
      </Typography>
      <Typography variant="body3" color="text.secondary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Date Of Restore : {book.restoreDate}
      </Typography>
      <Typography>
        <BorrowingDuration id={book.id}/>
      </Typography>
      <Typography sx={{alignSelf:'end' }}>
        <Button sx={{display:'flex',color:'#f51225f5'}} onClick={()=>handleShowModal(book.id)}>
              <DeleteIcon />
        </Button>
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
))}
        <DeleteModal
        open={open}
        setOpen={setOpen}
        id={itemDeleted}
        />
        </>
    )
}
export default TableBook;