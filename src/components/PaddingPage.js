import Header from "./Common/Header";

const PaddingPage = ({ children }) => {
    return (
        <div
            style={{
                padding: "16px",
                paddingBottom: "64px",
                width: "100%",
            }}
        >
            <Header></Header>
            {children}
        </div>
    );
};

export default PaddingPage;
