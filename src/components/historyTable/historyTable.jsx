import { Container, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import { useState, useEffect } from "react";
import '../../assets/css/historyTable.css';

const HistoryTable = () => {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('books');
    if (storedItems) {
      setLocalStorageItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 10 }}>
      <Table>
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
    </Container>
  );
};

export default HistoryTable;