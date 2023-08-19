import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';

const Page = ({ searchParams }) => {
    
    return (
        <div>
            10 tragos con pocos ingredientes
            <PostContainer category={searchParams.category}></PostContainer>
        </div>
    );
};

// formato  de los blogs:
//  titulo
//  foto
//  desc del blog/seccion
// lista de los titulos a ver
// listado general :
// titulo
// foto
// desc
// img
// receta
// enlace hacia donde quiero

export default Page;
