import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const Message =() => {
    const [message, setMessage] = useState({});

    useEffect(() => {
      const storedMessage = localStorage.getItem('message');
      if (storedMessage) {
        setMessage(JSON.parse(storedMessage));
      }
    }, [message]);
    
    const isValid = Object.values(message).every(value => value !== '');
    
    return(
        <>
        {isValid ? (
            <Table sx={{ justifyContent:'center',opacity:0.7,mt:5 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Name</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Email</TableCell>
                <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={message.email}>
                  <TableCell component="th" scope="row" sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{message.firstName} {message.lastName}</TableCell>
                  <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{message.email}</TableCell>
                  <TableCell sx={{fontFamily:'Edu VIC WA NT Beginner', fontSize: 18}}>{message.description}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        ):(<p>No Messages</p>)}
        </>
    )
}
export default Message;
