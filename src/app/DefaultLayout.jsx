const DefaultLayout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-between bg-bg-white bg-dot pt-[61px]">
            {children}
        </div>
    );
};

export default DefaultLayout;
