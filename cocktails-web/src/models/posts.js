import { model, models, Schema } from 'mongoose';

const PostsSchema = new Schema(
    {
        title: String,
        description: String,
        ingredients: [String],
        image_url:String,
        alt:String,
        category:String
    },
    {
        timestamps: true,
    }
);

const Posts = models.Posts || model('Posts', PostsSchema);

export default Posts;
