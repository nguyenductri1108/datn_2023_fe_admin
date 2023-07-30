const PaddingPage = ({ children }) => {
    return (
        <div
            style={{
                padding: "16px",
                paddingBottom: "64px",
            }}
        >
            {children}
        </div>
    );
};

export default PaddingPage;
