// import { Button } from "flowbite-react";
import connectDB from '@/libs/mongodb';
import Posts from '@/models/posts';
import Image from 'next/image';
import Link from 'next/link';

export const getPosts = async () => {
    connectDB()
    const data = await Posts.find()
    // const resp = await fetch('http://localhost:3000/api/posts');
    // const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await resp.json();
    return data;
};

const PostContainer = async () => {
    const posts = await getPosts();
    console.log(posts,"posts en el front")
    return (
        <div className="grid grid-cols-2 grid-flow-row  gap-4">
            {posts.map((post) => (
                <div key={post.id} className="bg-gray-300 p-2 border-2">
                    <Image src={post.image_url} alt="desc" width={500} height={500}></Image>
                    <h2 className="text-lg pb-2">{post.title}</h2>
                    <hr />
                    <p className="text-sm">{post.description}</p>
                    <Link href={`/app/tragos/${post._id}`}>
                        <button>Ver Receta</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostContainer;
