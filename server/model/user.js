export const validUser = (user) => {
   
    const validEmail = typeof user.email == 'string' && user.email.trim() != '' && user.email.trim().length >= 7 && /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(user.email);
    const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 7;
      return validEmail && validPassword;
  
  }



 