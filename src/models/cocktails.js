import { Schema, model, models } from 'mongoose';

export const cocktailSchema = new Schema({
    name: String,
    description: String,
    image_url: String,
    alt: String,
    ingredients: [String],
    recepy: String,
    optional: String,
    tips: [String],
    category: String,
    difficulty:Number,
    links:[String],
    history:String
});

const Cocktail = models.Cocktail || model('Cocktail', cocktailSchema);

export default Cocktail;
