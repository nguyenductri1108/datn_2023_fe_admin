import { Typography } from "antd";
import { memo } from "react";

const DashboardLayout = () => {
    return (
        <>
            <Typography.Title>Dashboard</Typography.Title>
            <div
                style={{
                    marginTop: "10px",
                }}
            ></div>
        </>
    );
};

export default memo(DashboardLayout);
