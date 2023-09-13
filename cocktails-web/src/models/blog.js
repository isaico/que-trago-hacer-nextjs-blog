import { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema(
    {
        getCocktails: Boolean,
        title: { type: String, required: true, unique: true },
        brief_desc: String,
        title_desc: String,
        description: String,
        image_url: String,
        list_title: String,
        small_image_url: String,
        alt: String,
        blog_category: String,
        category_id: {
            type: String,
            required: true,
            unique: true,
        },
        articles: [
            {
                title: String,
                description: String,
                image_url: String,
                alt: String,
            },
        ],
        cocktails_names: [String],
        tips: [{ title: String, content: String }],
        tools: [String],
        pilar:Boolean,
        recommended_posts: [String],
    },
    {
        timestamps: true,
    }
);
const Blog = models.Blog || model('Blog', BlogSchema);

export default Blog;
