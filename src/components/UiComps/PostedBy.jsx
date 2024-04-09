import { getDate } from '@/utils/getDate';
import Image from 'next/image';
const PostedBy = ({ time }) => {
    const date = getDate(time);

    return (
        <div className="flex flex-wrap items-center justify-start py-2">
            <p className="text-sm ">Posted by:</p>
            <a href="#" className="pl-2">
                <Image
                    src="https://res.cloudinary.com/dzyllqqxi/image/upload/v1692975511/avataaars_hrw2td.png"
                    width={25}
                    height={25}
                    alt="avatar animado de un hombre con buzo gris con lentes y sonriendo  mirando la camara, con fondo celeste"
                    className="rounded-full ring-2 ring-gray-300 w-auto h-auto"
                ></Image>
            </a>
            <p className="text-sm pl-2"> {date}</p>
        </div>
    );
};

export default PostedBy;
