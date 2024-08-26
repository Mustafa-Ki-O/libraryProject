import '../../assets/css/navBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link, useLocation } from 'react-router-dom';
import bookIcon from '../../assets/book.png'
import { Container } from '@mui/material';

export default function NavBar() {
  const location = useLocation();

  return (
    <Box sx={{
        position: 'fixed',
        top: 0,
        zIndex: 3, 
        marginBottom:10,
        width:'100%',
      }}>
        
        <AppBar position="static" sx={{display:'flex', width: '100%',flexGrow:1 }}>
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between',alignItems:'center' }}>
            <Link  to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={bookIcon} width='40px' />
              </Link>
            <Box sx={{ display: 'flex', gap: 2 }}>
               <ul style={{listStyleType:'none',display:'flex',gap:25,marginRight:20}}>
               <Link className={location.pathname === '/' ? 'link active' : 'link'} to="/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >Home</li>
              </Link>
              <Link className={location.pathname === '/library/' ? 'link active' : 'link'} to="/library/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >Library</li>
              </Link>
              <Link className={location.pathname === '/shopping-cart/' ? 'link active' : 'link'} to="/shopping-cart/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >Cart</li>
              </Link>
              <Link className={location.pathname === '/payment/' ? 'link active' : 'link'} to="/payment/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >Payment</li>
              </Link>
              <Link className={location.pathname === '/history/' ? 'link active' : 'link'} to="/history/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >History</li>
              </Link>
              <Link className={location.pathname === '/contact-us/' ? 'link active' : 'link'} to="/contact-us/" style={{ textDecoration: 'none', color: 'inherit',fontWeight:'bold' }}>
                <li >Contact-us</li>
              </Link>
              </ul>
            </Box>
          </Toolbar>
          </Container>
        </AppBar>
        
      </Box>
  );
}