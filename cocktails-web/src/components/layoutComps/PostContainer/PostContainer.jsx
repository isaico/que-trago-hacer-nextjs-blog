import connectDB from '@/libs/mongodb';
// import Posts from '@/models/posts';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '@/components/UiComps/PostCard';

const PostContainer = async ({ cocktails }) => {
    return (
        <div className="flex flex-col" id="post-container">
            {cocktails.map((cocktail,i) => (
                <PostCard cocktail={cocktail} index={i} cocktailLength={cocktails.length}/>
            ))}
        </div>
    );
};

export default PostContainer;
