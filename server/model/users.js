import Joi from 'joi';


//function to validate users model
const usersModel = (request) => {
    const schema = {
        email: Joi.string().min(5).required(),
        password: Joi.string().min(5).required(),
        name: Joi.string().min(5).required()
    };
    return Joi.validate(request, schema);
}

export default usersModel;