import Joi from 'joi';


//function to validate users model
// const usersModel = (request) => {
//     const schema = {
//         email: Joi.string().min(5).required(),
//         password: Joi.string().min(5).required(),
//         name: Joi.string().min(5).required()
//     };
//     return Joi.validate(request, schema);

// }

const validUser = (user) => {
   const emailregEx = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const validEmail = typeof user.email == 'string' && user.email.trim() != '' && emailregEx.test(user.Email.trim()) === true;
    const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 7;
  if (validEmail && validPassword) {
      return validEmail && validPassword;
  
  }
}  
  

export default validUser;