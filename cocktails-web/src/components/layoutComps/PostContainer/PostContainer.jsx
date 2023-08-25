import connectDB from '@/libs/mongodb';
// import Posts from '@/models/posts';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/UiComps/PostCard';

const PostContainer = async ({ posts }) => {
    return (
        <div className=" flex flex-col" id="post-container">
            {posts.map((post) => (
                <PostCard post={post}></PostCard>
            ))}
        </div>
    );
};

export default PostContainer;
