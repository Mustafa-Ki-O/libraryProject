import { Container, Table, TableBody, TableCell, TableRow, TableHead ,Card,CardActionArea,CardContent,Typography} from "@mui/material";
import { useState, useEffect } from "react";
import '../../assets/css/historyTable.css';
import Empty from "../../helper/emptyPage";

const HistoryTable = () => {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('books');
    if (storedItems) {
      setLocalStorageItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems: 'center',gap:3, marginTop: 15, marginBottom: 10 }}>
      <Table id='historyTable'>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 'bold', fontSize: 20 }}>Borrower Name</TableCell>
            <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 'bold', fontSize: 20 }}>Borrower Address</TableCell>
            <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 'bold', fontSize: 20 }}>Book Title</TableCell>
            <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 'bold', fontSize: 20 }}>Date of Purchase</TableCell>
            <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 'bold', fontSize: 20 }}>Date of Restore</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localStorageItems && localStorageItems.length > 0 ? (
            localStorageItems.filter((item) => item.borrowerName && item.borrowerAddress).map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontSize: 18 }}>{item.borrowerName}</TableCell>
                <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontSize: 18 }}>{item.borrowerAddress}</TableCell>
                <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontSize: 18 }}>{item.title}</TableCell>
                <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontSize: 18 }}>{item.dateOfPurshase}</TableCell>
                <TableCell sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontSize: 18 }}>{item.restoreDate}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell />
              <TableCell />
              <TableCell>No data found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {localStorageItems && localStorageItems.length > 0 ? (
        localStorageItems.filter((item) => item.borrowerName && item.borrowerAddress).map((item, index) => (
      <Card id='historyCard' sx={{ height:280, borderRadius: 0,width:'100%'}}>
    <CardActionArea sx={{  height: '100%' }}>
    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '4px',justifyContent:'center',alignItems:'center' }}>
      <Typography gutterBottom variant="h5" component="div" color="primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 700 }}>
       Borrower-Name : {item.borrowerName}
      </Typography>
      <Typography variant="h6" color="text.primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Borrower-Address : {item.borrowerAddress}
      </Typography>
      <Typography variant="h6" color="blue" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Book-Tilte : {item.title}
      </Typography>
      <Typography variant="body3" color="text.secondary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Date Of Purshase : {item.dateOfPurshase}
      </Typography>
      <Typography variant="body3" color="text.secondary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
       Date Of Restore : {item.restoreDate}
      </Typography>
    </CardContent>
  </CardActionArea>
</Card>
        ))):(<Empty/>)}
   
    </Container>
  )
};

export default HistoryTable;