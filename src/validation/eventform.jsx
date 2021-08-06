import Joi from 'joi';

const eventFormSchema = Joi.object({
    title: Joi.string().min(3).max(70).required().label("Event Title"),
    email: Joi.string().email({ tlds: {allow: false} }).lowercase().required(),
    desc: Joi.string().max(300).required(),
    start: Joi.date(),
    end: Joi.date().min(Joi.ref('start')),
    url:Joi.string(),
    img:Joi.string(),
    // url: Joi.string().pattern(new RegExp('https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)')).required(),
    // img: Joi.string().pattern(new RegExp('https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*).(jpg|gif|png|jpeg)$')),
    org: Joi.string().min(3).max(50).required(),
    backgroundColor: Joi.string().pattern(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')).required(),
    textColor: Joi.string().pattern(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')).required(),
  });

export default eventFormSchema;