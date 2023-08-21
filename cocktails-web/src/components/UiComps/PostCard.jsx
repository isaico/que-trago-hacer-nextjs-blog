'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PostCard = ({ post }) => {
    const paths = usePathname();
    return (
        <div key={post._id} className="bg-gray-300 p-2 border-2">
            <div>soy post card</div>
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
                    pathname: `/blog/${post._id}`,
                    query: post,
                }}
            >
                <button>Ver Receta</button>
            </Link>
        </div>
    );
};

export default PostCard;
