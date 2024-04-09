
const Jumbotron = ({title,description}) => {
    return (
        <section className="">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="text-3xl md:text-6xl text-center p-4 mb-6 font-semibold text-grad-2 ">
                    {title}
                </h1>
                <h2 className="mb-8 text-md md:text-xl font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-">
                   {description}
                </h2>
            </div>
            <div className="bg-[url(https://res.cloudinary.com/dzyllqqxi/image/upload/v1694486789/camarero-haciendo-delicioso-coctel-refrescante_1_yiukcm.jpg)] bg-cover bg-bottom  w-full h-[90vh] md:h-[70%] absolute top-12 left-0 z-0"></div>
            {/* <div className="bg-gradient-to-b from-purple-50 to-transparent  w-full h-1/2 absolute top-0 left-0 z-0"></div> */}
            
            
        </section>
    );
};

export default Jumbotron;
