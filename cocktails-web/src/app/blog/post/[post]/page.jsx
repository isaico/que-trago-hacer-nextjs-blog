import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
import connectDB from '@/libs/mongodb';
import Blog from '@/models/blog';
import Image from 'next/image';
//dado que cada pagina de blog tiene sus posts ya sabidos
//lo mas optimo seria cargar un blog con sus post ya cargados desde una sola collection y asi evito dos
//llamados a la db, seria un array de posts lo que enviaria a postContainer para darle utilidad al componente
const fetchBlog = async ( category ) => {
    connectDB();
    // llamare a la coll "blog" y pedire un item segun su categoria
    const resp = await Blog.findOne({ blogCategory: category });
    console.log(resp, 'respuesta de la base de datos');
    return resp;
};

const Blogs = async ({ searchParams }) => {
    const data = await fetchBlog(searchParams.category);
    const blog = JSON.parse(JSON.stringify(data));
    console.log(blog,"respuesta de la funcion");
    return (
        <div>
            <Image
                src={blog.image_url}
                height={500}
                width={500}
                alt={blog.alt}
            ></Image>
            title:{blog.title}
            desc:{blog.description}
            <PostContainer posts={blog.posts}></PostContainer>
            <div> articulo recomendado ... </div>
        </div>
    );
};

export default Blogs;
