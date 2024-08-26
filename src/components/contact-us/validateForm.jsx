const validateForm=(message,setErrors)=>{
    
    const newErrors={};
        if(!message.firstName || !message.firstName.split('').every((e)=>isNaN(e))){
            newErrors.firstName='Invalid Name  " Name without spaces or numbers " ';
        }
        if(!message.lastName || !message.lastName.split('').every((e)=>isNaN(e))){
            newErrors.lastName='Invalid Name  " Name without spaces or numbers " ';
        } 

        if (!message.email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(message.email)) {
            newErrors.email = 'Invalid Email " syntax is like : name@exapmle.com " '
        }

        if(!message.description){
            newErrors.description='Ask the question or the problem or make a suggestion !'
        }
       
        setErrors(newErrors)
  
        return Object.keys(newErrors).length === 0;
  }
  export default validateForm