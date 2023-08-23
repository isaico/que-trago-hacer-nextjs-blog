import connectDB from '@/libs/mongodb';
// import Posts from '@/models/posts';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/UiComps/PostCard';


const PostContainer = async ({ posts }) => {
    // const data = await getPosts(category);
    // const posts = JSON.parse(JSON.stringify(data));
    return (
        <>
            <div className="grid grid-cols-2 grid-flow-row  gap-4">
                {posts.map((post) => (
                    <PostCard post={post}></PostCard>
                ))}
            </div>
        </>
    );
};

export default PostContainer;
