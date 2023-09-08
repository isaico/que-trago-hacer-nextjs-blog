import ArticleTitle from '@/components/UiComps/ArticleTitle';

const Affiliations = () => {
    return (
        <div className="py-16 bg-gray-600 w-full grid justify-center text-gray-100 text-center my-12 ">
            <div className="max-w-4xl ">
                <ArticleTitle size={'text-3xl'} color={'text-gray-100'}>
                    Si te interesa saber mas sobre cocteleria te recomendamos
                    este curso!
                </ArticleTitle>
                <p className="pb-6">
                    Estudia en casa con "ISE instituto superior de educación"
                    con este completo curso que te ayudara a mejorar tus
                    habilidades de bartender!. 
                </p>
                <div>
                    <a
                        href="https://go.hotmart.com/E86543328A?ap=81f3"
                        target="_blank"
                        className="text-primary-light border-2 text-lg border-primary-light focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        SABER MAS
                    </a>
                    <a
                        href="https://go.hotmart.com/E86543328A?ap=8d23"
                        target="_blank"
                        className="text-gray-100 border-2 border-primary-light bg-primary-light text-lg focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg  px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        OBTENER AHORA!
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Affiliations;
