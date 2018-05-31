import Joi from 'joi';


//function to validate users model
// const usersModel = (request) => {
//     const schema = {
//         email: Joi.string().min(5).required(),
//         password: Joi.string().min(5).required(),
//         name: Joi.string().min(5).required()
//     };
//     return Joi.validate(request, schema);

// 
export const validUser = (user) => {
   
    const validEmail = typeof user.email == 'string' && user.email.trim() != '' && user.email.trim().length >= 7;
    const validPassword = typeof user.password == 'string' && user.password.trim() != '' && user.password.trim().length >= 7;
      return validEmail && validPassword;
  
  }

  export const validateEmail = (body) => {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test((body.email).toLowerCase());
}
  

