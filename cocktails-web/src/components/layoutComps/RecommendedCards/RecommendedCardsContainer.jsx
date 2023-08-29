import fetchRecommendedArticles from '@/utils/fetchRecommendedArticles';
import RecommendedCard from '../../UiComps/RecommendedCard';
const RecommendedCards = async ({ quantity, field }) => {
    const recommendedArticles = await fetchRecommendedArticles(field, quantity);
    return (
        <>
            <div class="flex gap-6 justify-evenly  rounded-lg  md:my-12 ">
                {recommendedArticles.map((article) => (
                    <RecommendedCard article={article}></RecommendedCard>
                   
                ))}
            </div>
        </>
    );
};

export default RecommendedCards;
