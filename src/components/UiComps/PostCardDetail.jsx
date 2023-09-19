import Image from 'next/image';
const PostCard = ({item}) => {
    return (
        <div>
            soy post card detail
            <p>titulo: {item.title}</p>
            <p> desc: {item.description}</p>
            <Image
                src={item.image_url}
                width={500}
                height={500}
                alt={item.alt}
            ></Image>
        </div>
    );
};

export default PostCard;
