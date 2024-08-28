import { Table, TableHead, TableBody, TableRow, TableCell,Card,CardActionArea,CardContent,Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import '../../assets/css/message.css'
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
            <Table id='messageTable' sx={{ justifyContent:'center',opacity:0.7,mt:5 }} aria-label="simple table">
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
          {isValid ? (
          <Card id='messageCard' sx={{ height:280, borderRadius: 0,width:'100%',opacity:0.6}}>
            <CardActionArea sx={{  height: '100%' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '4px',justifyContent:'center',alignItems:'center' }}>
                <Typography gutterBottom variant="h5" component="div" color="primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner', fontWeight: 700 }}>
                Name: {message.firstName && message.firstName.charAt(0).toUpperCase() + message.firstName.slice(1)} {message.lastName && message.lastName.charAt(0).toUpperCase() + message.lastName.slice(1)}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
                 Email : {message.email}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontFamily: 'Edu VIC WA NT Beginner' }}>
                 Description : {message.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>):(<p>No Messages</p>)
          }
        </>
    )
}
export default Message;
