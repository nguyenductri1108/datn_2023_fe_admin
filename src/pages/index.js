import Link from "next/link";
import PaddingPage from "../components/PaddingPage";
import { Typography } from "antd";
import AppLayout from "../components/Layout";

export default function Home() {
    return (
        <AppLayout activedTab={null}>
            <Typography.Title>Chọn 1 trường ở sidebar</Typography.Title>
        </AppLayout>
    );
}
