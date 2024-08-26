import { Container } from "@mui/material";
import PaymentStepper from "../components/payment/stepper";
import { useLocation } from "react-router-dom";
import Empty from "../helper/emptyPage";

const Payment=()=>{

  const location = useLocation();
  const termsAccepted = location.state?.termsAccepted;
  
  
     return(
      <>
      { termsAccepted ? (
       <Container sx={{width:'100%',display:'flex',justifyContent:'flex-start'}} >
         <PaymentStepper/>
         </Container>)
         :
         (<Empty isBooks={false}/>)
         }
         </>
     )
}
export default Payment;
