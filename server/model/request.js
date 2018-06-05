import Joi from 'joi';

//function using the 'joi lib' for request validation
const requestModel = (request) => {
    const schema = {
        title: Joi.string().trim().min(3).required(),
        description: Joi.string().trim().min(10).max(125).required(),
        requestType: Joi.string().trim().min(3).max(10),
        requestdate: Joi.date().min(4)
    };
    return Joi.validate(request, schema);
}


export default requestModel;