import { Schema,model,models } from "mongoose";

export const cocktailSchema = new Schema({
    name:String,
    ingredients:[String],
    recepy:String,
    optional:String,
    tip:String,
    category:String,
})
// const categorySchema = new Schema({
//     name:String,
//     description:String
// })

const Cocktail = models.Cocktail || model('Cocktail', cocktailSchema);

export default Cocktail;