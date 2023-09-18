import fetchRecommendedPosts from '@/utils/fetchRecommendedPosts';
import RecommendedCard from '../../UiComps/RecommendedCard';
import ErrorFetchData from '@/components/UiComps/ErrorFetchData';
const RecommendedCards = async ({ field }) => {
    const recommendedArticles = await fetchRecommendedPosts(field);
   
    return (
        <div className="flex justify-evenly flex-wrap  rounded-lg  md:my-12  ">
            {recommendedArticles ? (
                recommendedArticles.map((article) => (
                    <div key={article._id}><RecommendedCard article={article}></RecommendedCard></div>
                ))
            ) : (
                <ErrorFetchData></ErrorFetchData>
            )}
        </div>
    );
};

export default RecommendedCards;
