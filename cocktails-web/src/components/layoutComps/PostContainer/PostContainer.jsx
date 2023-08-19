 
import connectDB from '@/libs/mongodb';
import Posts from '@/models/posts';
import { Query } from 'mongoose';
import Image from 'next/image';
import Link from 'next/link';

export const getPosts = async (category) => {
    connectDB();
    const data = await Posts.find({ category });
    return data;
};

const PostContainer = async (props) => {
    const dbresp = await getPosts(props.category);
    const posts = JSON.parse(JSON.stringify(dbresp));
  
    return (
        <div className="grid grid-cols-2 grid-flow-row  gap-4">
            {posts.map((post) => (
                <div key={post._id} className="bg-gray-300 p-2 border-2">
                    <Image
                        loading="lazy"
                        src={post.image_url}
                        alt={post.alt}
                        width={500}
                        height={500}
                    ></Image>
                    <h2 className="text-lg pb-2">{post.title}</h2>
                    <hr />
                    <p className="text-sm">{post.description}</p>
                    <Link
                        href={{
                            pathname: `/app/tragos/${post._id}`,
                            query: post,
                        }}
                    >
                        <button>Ver Receta</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostContainer;
