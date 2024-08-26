const validateCardInfo=(cardInfo,setErrorsCard)=>{
    
    const newErrors={};
       if (!cardInfo.cardNumber || isNaN(cardInfo.cardNumber) || cardInfo.cardNumber.length < 13 || cardInfo.cardNumber.length > 19) {
         newErrors.cardNumber = 'Invalid cardNumber " Number length between 13 & 19 (only numbers) " ';
       }
  
       if (!cardInfo.cvv || isNaN(Number(cardInfo.cvv)) || cardInfo.cvv.length !== 3) {
         newErrors.cvv = 'Invalid CVV " cvv is 3 serial numbers (only numbers) " ';
       }
       
        setErrorsCard(newErrors)
  
        return Object.keys(newErrors).length === 0;
  }
  export default validateCardInfo