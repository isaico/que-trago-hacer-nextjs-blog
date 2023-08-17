import React from 'react';

const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center px-24 py-10 min-h-screen justify-between bg-bg-white">
            {children}
        </div>
    );
};

export default DefaultLayout;
