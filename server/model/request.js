import Joi from 'joi';

//function using the 'joi lib' for request validation
const requestModel = (request) => {
    const schema = {
        title: Joi.string().min(3).required(),
        description: Joi.string().min(10).max(25).required(),
        requestType: Joi.string().min(3),
        requestdate: Joi.date().min(4)
    };
    return Joi.validate(request, schema);
}

export default requestModel;