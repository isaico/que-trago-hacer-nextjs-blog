// import { Button } from "flowbite-react";

import Link from 'next/link';

export const getPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await resp.json();
    return data;
};

const PostContainer = async () => {
    const posts = await getPosts();
    return (
        <div className="grid grid-cols-2 grid-flow-row  gap-4">
            {posts.map((post) => (
                <div key={post.id} className="bg-gray-300 p-2 border-2">
                    <h2 className="text-lg pb-2">{post.title}</h2>
                    <hr />
                    <p className="text-sm">{post.body}</p>
                    <Link href={`/app/tragos/${post.title}`}>
                       
                        <button>Ver Receta</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default PostContainer;
