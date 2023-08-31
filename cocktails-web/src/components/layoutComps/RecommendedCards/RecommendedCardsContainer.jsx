import fetchRecommendedPosts from '@/utils/fetchRecommendedPosts';
import RecommendedCard from '../../UiComps/RecommendedCard';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const RecommendedCards = async ({ quantity, field }) => {
    const recommendedArticles = await fetchRecommendedPosts(quantity, field);
    console.log(recommendedArticles)
    return (
        <>
            <div className="flex  justify-between flex-wrap  rounded-lg  md:my-12 ">
                {recommendedArticles ? (
                    recommendedArticles.map((article) => (
                        <RecommendedCard article={article}></RecommendedCard>
                    ))
                ) : (
                    <ErrorFetchData></ErrorFetchData>
                )}
            </div>
        </>
    );
};

export default RecommendedCards;
