import { Schema, model, models } from 'mongoose';

export const cocktailSchema = new Schema({
    name: String,
    description: String,
    image_url: String,
    alt: String,
    ingredients: [String],
    recepy: String,
    optional: String,
    tip: String,
    category: String,
    
});

const Cocktail = models.Cocktail || model('Cocktail', cocktailSchema);

export default Cocktail;
