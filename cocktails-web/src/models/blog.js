import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        brief_desc: String,
        title_desc:String,
        description: String,
        image_url: String,
        small_image_url:String,
        alt: String,
        recommendedPosts:[String],
        getCocktails:Boolean,
        cocktailsNames:[String],
        posts: [
            {
                title: String,
                description: String,
                ingredients: [String],
                recepy:String,
                image_url: String,
                alt: String,
                category: String,
            },
        ],
        blogCategory: String,
        categoryId: {
            type: String,
            required: true,
            unique: true,
        },
        tips: [String],
        extra: String,
        articles:[{
            title:String,
            description:String,
            image_url:String,
            alt:String
        }]
    },
    {
        timestamps: true,
    }
);
const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;

