import { Schema, model, models } from 'mongoose';

export const recommendedSchema = new Schema({
    title:String,
    description:String,
    image_url: String,
    path:String,
    alt:String
});

const Recommended = models.Recommended || model('Recommended', recommendedSchema);

export default Recommended;
