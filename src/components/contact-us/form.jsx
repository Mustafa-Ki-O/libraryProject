import { Container, Grid, Box,TextField, Button} from "@mui/material";
import { useState } from "react";
import Progress from "../../helper/progress";
import '../../assets/css/stepper.css'
import validateForm from "./validateForm";
import AlertMessage from "./alertMessage";

const Form = () => {
    const [showProgress,setShowProgress]=useState(false);
    const [showAlert,setShowAlert]=useState(false);
    const [errors,setErrors] = useState([])
    const [message,setMessage] = useState({
        firstName:'',
        lastName:'',
        email:'',
        description:'',
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setMessage((prev) => ({
            ...prev,
            [name]:value,
        }))
    }
    const handleSubmit = () => {
        if(validateForm(message,setErrors)){
        setShowProgress(true);
        setTimeout(() => {
            setShowProgress(false);
            setShowAlert(true);
            localStorage.setItem('message',JSON.stringify(message));
            setTimeout(()=>{
                setShowAlert(false);
             },2000)
        },3000)
        
        setMessage({
            firstName:'',
            lastName:'',
            email:'',
            description:''
        })
    }
    }


  return (
    <>
   {showAlert && <AlertMessage/>}
   {showProgress && <Progress/>}
<Container sx={{display:'flex',justifyContent:'center',mb:4}}>
  <fieldset style={{fontSize:20,fontWeight:800, padding: 20, borderRadius: 10, boxShadow: '0 0 10px rgba(0,0,0,0.1)',border:'2px solid #1976D2' }}>
    <legend>Contact-us</legend>
    <Box sx={{width:'100%',marginTop:5 }}>
      <Grid container spacing={6} >
        <Grid item xs={12}>
          <TextField
            label="First Name"
            name="firstName"
            value={message.firstName}
            onChange={handleChange}
            fullWidth
            error={errors.firstName ? true : false}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Last Name"
            name="lastName"
            value={message.lastName}
            onChange={handleChange}
            fullWidth
            error={errors.lastName ? true : false}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            value={message.email}
            onChange={handleChange}
            fullWidth
            error={errors.email ? true : false}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            name="description"
            value={message.description}
            onChange={(e) => handleChange(e)}
            fullWidth
            multiline
            rows={6}
            error={errors.description ? true : false}
            helperText={errors.description}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color='info'  sx={{mt:3, mb:2, pt:1,pb:1}} onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  </fieldset>
</Container>
    </>
  );
};
export default Form;
