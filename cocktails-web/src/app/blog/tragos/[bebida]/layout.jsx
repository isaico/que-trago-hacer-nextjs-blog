export async function generateMetadata({ params }, parent) {
    const bebida = params.bebida
    // const previousImages = (await parent).openGraph?.images || []
    return {
      title: `Blog-Tragos con ${bebida}`,
      description:`Disfruta de los mejores tragos con ${bebida} en casa y con quien mas te guste!`
    }
  }
   
const layout = ({ children, params }) => {
    return <>{children}</>;
};

export default layout;
