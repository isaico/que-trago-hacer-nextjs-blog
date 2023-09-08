// import { stringToRoute } from './stringToRoute';
// import { categoryPosts, categoryPreparacion, categoryTragos } from './paths';
// export const pushBlogLink = async (data) => {
//     await data.then(() => {
//         switch (data.blog_category) {
//             case 'tragos':
//                 categoryTragos.push({
//                     path: `/blog/tragos/${stringToRoute(data.title)}`,
//                     text: data.title,
//                     key: data._id,
//                     category: data.blog_category,
//                     id: data.categoryId,
//                 });
//                 break;
//             case 'preparacion':
//                 categoryPreparacion.push({
//                     path: `/blog/preparacion/${stringToRoute(data.title)}`,
//                     text: data.title,
//                     key: data._id,
//                     category: data.blog_category,
//                     id: data.categoryId,
//                 });
//                 break;
//             case 'posts':
//                 categoryPosts.push({
//                     path: `/blog/posts/${stringToRoute(data.title)}`,
//                     text: data.title,
//                     key: data._id,
//                     category: data.blog_category,
//                     id: data.categoryId,
//                 });
//                 break;
//             default:
//                 throw new Error('Imposible to push blog link');
//         }
//     });
// };
