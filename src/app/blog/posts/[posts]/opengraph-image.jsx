import { ImageResponse } from 'next/server';
import fetchBlog from '../../../';
import fetchCocktails from '@/utils/fetchCocktails';
export const contentType = 'image/jpg';
export const size = { width: 1000, height: 1000 };

export default async function og({ params }) {
    const post = params.posts.replace(/-/g, ' ');
    const blog = await fetchBlog(post);
    let cocktails;
    blog.getCocktails == true
        ? (cocktails = await fetchCocktails({
              blogCategory: blog.blog_category,
              categoryId: blog.category_id,
              cocktailsNames: blog.cocktails_names,
          }))
        : null;
    return new ImageResponse(
        blog.articles && blog.articles.length > 0
            ? blog.articles.map((article) => (
                  <div>
                      <img
                          src={
                              article?.image_url +
                              '&w=1000&h=1000&auto=format&q=75'
                          }
                          alt={article?.alt}
                      />
                  </div>
              ))
            : null,
        cocktails && cocktails.length > 0
            ? cocktails.map((cocktail) => (
                  <div>
                      <img
                          src={
                              cocktail?.image_url +
                              '&w=1000&h=1000&auto=format&q=75'
                          }
                          alt={cocktail?.alt}
                      />
                  </div>
              ))
            : null,

        size
    );
}
