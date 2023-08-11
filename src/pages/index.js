import Link from "next/link";
import PaddingPage from "../components/PaddingPage";
import { Typography } from "antd";
import AppLayout from "../components/Layout";

export default function Home() {
    return (
        <AppLayout activedTab={null}>
            <Typography.Title>Đăng nhập để tiếp tục</Typography.Title>
        </AppLayout>
    );
}
