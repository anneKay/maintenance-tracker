import Joi from 'joi';

//function using the 'joi lib' for request validation
const requestModel = (request) => {
    const schema = {
        title: Joi.string().trim().min(3).required(),
        description: Joi.string().trim().min(10).max(25).required(),
        requestType: Joi.string().trim().min(3),
        requestdate: Joi.date().min(4)
    };
    return Joi.validate(request, schema);
}

// export const validRequest = (request) => {
   
//     const title = typeof request.title == 'string' && request.title.trim() != '' && request.title.trim().length >= 7;
//     const description= typeof request.description == 'string' && request.description.trim() != '' && request.description.trim().length >= 15;
//     const requestType = typeof request.requestType == 'string' && request.requestType.trim() != '' && request.requestType.trim().length >= 7;
//     return title && description && requestType;
//   }


export default requestModel;