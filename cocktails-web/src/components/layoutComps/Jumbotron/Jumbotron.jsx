import React from 'react';

const Jumbotron = ({title,description}) => {
    return (
        <section className="bg-white ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <h1 className="text-5xl text-center p-4 mb-8 font-medium text-grad-main">
                    {title}
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                   {description}
                </p>
            </div>
            <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-50 via-purple-50 to-transparent  w-full h-full absolute top-0 left-0 z-0"></div>
            {/* <div className="bg-gradient-to-b from-purple-50 to-transparent  w-full h-1/2 absolute top-0 left-0 z-0"></div> */}
            
            
        </section>
    );
};

export default Jumbotron;
