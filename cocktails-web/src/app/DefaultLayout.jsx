const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center px-24 py-10  justify-between bg-bg-white bg-dot ">
            {children}
        </div>
    );
};

export default DefaultLayout;
