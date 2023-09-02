import React from 'react';

const Jumbotron = ({title,description}) => {
    return (
        <section className=" ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="text-6xl text-center p-4 mb-8 font-semibold text-grad-main ">
                    {title}
                </h1>
                <h2 className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16 lg:px-">
                   {description}
                </h2>
            </div>
            {/* <div className="bg-grad-main  w-full h-[60%] absolute top-0 left-0 z-0"></div> */}
            {/* <div className="bg-gradient-to-b from-purple-50 to-transparent  w-full h-1/2 absolute top-0 left-0 z-0"></div> */}
            
            
        </section>
    );
};

export default Jumbotron;
