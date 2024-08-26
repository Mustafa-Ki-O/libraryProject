const validatePersonalInfo=(personalInfo,setErrorsPersonal)=>{
    
    const newErrors={};
        if(!personalInfo.name || !personalInfo.name.split('').every((e)=>isNaN(e))){
             newErrors.name='Invalid Name  " Name without spaces or numbers " ';
        }

        if (!personalInfo.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(personalInfo.email)) {
            newErrors.email = 'Invalid Email " syntax is like : name@exapmle.com " '
       }
  
      if (!personalInfo.phone || personalInfo.phone.length > 10 || isNaN(personalInfo.phone)) {
           newErrors.phone = 'Invalid Phone Number " Phone number length not less than 10 digits " '
      }
  
      if (!personalInfo.address || !/^[a-zA-Z\s]+(?:[a-zA-Z\s]+)?\d+$/.test(personalInfo.address)) {
           newErrors.address = 'Invalid Address " address syntax is (city neighborhood street number of home) " '
      }
  
        setErrorsPersonal(newErrors)
  
        return Object.keys(newErrors).length === 0;
  }
  export default validatePersonalInfo