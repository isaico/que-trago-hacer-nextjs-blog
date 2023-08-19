import PostContainer from '@/components/layoutComps/PostContainer/PostContainer';
const Page = ({ searchParams }) => {
    return (
        <div>
            Cócteles para cualquier ocasión
            <PostContainer category={searchParams.category}></PostContainer>
        </div>
    );
};

export default Page;
