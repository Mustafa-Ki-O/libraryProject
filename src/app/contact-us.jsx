import { Container } from "@mui/material";
import Form from "../components/contact-us/form";
import Message from "../components/contact-us/message";

const ContactUs = () => {

    return(
    <>
    <Container sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:12,mb:12}}>
        <Form />
        <Message />
     </Container>
    
    </>
    )
}
export default ContactUs;