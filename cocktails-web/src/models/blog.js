import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema(
    {
        title: String,
        description: String,
        image_url: String,
        posts: [
            {
                title: String,
                description: String,
                ingredients: [String],
                image_url: String,
                alt: String,
                category: String,
            },
        ],
        blogCategory:String
    },
    {
        timestamps: true,
    }
);
const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog
