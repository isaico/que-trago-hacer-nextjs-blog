import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        brief_desc: String,
        description: String,
        image_url: String,
        alt: String,
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
        blogCategory: String,
        categoryId: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);
const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;
