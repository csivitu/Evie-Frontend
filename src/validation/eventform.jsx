import Joi from 'joi';

const eventFormSchema = Joi.object({
    title: Joi.string().min(3).max(70).required().label("Event Title").error(new Error('Title should be of min 3 max 70')),
    cname:Joi.string().min(3).max(70).required().label("Coordinator's name").error(new Error('Coordinator name should be of min 3 max 70')),
    email: Joi.string().email({ tlds: {allow: false} }).lowercase().required().error(new Error('Invalid Email')),
    desc: Joi.string().max(300).required().error(new Error('Description max reached')),
    start: Joi.date().error(new Error('Start date must be lower than end date')),
    end: Joi.date().min(Joi.ref('start')).error(new Error('End date must be greater than start date')),
    url:Joi.string().error(new Error('Invalid URL')),
    img:Joi.string().error(new Error('Invalid image URL')),
    // img: Joi.string().pattern(new RegExp("https?:\/\/.*\.(?:jpg|gif|png|jpeg)$")).required().error(new Error('Invalid Image URL')),
    // url: Joi.string().pattern(new RegExp('https?://(www.)?([-a-zA-Z0-9@:%._+~#=]{1,256}.)+[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)')).required().error(new Error('Invalid event URL')),
    org: Joi.string().min(3).max(50).required().error(new Error('Organisation Title should be of min 3 max 50')),
    backgroundColor: Joi.string().pattern(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')).required().error(new Error('Invalid Background Color')),
    textColor: Joi.string().pattern(new RegExp('^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$')).required().error(new Error('Invalid Text Color')),
  });

export default eventFormSchema;