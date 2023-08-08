import { Typography } from "antd";

const ErrorPage = () => {
    return (
        <div
            style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography.Title>404 | Page not found</Typography.Title>
        </div>
    );
};

export default ErrorPage;
