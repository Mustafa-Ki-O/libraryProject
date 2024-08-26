import * as React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validatePersonalInfo from './validate/validatePeronal';
import validateCardInfo from './validate/validateCard';
import '../../assets/css/stepper.css'
import { Checkbox, Typography,Container,Box,Stepper,Step,StepLabel,Button,Grid,TextField } from '@mui/material';
import { updateBook } from '../../redux/action';
import Progress from '../../helper/progress';

const steps = ['Personal', 'Card', 'Summary'];

export default function PaymentStepper() {
  const dispatch=useDispatch();
    const books=useSelector(state=>state.books.books)
    const count=books.length;
    const navigate=useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [isChecked,setIsChecked] =useState(false);
    const [showProgress,setShowProgress] =useState(false);
    const [localStorageItems, setLocalStorageItems] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({
       name: '',
       email: '',
       phone: '',
       address:'',
  });
  const [errorsPersonal,setErrorsPersonal]=useState([])
  const [errorsCard,setErrorsCard]=useState([])
  const[cardInfo,setCardInfo]=useState({
    cardNumber: '',
    cvv: '',
  })

  const handleNext = () => {
    if(activeStep==0){
    const validatePersonal = validatePersonalInfo(personalInfo,setErrorsPersonal);
        if(validatePersonal){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }else if(activeStep==1){
      const validateCard = validateCardInfo(cardInfo,setErrorsCard);
         if(validateCard){
          setActiveStep((prevActiveStep) => prevActiveStep +1)
         }
    }
  };


  const handleFinish = async () => {
    books.map((book) => {
      const updatedBook = { ...book, 
        borrowerName: personalInfo.name,
        borrowerPhone: personalInfo.phone,
        borrowerEmail: personalInfo.email,
        borrowerAddress: personalInfo.address,
        borrowerCardNumber: cardInfo.cardNumber,
        borrowerCvv: cardInfo.cvv 
      };
      dispatch(updateBook(updatedBook));
    });
  
    setShowProgress(true)

    setTimeout(() => {
      navigate('/history');
    }, 2500);
  }

  React.useEffect(() => {
    const storedItems = localStorage.getItem('books');
    if (storedItems) {
      setLocalStorageItems(JSON.parse(storedItems));
    }
  }, []);
  
  React.useEffect(() => {
    const updatedItems = [...localStorageItems, ...books];
    localStorage.setItem('books', JSON.stringify(updatedItems));
  }, [localStorageItems, books]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalInfoChange = (e) => {
    const {name,value}=e.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


  const handleCardInfoChange = (e) => {
    const {name,value}=e.target;
    setCardInfo((prevInfo) => ({
      ...prevInfo,
      [name] : value,
    }))
  }



  return (
    <>
   
    <Container sx={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}  >
    {showProgress && <Progress />}
      <Stepper activeStep={activeStep} sx={{ width: '95%' ,position:'fixed',top:'14%' }}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel >
                <Typography sx={{ color: '#ffffff' }}>{label}</Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{ mb: 4,mt:10 }}>
        {activeStep === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
                style={{width:600,borderRadius:5}}
                error={errorsPersonal.name ? true : false}
                helperText={errorsPersonal.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
                error={errorsPersonal.email ? true : false}
                helperText={errorsPersonal.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
                error={errorsPersonal.phone ? true : false}
                helperText={errorsPersonal.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={personalInfo.address}
                onChange={handlePersonalInfoChange}
                style={{width:600 ,borderRadius:5}}
                error={errorsPersonal.address ? true : false}
                helperText={errorsPersonal.address}
              />
            </Grid>
          </Grid>
        )}
        {activeStep === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Card Number"
                name="cardNumber"
                value={cardInfo.cardNumber}
                onChange={handleCardInfoChange}
                style={{width:600}}
                error={errorsCard.cardNumber ? true : false}
                helperText={errorsCard.cardNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="CVV"
                name="cvv"
                value={cardInfo.cvv}
                onChange={handleCardInfoChange}
                style={{width:600}}
                error={errorsCard.cvv ? true : false}
                helperText={errorsCard.cvv}
              />
            </Grid>
          </Grid>
        )}
        {activeStep === 2 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography id="transition-modal-title" variant="p" component="div">
              You have {count} books in your package
            </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h6" component="div"> 
                I have accepted to all the condaitions and forms 
             <Checkbox label="Continue" onChange={(e) => setIsChecked(e.target.checked)}/>
            </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,flexGrow:1, width: '90%' ,position:'fixed',bottom:'14%' }}>
        <Button
          variant='outlined'
          color='inherit'
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button 
        onClick={isChecked ? handleFinish : handleNext}
        variant = 'contained'
        color = 'primary'
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Container>
    </>
  );
}