const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center px-24 py-10  justify-between bg-bg-white bg-dot pt-16">
            {children}
        </div>
    );
};

export default DefaultLayout;
