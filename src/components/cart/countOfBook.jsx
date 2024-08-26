import { Typography } from "@mui/material"
import { useSelector } from "react-redux"

const Header=()=>{
    const books=useSelector(state=>state.books.books)
    const count=books.length
    return(
     <div style={{display:'flex',
     justifyContent:'space-between',
     width:'100%',
     marginTop:15,
     marginBottom:15,
     borderBottom:'1px solid #000',
     }}>
        
        <Typography gutterBottom variant="h5" component="div" color="text.primary" sx={{fontFamily:'Edu VIC WA NT Beginner'}}>
            Book Cart
        </Typography>
        <Typography gutterBottom variant="h4" component="div" color="white" sx={{fontFamily:'Edu VIC WA NT Beginner'}}>
            {count} items
        </Typography>
     </div>
    )
}
export default Header