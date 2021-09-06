import Joi from 'joi';

const loginFormSchema = Joi.object({
    Username: Joi.string().min(3).max(25).required(),
    Password: Joi.string().min(3).max(30).alphanum().required(),
  });

export default loginFormSchema